<script>
	import chelsea_pier from '$assets/chelsea_pier.webp';
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
</script>

<div class="appraisals_wrapper">
	<img src={chelsea_pier} alt="chelsea beach pier" />
	<ContentWrap>
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
</div>

<style lang="scss">
	@import '../global/index.scss';

	.appraisals_wrapper {
		position: relative;
		display: flex;
		flex-direction: row;
		img {
			width: 50%;
			object-position: 20% 33%;
			object-fit: cover;
		}

		.content {
			display: flex;
			flex-direction: column;
			color: $text-secondary;
			text-shadow: 1px 1px 3px black;

			.buttons {
				display: grid;
				grid-gap: 5px;
				grid-template-rows: 1fr 1fr;
				@include medium {
					grid-template-columns: 1fr 1fr;
				}
			}
		}
	}
</style>
