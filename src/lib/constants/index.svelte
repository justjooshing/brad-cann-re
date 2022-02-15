<script lang="ts" context="module">
	import phone from 'svelte-awesome/icons/phone';
	import facebookF from 'svelte-awesome/icons/facebook-f';
	import home from 'svelte-awesome/icons/home';
	import envelope from 'svelte-awesome/icons/envelope-o';
	import users from 'svelte-awesome/icons/users';
	import star from 'svelte-awesome/icons/star';
	import trophy from 'svelte-awesome/icons/trophy';
	import tie from 'svelte-awesome/icons/black-tie';
	import dollar from 'svelte-awesome/icons/dollar';
	import results from 'svelte-awesome/icons/signal';
	import link from 'svelte-awesome/icons/link';

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

	interface siteLinksObject {
		[key: string]: string;
	}

	export const siteLinksObj = siteLinks.reduce(
		(links, link) => ({
			...links,
			[link.text]: link.href
		}),
		{} as siteLinksObject
	);

	export const headerLinks = headerPages.map((page) => ({
		href: `/${page}`,
		text: page.toUpperCase()
	}));

	export type iconTypes =
		| 'phone'
		| 'facebook'
		| 'home'
		| 'email'
		| 'users'
		| 'results'
		| 'star'
		| 'trophy'
		| 'tie'
		| 'dollar'
		| 'link';

	interface getIconTypes {
		data:
			| typeof phone
			| typeof facebookF
			| typeof home
			| typeof envelope
			| typeof users
			| typeof star
			| typeof trophy
			| typeof tie
			| typeof dollar
			| typeof results
			| typeof link;
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
			},
			users: {
				data: users,
				href: null,
				aria: 'email'
			},
			results: {
				data: results,
				href: null,
				aria: 'email'
			},
			star: {
				data: star,
				href: null,
				aria: 'email'
			},
			trophy: {
				data: trophy,
				href: null,
				aria: 'email'
			},
			tie: {
				data: tie,
				href: null,
				aria: 'email'
			},
			dollar: {
				data: dollar,
				href: null,
				aria: 'email'
			},
			link: {
				data: link,
				href: null,
				aria: 'link'
			}
		}[icon]);
</script>
