<script>
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
	import { contactLinks, siteLinksObj } from "$lib/constants/index.svelte";
	import Tick from "../assets/tick.svelte";
	import salesConsultation from "$assets/sellers_consultation.webp";
	import provenMethod from "$assets/sellers_proven_method.webp";

	const successSteps = [
		"Step 1: creating a plan together",
		"Step 2: preparing for the sale",
		"Step 3: marketing your home",
		"Step 4: inviting and accepting offers",
		"Step 5: achieving settlement"
	];
</script>

<ContentWrap>
	<Htag size={1} style={1} message="Sellers" />
	<!-- opens appraisal modal/drawer? -->
	<Button>Get your property appraised</Button>

	<section>
		<div class="image-wrap">
			<img class="image" src={salesConsultation} alt="" />
			<div>
				<Htag centered size={2} style={3} message="No convoluted, salesy, over-the-top nonsense" />
				<UnderlineBar />
				<p>
					Brad Cann and Partners offers valuable guidance and assistance for property owners
					considering selling their assets. With a strong focus on delivering the highest return on
					investment and a seamless sales experience, our dedicated real estate agents deliver a
					tailored approach for every property.
				</p>
			</div>
		</div>
		<Button href={contactLinks.phone}>
			<div class="button">
				<Icon icon="phone" alt />
				<span>Call us now</span>
			</div>
		</Button>
	</section>

	<section>
		<div class="image-wrap">
			<div>
				<Htag centered size={2} style={3} message="Selling with us" />
				<UnderlineBar />
				<div>
					<p>
						We help you understand the process. We give you an honest appraisal (an estimated value
						of your property) and let you know what to expect in the current market.
					</p>

					<p class="success-list">
						Our proven method for achieving the best sales results includes several steps:
					</p>
					<ul class="success-methods">
						{#each successSteps as step}
							<li>
								<span class="tick">
									<Tick />
								</span>
								{step}
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<img class="image" src={provenMethod} alt="text" />
		</div>
		<Button href={siteLinksObj.Sales}>Learn more</Button>
	</section>

	<section>
		<Htag centered size={2} style={3} message="Get the best price" />
		<UnderlineBar />
		<p>
			We have the knowledge and experience to help sellers get the most out of their property sale.
			As an independently owned agency, our size and depth of experience empower us to deliver a
			consistently exceptional service and better results.
		</p>
		<Button href={siteLinksObj["Contact Us"]}>Speak with an expert</Button>
	</section>
</ContentWrap>

<style lang="scss">
	@import "../lib//global";

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

	.image-wrap {
		display: flex;
		place-items: flex-start;
		> div {
			display: flex;
			flex-direction: column;
			place-items: flex-start;
		}
		.image {
			height: auto;
			max-width: 20vw;
			border-radius: 20px;
			margin: 15px;
		}
	}
	.button {
		display: flex;
		span {
			margin-left: 15px;
		}
	}
</style>
