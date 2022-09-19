<script>
	import Footer from "$lib/components/Footer/Footer.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import { title } from "$lib/store/stores.svelte";
</script>

<svelte:head>
	<title>{$title}</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Quicksand&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<PageHeader />
<div class="wrapper">
	<slot />
</div>
<Footer />

<style lang="scss">
	@import "../lib/global/index.scss";
	:global(body) {
		font-family: $body;
		padding: 0;
		margin: 0;
	}
	.wrapper {
		min-height: 100vh;
	}
</style>
