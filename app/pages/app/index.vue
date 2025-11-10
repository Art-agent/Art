<script setup lang="ts">
import storageClient from '~/utils/storageClient';
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Dashboard | Art"
})

const appHome = ref<HTMLDivElement | null>(null);
const chatStart = ref<boolean>(false);

const { addChatMessage, getChatHistory, setChatHistory, clearChatHistory } = storageClient();


watch(chatStart, () => {
  changeChatBoxPosition();
}, { immediate: true })

function changeChatBoxPosition() {
  if (!appHome.value) return
  
  if (!chatStart.value) {
    appHome.value.style.justifyContent = "end";
  }
}

</script>

<template>
	<div class="app-home" ref="appHome">
		<ChatBox class="chatbox" ref="chatBox" />
	</div>
</template>

<style lang="scss" scoped>
.app-home {
  min-height: stretch;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: var(--padding-lg);
  transition: 0.2s ease-out;
  .chatbox {
    transition: 0.2s ease-out;
  }
}
</style>