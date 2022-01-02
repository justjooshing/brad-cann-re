<script lang="ts">
	export let href: string = undefined;
	export let onclick: (val?: unknown) => void = undefined;
</script>

<div class="button">
	{#if href}
		<a {href}><slot /></a>
	{:else}
		<button {onclick}><slot /></button>
	{/if}
</div>

<style lang="scss">
	@import '../global/index.scss';
	.button {
		padding: 13px 29px;
		margin: 1em;
		margin-left: 0em;
		border-radius: 3px;
		cursor: pointer;
		text-shadow: none;
		color: $button-text;
		background-color: $button;
		@include fade(background-color);
		&:hover {
			background-color: $button-hover;
		}

		button,
		a {
			border: none;
			font-weight: bold;
			text-decoration: none;
			&:active,
			&:visited {
				color: $button-text;
			}
		}
	}
</style>
