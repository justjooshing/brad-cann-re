<script>
	import CopywrightFooter from "./CopyrightFooter.svelte";
	import MainFooter from "./MainFooter.svelte";
</script>

<div class="footer">
	<MainFooter />
	<CopywrightFooter />
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		bottom: 0;
	}
</style>
