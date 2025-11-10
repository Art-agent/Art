<script setup lang="ts">

</script>

<template>
	<button class="agent">
		<section class="agent-header">
		  <span>First Agent</span>
		</section>
		<section class="agent-desc">
		  <span>The first agent created to help users do a specific task in a timely and orderly manner</span>
		</section>
	</button>
</template>

<style lang="scss" scoped>
.agent {
  all: unset;
  cursor: pointer;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding-md);
  .agent-header {
    display: flex;
    /* border: 1px solid black; */
    span {
      font-family: var(--font-family);
      font-weight: var(--font-medium);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      font-size: var(--font-size-lg);
    }
  }
  .agent-desc {
    display: flex;
    justify-content: right;
    text-align: right;
    /* border: 1px solid black; */
    width: stretch;
    span {
      font-family: var(--font-family);
      font-weight: var(--font-regular);
      font-style: normal;
      letter-spacing: var(--letter-spacing);
      font-size: var(--font-size-md);
    }
  }
}
</style>