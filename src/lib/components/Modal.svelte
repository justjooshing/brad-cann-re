<script context="module" lang="ts">
	import { openModals } from "$lib/store/stores.svelte";

	export const openModal = (name: string): void => openModals.update((n) => [...n, name]);
	export const closeModal = (name: string): void =>
		openModals.update((n) => n.filter((openedModal) => openedModal !== name));
</script>

<script lang="ts">
	import { fade } from "svelte/transition";
	import Portal from "svelte-portal";

	export let name: string;

	$: showModal = $openModals.indexOf(name) !== -1;

	const close = () => {
		closeModal(name);
	};
</script>

{#if showModal}
	<Portal target={document.body}>
		<div class="modal" transition:fade={{ delay: 0, duration: 600 }} role="alertdialog">
			<div class="overlay" on:click={close} />
			<div transition:fade class="content" role="document">
				<slot {close} />

				<button aria-label="Dismiss" class="close" on:click={close} />
			</div>
		</div>
	</Portal>
{/if}

<style lang="scss">
	.modal {
		display: flex;
		position: fixed;
		overflow: auto;
		z-index: 5;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
		padding: 30px 0;

		.overlay {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin-right: 15px;
			background: transparent;
		}

		.content {
			background: #f0f0f0;
			border-radius: 5px;
			margin: auto;
			padding: 1em;
			position: relative;
			width: 80%;
			max-width: 450px;
		}
		.close {
			margin: 0;
			padding: 0;
			border: none;
			background: transparent;
			cursor: pointer;
			position: absolute;
			right: 0;
			top: 0;

			&:before {
				display: block;
				width: 26px;
				padding: 3px;
				background: transparent;
				color: #bbb;
				content: "\00D7";
				font-size: 26px;
				font-weight: 400;
				line-height: 26px;
				text-align: center;
			}
		}
	}
</style>
