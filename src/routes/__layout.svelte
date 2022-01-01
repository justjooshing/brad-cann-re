<script>
	import Footer from '$lib/components/Footer/Footer.svelte';
	import PageHeader from '$lib/components/PageHeader/PageHeader.svelte';
	import { title } from '$lib/stores/store';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<PageHeader />
<div class="wrapper">
	<slot />
</div>
<Footer />

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
