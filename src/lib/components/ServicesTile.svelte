<script lang="ts">
	import Button from './Button.svelte';

	import Htag from './Htag.svelte';

	export let heading: string;
	export let text: string;
	export let buttonText: string;
	export let ctaLink: string;
	export let src: string;
	export let alt: string;
</script>

<div class="wrapper">
	<div>
		<div class="image">
			<img {src} {alt} />
		</div>
		<Htag size={3} style={4} message={heading} />
		<p>{text}</p>
	</div>
	<Button href={ctaLink}>{buttonText}</Button>
</div>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		display: flex;
		flex-direction: column;
		text-align: center;
		place-content: space-between;
		color: $text-primary;
		p {
			line-height: 1.5;
		}
		.image {
			overflow: hidden;

			img {
				width: 100%;
				transform: scale(1.2);
				transition: transform 1s;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
