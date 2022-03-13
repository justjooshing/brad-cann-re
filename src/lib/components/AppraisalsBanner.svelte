<script>
	import BackgroundPier from './BackgroundPier.svelte';
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';

	export let altBg = false;
</script>

<BackgroundPier />

<ContentWrap {altBg}>
	<div class="content">
		<Htag size={1} style={1} message="Work with someone you can trust" />
		<Htag
			size={2}
			style={5}
			message="Looking for an agent that is focused on your success? Call us today, we are ready to listen."
		/>
		<Htag size={2} style={5} message="Request an appraisal today" />
		<div class="buttons">
			<Button href="/sales">SALES APPRAISAL</Button>
			<Button href="/rentals">RENTAL APPRAISAL</Button>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	.content {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: $text-primary;

		.buttons {
			display: flex;
			place-content: space-around;
		}
	}
</style>
