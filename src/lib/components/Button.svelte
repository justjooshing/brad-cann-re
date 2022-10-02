<script lang="ts">
	export let href: string = undefined;
	export let style: "primary" | "secondary" = "primary";
	export let onclick: (val?: unknown) => void = undefined;
	export let lrg = false;
	export let sml = false;
	export let type: "button" | "submit" = "button";
</script>

<div class="wrapper">
	{#if href}
		<a class={`button ${style}`} class:sml class:lrg {href}><slot /></a>
	{:else}
		<button class={`button ${style}`} class:sml class:lrg {type} on:click={onclick}><slot /></button
		>
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
		all: unset;
		cursor: pointer;
		font-size: $text-small;
		padding: 15px 15px;
		border-radius: 3px;
		margin: 5px;
		font-weight: bold;
		@include fade(background-color);
	}
	.primary {
		color: $button-text;
		background-color: $button;

		&:active {
			color: $button-text;
		}
		&:hover {
			background-color: $button-hover;
		}
	}

	.secondary {
		background-color: $button-secondary;
		color: white;

		&:hover {
			background-color: $button-secondary-hover;
		}
	}
	.lrg {
		font-size: $text-large;
	}
	.sml {
		padding: 15px 8px;
	}
</style>
