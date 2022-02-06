<script>
	import Icon from '../Icon.svelte';

	const currentYear = new Date().getFullYear()
</script>

<div class="copyright">
	<span class="copy"> Copyright {currentYear} | Brad Cann and Partners | All Rights Reserved </span>
	<span class="links">
		<Icon tooltip icon="facebook" />
		<Icon tooltip icon="phone" />
		<Icon tooltip icon="email" />
	</span>
</div>

<style lang="scss">
	@import '../../global/index.scss';
	.copyright {
		padding: 2em;
		display: flex;
		flex-direction: column;
		place-items: center;
		text-align: center;
		place-content: center;
		color: $text-secondary;
		background-color: $copyright-footer-bg;

		@include medium {
			flex-direction: row;
			place-content: space-between;
		}

		.links {
			margin: 1em;
			display: grid;
			grid-template-columns: repeat(3, 30px);
		}
	}
</style>
