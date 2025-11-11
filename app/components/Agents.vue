<script setup lang="ts">

const router = useRouter();

function openAgentPage(url: String) {
  router.push(`agents/${url}`)
}

const props = defineProps({
  header: {
    type: String,
    default: "Art Agent"
  },
  desc: {
    type: String,
    default: "Art agent created to help users do a specific task in a timely and orderly manner"
  }
});

</script>

<template>
	<button class="agent" @click="openAgentPage(props.header)">
		<section class="agent-header">
		  <span>{{ props.header }}</span>
		</section>
		<section class="agent-desc">
		  <span>{{ props.desc }}</span>
		</section>
	</button>
</template>

<style lang="scss" scoped>
.agent {
  all: unset;
  cursor: pointer;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  height: 230px;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--padding-md);
  transition: 0.2s ease-out;
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
  &:active {
    background: var(--color-bg-primary-dark);
    .agent-header {
      span {
        color: var(--color-text-primary-dark);
      }
    }
    .agent-desc {
      span {
        color: var(--color-text-primary-dark);
      }
    }
  }
}
</style>