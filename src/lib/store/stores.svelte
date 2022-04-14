<script context="module" lang="ts">
	import { writable } from "svelte/store";
	// list of strings of open modal names
	export const openModals = writable([]);
</script>
