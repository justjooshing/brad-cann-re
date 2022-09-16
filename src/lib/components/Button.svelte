<script lang="ts">
	export let href: string = undefined;
	export let onclick: (val?: unknown) => void = undefined;
	export let lrg = false;
	export let sml = false;
	export let type: "button" | "submit" = "button";
</script>

<div class="wrapper">
	{#if href}
		<a class="button" class:sml class:lrg {href}><slot /></a>
	{:else}
		<button class="button" class:sml class:lrg {type} on:click={onclick}><slot /></button>
	{/if}
</div>

<style lang="scss">
	@import "../global/index.scss";

	.wrapper {
		display: flex;
		place-content: center;
		place-items: center;
		* {
			cursor: pointer;
		}
	}
	.button {
		font-size: $text-small;
		padding: 15px 15px;
		border-radius: 3px;
		border: none;
		text-shadow: none;
		text-align: center;
		text-decoration: none;
		background-color: $button;
		color: $button-text;
		font-weight: bold;
		margin: 5px;

		@include fade(background-color);
		&:active,
		&:visited {
			color: $button-text;
		}
		&:hover {
			background-color: $button-hover;
		}
	}
	.lrg {
		font-size: $text-large;
	}
	.sml {
		padding: 15px 8px;
	}
</style>
