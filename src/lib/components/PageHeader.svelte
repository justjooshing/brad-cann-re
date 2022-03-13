<script lang="ts">
	import logo from '$assets/logo.jpg';
	import { headerLinks } from '$lib/constants/index.svelte';
	import Icon from './Icon/Icon.svelte';
</script>

<nav class="pageHeader">
	<a href="/">
		<img class="logo" src={logo} alt="logo" />
	</a>
	<div class="links">
		<div class="nav">
			<Icon icon="home" fade />
			{#each headerLinks as { href, text }}
				<a class="nav_link" {href}>{text}</a>
			{/each}
		</div>
		<div class="icons">
			<Icon icon="facebook" fade />
			<Icon icon="phone" fade />
		</div>
	</div>
</nav>

<style lang="scss">
	@import '../global/index.scss';

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

		.links {
			padding: 0 1em;
			display: none;
			flex-direction: column;
			justify-content: space-around;
			margin: 0.5em 0;

			@include small {
				display: flex;
			}

			.icons {
				display: flex;
				place-content: space-around;
			}

			.nav {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 20px;
				width: min-content;
				place-items: center;

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
	}
</style>
