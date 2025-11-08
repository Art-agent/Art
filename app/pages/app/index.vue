<script setup lang="ts">
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Dashboard | Art"
})

</script>

<template>
	<div class="app-home">
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
}
</style>