<script>
	import PageHeader from '$lib/components/PageHeader/PageHeader.svelte';
</script>

<PageHeader />

<!-- Page Children -->
<slot />

<!-- Footer -->

<!-- CopywrightFooter -->
<style lang="scss">
	:global(body) {
		padding: 0;
		margin: 0;
	}
</style>
