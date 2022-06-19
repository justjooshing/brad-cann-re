<script lang="ts">
	interface paragraphObjectShape {
		text: string;
		points?: string[];
	}
	export let obj: paragraphObjectShape[];
</script>

{#each obj as { text, points }}
	<p>{text}</p>
	{#if points}
		<ul>
			{#each points as point}
				<li>
					{point}
				</li>
			{/each}
		</ul>
	{/if}
{/each}

<style lang="scss">
	@import "../../global/index.scss";

	p,
	ul {
		font-size: $text-standard;
		line-height: $line-height-standard;
		color: $text-primary;
	}
	p {
		margin-bottom: 0%;
	}
</style>
