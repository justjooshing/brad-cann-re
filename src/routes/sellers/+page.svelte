<script>
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
</script>

<ContentWrap>
	<Htag size={1} style={1} message="Sellers" />
	<Button>Get your property approved</Button>

	<section>
		<Htag centered size={2} style={3} message="No convoluted, salesy, over-the-top nonsense" />
		<UnderlineBar />
		<p>
			Brad Cann and Partners offers valuable guidance and assistance for property owners considering
			selling their assets. With a strong focus on delivering the highest return on investment and a
			seamless sales experience, our dedicated real estate agents deliver a tailored approach for
			every property.
		</p>
		<Button>(phoneIcon) Call us now</Button>
	</section>

	<section>
		<Htag centered size={2} style={3} message="Selling with us" />
		<UnderlineBar />
		<p>
			We help you understand the process. We give you an honest appraisal (an estimated value of
			your property) and let you know what to expect in the current market.
		</p>

		<p>Our proven method for achieving the best sales results includes several steps:</p>
		<ul>
			<li>Step 1: creating a plan together</li>
			<li>Step 2: preparing for the sale</li>
			<li>Step 3: marketing your home</li>
			<li>Step 4: inviting and accepting offers</li>
			<li>Step 5: achieving settlement</li>
		</ul>
		<Button>Learn more</Button>
	</section>
	<section>
		<Htag centered size={2} style={3} message="Get the best price" />
		<UnderlineBar />
		<p>
			We have the knowledge and experience to help sellers get the most out of their property sale.
			As an independently owned agency, our size and depth of experience empower us to deliver a
			consistently exceptional service and better results.
		</p>
		<Button>Speak with an expert</Button>
	</section>
</ContentWrap>

<style>
	/* your styles go here */
</style>
