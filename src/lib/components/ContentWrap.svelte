<script lang="ts">
	export let altBg = false;
	export let noBottomPadding = false;
</script>

<section class="wrapper" class:altBg class:noBottomPadding>
	<slot />
</section>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 1em;
		background: $bg-primary;
	}
	.noBottomPadding {
		padding-bottom: 0em;
	}

	.altBg {
		background: $bg-secondary;
	}
</style>
