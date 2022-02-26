<script lang="ts">
	export let bgColor: 'bgPrimary' | 'bgSecondary' | 'bgTertiary' = 'bgPrimary';
</script>

<section
	class="padding"
	class:bgPrimary={bgColor === 'bgPrimary'}
	class:bgSecondary={bgColor === 'bgSecondary'}
	class:bgTertiary={bgColor === 'bgTertiary'}
>
	<slot />
</section>

<style lang="scss">
	@import '../global/index.scss';

	.padding {
		padding: 1em;
	}

	.bgPrimary {
		background: $bg-primary;
	}
	.bgSecondary {
		background: $bg-secondary;
	}
	.bgTertiary {
		background: $bg-tertiary;
	}
</style>
