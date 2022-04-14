<script>
	import Footer from "$lib/components/Footer/Footer.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import { title } from "$lib/stores/store";
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
		min-height: 100vh;
	}
</style>
