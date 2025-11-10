<script setup lang="ts">
import { Plus } from "lucide-vue-next";
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "API Keys | Art"
})
</script>

<template>
	<div class="apikeys-home">
  	<section class="top-section">
  	  <h1>API Keys</h1>
  		<span>Create and manage your art api keys</span>
  	</section>
   <section class="create-api-section">
		  <section class="api-desc-section">
				  <span>Create and manage your API keys</span>
				</section>
			<button class="select-button">
			  <Plus :size="18" class="icon" />
			  <span>Create API key</span>
			</button>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.apikeys-home {
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
  .create-api-section {
    display: flex;
    column-gap: 10px;
    height: var(--height-button-lg);
    width: stretch;
    border-bottom: 1px solid var(--color-border);
    padding: 0px var(--padding-md) 0px var(--padding-md);
    align-items: center;
    justify-content: space-between;
    .api-desc-section {
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
}
</style>