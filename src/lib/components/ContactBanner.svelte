<script>
	import Button from './Button.svelte';
	import Htag from './Htag.svelte';
	import Icon from './Icon/Icon.svelte';
	import { contactLinks } from '$lib/constants/index.svelte';
</script>

<div class="wrapper">
	<div class="content">
		<div class="text">
			<Htag alt size={1} style={2} message="Would you like to speak to an expert?" />
			<p>Discover your property's true potential</p>
		</div>
		<Button href={contactLinks.phone}>
			<div class="button">
				<Icon alt icon="phone" />
				<span>Contact us today</span>
			</div>
		</Button>
	</div>
</div>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		background-image: url('$assets/contact-us.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top;
		display: flex;
		min-height: 250px;

		.content {
			width: 100%;
			color: $text-secondary;
			margin: 20px;
			padding: 20px;
			display: flex;
			flex-direction: column;
			place-content: space-around;

			@include medium {
				flex-direction: row;
			}

			.text {
				margin: 0 0.5em;
			}

			.button {
				display: flex;
				place-items: center;

				span {
					font-size: $text-standard;
					margin-left: 15px;
					color: $text-primary;
					font-weight: bold;
				}
			}
		}
	}
</style>
