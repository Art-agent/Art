<script setup lang="ts">
definePageMeta({
  layout: "applayout"
})
useSeoMeta({
  title: "Transaction | Art"
})
</script>

<template>
	<div class="transaction-home">
		<section class="top-section">
		  <h1>Transactions</h1>
			<span>See chat history and recent transactions from your interaction with Art</span>
		</section>
		<section class="history-select-section">
		  <button class="select-button">
				  <span>Chats</span>
			</button>
			<button class="select-button">
			  <span>Ledger</span>
			</button>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/_media.scss';

.transaction-home {
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
  .history-select-section {
    display: flex;
    column-gap: 10px;
    height: var(--height-button-lg);
    width: stretch;
    border-bottom: 1px solid var(--color-border);
    padding: 0px var(--padding-md) 0px var(--padding-md);
    align-items: center;
    justify-content: left;

    @include responsive(mobile) {
      padding: 0px var(--padding-sm) 0px var(--padding-sm);
    }

    button {
      all: unset;
      cursor: pointer;
      border: 1px solid var(--color-border);
      height: var(--height-button-sm);
      width: fit-content;
      padding: 0px var(--padding-sm) 0px var(--padding-sm);
      border-radius: var(--radius-xlg);
      span {
        font-family: var(--font-family);
        font-size: var(--font-size-md);
        font-weight: var(--font-regular);
        font-style: normal;
        letter-spacing: var(--letter-spacing);

        @include responsive(mobile) {
          font-size: var(--font-size-sm);
        }
      }
    }
  }
}
</style>