<script lang="ts">
	export let altBg = false;
	export let noBottomPadding = false;
</script>

<section class="wrapper" class:altBg class:noBottomPadding>
	<div class="content">
		<slot />
	</div>
</section>

<style lang="scss">
	@import "../global/index.scss";

	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 3em;
		background: $bg-primary;
		place-items: center;

		.content {
			display: flex;
			flex-direction: column;
			max-width: 1200px;
			place-items: center;
			place-content: center;
		}
	}
	.noBottomPadding {
		padding-bottom: 0em;
	}

	.altBg {
		background: $bg-secondary;
	}
</style>
