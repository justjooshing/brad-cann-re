<script>
	import ContactUsForm from "$lib/components/ContactUsForm.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import { contact, contactLinks as links } from "$lib/constants/index.svelte";
	import { capitaliseFirstLetter } from "$lib/helpers";
	import { title } from "$lib/store/stores.svelte";

	const page = "Contact";
	title.set(page);

	const contactDetails = Object.entries(contact);
</script>

<ContentWrap>
	<Htag size={1} style={1} message="Contact Us" />
	<p>For all enquiries, please email us using the form below and we'll be happy to help you.</p>

	<div class="contact-us">
		<aside>
			<Htag size={2} style={4} message="General Enquiries" />
			{#each contactDetails as [key, value]}
				<p>{capitaliseFirstLetter(key)}: <a href={links[key]}>{value}</a></p>
			{/each}
		</aside>
		<div>
			<Htag size={2} style={4} message="Quick Contact" />
			<ContactUsForm />
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import "../lib/global/index.scss";

	.contact-us {
		display: flex;
		flex-direction: column;

		@include medium {
			display: grid;
			grid-template-columns: auto 1fr;
			grid-gap: 20px;
			width: 100%;
			display: fle center;
		}
	}
</style>
