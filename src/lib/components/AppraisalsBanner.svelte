<script>
	import BackgroundPier from './BackgroundPier.svelte';
	import Button from './Button.svelte';
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import Modal, { openModal } from '$lib/components/Modal.svelte';
	import EnquiryForm from './EnquiryForm.svelte';

	export let altBg = false;

	const openSalesAppraisals = () => {
		openModal('sales-appraisals');
	};
	const openRentalAppraisals = () => {
		openModal('rental-appraisals');
	};
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
		<Htag size={2} style={5} message="Request an appraisal today" />
		<div class="buttons">
			<Button onclick={openSalesAppraisals}>SALES APPRAISAL</Button>
			<Button onclick={openRentalAppraisals}>RENTAL APPRAISAL</Button>
		</div>
	</div>
</ContentWrap>

<Modal name="sales-appraisals">
	<EnquiryForm />
</Modal>
<Modal name="rental-appraisals">
	<EnquiryForm />
</Modal>

<style lang="scss">
	@import '../global/index.scss';

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
</style>
