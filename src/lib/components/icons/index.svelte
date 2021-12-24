<script lang="ts">
	import { contactLinks as links } from '$lib/contants';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import phone from 'svelte-awesome/icons/phone';
	import facebookF from 'svelte-awesome/icons/facebook-f';
	import home from 'svelte-awesome/icons/home';
	import envelope from 'svelte-awesome/icons/envelope-o';

	type iconTypes = 'phone' | 'facebook' | 'home' | 'email';
	export let icon: iconTypes;
	export let alt: boolean = false;

	const { data, href, target, rel, aria } = {
		phone: {
			data: phone,
			href: links.phone,
			aria: 'phone'
		},
		facebook: {
			data: facebookF,
			href: links.facebook,
			target: '_blank',
			rel: 'noopener noreferrer',
			aria: 'facebook'
		},
		home: {
			data: home,
			href: '/',
			aria: 'home'
		},
		email: {
			data: envelope,
			href: links.email,
			aria: 'email'
		}
	}[icon];
</script>

<a {href} {rel} {target} class="icon" class:alt aria-describedby={aria}>
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
	.alt {
		&:hover {
			transition: none;
			color: $text-secondary;
		}
	}
</style>
