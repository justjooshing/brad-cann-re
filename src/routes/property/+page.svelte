<script>
	import Button from "$lib/components/Button.svelte";

	// your script goes here

	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
</script>

<ContentWrap>
	<Htag size={1} style={1} message="Property Management" />
	<Button>Rental Property Assessment</Button>

	<section>
		<Htag size={2} style={3} message="Your dedicated property experts" />
		<UnderlineBar />
		<p>
			Brad Cann and Partners goal is to create the best property management experience for
			investors. We achieve this by ensuring our clients receive unparalleled service from
			experienced professionals.
		</p>
		<p>
			Our real estate industry experts help property investors build rewarding property portfolios
			and ensure tenants have a seamlessly positive experience renting through us.
		</p>
	</section>

	<section>
		<p>
			Brad Cann and Partners goal is to create the best property management experience for investors
			and tenants. We achieve this by ensuring our clients receive unparalleled service from
			experienced professionals.
		</p>
		<p>
			Our real estate industry experts help property investors build rewarding property portfolios
			and ensure tenants have a seamlessly positive experience renting through us.
		</p>
		<p>
			We pride ourselves on offering a holistic service to suit individual leasing and management
			needs which are designed to achieve the best possible return on investment and deliver a
			stress-free experience.
		</p>
		<p>
			Our dedicated team of property managers offer a variety of valuable services. These include:
		</p>
		<ul>
			<li>
				Helping to select the right property to purchase to suit the tenant demographics of the area
			</li>
			<li>Renovation advice to improve rental returns</li>
			<li>Advice on how to make your property attractive to tenants based on primary data</li>
			<li>Implementation of strategies to ensure maximised returns on investments</li>
			<li>Tailored management in line with individual property investment strategies</li>
			<li>Comprehensive market analyses</li>
		</ul>
		<p>
			If you are interested in seeking professional property management for your asset, fill out our
			<b>rental appraisal form</b> for further information.
		</p>
	</section>
</ContentWrap>

<style>
	/* your styles go here */
</style>
