<script lang="ts">
	import Htag from './Htag.svelte';
	import Icon from './Icon.svelte';

	export let title: string;
	export let src: string;

	const icon = 'link';
	const href = title.toLowerCase().split(' ').join('-');
</script>

<div class="wrapper">
	<a {href} class="image">
		<div class="overlay">
			<div class="icon">
				<Icon {icon} />
			</div>
		</div>
		<img {src} alt={title} />
	</a>
	<a {href}>
		<Htag size={3} style={4} message={title} />
	</a>
</div>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		text-align: center;
		margin: 10px 0;

		.image {
			position: relative;
			display: flex;

			.overlay {
				display: flex;
				place-content: center;
				place-items: center;
				background-color: rgba($bg-overlay, 0.4);
				position: absolute;
				overflow: hidden;
				bottom: 100%;
				height: 0;
				width: 100%;
				transition: 0.3s ease;

				.icon {
					background-color: rgba(black, 0.8);
					opacity: 100%;
					padding: 10px;
					border-radius: 100%;

					&:hover {
						background-color: rgba(black, 1);
					}
				}
			}
			&:hover .overlay {
				bottom: 0;
				height: 100%;
			}
			img {
				width: 100%;
			}
		}

		a {
			text-decoration: none;
			color: unset;
		}
	}
</style>
