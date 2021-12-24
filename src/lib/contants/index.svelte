<script lang="ts" context="module">
	import phone from 'svelte-awesome/icons/phone';
	import facebookF from 'svelte-awesome/icons/facebook-f';
	import home from 'svelte-awesome/icons/home';
	import envelope from 'svelte-awesome/icons/envelope-o';

	export const contact = {
		phone: '0438833354',
		email: 'brad@bradcannre.com.au'
	};
	export const contactLinks = {
		phone: `tel:${contact.phone}`,
		facebook: 'https://www.facebook.com/Brad-Cann-Real-Estate-106718608345609',
		email: `mailto:${contact.email}`
	};

	export const openHours = '9:00am - 5:30pm';
	export const openDays = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];

	const pages = [
		'Sellers',
		'Buyers',
		'Property Management',
		'About Us',
		'Contact Us',
		'Privacy Policy'
	];

	const headerPages = ['about', 'contact'];

	export const siteLinks = pages.map((page) => ({
		href: `/${page.split(' ')[0].toLowerCase()}`,
		text: page
	}));

	export const headerLinks = headerPages.map((page) => ({
		href: `/${page}`,
		text: page.toUpperCase()
	}));

	export type iconTypes = 'phone' | 'facebook' | 'home' | 'email';

	interface getIconTypes {
		data: typeof phone | typeof facebookF | typeof home | typeof envelope;
		href: string;
		aria: string;
		target?: string;
		rel?: string;
	}

	export const getIcon = (icon: iconTypes): getIconTypes =>
		({
			phone: {
				data: phone,
				href: contactLinks.phone,
				aria: 'phone'
			},
			facebook: {
				data: facebookF,
				href: contactLinks.facebook,
				aria: 'facebook',
				target: '_blank',
				rel: 'noopener noreferrer'
			},
			home: {
				data: home,
				href: '/',
				aria: 'home'
			},
			email: {
				data: envelope,
				href: contactLinks.email,
				aria: 'email'
			}
		}[icon]);
</script>
