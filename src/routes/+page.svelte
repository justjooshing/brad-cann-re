<script>
	import AppraisalsBanner from "$lib/components/AppraisalsBanner.svelte";
	import ContactBanner from "$lib/components/ContactBanner.svelte";
	import FutureIsHere from "$lib/components/FutureIsHere.svelte";
	import HelpingYou from "$lib/components/HelpingYou.svelte";
	import LatestArticles from "$lib/components/LatestArticles.svelte";
	import Services from "$lib/components/Services.svelte";
	import Testimonials from "$lib/components/Testimonials/Testimonials.svelte";
	import WhyBrad from "$lib/components/WhyBrad.svelte";
	import { title } from "$lib/store/stores.svelte";

	title.clear();
</script>

<AppraisalsBanner altBg />
<HelpingYou />
<Testimonials altBg />
<FutureIsHere />
<Services altBg />
<ContactBanner />
<WhyBrad altBg />
<LatestArticles />

<style>
</style>
