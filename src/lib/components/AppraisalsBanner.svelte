<script>
	import chelsea_pier from '$assets/chelsea_pier.webp';
	import Button from './Button.svelte';
	import Htag from './Htag.svelte';
</script>

<div class="appraisals_wrapper">
	<img src={chelsea_pier} alt="chelsea beach pier" />
	<div class="bg">
		<div class="content">
			<Htag size={1} style={3} message="Work with someone you can trust" />
			<p>
				Looking for an agent that is focused on your success? Call us today, we are ready to listen.
			</p>
			<p>Request an appraisal today</p>
			<div class="buttons">
				<Button href="/sales">SALES APPRAISAL</Button>
				<Button href="/rentals">RENTAL APPRAISAL</Button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../global/index.scss';

	.appraisals_wrapper {
		position: relative;
		display: flex;
		flex-direction: row;
		img {
			width: 50%;
			// height: 100px;
			object-position: 20% 33%;
			object-fit: cover;
		}

		.bg {
			// position: absolute;
			top: 0;
			height: 100%;
			width: 100%;

			.content {
				margin: 1em;
				margin-top: 60px;
				padding: 1em;
				border-radius: 3px;
				max-width: 60%;
				display: flex;
				flex-direction: column;
				color: $text-secondary;
				text-shadow: 1px 1px 3px black;

				.buttons {
					display: flex;
				}
			}
		}
	}
</style>
