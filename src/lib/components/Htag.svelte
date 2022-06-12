<script lang="ts">
	export let style: number;
	export let size: number;
	export let message: string;
	export let centered = false;
	export let alt = false;
</script>

{#if size === 1}
	<h1 class={`style-${style}`} class:centered class:alt>{message}</h1>
{:else if size === 2}
	<h2 class={`style-${style}`} class:centered class:alt>{message}</h2>
{:else if size === 3}
	<h3 class={`style-${style}`} class:centered class:alt>{message}</h3>
{:else if size === 4}
	<h4 class={`style-${style}`} class:centered class:alt>{message}</h4>
{:else if size === 5}
	<h5 class={`style-${style}`} class:centered class:alt>{message}</h5>
{:else if size === 6}
	<h6 class={`style-${style}`} class:centered class:alt>{message}</h6>
{/if}

<style lang="scss">
	@import "../global/index.scss";

	@mixin common {
		font-weight: normal;
		color: $text-primary;
		font-family: $header;
	}
	.centered {
		text-align: center;
	}
	.style-1 {
		@include common;
		font-size: $heading-2;
		@include medium {
			font-size: $heading-1;
		}
	}
	.style-2 {
		@include common;
		font-size: $heading-3;
		@include medium {
			font-size: $heading-2;
		}
	}
	.style-3 {
		@include common;
		font-size: $heading-4;
		@include medium {
			font-size: $heading-3;
		}
	}
	.style-4 {
		@include common;
		font-size: $heading-5;
		@include medium {
			font-size: $heading-4;
		}
	}
	.style-5 {
		@include common;
		font-size: $text-standard;
		@include medium {
			font-size: $heading-5;
		}
	}
	.alt {
		color: white;
	}
</style>
