<script>
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import ServicesTile from './ServicesTile.svelte';
	import UnderlineBar from './UnderlineBar.svelte';

	import imgSellers from '$assets/sellers.webp';
	import imgBuyers from '$assets/buyers.webp';
	import imgPropMan from '$assets/property_management.webp';
	import { siteLinksObj } from '$lib/constants/index.svelte';

	export let altBg = false;

	const copy = {
		sellers: {
			heading: 'Sellers',
			text: 'We give you an honest appraisal (an estimated value of your property) and let you know what to expect in the current market.',
			buttonText: 'Learn more',
			ctaLink: siteLinksObj.Sellers,
			src: imgSellers,
			alt: ''
		},
		buyers: {
			heading: 'Buyers',
			text: "We know that buying a property is a big decision no matter if it's your first home, next home or part of an investment portfolio.",
			buttonText: 'Learn more',
			ctaLink: siteLinksObj.Buyers,
			src: imgBuyers,
			alt: ''
		},
		property_management: {
			heading: 'Property Management',
			text: 'Brad Cann and Partners goal is to create the best property management experience for investors and tenants.',
			buttonText: 'Learn more',
			ctaLink: siteLinksObj['Property Management'],
			src: imgPropMan,
			alt: ''
		}
	};

	const copyArray = Object.values(copy);
</script>

<ContentWrap {altBg}>
	<div class="text">
		<Htag size={2} style={2} message="What we can do for you" centered />
		<UnderlineBar />
		<p>
			We are a local family business, offering an ethical and client focused approach to realestate
		</p>
	</div>
	<div class="services">
		{#each copyArray as { heading, text, buttonText, ctaLink, src, alt }}
			<ServicesTile {src} {alt} {heading} {text} {buttonText} {ctaLink} />
		{/each}
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	.text {
		p {
			line-height: 1.5em;
			color: $text-primary;
			text-align: center;
		}
	}
	.services {
		display: grid;
		grid-gap: 20px;
		@include medium {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
