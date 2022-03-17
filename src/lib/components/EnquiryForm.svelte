<script lang="ts">
	import { Form, Field, Textarea, Select } from 'svelte-forms-lib';

	const formProps = {
		initialValues: {},
		onSubmit: (e) => {
			e.preventDefault();
			console.log(e);
		}
	};
</script>

<div class="enquiry-form">
	<Form {...formProps}>
		<label for="name">Name</label>
		<Field name="name" />

		<label for="email">Email</label>
		<Field name="email" type="email" />

		<label for="phone">Phone</label>
		<Field name="phone" type="number" />

		<label for="contact-method">Preferred Contact Method</label>
		<Select name="contact-method">
			<option />
			<option>Phone</option>
			<option>Email</option>
		</Select>

		<label for="address">Complete Property Address</label>
		<Field name="address" />

		<label for="bedrooms">Bedrooms</label>
		<Select name="bedrooms">
			<option />
			<option>0</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
		</Select>

		<label for="bathrooms">Bathrooms</label>
		<Select name="bathrooms">
			<option />
			<option>0</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
		</Select>

		<label for="cars">Car Spaces</label>
		<Select name="cars">
			<option />
			<option>0</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
		</Select>

		<label for="property-type">Property Type</label>
		<Select name="property-type">
			<option />
			<option>Acreage / Semi Rural</option>
			<option>Apartment / Unit</option>
			<option>Block of Units</option>
			<option>Carspace</option>
			<option>Farming / Cropping</option>
			<option>Grazing / Livestock</option>
			<option>House</option>
			<option>Land Development</option>
			<option>Project Development</option>
			<option>Rural</option>
			<option>Semi Detached / Duplex</option>
			<option>Small Block Farm</option>
			<option>Studio</option>
			<option>Townhouse</option>
			<option>Vacant Land</option>
			<option>Viticulture</option>
		</Select>

		<label for="comments">Comments</label>
		<Textarea name="comments" type="textarea" />

		<button type="submit">Submit</button>
	</Form>
</div>

<style lang="scss">
	.enquiry-form {
		:global(form) {
			display: grid;
			grid-template-columns: auto;
			grid-gap: 1em;
		}
	}
</style>
