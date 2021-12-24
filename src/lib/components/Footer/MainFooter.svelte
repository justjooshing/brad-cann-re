<script lang="ts">
	import {
		contact,
		contactLinks as links,
		openDays,
		openHours,
		siteLinks
	} from '$lib/contants/index.svelte';
	import { capitaliseFirstLetter } from '$lib/helpers';

	const contactDetails = Object.entries(contact);
</script>

<div class="main-footer">
	<!-- Contact -->
	<div class="contact">
		<h3>Contact info</h3>
		{#each contactDetails as [key, value]}
			<p>{capitaliseFirstLetter(key)}: <a href={links[key]}>{value}</a></p>
		{/each}
	</div>

	<!-- Hours of Operation -->
	<div class="hours">
		<h3>Hours of operation</h3>
		{#each openDays as day}
			<div class="wrapper">
				<span>{day}</span>
				<span>{openHours}</span>
			</div>
		{/each}
	</div>

	<!-- Site links -->
	<div class="site-links">
		<h3>Site Links</h3>
		<div class="links">
			{#each siteLinks as { href, text }}
				<a {href}>{text}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../global/index.scss';

	@mixin link-style {
		a {
			color: $text-secondary;
			text-decoration: none;
			@include color-fade;

			&:hover {
				color: $text-secondary-hover;
			}
		}
	}
	.main-footer {
		display: grid;
		grid-template-rows: auto;
		padding: 2em;
		background-color: $bg-tertiary;
		color: $text-secondary;

		@include medium {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.contact {
			@include link-style;
		}
		.hours {
			.wrapper {
				display: grid;
				grid-template-columns: 85px auto;
				padding: 2px 0;
			}
		}
		.site-links {
			@include link-style;

			.links {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
