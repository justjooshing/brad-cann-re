<script>
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import UnderlineBar from './UnderlineBar.svelte';
	import image from '$assets/future-is-here.webp';

	export let altBg = false;
</script>

<div class="wrapper">
	<ContentWrap noBottomPadding {altBg}>
		<Htag size={1} style={2} message="The future is here!" centered />
		<UnderlineBar />
		<p>
			A hugely successful North American now global realestate brand, ExP Australia allows real
			estate agents to operate independently of the traditional bricks and mortar style real estate
			office. Giving agent more flexibility, mobility, and huge financial incentives to succeed.
			Returning to agents the potential of almost 100% of commission earned and the accolades for
			their efforts.
		</p>
		<p>
			Agents are also offered the opportunity to participate in a reward system that over time can
			for the first time ever create a passive income to enhance agents earnings for today and
			retirement income for the future.
		</p>
		<img class="image" src={image} alt="Five people in suits" />
	</ContentWrap>
</div>

<style lang="scss">
	@import '../global/index.scss';
	.image {
		width: 100%;
	}

	p {
		text-align: center;
		line-height: 1.5em;
		color: $text-primary;
	}
</style>
