<script setup lang="ts">
definePageMeta({
  layout: "applayout"
})

useSeoMeta({
  title: "Settings | Art"
})
</script>

<template>
	<div class="settings-home">
  	<section class="top-section">
  	  <h1>Settings</h1>
  		<span>Configure your account with art</span>
  	</section>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/_media.scss';

.settings-home {
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

  @include responsive(mobile) {
    border-left: none;
    border-right: none;
    padding-bottom: var(--padding-md);
  }

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

    @include responsive(mobile) {
      padding: var(--padding-md) var(--padding-sm) var(--padding-md) var(--padding-sm);
    }

    h1 {
      font-size: var(--font-size-lg);
      font-family: var(--font-family);
      font-weight: var(--font-medium);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      margin: 0;
      color: var(--color-text-primary-light);

      @include responsive(mobile) {
        font-size: var(--font-size-md);
      }
    }
    span {
      font-size: var(--font-size-md);
      font-family: var(--font-family);
      font-weight: var(--font-regular);
      color: var(--color-text-primary-transparent);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      margin: 0;

      @include responsive(mobile) {
        font-size: var(--font-size-sm);
      }
    }
  }
}
</style>