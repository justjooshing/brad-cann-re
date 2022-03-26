<script lang="ts">
	import { Form, Field, Textarea, Select, createForm } from 'svelte-forms-lib';
	import Button from './Button.svelte';

	const context = createForm({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			'contact-method-phone': false,
			'contact-method-email': false,
			address: '',
			bedrooms: '0',
			bathrooms: '0',
			cars: '0',
			'property-type': '',
			comments: ''
		},
		onSubmit: (values) => {
			console.log(values);
		}
	});
	const { form, updateField } = context;

	const propertyTypes = [
		'Acreage / Semi Rural',
		'Apartment / Unit',
		'Block of Units',
		'Carspace',
		'Farming / Cropping',
		'Grazing / Livestock',
		'House',
		'Land Development',
		'Project Development',
		'Rural',
		'Semi Detached / Duplex',
		'Small Block Farm',
		'Studio',
		'Townhouse',
		'Vacant Land',
		'Viticulture'
	];

	const updateRangeValue = (e) => {
		updateField(e.target.name, e.target.value);
	};
</script>

<div class="enquiry-form">
	<Form {context}>
		<label for="name">Name</label>
		<Field name="name" />

		<div class="contact-method">
			<label for="phone">Phone</label>
			<div>
				<Field type="checkbox" name="contact-method-phone" />
				<label for="contact-method-phone" value="phone"> Preferred </label>
			</div>
		</div>
		<Field name="phone" type="number" />

		<div class="contact-method">
			<label for="email">Email</label>
			<div>
				<Field type="checkbox" name="contact-method-email" />
				<label for="contact-method-email" value="email"> Preferred </label>
			</div>
		</div>
		<Field name="email" type="email" />

		<!-- 
			https://addressfinder.com.au/features/address-autocomplete-field/
			Add for address auto-complete
		 -->
		<label for="address">Complete Property Address</label>
		<Field name="address" />

		<label for="bedrooms">Bedrooms: {$form.bedrooms}</label>
		<input
			on:input={updateRangeValue}
			name="bedrooms"
			type="range"
			min="0"
			max="5"
			bind:value={$form.bedrooms}
		/>

		<label for="bathrooms">Bathrooms: {$form.bathrooms}</label>
		<input
			on:input={updateRangeValue}
			name="bathrooms"
			type="range"
			min="0"
			max="5"
			bind:value={$form.bathrooms}
		/>

		<label for="cars">Car Spaces: {$form.cars}</label>
		<input
			on:input={updateRangeValue}
			name="cars"
			type="range"
			min="0"
			max="5"
			bind:value={$form.cars}
		/>

		<label for="property-type">Property Type</label>
		<Select name="property-type">
			{#each propertyTypes as type}
				<option>{type}</option>
			{/each}
		</Select>

		<label for="comments">Comments</label>
		<Textarea name="comments" type="textarea" />

		<Button type="submit">Request Appraisal</Button>
	</Form>
</div>

<style lang="scss">
	@import '../../lib/global/index.scss';

	.enquiry-form {
		display: flex;
		place-content: center;
		place-items: center;
		:global {
			form {
				display: grid;
				grid-template-columns: auto;
				grid-gap: 1em;
				width: 80%;
				max-width: 450px;
			}

			input,
			select,
			textarea {
				width: 100%;
				padding: 12px;
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
				color: $form-label;
				margin-top: 20px;
				margin-bottom: 4px;
				font-size: 16px;
				font-weight: bold;
			}

			.contact-method {
				display: flex;
				place-content: space-between;
				margin-top: 20px;
				margin-bottom: 4px;

				div {
					display: grid;
					grid-template-columns: 1fr 2fr;
				}
				label {
					margin: 0;
				}
			}
		}
	}
</style>
