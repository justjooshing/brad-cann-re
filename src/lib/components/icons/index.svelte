<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { phone, facebookF as facebook } from 'svelte-awesome/icons';

	type iconTypes = 'phone' | 'facebook';
	export let icon: iconTypes;

	const data = {
		phone,
		facebook
	}[icon];
  
</script>

<div class="icon">
	<Icon {data} scale={1.1} />
</div>

<style lang="scss">
	@import '../../global/styles.scss';

	.icon {
		color: $text-secondary;
		&:hover {
			cursor: pointer;
			color: $text-secondary-hover;
		}
	}
</style>
