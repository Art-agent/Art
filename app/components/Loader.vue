<script setup lang="ts">

</script>

<template>
  <div class="loader-ball-9">
    <div></div>
    <span>Art is loading your response</span>
  </div>
</template>

<style lang="scss" scoped>
.loader-ball-9 {
  height: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  div {
    width: 24px;
    height: 12px;
    background: radial-gradient(circle closest-side, var(--color-bg-primary-light) 90%, var(--color-bg-primary-dark)) 0 0/33% 100% space;
    clip-path: inset(0 100% 0 0);
    animation: anm-bl-9-move 1s steps(4) infinite;
  }
  span {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-style: normal;
    font-weight: var(--font-regular);
    letter-spacing: var(--letter-spacing);
  }
} 
@keyframes anm-bl-9-move {
  to {
    clip-path: inset(0 -34% 0 0)
  }
}
</style>