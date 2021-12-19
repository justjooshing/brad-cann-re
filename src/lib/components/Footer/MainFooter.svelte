<script lang="ts">
	import { contact, links } from '$lib/contants';
	import { capitaliseFirstLetter } from '$lib/helpers';

	const contactDetails = Object.entries(contact);
</script>

<div class="main-footer">
	<!-- Contact -->
  <h3>Contact info</h3>
	{#each contactDetails as [key, value]}
		<p>{capitaliseFirstLetter(key)}: <a href={links[key]}>{value}</a></p>
	{/each}
	<div />
	<!-- Hours of Operation -->
	<!-- Site links -->
</div>

<style lang="scss">
	@import '../../global/index.scss';
	.main-footer {
    padding: 0 1em;
		background-color: $bg-tertiary;
    color: $text-secondary;
    a {
      color: $text-secondary;
      text-decoration: none;
      @include color-fade;

     &:hover {
        color: $text-secondary-hover;
      }
    }
	}
</style>
