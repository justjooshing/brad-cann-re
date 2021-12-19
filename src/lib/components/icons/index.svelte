<script lang="ts">
	import { links } from '$lib/contants';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { phone, facebookF } from 'svelte-awesome/icons';

	type iconTypes = 'phone' | 'facebook';
	export let icon: iconTypes;

	const { data, href } = {
		phone: {
			data: phone,
			href: links.phone
		},
		facebook: {
			data: facebookF,
			href: links.facebook
		}
	}[icon];
</script>

<a {href} target="_blank" class="icon">
	<Icon {data} scale={1.1} />
</a>

<style lang="scss">
	@import '../../global/index.scss';

	.icon {
		color: $text-secondary;
		@include color-fade;

		&:hover {
			cursor: pointer;
			color: $text-secondary-hover;
		}
	}
</style>
