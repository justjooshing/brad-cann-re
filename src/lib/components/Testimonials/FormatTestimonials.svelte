<script lang="ts">
	import Htag from "$lib/components/Htag.svelte";
	import type { testimonialShape } from "$lib/types/types";
	import FormatParagraph from "$lib/utils/FormatParagraph.svelte";

	export let testimonial: testimonialShape;
	const { heading, message, name, role } = testimonial;
</script>

{#if heading}
	<Htag size={2} style={3} message={heading} />
{/if}
<FormatParagraph centerItems obj={message} />
<p class="testimonial-name">{name}</p>
{#if role}
	<p class="testimonial-role">{role}</p>
{/if}

<style lang="scss">
	@import "../../global/index.scss";

	p {
		line-height: $line-height-standard;
		margin: 0;
	}
	.testimonial-name {
		font-weight: 600;
		margin-top: 10px;
	}
</style>
