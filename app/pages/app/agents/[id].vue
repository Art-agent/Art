<script setup lang="ts">
import storageClient from '~/utils/storageClient';
import { type ChatMessage } from '~~/shared/types/chatMessage';
import { ref, onMounted, watch, nextTick } from 'vue';
import { Plus } from 'lucide-vue-next';
import { marked } from 'marked';

const route = useRoute();

const url_param = route.params.id as String

definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: `Agent | Art`
})

const agentHome = ref<HTMLElement | null>(null);
const chatStart = ref<boolean>(false);
const currentAssistantMessage = ref<string>('');
// const assistantIndex = chatHist.value.length - 1;
const isLoading = ref<boolean>(false);

const { addChatMessage, getChatHistory, setChatHistory, clearChatHistory } = storageClient();

var userquery = ref<String>("");
var artresponse = ref<String>("");
var chatHist = ref<ChatMessage[]>([]);

function changeChatBoxPosition(value: boolean) {
  if (!agentHome.value) return
  
  chatStart.value = value;
}

async function sendQuery(query: String, value: boolean) {
  changeChatBoxPosition(value)
  userquery.value = query
  const queryData: ChatMessage = {
    agentId: `${url_param}`,
    role: "user",
    content: userquery.value,
    timestamp: Date.now()
  }
  // Save to db
  await addChatMessage(queryData.agentId, queryData)
  
  chatHist.value = await getChatHistory(queryData.agentId)
  
  const assistantMessage: ChatMessage = {
    agentId: `${url_param}`,
    role: "art",
    content: "",
    timestamp: Date.now()
  }
  await addChatMessage(assistantMessage.agentId, assistantMessage)
  // await nextTick();
  chatHist.value = await getChatHistory(assistantMessage.agentId);
  
  currentAssistantMessage.value = ''
  isLoading.value = true
  
  try {
    const response = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        userQuery: query,
        agentId: `${url_param}` // Main agent must be of general type
      })
    })
  
    // if (!response.body) return
  
    const reader = response.body?.getReader()
    const decoder = new TextDecoder()
  
    while (true) {
      const { done, value } = await reader!.read()
      if (done) break
  
      const chunk = decoder.decode(value, { stream: true })
      currentAssistantMessage.value += chunk
  
      // Update the last message in history live
      const lastMsg = chatHist.value[chatHist.value.length - 1]
      if (lastMsg?.role === 'art') {
        // lastMsg.content = currentAssistantMessage.value
        // // Optional: force reactivity if Vue gets lazy
        // chatHist.value = [...chatHist.value]
        // Store final rendered HTML directly in the message
        lastMsg.content = marked.parse(currentAssistantMessage.value, {
          breaks: true,
          gfm: true
        })
        // Force Vue reactivity (required when mutating array element)
        chatHist.value = [...chatHist.value]
      }
    }
  
    // Save final message after streaming ends
    await setChatHistory(`${url_param}`, chatHist.value)  
  } catch (err) {
    console.error(err)
    currentAssistantMessage.value += "\n\n[Error occurred]"
    alert("error")
  } finally {
    isLoading.value = false
  }
}


onMounted(async() => {
  chatHist.value = await getChatHistory(`${url_param}`) // For now general, figure out how to change this
  console.log(chatHist.value.length)
  if (chatHist.value.length > 1) {
    changeChatBoxPosition(true)
  }
  
  console.log(chatStart.value);
  
})

</script>

<template>
	<div class="agents-container">
  	<section class="top-section">
   	  <h1>{{ url_param }}</h1>
      <span>Create and use an art agent for specific tasks</span>
   	</section>
    <section class="agent-home" ref="agentHome">
      <section class="container" v-if="chatStart">
  			<section class="qr-section" v-for="(chat, index) in chatHist" :key="index">
       	  <div class="query" v-if="chat.role == 'user'">
      		  <span>{{ chat.content }}</span>
     			</div>
     			<div class="artresponse" v-else>
            <div class="art-resp" v-html="chat.content"></div>
            <!-- <span>{{ chat.content }}</span> -->
          </div>
          <div class="loading" v-if="isLoading && index === chatHist.length - 1">
            <Loader class="typing" />
          </div>
      	</section>
  		</section>
  		<ChatBox 
  		  class="chatbox"
  			:class="{ 'chatbox--moved': chatStart }" 
  			ref="chatBox"
  			@sendUserQuery="sendQuery"
  		/>
    </section>
	</div>
</template>

<style lang="scss" scoped>
.agents-container {
  height: 100vh;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: left;
  padding-bottom: var(--padding-lg);
  overflow-y: hidden;
  scrollbar-width: none;
  .top-section {
    display: flex;
    width: stretch;
    flex-direction: column;
    min-height: 100px;
    height: fit-content;
    justify-content: end;
    row-gap: 5px;
    padding: var(--padding-lg) var(--padding-md) var(--padding-lg) var(--padding-md);
    border-bottom: 1px solid var(--color-border);
    h1 {
      font-size: var(--font-size-lg);
      font-family: var(--font-family);
      font-weight: var(--font-medium);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      margin: 0;
      color: var(--color-text-primary-light);
    }
    span {
      font-size: var(--font-size-md);
      font-family: var(--font-family);
      font-weight: var(--font-regular);
      color: var(--color-text-primary-transparent);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      margin: 0;
    }
  }
  .agent-home {
    height: 100vh;
    width: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-bottom: var(--padding-lg);
    transition: 0.2s ease-out;
    overflow-y: hidden;
    scrollbar-width: none;
    .container {
      margin-top: 5px;
      width: stretch;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      height: stretch;
      /* border: 1px solid blue; */
      max-height: stretch;
      overflow-y: scroll;
      scrollbar-width: none;
      padding-bottom: 175px;
      .qr-section {
        display: flex;
        height: fit-content;
        width: stretch;
        flex-direction: column;
        row-gap: 5px;
        justify-content: start;
        align-items: space-between;
        justify-self: start;
        .query {
          display: flex;
          align-self: flex-end;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xlg) var(--radius-xlg) 0px var(--radius-xlg);
          padding: var(--padding-vsm) var(--padding-sm);
          max-width: 400px;
          min-height: fit-content;
          span {
            font-family: var(--font-family);
            font-size: var(--font-size-md);
            letter-spacing: var(--letter-spacing);
            font-style: normal;
            
          }
        }
        .artresponse {
          .art-resp {
            word-break: break-word;
            font-family: var(--font-family);
            font-style: normal;
            font-size: var(--font-size-md);
            letter-spacing: var(--letter-spacing);
          }
        }
      } 
      .loading {
        display: flex;
        align-items: center;
        width: stretch;
        justify-content: left;
      }
    }
    .chatbox {
      position: fixed;
      z-index: 99;
      bottom: calc(30%);
      transition: bottom 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      &.chatbox--moved {
        bottom: var(--padding-lg);
      }
    }
  }
}
</style>