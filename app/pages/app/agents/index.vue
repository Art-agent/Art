<script setup lang="ts">
import { Plus } from "lucide-vue-next";

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
   <section class="select-agents-container">
    <Agents 
      header="Earner"
      desc="Get instant earnings summaries, even from paywalled sources"
    />
    <Agents 
      header="DeFi Detective" 
      desc="Find hidden gems before they 100x with onchain proof"
    />
    <Agents 
      header="The Oracle" 
      desc="Ask anything on-chain and pay only for the data you use"
    />
    <button class="add-agent-button border-rt">
      <Plus :size="18" class="icon" />
      <span>Add agent</span>
    </button>
   </section>
	</div>
</template>

<style lang="scss" scoped>
.agents-home {
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
  .select-agents-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: stretch;
    /* justify-content: left;
    align-items: center; */
    overflow: hidden;
    .add-agent-button {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 230px;
      width: 230px;
      padding: var(--padding-md);
      border-bottom: 1px dashed var(--color-border);
      /* border-right: 1px dashed var(--color-border); */
      transition: 0.2s ease-out;
      .icon {
        color: var(--color-text-primary-transparent);
        stroke-width: var(--stroke-width);
      }
      span {
        color: var(--color-text-primary-transparent);
        font-family: var(--font-family);
        font-weight: var(--font-medium);
        font-style: normal;
        letter-spacing: var(--letter-spacing);
        font-size: var(--font-size-sm);
      }
      &:active {
        background: var(--color-bg-primary-dark);
        /* border: 0; */
        span {
          color: var(--color-text-primary-dark);
        }
        .icon {
          color: var(--color-text-primary-dark);
        }
      }
    }
    .border-rt {
      border-right: 1px dashed var(--color-border);
    }
  }
}
</style>