<script>
	export let href;
	export let rel;
	export let target;
</script>

{#if href}
	<a {href} {rel} {target}>
		<slot />
	</a>
{:else}
	<slot />
{/if}