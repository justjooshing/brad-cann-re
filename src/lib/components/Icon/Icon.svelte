<script lang="ts">
	import Icon from "svelte-awesome/components/Icon.svelte";

	import { getIcon } from "$lib/constants/index.svelte";
	import type { iconTypes } from "$lib/constants/index.svelte";
	import IconWrapper from "./IconWrapper.svelte";

	export let icon: iconTypes;
	export let fade = false;
	export let alt = false;
	export let scale = 1.1;

	const { data, href, target, rel, aria } = getIcon(icon);
	const pointer = href;
</script>

<IconWrapper {href} {rel} {target}>
	<div class="icon" class:fade class:alt class:pointer aria-describedby={aria}>
		<Icon {data} {scale} />
	</div>
</IconWrapper>

<style lang="scss">
	@import "../../global/index.scss";
	.icon {
		display: flex;
		color: $text-secondary;
	}

	.pointer {
		cursor: pointer;
	}
	.fade {
		@include fade(color);
		&:hover {
			color: $text-secondary-hover;
		}
	}

	.alt {
		color: $button-text;
		@include fade(color);
		&:hover {
			color: $button-hover-alt;
		}
	}
</style>
