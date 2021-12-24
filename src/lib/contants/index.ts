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
