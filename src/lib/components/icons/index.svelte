<script lang="ts">
	import { contactLinks as links } from '$lib/contants';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import phone from 'svelte-awesome/icons/phone';
	import facebookF from 'svelte-awesome/icons/facebook-f';
	import home from 'svelte-awesome/icons/home';

	type iconTypes = 'phone' | 'facebook' | 'home';
	export let icon: iconTypes;

	const { data, href, target, rel } = {
		phone: {
			data: phone,
			href: links.phone
		},
		facebook: {
			data: facebookF,
			href: links.facebook,
			target: '_blank',
			rel: 'noopener noreferrer'
		},
		home: {
			data: home,
			href: '/'
		}
	}[icon];
</script>

<a {href} {rel} {target} class="icon">
	<Icon {data} scale={1.1} />
</a>

<style lang="scss">
	@import '../../global/index.scss';

	.icon {
		display: flex;
		color: $text-secondary;
		@include color-fade;

		&:hover {
			cursor: pointer;
			color: $text-secondary-hover;
		}
	}
</style>
