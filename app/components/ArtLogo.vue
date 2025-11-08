<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: "29",
  },
  width: {
    type: String,
    default: "30"
  }
})
</script>

<template>
	<div>
    <svg :width="props.width" :height="props.height" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" width="6.66667" height="5" fill="#212121"/>
      <rect x="11.6667" width="6.66667" height="5" fill="#212121"/>
      <rect x="18.3333" width="6.66667" height="5" fill="#212121"/>
      <rect x="25" y="11" width="6.66667" height="5" transform="rotate(-90 25 11)" fill="#212121"/>
      <rect x="25" y="17.6667" width="6.66667" height="5" transform="rotate(-90 25 17.6667)" fill="#212121"/>
      <rect x="25" y="24.3333" width="6.66667" height="5" transform="rotate(-90 25 24.3333)" fill="#212121"/>
      <rect x="18.3333" y="23.6667" width="6.66667" height="5" fill="#212121"/>
      <rect x="11.6667" y="23.6667" width="6.66667" height="5" fill="#212121"/>
      <rect x="5" y="23.6667" width="6.66667" height="5" fill="#212121"/>
      <rect y="24.3333" width="6.66667" height="5" transform="rotate(-90 0 24.3333)" fill="#212121"/>
      <rect y="17.6667" width="6.66667" height="5" transform="rotate(-90 0 17.6667)" fill="#212121"/>
      <rect y="11" width="6.66667" height="5" transform="rotate(-90 0 11)" fill="#212121"/>
      <rect x="12.4666" y="11.8666" width="5" height="5" fill="#212121"/>
      <rect x="12.4666" y="6.53333" width="5" height="5" fill="#212121"/>
      <rect x="12.4666" y="17.2" width="5" height="5" fill="#212121"/>
      <rect x="7.1333" y="11.8666" width="5" height="5" fill="#212121"/>
      <rect x="17.8" y="11.8666" width="5" height="5" fill="#212121"/>
    </svg>

	</div>
</template>

<style lang="scss" scoped>
</style>