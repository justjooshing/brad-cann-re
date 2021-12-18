<script lang="ts">
	import logo from '$assets/logo.jpg';
	import Icon from '../icons/index.svelte';

	const capitaliseFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	const pages = ['home', 'contact', 'about'];

	const pageLinks = pages.map((page) => ({
		href: page === 'home' ? '/' : `/${page}`,
		text: page.toUpperCase()
	}));

	const contactLinks = [
		{
			href: 'tel:0438833354'
		}
	];
</script>

<div class="pageHeader">
	<div class="logo">
		<img src={logo} alt="logo" />
	</div>
	<div class="links">
		<div class="nav">
			{#each pageLinks as { href, text }}
				<a class="nav_link" {href}>{text}</a>
			{/each}
		</div>
		<div class="icons">
			<Icon icon="facebook" />
			<Icon icon="phone" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../global/styles.scss';

	.pageHeader {
		padding: 0 1em;
		background-color: $bg-tertiary;
		color: $text-secondary;
		place-content: space-between;
		display: flex;

		.logo {
			margin: 1em 0;
		}

		.links {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin: 0.5em 0;

			.icons {
				display: flex;
				place-content: space-around;
			}
			.nav {
				display: flex;
				&_link {
					color: $text-secondary;
					text-decoration: none;
					margin: 5px;

					&:hover {
						color: $text-secondary-hover;
					}
				}
			}
		}
	}
</style>
