<script context="module" lang="ts">
	import { writable } from "svelte/store";
	// list of strings of open modal names
	export const openModals = writable([]);

	const titleStore = () => {
		const { set, subscribe } = writable("");

		return {
			subscribe,
			set: (val: string) => {
				set(`${val} - Brad Cann and Partners - Chelsea`);
			},
			clear: () => {
				set("Brad Cann and Partners - Chelsea");
			}
		};
	};
	export const title = titleStore();
</script>
