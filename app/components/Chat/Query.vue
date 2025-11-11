<script setup lang="ts">
import storageClient from '~/utils/storageClient';

const { addChatMessage, getChatHistory, setChatHistory, clearChatHistory } = storageClient();

</script>

<template>
	<div class="query-container">
		Hello
	</div>
</template>

<style lang="scss" scoped>

</style>