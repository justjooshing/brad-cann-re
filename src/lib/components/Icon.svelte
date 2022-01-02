<script lang="ts">
	import { getIcon, iconTypes } from '$lib/contants/index.svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import { capitaliseFirstLetter } from '$lib/helpers';
	import type { Placement } from '@popperjs/core';

	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
		placement: 'top' as Placement,
		modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
	};

	export let icon: iconTypes;
	export let alt = false;
	export let fade = false;

	const { data, href, target, rel, aria } = getIcon(icon);
	let showTooltip = false;

	const updateTooltipState = () => {
		if (alt) {
			showTooltip = !showTooltip;
		}
	};
</script>

<a
	{href}
	{rel}
	{target}
	class="icon"
	class:alt
	class:fade
	aria-describedby={aria}
	use:popperRef
	on:mouseenter={updateTooltipState}
	on:mouseleave={updateTooltipState}
>
	<Icon {data} scale={1.1} />
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
		cursor: pointer;
	}

	.fade {
		@include fade(color);
		&:hover {
			color: $text-secondary-hover;
		}
	}

	.alt {
		&:hover {
			transition: none;
			color: $text-secondary;
		}
	}
</style>
