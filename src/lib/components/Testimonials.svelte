<script lang="ts">
	import Button from "./Button.svelte";
	import ContentWrap from "./ContentWrap.svelte";
	import Htag from "./Htag.svelte";
	import testimonialImage from "$assets/testimonials.webp";
	import FormatParagraph from "./Utils/FormatParagraph.svelte";

	export let altBg = false;

	const href = "/testimonials";

	const testimonials = [
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

<ContentWrap {altBg}>
	<div class="testimonial">
		<img src={testimonialImage} alt="Guy with thumb up" />
		<div>
			<div class="content">
				{#each testimonials as { heading, name, message, role }}
					{#if heading}
						<Htag size={1} style={2} message={heading} />
					{/if}
					{#if message}
						<FormatParagraph obj={message} />
					{/if}
					{#if name}
						<p class="testimonial-name">{name}</p>
					{/if}
					{#if role}
						<p class="testimonial-role">{role}</p>
					{/if}
				{/each}
			</div>
			<Button {href}>Click here for more client testimonials</Button>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import "../global/index.scss";
	p {
		line-height: $line-height-standard;
		margin: 0;
	}

	.testimonial {
		display: grid;
		grid-template-rows: repeat(2, auto);
		place-items: center;

		@include medium {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		.content {
			padding-bottom: 1em;
			color: $text-primary;
		}

		&-name {
			color: black;
			font-weight: 600;
			margin-top: 10px;
		}
	}
</style>
