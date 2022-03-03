<script lang="ts">
	export let altBg = false;
</script>

<section class="wrapper" class:altBg>
	<slot />
</section>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		padding: 1em;
		background: $bg-primary;
	}

	.altBg {
		background: $bg-secondary;
	}
</style>
