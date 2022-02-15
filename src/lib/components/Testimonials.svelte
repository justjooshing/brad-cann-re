<script lang="ts">
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import testimonialImage from '$assets/testimonials.webp';
	const href = '/testimonials';
</script>

<ContentWrap>
	<div class="testimonial">
		<img src={testimonialImage} alt="Guy with thumb up" />
		<div>
			<Htag size={1} style={2} message="Thank you for helping us" />
			<p class="testimonial-message">
				“Brad, We would like to send our gratitude for assisting us in purchasing our first home. We
				were new to this and it made things a lot easier when we had a real estate agent helping us
				along the way. We appreciate the advise and will be happy to deal with you in the future.”
			</p>
			<p class="testimonial-name">Preston Shaw - Dennis and Elysia Costelloe</p>
			<p class="testimonial-role">Property Buyer</p>
			<Button {href}>Click here for more client testimonials</Button>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';
	p {
		line-height: 1.5;
		margin: 0;
	}

	.testimonial {
		display: grid;
		grid-template-rows: repeat(2, auto);
		place-items: center;

		@include medium {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		&-message {
			color: $text-primary;
		}
		&-name {
			color: black;
			font-weight: 600;
			margin-top: 10px;
		}
		&-role {
			color: $text-primary;
		}
	}
</style>
