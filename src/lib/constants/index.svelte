<script lang="ts" context="module">
	import phone from "svelte-awesome/icons/phone";
	import facebookF from "svelte-awesome/icons/facebook-f";
	import home from "svelte-awesome/icons/home";
	import envelope from "svelte-awesome/icons/envelope-o";
	import users from "svelte-awesome/icons/users";
	import star from "svelte-awesome/icons/star";
	import trophy from "svelte-awesome/icons/trophy";
	import tie from "svelte-awesome/icons/black-tie";
	import dollar from "svelte-awesome/icons/dollar";
	import results from "svelte-awesome/icons/signal";
	import link from "svelte-awesome/icons/link";

	export const contact = {
		phone: "0438833354",
		email: "brad@bradcannre.com.au"
	};
	export const contactLinks = {
		phone: `tel:${contact.phone}`,
		facebook: "https://www.facebook.com/Brad-Cann-Real-Estate-106718608345609",
		email: `mailto:${contact.email}`
	};

	export const openHours = "9:00am - 5:30pm";
	export const openDays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday"
	];

	const pages = [
		"Sellers",
		"Buyers",
		"Property Management",
		"About Us",
		"Contact Us",
		"Privacy Policy"
	];

	const headerPages = ["about", "contact"];

	export const siteLinks = pages.map((page) => ({
		href: `/${page.split(" ")[0].toLowerCase()}`,
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
		| "phone"
		| "facebook"
		| "home"
		| "email"
		| "users"
		| "results"
		| "star"
		| "trophy"
		| "tie"
		| "dollar"
		| "link";

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
				aria: "phone"
			},
			facebook: {
				data: facebookF,
				href: contactLinks.facebook,
				aria: "facebook",
				target: "_blank",
				rel: "noopener noreferrer"
			},
			home: {
				data: home,
				href: "/",
				aria: "home"
			},
			email: {
				data: envelope,
				href: contactLinks.email,
				aria: "email"
			},
			users: {
				data: users,
				href: null,
				aria: "three people"
			},
			results: {
				data: results,
				href: null,
				aria: "graph"
			},
			star: {
				data: star,
				href: null,
				aria: "star"
			},
			trophy: {
				data: trophy,
				href: null,
				aria: "trophy"
			},
			tie: {
				data: tie,
				href: null,
				aria: "tie"
			},
			dollar: {
				data: dollar,
				href: null,
				aria: "dollar"
			},
			link: {
				data: link,
				href: null,
				aria: "link"
			}
		}[icon]);

	export const rentalEnquiryCopy = [
		{
			text: "Understanding the true worth of your investment, not just for now but the future too, is something all property investors should be on top of."
		},
		{
			text: "With a free rental appraisal from Brad Cann and Partners, you can be confident that you are getting a high-quality and accurate assessment of the potential return on investment that can give you that knowledge."
		},
		{
			text: "Thanks to the detailed reports our property managers compile that include current market trends and conditions as well as what similar properties are being rented for in the area and the surrounding suburbs, we put you in the best position to make the best decision for your investment."
		},
		{
			text: "No matter what stage of the investment journey you are in, be assured you'll receive the best possible service."
		},
		{
			text: "When it comes to your property and your success, make the intelligent choice. Get a rental appraisal for your investment property with Brad Cann and Partners today."
		}
	];

	export const salesEnquiryCopy = [
		{
			text: "Selling your property can be a lengthy and difficult process if you aren't in the know."
		},
		{ text: "Often, it's difficult to even know where to start." },
		{
			text: "When you start your sales journey a sales appraisal, also known as a property appraisal, you'll get an accurate picture of what your property is truly worth and an understanding of what it can sell for."
		},
		{
			text: "Looking at all the relevant factors, our experienced and motivated sales consultants have the knowledge and experience to give you a smooth and reassuring journey from the very beginning of the property sales process."
		},
		{
			text: "While there's a lot that can go into a market appraisal, some key aspects considered are:",
			points: ["Suburb", "Comparable sales", "Presentation", "Marketing"]
		},
		{
			text: "When it comes to your property's sales appraisal and achieving the best possible price, choose Brad Cann and Partners."
		},
		{ text: "We'll help you understand exactly what your property is worth." }
	];

	export const managementEnquiryCopy = [
		{
			text: "Brad Cann and Partners goal is to create the best property management experience for investors and tenants. We achieve this by ensuring our clients receive unparalleled service from experienced professionals."
		},
		{
			text: "Our real estate industry experts help property investors build rewarding property portfolios and ensure tenants have a seamlessly positive experience renting through us."
		},
		{
			text: "We pride ourselves on offering a holistic service to suit individual leasing and management needs which are designed to achieve the best possible return on investment and deliver a stress-free experience."
		},
		{
			text: "Our dedicated team of property managers offer a variety of valuable services. These include:",
			points: [
				"Helping to select the right property to purchase to suit the tenant demographics of the area",
				"Renovation advice to improve rental returns",
				"Advice on how to make your property attractive to tenants based on primary data",
				"Implementation of strategies to ensure maximised returns on investments",
				"Tailored management in line with individual property investment strategies",
				"Comprehensive market analyses"
			]
		},
		{
			text: "If you are interested in seeking professional property management for your asset, fill out our rental appraisal form for further information."
		}
	];
</script>
