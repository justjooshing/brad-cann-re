<script>
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import EnquiryForm from "$lib/components/EnquiryForm.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
	import Modal, { openModal } from "$lib/components/Modal.svelte";
	import image from "$assets/buyers_enquiry.webp";

	let sectionOpen = "buyer-enquiry";
	$: handleClick = () => {
		openModal(sectionOpen);
	};
</script>

<ContentWrap>
	<div class="wrapper">
		<img class="image" src={image} alt="test" />
		<div class="content">
			<Htag size={2} style={3} message="Looking to buy?" />
			<UnderlineBar />
			<p>
				We know that buying a property is a big decision no matter if it's your first home, next
				home or part of an investment portfolio. Our dedicated sales team is committed to helping
				you find the right one and facilitating the best possible purchase experience .
			</p>
			<p>Get help finding your next property</p>
			<p>
				Our team has the expertise and connections to help you find the right property for you.
				Whether you're looking to invest or occupy, we will help you take that next step.
			</p>
			<Button onclick={handleClick}>Enquire now!</Button>
			<Modal name={sectionOpen}>
				<EnquiryForm formType="buyers" formName={sectionOpen} />
			</Modal>
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import "../lib/global/";

	.wrapper {
		display: flex;
		flex-direction: column;

		@include medium {
			flex-direction: row;
		}

		.image {
			max-height: 400px;
			max-width: 80vw;
			width: auto;
			border-radius: 10px;
		}

		.content {
			margin: 2em 0;

			@include medium {
				margin: 0 2em;
			}
		}
	}
</style>
