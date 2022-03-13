<script>
	import ContentWrap from '$lib/components/ContentWrap.svelte';
	import EnquiryForm from '$lib/components/EnquiryForm.svelte';
	import SecondaryHeader from '$lib/components/SecondaryHeader.svelte';
	import { title } from '$lib/stores/store';

	const headerTitle = 'Get a sales appraisal today';
	const page = 'Sales Appraisals';
	title.set(page);

	const copy = [
		{
			text: "Selling your property can be a lengthy and difficult process if you aren't in the know."
		},
		{ text: "Often, it's difficult to even know where to start." },
		{
			text: "When you start your sales journey a sales appraisal, also known as a property appraisal, you'll get an accurate picture of what your property is truly worth and an understanding of what it can sell for."
		},
		{
			text: 'Looking at all the relevant factors, our experienced and motivated sales consultants have the knowledge and experience to give you a smooth and reassuring journey from the very beginning of the property sales process.'
		},
		{
			text: "While there's a lot that can go into a market appraisal, some key aspects considered are:",
			points: ['Suburb', 'Comparable sales', 'Presentation', 'Marketing']
		},
		{
			text: "When it comes to your property's sales appraisal and achieving the best possible price, choose Brad Cann and Partners."
		},
		{ text: "We'll help you understand exactly what your property is worth." }
	];
</script>

<SecondaryHeader {headerTitle} />
<ContentWrap>
	{#each copy as { text, points }}
		<p>{text}</p>
		{#if points}
			<ul>
				{#each points as point}
					<li>
						{point}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
	<EnquiryForm />
</ContentWrap>

<style lang="scss">
	@import '../lib/global/index.scss';

	p,
	ul {
		color: $text-primary;
	}
	p {
		margin-bottom: 0%;
	}
</style>
