<script setup lang="ts">

</script>

<template>
	<div class="homepage">
		<h1 class="homepage__title">Hello to Art Homepage</h1>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/_media.scss';

.homepage {
	padding: var(--padding-lg);
	min-height: 100vh;
	background-color: var(--color-bg-primary-light);

	@include responsive(tablet) {
		padding: var(--padding-md);
	}

	@include responsive(mobile) {
		padding: var(--padding-sm);
	}

	&__title {
		font-size: var(--font-size-xlg);
		font-weight: var(--font-semibold);
		color: var(--color-text-primary-light);
		letter-spacing: var(--letter-spacing);
		font-family: var(--font-family);
		text-align: center;
		margin: 0;

		@include responsive(tablet) {
			font-size: var(--font-size-lg);
		}

		@include responsive(mobile) {
			font-size: var(--font-size-lg);
		}
	}
}
</style>