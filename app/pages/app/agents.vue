<script setup lang="ts">
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Agents | Art"
})
</script>

<template>
	<div class="agents-home">
  	<section class="top-section">
  	  <h1>Agents</h1>
  		<span>Create and use an art agent for specific tasks</span>
  	</section>
	</div>
</template>

<style lang="scss" scoped>
.agents-home {
  overflow-y: scroll;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;
  min-height: stretch;
  max-height: stretch;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 0;
  border-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: left;
  padding-bottom: var(--padding-lg);
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
}
</style>