<script lang="ts">
	export let href: string = undefined;
	export let onclick: (val?: unknown) => void = undefined;
	export let lrg = false;
	export let type = 'button';
</script>

<div class="wrapper">
	<div class="button" class:lrg>
		{#if href}
			<a {href}><slot /></a>
		{:else}
			<button {type} {onclick}><slot /></button>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		display: flex;
		place-content: center;
		place-items: center;
	}
	.button {
		font-size: $text-small;
		padding: 15px 15px;
		border-radius: 3px;
		cursor: pointer;
		text-shadow: none;
		text-align: center;
		background-color: $button;
		@include fade(background-color);
		&:hover {
			background-color: $button-hover;
		}

		button,
		a {
			color: $button-text;
			background-color: inherit;
			border: none;
			font-weight: bold;
			text-decoration: none;
			&:active,
			&:visited {
				color: $button-text;
			}
		}
	}
	.lrg {
		font-size: $text-large;
	}
</style>
