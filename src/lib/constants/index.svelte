<script lang="ts" context="module">
	import phone from "svelte-awesome/icons/phone";
	import facebookF from "svelte-awesome/icons/facebookF";
	import home from "svelte-awesome/icons/home";
	import envelope from "svelte-awesome/icons/envelopeO";
	import users from "svelte-awesome/icons/users";
	import star from "svelte-awesome/icons/star";
	import trophy from "svelte-awesome/icons/trophy";
	import tie from "svelte-awesome/icons/blackTie";
	import dollar from "svelte-awesome/icons/dollar";
	import results from "svelte-awesome/icons/signal";
	import link from "svelte-awesome/icons/link";
	import type { testimonialShape } from "$lib/types/types";

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
		}
	];

	export const testimonialsCopy: testimonialShape[] = [
		{
			heading: "Thank you for helping us",
			name: "Preston Shaw - Dennis and Elysia Costelloe",
			message: [
				{
					text: "Brad, We would like to send our gratitude for assisting us in purchasing our first home. We were new to this and it made things a lot easier when we had a real estate agent helping us along the way. We appreciate the advice and will be happy to deal with you in the future."
				}
			],
			role: "Property Buyer"
		},
		{
			heading: "Looking for a good Real Estate Agent?",
			name: "S. Stubbs",
			message: [
				{
					text: "Choosing the right real estate agent is one of the most difficult decisions of all. To anyone facing this dilemma, I thoroughly recommend Brad Cann and his team at MPRE Chelsea."
				},
				{
					text: "They recently sold my Chelsea Heights home at an excellent price in just four weeks. From start to finish they were:",
					points: [
						"Informed about the real estate values in my area",
						"Easy to contact",
						"Provided written and phone feedback on each and every inspection",
						"Quick to follow up leads",
						"Tough in negotiating to get the best price for me"
					]
				},
				{
					text: 'You might be interested to know Brad was actually my second agent. For my first agent, I chose a Victoria-wide chain, a “household name” in real estate, where the agent was "a friend of a friend of mine". I was shocked to discover my house was not well promoted, the agent had little local knowledge or contacts, and my property languished on the market for eight long weeks. I terminated the contract as soon as possible, and still had major advertising cost to pay with no results.'
				},
				{
					text: "Brad stepped in and sold my house in four weeks, at a better price. His local contacts drive and enthusiasm work for both him and his clients and he really gets results."
				}
			]
		},
		{
			name: "Frances Dara",
			message: [
				{ text: "Dear Brad," },
				{
					text: "I am writing to you to thank you for the service you gave us in the sale of our house. We are delighted that because of your advise we managed to sell it quickly. The service that you gave us was both courteous and efficient offering a personal touch that eased the difficulties involved in selling property."
				},
				{ text: "Once again, thank you very much," }
			]
		},
		{
			name: "R Walser & S Rowe-Walser",
			message: [
				{ text: "Dear Brad," },
				{
					text: "We are very grateful you have succeeded to sell our home where another company failed. We appreciated your dedication to your job and your professionalism. On more than one occasion you went out of your way (and out of working hours to assist us to sell our property). You maintained your professionalism whilst being friendly towards clients. It was great how you found out as much as possible about our property and the improvement we had made and relayed these onto clients which, we believe, assisted in selling our property."
				},
				{
					text: "We would have no hesitation in recommending you to others wishing to sell their property or look for a new property."
				},
				{ text: "Yours sincerely," }
			]
		},
		{
			name: "Ruth Wilkes",
			message: [
				{ text: "We recently had the pleasure of selling our home with Brad." },
				{
					text: "Our home was only on the market for four weeks before selling at a price that was more than acceptable. I was confident that the people that were being shown were bonafide buyers capable of purchasing if the property suited."
				},
				{
					text: "We did not make it easy for Brad as special arrangements has to be made for inspection times as I own dogs and my Husband is in IT and works odd hours, but all of this was accepted with good grace and professionalism and it worked out beautifully."
				},
				{
					text: "In a few years time we will be selling the house we are building now and there will be no hesitation in who will be the Agents in charge of that sale. I would not hesitate in recommending Brad Cann and Partners to anyone."
				}
			]
		},
		{
			name: "Kelli & Haydn Van de Water",
			message: [
				{
					text: "We would like to thank you for selling our house and looking after us during the whole process. We really appreciated the amount of time that you gave to us including Sunday afternoons. We also appreciated that you kept us so well after the open days and other inspections."
				},
				{ text: "Again, thank you for the extra effort you gave in achieving our sale." }
			]
		},
		{
			name: "Anthony & Sharon Cafarella",
			message: [
				{ text: "Dear Brad," },
				{
					text: "We wish to convey our gratitude to yourself and your staff in relation to the sale of our property at the above address. Not only did you manage to achieve a truly excellent sale price, which met with the upper end of our expectations, but did so in the outstanding time of just 10 days!"
				},
				{
					text: "Your professional yet friendly attitude and advice was greatly appreciated, as was your timely feedback on prospective purchasers. We have no doubt that your knowledge of the local area helped to achieve the great result with the absolute minimum of fuss."
				},
				{ text: "We will certainly be highly recommending you and your team to everyone we know." }
			]
		},
		{
			name: "Peter Minotti",
			message: [
				{ text: "Dear Brad," },
				{
					text: "This letter serves to confirm our telephone discussions of yesterday, expressing our gratitude at the excellent service received by your office in the handling our property."
				},
				{
					text: "Your professionalism and always keeping us informed with progress reports is very refreshing."
				},
				{
					text: "We would recommend your office to others and only use your office again in our future dealings."
				},
				{ text: "Our sincere thanks to you and your office and we will keep in touch." }
			]
		},
		{
			name: "Bev Wilson",
			message: [
				{ text: "Dear Brad," },
				{
					text: "With regards to the sale of my property in Patterson lakes, I would like to thank you for your professionalism in the appraisal of the property in the beginning, then the sale of the property."
				},
				{
					text: "I appreciate every effort by yourself."
				}
			]
		},
		{
			name: "Brian Searle",
			message: [
				{
					text: "I would like to take this opportunity to thank you for the tireless effort and dedication you put into the sale of my property."
				},
				{
					text: "The expertise and knowledge that you have made the process of achieving my sale price a lot easier."
				},
				{
					text: "I wish you and your company all the very best for the future."
				}
			]
		}
	];
</script>
