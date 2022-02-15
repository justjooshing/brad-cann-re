<script lang="ts">
	import ContentWrap from './ContentWrap.svelte';
	import Htag from './Htag.svelte';
	import Icon from './Icon.svelte';
	import UnderlineBar from './UnderlineBar.svelte';
	import type { iconTypes } from '$lib/constants/index.svelte';

	interface teamAttributeTypes {
		icon: iconTypes;
		text: string;
	}
	const teamAttributes: teamAttributeTypes[] = [
		{
			icon: 'users',
			text: 'Dedicated team'
		},
		{
			icon: 'results',
			text: 'Focus on results'
		},
		{
			icon: 'star',
			text: 'Committed to quality'
		},
		{
			icon: 'trophy',
			text: 'Proven track record'
		},
		{
			icon: 'tie',
			text: 'Professional'
		},
		{
			icon: 'dollar',
			text: 'Cost effective'
		}
	];
</script>

<ContentWrap>
	<div class="wrapper">
		<div>
			<Htag size={1} style={2} message="Why choose Brad Cann and Partners?" />
			<UnderlineBar />
			<p>
				Brad Cann started as a sales person in 1993 and quickly rose to being a top sales person for
				a leading franchise group. During this time Brad was exposed to the Jenman Sales System and
				was impressed by its emphasis of ethics and client care.
			</p>
			<p>
				The dream to open an office with these principles at its core became a reality in 2001 when
				Brad opened his office and quickly became the number one office both in the franchise group
				he belonged to and achieved excellent results the Chelsea area and surrounds, priding itself
				in ethics training & client care.
			</p>
		</div>

		<div class="attributes">
			{#each teamAttributes as { icon, text }}
				<div class="attribute">
					<Icon alt {icon} fade scale={2.5} />
					{text}
				</div>
			{/each}
		</div>
	</div>
</ContentWrap>

<style lang="scss">
	@import '../global/index.scss';

	.wrapper {
		display: grid;
		padding: 20px 0;
		grid-template-rows: repeat(2, 1fr);
		text-align: center;
		@include medium {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		.attributes {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, 1fr);

			.attribute {
				display: flex;
				flex-direction: column;
				place-content: space-evenly;
				place-items: center;
			}
		}
	}
</style>
