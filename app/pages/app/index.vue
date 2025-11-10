<script setup lang="ts">
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Dashboard | Art"
})

const appHome = ref<HTMLDivElement | null>(null);
const chatStart = ref<boolean>(false);

if (chatStart !== null) {
  chatStart.value = true;
}

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
@import '~/assets/styles/_media.scss';

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

  @include responsive(tablet) {
    padding-bottom: var(--padding-md);
  }

  @include responsive(mobile) {
    border-left: none;
    border-right: none;
    padding-bottom: var(--padding-sm);
    min-height: calc(100vh - 180px);
  }

  .chatbox {
    transition: 0.2s ease-out;
    width: 100%;
    max-width: 800px;

    @include responsive(mobile) {
      max-width: 100%;
    }
  }
}
</style>