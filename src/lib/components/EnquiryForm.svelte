<script lang="ts">
	import { Form, Field, Textarea, Select, createForm } from "svelte-forms-lib";
	import Button from "./Button.svelte";

	export let formName: string;
	export let formType: "standard" | "buyers" = "standard";

	const extraFields = {
		standard: {
			address: ""
		},
		buyers: {
			minPrice: "",
			maxPrice: ""
		}
	}[formType];

	const context = createForm({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			"property-type": "",
			comments: "",
			"enquiry-type": formName,
			...extraFields
		},
		onSubmit: (values) => {
			console.log(values);
		}
	});

	const propertyTypes = ["House", "Unit", "Townhouse", "Land"];
</script>

<div class="enquiry-form">
	<Form {context}>
		<label for="name">Name</label>
		<Field name="name" />

		<label for="phone">Phone</label>
		<Field name="phone" type="number" />

		<label for="email">Email</label>
		<Field name="email" type="email" />

		{#if formType === "standard"}
			<label for="address">Complete Property Address</label>
			<Field id="address" name="address" />
		{/if}

		<label for="property-type">Property Type</label>
		<Select name="property-type">
			{#each propertyTypes as type}
				<option>{type}</option>
			{/each}
		</Select>

		{#if formType === "buyers"}
			<label for="minPrice">Min price</label>
			<Field id="minPrice" name="minPrice" />
			<label for="maxPrice">Max price</label>
			<Field id="maxPrice" name="maxPrice" />
		{/if}

		<label for="comments">Comments</label>
		<Textarea name="comments" type="textarea" />

		<Button type="submit">Request Appraisal</Button>
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
				width: 80%;
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
