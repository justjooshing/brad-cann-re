<script lang="ts">
	import logo from "$assets/logo.jpg";
	import { headerLinks } from "$lib/constants/index.svelte";
</script>

<nav class="pageHeader">
	<a href="/">
		<img class="logo" src={logo} alt="logo" />
	</a>
	<div class="nav">
		{#each headerLinks as { href, text }}
			<a class="nav_link" {href}>{text}</a>
		{/each}
	</div>
</nav>

<style lang="scss">
	@import "../global/index.scss";

	.pageHeader {
		display: flex;
		place-content: space-between;
		width: 100%;
		background-color: $bg-tertiary;
		color: $text-secondary;

		.logo {
			padding: 0 1em;
			margin: 0.5em 0;
			height: 60px;

			@include small {
				height: 80px;
			}
		}

		.nav {
			padding: 0 1em;
			display: none;
			grid-gap: 20px;
			place-items: center;

			@include small {
				display: flex;
			}

			&_link {
				color: $text-secondary;
				text-decoration: none;
				@include fade(color);

				&:hover {
					color: $text-secondary-hover;
				}
			}
		}
	}
</style>
