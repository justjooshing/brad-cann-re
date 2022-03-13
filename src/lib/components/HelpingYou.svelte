<script lang="ts">
	import { contact, contactLinks } from '$lib/constants/index.svelte';
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import Icon from './Icon/Icon.svelte';
	import UnderlineBar from './UnderlineBar.svelte';
	import image from '$assets/brad_profile.webp';

	export let altBg = false;
</script>

<ContentWrap {altBg}>
	<div class="wrapper">
		<img class="image" src={image} alt="Brad" />

		<div>
			<Htag centered size={1} style={2} message="Helping you is our passion" />
			<UnderlineBar />
			<p>Navigating all areas of the real estate world can be challenging at the best of times.</p>
			<p>
				Whether your trying to find your first home, selling your current property, curious what
				your property might be worth or property management solutions.
			</p>
			<p>
				Take away the stress, worry and confusion and call Brad Cann and Partners, with over 22
				years of real estate experience we can help you make the right choice easy. No strings
				attached.
			</p>
			<p>
				Brad Cann and Partners opened in 2001 and has now moved its operations to a fully online
				real estate model in partnership with ExP Australia, a better more cost effective solution
				to real estate sales for both agents and customers.
			</p>
			<Button href={contactLinks.phone}>
				<div class="button">
					<Icon alt icon="phone" />
					<span>Call us now: {contact.phone}</span>
				</div>
			</Button>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-gap: 2em;
		place-items: center;
		@include medium {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}

		.image {
			max-height: 400px;
			width: auto;
		}
		p {
			line-height: 1.5em;
			color: $text-primary;
		}
		span {
			font-size: $text-standard;
			margin-left: 15px;
		}
		.button {
			display: flex;
			place-content: center;
			place-items: center;
		}
	}
</style>
