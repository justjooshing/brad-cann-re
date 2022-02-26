<script>
	import BackgroundPier from './BackgroundPier.svelte';
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
</script>

<ContentWrap>
	<div class="appraisals_wrapper">
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
		<BackgroundPier />
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	.appraisals_wrapper {
		position: relative;
		display: grid;
		grid-template-rows: auto 1fr;
		grid-gap: 1em;
		place-items: center;

		.content {
			display: flex;
			flex-direction: column;
			color: $text-secondary;
			text-shadow: 1px 1px 3px black;

			.buttons {
				display: flex;
				place-content: space-around;
			}
		}
	}
</style>
