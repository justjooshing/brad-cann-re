<script lang="ts">
	import type { paragraphObjectShape } from "$lib/types/types";

	export let centerItems = false;
	export let obj: paragraphObjectShape[];
</script>

{#each obj as { text, points }}
	<p>{text}</p>
	{#if points}
		<ul class:centerItems>
			{#each points as point}
				<li>
					{point}
				</li>
			{/each}
		</ul>
	{/if}
{/each}

<style lang="scss">
	@import "../global/index.scss";
	@mixin common {
		display: flex;
		flex-direction: column;
		font-size: $text-standard;
		line-height: $line-height-standard;
		color: inherit;
	}

	p {
		@include common();
		margin-bottom: 0%;
	}
	ul {
		@include common();
		width: fit-content;
		li {
			text-align: left;
		}
	}
	.centerItems {
		margin: 4px auto;
	}
</style>
