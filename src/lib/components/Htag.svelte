<script lang="ts">
	export let style: number;
	export let size: number;
	export let message: string;
	export let className: string = undefined;
</script>

{#if size === 1}
	<h1 class={`style-${style} ${className}`}>{message}</h1>
{:else if size === 2}
	<h2 class={`style-${style} ${className}`}>{message}</h2>
{:else if size === 3}
	<h3 class={`style-${style} ${className}`}>{message}</h3>
{:else if size === 4}
	<h4 class={`style-${style} ${className}`}>{message}</h4>
{:else if size === 5}
	<h5 class={`style-${style} ${className}`}>{message}</h5>
{:else if size === 6}
	<h6 class={`style-${style} ${className}`}>{message}</h6>
{/if}

<style lang="scss">
	.style-1 {
		color: red;
	}
	.style-2 {
		color: green;
	}
	.style-3 {
		color: yellow;
	}
	.style-4 {
		color: blue;
	}
	.style-5 {
		color: orange;
	}
	.style-6 {
		color: purple;
	}
</style>
