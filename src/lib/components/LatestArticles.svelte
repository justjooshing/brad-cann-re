<script>
	import ArticleTile from './ArticleTile.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import UnderlineBar from './UnderlineBar.svelte';

	import sellingMistakes from '$assets/selling-mistakes.webp';
	import sellingTips from '$assets/selling-tips.webp';
	import howToBuy from '$assets/how-to-buy.webp';

	export let altBg = false;

	const articles = [
		{
			title: '12 mistakes to avoid when selling your home',
			src: sellingMistakes
		},
		{
			title: '10 best kept secrets for selling your home',
			src: sellingTips
		},
		{
			title: 'First home buyer guide',
			src: howToBuy
		}
	];
</script>

<ContentWrap {altBg}>
	<Htag style={2} size={1} centered message="Our latest articles" />
	<UnderlineBar />
	<p>See the latest real estate news, articles, and blogs</p>
	<div class="articles">
		{#each articles as { title, src }}
			<ArticleTile {title} {src} />
		{/each}
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	p {
		text-align: center;
	}
	.articles {
		display: grid;
		grid-template-rows: repeat(3, auto);

		@include medium {
			grid-gap: 20px;
			grid-template-rows: auto;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
