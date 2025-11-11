<script setup lang="ts">
import { Plus, AudioLines, ArrowUp } from 'lucide-vue-next';
import { ref, watch, nextTick, onMounted } from "vue";
import storageClient from '~/utils/storageClient';

const { getChatHistory, clearChatHistory } = storageClient();

var query = ref<String>("");
const textArea = ref<HTMLTextAreaElement | null>(null);
const chatBox = ref<HTMLDivElement | null>(null);
const plusButton = ref<HTMLButtonElement | null>(null);
const saContainer = ref<HTMLDivElement | null>(null);

const emit = defineEmits<{
  (e: 'sendUserQuery', query: String, value: boolean): void
}>();
async function sendQuery() {
  emit('sendUserQuery', query.value, true);
  query.value = "";
}

async function clear() {
  await clearChatHistory("general")
  console.log("cleared hist")
}

function adjustHeight() {
  if (!textArea.value) return
  if (!chatBox.value) return
  if (!plusButton.value) return
  if (!saContainer.value) return
  const testtext = "Art agent created to help users do a specific task in a timely and orderly mannerArt agent created to help users do a specific task in a timely and orderly manner"
  textArea.value.style.height = "21px";
  textArea.value.style.height = `calc(${textArea.value.scrollHeight}px)`;
  // chatBox.value.style.height = `calc(${textArea.value.clientHeight}px + 32px)`;
  const scrollHeight = textArea.value.scrollHeight;
  if (scrollHeight > 26 || query.value.length > 66) {
    chatBox.value.style.height = `calc(${textArea.value.clientHeight}px + 46px)`;
    chatBox.value.style.padding = "12.5px";
    textArea.value.style.position = "absolute"
    textArea.value.style.width = "620px";
    textArea.value.style.right = "11px";
    textArea.value.style.alignSelf = "start";
    plusButton.value.style.alignSelf = "flex-end";
    saContainer.value.style.position = "absolute"
    saContainer.value.style.right = "12.5px";
    saContainer.value.style.alignSelf = "flex-end";
  }
  if (query.value == "" || query.value.length <= 66) {
    chatBox.value.style.flexDirection = "row";
    chatBox.value.style.height="var(--height-input-lg)"
    chatBox.value.style.padding = "0px var(--padding-vsm)"
    textArea.value.style.position = "relative"
    textArea.value.style.right = "0px"
    textArea.value.style.width = "stretch"
    textArea.value.style.alignSelf = "center"
    textArea.value.style.height = "21px";
    plusButton.value.style.alignSelf = "center";
    saContainer.value.style.position = "relative";
    saContainer.value.style.right = "0px"
    saContainer.value.style.alignSelf = "center";
  }
  // alert(`New client height: ${textArea.value.clientHeight}`)
}

watch(query, async () => {
  await nextTick();
  adjustHeight();
})

// onMounted(() => {
//   if (!textArea.value) return
//   // alert(textArea.value.clientHeight)
// })


</script>

<template>
	<div class="chatbox" ref="chatBox">
	  <button class="plus-button" ref="plusButton">
			<Plus :size="18" class="icon black-icon" />
		</button>
		<textarea
		  ref="textArea"
			v-model="query"
		  type="text"
			rows="1"
			placeholder="Ask art to do anything"
			class="art-input"
			@input="adjustHeight"
		></textarea>
		<div class="send-audio-container" ref="saContainer">
		  <button class="audio-button" @click="clear" v-if="!query" title="Record voice">
				<AudioLines :size="18" class="icon" />
			</button>
			<button class="send-button" @click="sendQuery" title="Send prompt" v-else>
  			<ArrowUp :size="18" class="icon" />
  		</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.chatbox {
  display: flex;
  position: relative;
  background: var(--color-input-light);
  border: 1px solid var(--color-border);
  width: 620px;
  min-height: var(--height-input-lg);
  height: fit-content;
  padding: 0px var(--padding-vsm);
  border-radius: var(--radius-xlg);
  align-items: center;
  /* justify-content: space-between; */
  column-gap: 5px;
  box-shadow: var(--inner-shadow);
  transition: 0.3s ease;
  .plus-button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--height-button-sm);
    min-width: var(--height-button-sm);
    border: 0px;
    border-radius: var(--radius-round);
    cursor: pointer;
    transition: 0.3s ease;
    &:active {
      background: var(--color-bg-primary-light);
      border: 1px solid var(--color-border);
    }
  }
  .art-input {
    resize: none;
    flex: 1;
    max-height: 400px;
    padding:0;
    background: transparent;
    outline: 0;
    border: 0;
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-medium);
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;
    transition: 0.7s ease, height 0.2s ease-out;
  }
  .art-input::placeholder {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-medium);
    letter-spacing: var(--letter-spacing);
  }
  .send-audio-container {
    /* height: stretch */
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-round);
      background: var(--color-button-dark);
      min-height: var(--height-button-sm);
      min-width: var(--height-button-sm);
      transition: 0.1s ease-in;
      .icon {
        color: var(--color-button-light);
        stroke-width: var(--stroke-width);
      }
      &:active {
        background: var(--color-bg-primary-light);
        border: 1px solid var(--color-border);
        .icon {
          color: var(--color-text-primary-light);
        }
      }
    }
  }
}
</style>