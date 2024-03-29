<script lang="ts">
	import { slide } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import BackgroundPier from "$lib/components/BackgroundPier.svelte";
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import Modal, { openModal } from "$lib/components/Modal.svelte";
	import EnquiryForm from "$lib/components/EnquiryForm.svelte";
	import {
		rentalEnquiryCopy,
		salesEnquiryCopy,
		managementEnquiryCopy
	} from "$lib/constants/index.svelte";
	import FormatParagraph from "$lib/utils/FormatParagraph.svelte";

	export let altBg = false;

	const downArrow = "\u25BC";
	const upArrow = "\u25B2";

	$: sectionOpen = undefined;

	$: salesArrow = sectionOpen === "sales" ? upArrow : downArrow;
	$: rentalsArrow = sectionOpen === "rentals" ? upArrow : downArrow;
	$: managementArrow = sectionOpen === "management" ? upArrow : downArrow;

	const toggleSectionOpen = (name: string) => {
		sectionOpen = sectionOpen !== name ? name : undefined;
	};

	$: sectionOpenData = {
		sales: {
			copy: salesEnquiryCopy,
			modalButton: () => openModal("sales-appraisals")
		},
		rentals: {
			copy: rentalEnquiryCopy,
			modalButton: () => openModal("rentals-appraisals")
		},
		management: {
			copy: managementEnquiryCopy,
			modalButton: () => openModal("management-appraisals")
		}
	}[sectionOpen];

	$: sectionButtons = [
		{
			text: "SALES APPRAISALS",
			arrow: salesArrow,
			toggle: () => toggleSectionOpen("sales")
		},
		{
			text: "RENTAL APPRAISALS",
			arrow: rentalsArrow,
			toggle: () => toggleSectionOpen("rentals")
		},
		{
			text: "PROPERTY MANAGEMENT",
			arrow: managementArrow,
			toggle: () => toggleSectionOpen("management")
		}
	];
</script>

<BackgroundPier />

<ContentWrap {altBg}>
	<div class="content">
		<Htag size={1} style={1} message="Work with someone you can trust" />
		<Htag
			size={2}
			style={5}
			message="Looking for an agent that is focused on your success? Call us today, we are ready to listen."
		/>
		<div class="buttons">
			{#each sectionButtons as { text, arrow, toggle }}
				<Button sml={true} onclick={toggle}>
					{text}
					<div>{arrow}</div>
				</Button>
			{/each}
		</div>
	</div>

	{#if sectionOpen}
		<div transition:slide={{ duration: 1000, easing: cubicInOut }}>
			<div class="appraisals">
				<FormatParagraph obj={sectionOpenData.copy} />
			</div>
			<Button onclick={sectionOpenData.modalButton}>Request Appraisal</Button>
		</div>
	{/if}
</ContentWrap>

<Modal name={`${sectionOpen}-appraisals`}>
	<EnquiryForm formName={sectionOpen} />
</Modal>

<style lang="scss">
	@import "../global/index.scss";

	.content {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: $text-primary;

		.buttons {
			display: flex;
			place-content: space-around;
		}
	}

	.appraisals {
		padding-bottom: 2em;
	}
</style>
