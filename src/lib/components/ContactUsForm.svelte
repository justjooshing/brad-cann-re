<script lang="ts">
	import { Form, Field, Textarea, createForm } from "svelte-forms-lib";
	import Button from "./Button.svelte";

	const context = createForm({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			address: "",
			message: "",
			"enquiry-type": "Contact Us"
		},
		onSubmit: (values) => {
			console.log(values);
		}
	});
</script>

<div class="enquiry-form">
	<Form {context}>
		<label for="name">Name</label>
		<Field name="name" />

		<label for="phone">Phone</label>
		<Field name="phone" type="number" />

		<label for="email">Email</label>
		<Field name="email" type="email" />

		<label for="address">Property Address (if applicable)</label>
		<Field id="address" name="address" />

		<label for="message">Your Message</label>
		<Textarea name="message" type="textarea" />

		<Button type="submit">Send Message</Button>
	</Form>
</div>

<style lang="scss">
	@import "../../lib/global/index.scss";

	.enquiry-form {
		display: flex;
		place-content: center;
		:global {
			form {
				display: flex;
				flex-direction: column;
			}

			input,
			select,
			textarea {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;
				border: 1px solid $input-border;
				border-radius: 4px;
				background: $bg-primary;

				&:focus {
					background-color: white;
				}
			}

			select {
				height: 45px;
			}

			label {
				margin-top: 12px;
				margin-bottom: 6px;
				color: $form-label;
				font-size: 16px;
				font-weight: bold;
			}
			button {
				margin-top: 12px;
			}
		}
	}
</style>
