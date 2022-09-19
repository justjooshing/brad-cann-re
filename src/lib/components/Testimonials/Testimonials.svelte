<script lang="ts">
	import { slide } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";

	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import { testimonialsCopy } from "$lib/constants/index.svelte";
	import FormatTestimonials from "./FormatTestimonials.svelte";
	import Htag from "../Htag.svelte";
	import UnderlineBar from "../UnderlineBar.svelte";

	export let altBg = false;

	const bigTestimonials = testimonialsCopy.slice(0, 2);
	const smallTestimonials = testimonialsCopy.slice(2);

	$: displayTestimonials = false;
	$: seeMoreText = displayTestimonials
		? "See fewer testimonials"
		: "Click here for more client testimonials";

	const handleClick = () => {
		displayTestimonials = !displayTestimonials;
	};
</script>

<ContentWrap {altBg}>
	<Htag centered size={1} style={2} message="What our clients have to say about us" />
	<UnderlineBar />
	<p>
		We are very fortunate to have formed excellent partnerships with many of our clients. And we've
		formed more than just working relationships with them; we have formed true friendships. Here's
		what our clients are saying about our services.
	</p>
	{#each bigTestimonials as testimonial}
		<div class="testimonial">
			<FormatTestimonials {testimonial} />
		</div>
	{/each}
	{#if displayTestimonials}
		<div class="testimonials" transition:slide={{ duration: 1000, easing: cubicInOut }}>
			{#each smallTestimonials as testimonial}
				<div class="testimonial">
					<FormatTestimonials {testimonial} />
				</div>
			{/each}
		</div>
	{/if}

	<Button onclick={handleClick}>{seeMoreText}</Button>
</ContentWrap>

<style lang="scss">
	@import "../../global/index.scss";
	p {
		text-align: center;
	}
	.testimonials {
		padding: 10px;

		@include medium {
			display: grid;
			grid-template-columns: repeat(3, minmax(250px, 1fr));
		}
	}
	.testimonial {
		border-radius: 8px;
		margin: 20px 0;
		padding: 20px;
		background-color: $bg-tertiary;
		color: $text-secondary;
		text-align: center;

		@include medium {
			margin: 20px;
		}

		&:nth-child(even) {
			background-color: $bg-primary;
			color: $text-primary;
		}
	}
</style>
