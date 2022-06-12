<script>
	import ContactBanner from "$lib/components/ContactBanner.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import FutureIsHere from "$lib/components/FutureIsHere.svelte";
	import HelpingYou from "$lib/components/HelpingYou.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import WhyBrad from "$lib/components/WhyBrad.svelte";
	import { title } from "$lib/store/stores.svelte";

	const page = "About";
	title.set(page);
</script>

<!-- markup (zero or more items) goes here -->
<ContentWrap noBottomPadding>
	<Htag size={1} style={1} message="About Us" />
	<p>Looking for an agent that is focused on your success? Call us today we are ready to listen.</p>
	<p>
		Brad Cann and Partners opened in 2001 and has now moved its operations to a fully online real
		estate model in partnership with ExP Australia, a better more cost effective solution to real
		estate sales for both agents and customers.
	</p>
</ContentWrap>

<HelpingYou altBg />
<FutureIsHere />
<ContactBanner />
<WhyBrad altBg />

<style>
</style>
