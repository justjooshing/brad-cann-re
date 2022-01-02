<script>
	import AppraisalsBanner from '$lib/components/AppraisalsBanner.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	import FutureIsHere from '$lib/components/FutureIsHere.svelte';
	import HelpingYou from '$lib/components/HelpingYou.svelte';
	import LatestArticles from '$lib/components/LatestArticles.svelte';
	import Services from '$lib/components/Services.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import WhyBrad from '$lib/components/WhyBrad.svelte';
	import { title } from '$lib/stores/store';

	title.clear();
</script>

<h3>index page</h3>

<AppraisalsBanner />
<HelpingYou />
<FutureIsHere />
<Services />
<ContactBanner />
<WhyBrad />
<LatestArticles />
<Testimonials />

<style>
	/* your styles go here */
</style>
