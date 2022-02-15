<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import type { Placement } from '@popperjs/core';

	import { getIcon, iconTypes } from '$lib/constants/index.svelte';
	import { capitaliseFirstLetter } from '$lib/helpers';

	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
		placement: 'top' as Placement,
		modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
	};

	export let icon: iconTypes;
	export let tooltip = false;
	export let fade = false;
	export let alt = false;
	export let scale = 1.1;

	const { data, href, target, rel, aria } = getIcon(icon);
	let showTooltip = false;
	const pointer = href;

	const updateTooltipState = () => {
		if (tooltip) {
			showTooltip = !showTooltip;
		}
	};
</script>

<a
	{href}
	{rel}
	{target}
	class="icon"
	class:tooltip
	class:fade
	class:alt
	class:pointer
	aria-describedby={aria}
	use:popperRef
	on:mouseenter={updateTooltipState}
	on:mouseleave={updateTooltipState}
>
	<Icon {data} {scale} />
	{#if showTooltip}
		<div id="tooltip" use:popperContent={popperOptions}>
			{capitaliseFirstLetter(aria)}
			<div id="arrow" data-popper-arrow />
		</div>
	{/if}
</a>

<style lang="scss">
	@import '../global/index.scss';

	.icon {
		display: flex;
		color: $text-secondary;
	}

	.pointer {
		cursor: pointer;
	}

	.alt {
		color: $button-text;
	}

	.fade {
		@include fade(color);
		&:hover {
			color: $text-secondary-hover;
		}
	}

	.tooltip {
		&:hover {
			transition: none;
			color: $text-secondary;
		}
	}
</style>
