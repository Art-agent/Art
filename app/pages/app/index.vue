<script setup lang="ts">
import storageClient from '~/utils/storageClient';
import { type ChatMessage } from '~~/shared/types/chatMessage';
import { ref, onMounted, watch, nextTick } from 'vue';
import { Plus } from 'lucide-vue-next';
import { marked } from 'marked';

definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Dashboard | Art"
})

const appHome = ref<HTMLDivElement | null>(null);
const chatStart = ref<boolean>(false);
const currentAssistantMessage = ref<string>('');
// const assistantIndex = chatHist.value.length - 1;
const isLoading = ref<boolean>(false);

const { addChatMessage, getChatHistory, setChatHistory, clearChatHistory } = storageClient();

var userquery = ref<String>("");
var artresponse = ref<String>("");
var chatHist = ref<ChatMessage[]>([]);

function changeChatBoxPosition(value: boolean) {
  if (!appHome.value) return
  
  chatStart.value = value;
}

// const renderedMessages = computed(() => {
//   return chatHist.value.map(msg => ({
//     ...msg,
//     html: msg.role === 'art' ? marked(msg.content, { breaks: true }) : null
//   }))
// })

async function sendQuery(query: String, value: boolean) {
  changeChatBoxPosition(value)
  userquery.value = query
  const queryData: ChatMessage = {
    agentId: "general",
    role: "user",
    content: userquery.value,
    timestamp: Date.now()
  }
  // Save to db
  await addChatMessage(queryData.agentId, queryData)
  
  chatHist.value = await getChatHistory(queryData.agentId)
  
  const assistantMessage: ChatMessage = {
    agentId: "general",
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
        agentId: "general" // Main agent must be of general type
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
    await setChatHistory("general", chatHist.value)  
  } catch (err) {
    console.error(err)
    currentAssistantMessage.value += "\n\n[Error occurred]"
    alert("error")
  } finally {
    isLoading.value = false
  }
}


onMounted(async() => {
  chatHist.value = await getChatHistory("general") // For now general, figure out how to change this
  // Depending on url link gotten
  if (chatHist.value.length > 1) {
    changeChatBoxPosition(true)
  }
  
})

</script>

<template>
	<div class="app-home" ref="appHome">
	  <section class="create-chat-section">
      <section class="chat-desc-section">
    		  <span></span>
    		</section>
     	<button class="select-button">
     	  <Plus :size="18" class="icon" />
     	  <span>Create new chat</span>
     	</button>
    </section>
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
	</div>
</template>

<style lang="scss" scoped>
.app-home {
  height: 100vh;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-bottom: var(--padding-lg);
  transition: 0.2s ease-out;
  overflow-y: hidden;
  scrollbar-width: none;
  .create-chat-section {
    display: flex;
    height: var(--height-button-lg);
    width: stretch;
    border-bottom: 1px solid var(--color-border);
    padding: 0px var(--padding-md) 0px var(--padding-md);
    align-items: center;
    justify-content: space-between;
    .chat-desc-section {
      display: flex;
      align-items: center;
      justify-content: left;
      span {
        font-family: var(--font-family);
        font-size: var(--font-size-md);
        font-weight: var(--font-regular);
        font-style: normal;
        letter-spacing: var(--letter-spacing);
      }
    }
    button {
      all: unset;
      cursor: pointer;
      height: var(--height-button-sm);
      background: var(--color-bg-primary-dark);
      width: fit-content;
      padding: 0px var(--padding-md);
      border-radius: var(--radius-xlg);
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5px;
      transition: 0.2s ease-out;
      .icon {
        color: var(--color-text-primary-dark);
        stroke-width: var(--stroke-width);
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family);
        font-size: var(--font-size-md);
        font-weight: var(--font-regular);
        font-style: normal;
        letter-spacing: var(--letter-spacing);
        color: var(--color-text-primary-dark);
      }
      &:active {
        background: var(--color-bg-primary-light);
        border: 1px solid var(--color-border);
        .icon {
          color: var(--color-text-primary-light);
        }
        span {
          color: var(--color-text-primary-light);
        }
      }
    }
  }
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
    bottom: calc(50% - 20px);
    transition: bottom 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    &.chatbox--moved {
      bottom: var(--padding-lg);
    }
  }
}
</style>