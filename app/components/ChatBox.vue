<script setup lang="ts">
import { Plus, AudioLines, ArrowUp } from 'lucide-vue-next'; 

var query = ref<String>("");

const emit = defineEmits<{
  (e: 'changeChatStart', value: boolean): void,
  (e: 'userQuery', query: String): void
}>();

function editChatStart(value: boolean) {
  emit('changeChatStart', value)
}

function sendQuery(query: String) {
  emit('userQuery', query)
}



</script>

<template>
	<div class="chatbox">
	  <button class="plus-button">
			<Plus :size="18" class="icon black-icon" />
		</button>
		<input type="text" placeholder="Ask art to do anything" v-model="query" class="art-input" />
		<div class="send-audio-container">
		  <button class="audio-button" v-if="!query">
				<AudioLines :size="18" class="icon" />
			</button>
			<button class="send-button" v-else>
  			<ArrowUp :size="18" class="icon" />
  		</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.chatbox {
  display: flex;
  background: var(--color-input-light);
  border: 1px solid var(--color-border);
  width: 620px;
  height: var(--height-input-lg);
  padding: 0px var(--padding-vsm);
  border-radius: var(--radius-xlg);
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  box-shadow: var(--inner-shadow);
  
  .plus-button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--height-button-sm);
    min-width: var(--height-button-sm);
    border: 0px;
    border-radius: var(--radius-round);
    cursor: pointer;
    transition: 0.1s ease-out;
    &:active {
      background: var(--color-bg-primary-light);
      border: 1px solid var(--color-border);
    }
  }
  input {
    width: stretch;
    height: stretch;
    background: transparent;
    outline: 0;
    border: 0;
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-medium);
    letter-spacing: var(--letter-spacing);
  }
  input::placeholder {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-medium);
    letter-spacing: var(--letter-spacing);
  }
  .send-audio-container {
    height: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-round);
      background: var(--color-button-dark);
      min-height: var(--height-button-sm);
      min-width: var(--height-button-sm);
      .icon {
        color: var(--color-button-light);
        stroke-width: var(--stroke-width);
      }
    }
  }
}
</style>