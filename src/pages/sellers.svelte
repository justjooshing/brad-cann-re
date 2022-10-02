<script>
	import Drawer from "svelte-drawer-component";

	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
	import { contactLinks, siteLinksObj } from "$lib/constants/index.svelte";
	import salesConsultation from "$assets/sellers_consultation.webp";
	import provenMethod from "$assets/sellers_proven_method.webp";
	import Tick from "../assets/tick.svelte";

	$: drawerOpen = false;

	const toggleDrawer = () => {
		drawerOpen = !drawerOpen;
	};

	const successSteps = [
		{
			title: "Step 1: creating a plan together",
			copy: "We present a range of options and explain the pros and cons of choosing a private sale or an auction. We explain the best marketing strategies and discuss why we think certain options are worth exploring. At all times, you make the call on what you feel will work best and we'll prepare a plan to make it happen."
		},
		{
			title: "Step 2: preparing for the sale",
			copy: "We send out a professional property photographer to help make the home look its best, both in print and online. We'll be working with your legal representative and arranging all the contractual paperwork and documentation that prospective buyers will need. After this, the property hits the market and the marketing and sales strategy kicks into gear."
		},
		{
			title: "Step 3: marketing your home",
			copy: "Driven by the needs and wants of buyers, we pay attention to the surprisingly simple details like buyer availability and achieving the best possible lighting conditions. We also tap into the insights available from locals and buyers in the area."
		},
		{
			title: "Step 4: inviting and accepting offers",
			copy: "By this stage, buyers will start to show interest. With your instructions clear, we put our negotiation skills to work to help get the best price possible and provide guidance on the validity of each offer based on the performance of the market."
		},
		{
			title: "Step 5: achieving settlement",
			copy: "Sometimes the buyer's bank can cause delays or ask for the settlement date to be moved out. In the lead-up to any key date on the sales timeline, we regularly contact all vendors to ensure that communication flows throughout the entire process."
		}
	];
</script>

<ContentWrap>
	<section class="image-wrap set-a">
		<img class="image" src={salesConsultation} alt="" />
		<div class="text">
			<Htag centered size={2} style={3} message="No convoluted, salesy, over-the-top nonsense" />
			<UnderlineBar />
			<p>
				Brad Cann and Partners offers valuable guidance and assistance for property owners
				considering selling their assets. With a strong focus on delivering the highest return on
				investment and a seamless sales experience, our dedicated real estate agents deliver a
				tailored approach for every property.
			</p>
		</div>
		<div class="button-wrapper">
			<Button href={contactLinks.phone}>
				<div class="button">
					<Icon icon="phone" alt />
					<span>Call us now</span>
				</div>
			</Button>
		</div>
	</section>
	<section class="image-wrap set-b">
		<div class="text">
			<Htag centered size={2} style={3} message="Selling with us" />
			<UnderlineBar />
			<p>
				We help you understand the process. We give you an honest appraisal (an estimated value of
				your property) and let you know what to expect in the current market.
			</p>
			<p class="success-list">
				Our proven method for achieving the best sales results includes several steps:
			</p>
			<ul class="success-methods">
				{#each successSteps as { title }}
					<li>
						<span class="tick">
							<Tick />
						</span>
						{title}
					</li>
				{/each}
			</ul>
		</div>
		<div class="button-wrapper">
			<Button href={siteLinksObj["Contact Us"]}>Speak with an expert</Button>
			<Button onclick={toggleDrawer} style="secondary">Learn more</Button>
		</div>
		<img class="image" src={provenMethod} alt="text" />
	</section>

	<section>
		<Htag centered size={2} style={3} message="Get the best price" />
		<UnderlineBar />
		<p>
			We have the knowledge and experience to help sellers get the most out of their property sale.
			As an independently owned agency, our size and depth of experience empower us to deliver a
			consistently exceptional service and better results.
		</p>
		<!-- open appraisals drawer? -->
		<Button>Get your property appraised</Button>
	</section>

	<Drawer placement="bottom" open={drawerOpen} on:clickAway={toggleDrawer}>
		<ContentWrap>
			{#each successSteps as { title, copy }}
				<Htag size={4} style={4} message={title} />
				<p>{copy}</p>
			{/each}
			<span class="close-drawer">
				<Button onclick={toggleDrawer}>Close</Button>
			</span>
		</ContentWrap>
	</Drawer>
</ContentWrap>

<style lang="scss">
	@import "../lib//global";

	.image-wrap {
		display: grid;
		grid-template-areas:
			"b"
			"c"
			"a";

		.text {
			grid-area: b;
			display: flex;
			flex-direction: column;
			@include large {
				place-items: flex-start;
			}
		}
		.image {
			grid-area: a;
			height: auto;
			max-width: 80vw;
			border-radius: 20px;
			margin: 15px;
			@include large {
				max-width: 20vw;
			}
		}
		.button-wrapper {
			grid-area: c;
		}
	}

	.set-a {
		@include large {
			grid-template-areas:
				"a b"
				"c c";
		}
	}
	.set-b {
		@include large {
			grid-template-areas: "b a" "c c";
		}
	}

	.button {
		display: flex;
		span {
			margin-left: 15px;
		}
	}

	.success-list {
		font-weight: 600;
	}
	.success-methods {
		list-style: none;
		li {
			display: flex;
			flex-direction: row;
			.tick {
				height: 20px;
				margin-right: 15px;
				color: $underline-bar;
			}
		}
	}

	.close-drawer {
		place-self: flex-end;
	}
</style>
