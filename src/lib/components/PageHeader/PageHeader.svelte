<script lang="ts">
	import logo from '$assets/logo.jpg';
	import Icon from '../icons/index.svelte';

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
	<img class="logo" src={logo} alt="logo" />
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
	@import '../../global/index.scss';

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
				display: flex;
				&_link {
					color: $text-secondary;
					text-decoration: none;
					margin: 5px;
					@include color-fade;

					&:hover {
						color: $text-secondary-hover;
					}
				}
			}
		}
	}
</style>
