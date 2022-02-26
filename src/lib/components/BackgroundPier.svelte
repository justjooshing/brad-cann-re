<script>
</script>

<div class="image" />

<style lang="scss">
	@import '../global/index.scss';

	.image {
		padding: 8em 0;
		width: 100%;
		background: url('$assets/chelsea_pier.webp') transparent no-repeat;
		background-size: contain;

		@include medium {
			background-attachment: fixed;
			background-size: cover;
		}
	}
</style>
