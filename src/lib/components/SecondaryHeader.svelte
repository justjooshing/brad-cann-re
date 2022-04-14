<script lang="ts">
	import Htag from "./Htag.svelte";
	import bradImage from "$assets/brad_profile.webp";

	export let headerTitle: string;
	export let headerBgImage: string = bradImage;
</script>

<div class="background-image" style="background-image: url({headerBgImage})">
	<Htag alt style={1} size={2} message={headerTitle} />
</div>

<style>
	.background-image {
		height: 200px;
		background: no-repeat;
		box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
		background-size: cover;
		padding: 1em;
	}
</style>
