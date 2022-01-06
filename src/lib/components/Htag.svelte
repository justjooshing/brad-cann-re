<script lang="ts">
	export let style: number;
	export let size: number;
	export let message: string;
</script>

{#if size === 1}
	<h1 class={`style-${style}`}>{message}</h1>
{:else if size === 2}
	<h2 class={`style-${style}`}>{message}</h2>
{:else if size === 3}
	<h3 class={`style-${style}`}>{message}</h3>
{:else if size === 4}
	<h4 class={`style-${style}`}>{message}</h4>
{:else if size === 5}
	<h5 class={`style-${style}`}>{message}</h5>
{:else if size === 6}
	<h6 class={`style-${style}`}>{message}</h6>
{/if}

<style lang="scss">
	@import '../global/index.scss';
	.style-1 {
		font-weight: normal;
		font-size: $heading-1;
	}
	.style-2 {
		font-weight: normal;
		font-size: $heading-2;
	}
	.style-3 {
		font-weight: normal;
		font-size: $heading-3;
	}
	.style-4 {
		font-weight: normal;
		font-size: $heading-4;
	}
	.style-5 {
		font-weight: normal;
		font-size: $heading-5;
	}
</style>
