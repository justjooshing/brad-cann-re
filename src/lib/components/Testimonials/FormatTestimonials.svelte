<script lang="ts">
	import Htag from "$lib/components/Htag.svelte";
	import type { testimonialShape } from "$lib/types/types";
	import FormatParagraph from "$lib/utils/FormatParagraph.svelte";

	export let testimonials: testimonialShape[];
</script>

{#each testimonials as { heading, name, message, role }}
	{#if heading}
		<Htag size={1} style={3} message={heading} />
	{/if}
	{#if message}
		<FormatParagraph obj={message} />
	{/if}
	{#if name}
		<p class="testimonial-name">{name}</p>
	{/if}
	{#if role}
		<p class="testimonial-role">{role}</p>
	{/if}
{/each}

<style lang="scss">
	@import "../../global/index.scss";
	p {
		line-height: $line-height-standard;
		margin: 0;
	}
	.testimonial-name {
		color: black;
		font-weight: 600;
		margin-top: 10px;
	}
</style>
