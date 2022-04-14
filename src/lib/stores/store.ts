import { writable } from "svelte/store";

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
