<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import testimonialImage from "$assets/testimonials.webp";
	import { testimonialsCopy } from "$lib/constants/index.svelte";
	import FormatTestimonials from "./FormatTestimonials.svelte";

	export let altBg = false;

	const href = "/testimonials";

	const bigTestimonials = testimonialsCopy.slice(0, 2);
	const smallTestimonials = testimonialsCopy.slice(2);
</script>

<ContentWrap {altBg}>
	<div class="testimonial">
		<img src={testimonialImage} alt="Guy with thumb up" />
		<div>
			<div class="content">
				<FormatTestimonials testimonials={bigTestimonials} />
				<FormatTestimonials testimonials={smallTestimonials} />
			</div>
			<Button {href}>Click here for more client testimonials</Button>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import "../../global/index.scss";

	.testimonial {
		display: grid;
		grid-template-rows: repeat(2, auto);
		place-items: center;

		@include medium {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		.content {
			padding-bottom: 1em;
			color: $text-primary;
		}
	}
</style>
