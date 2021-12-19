<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import PageHeader from '$lib/components/PageHeader/PageHeader.svelte';
</script>

<PageHeader />

<!-- Page Children -->
<div class="wrapper">
	<slot />
</div>

<Footer />

<!-- CopywrightFooter -->
<style lang="scss">
	:global(body) {
		padding: 0;
		margin: 0;
	}
	.wrapper {
		padding: 0em 1em;
		min-height: 100vh;
	}
</style>
