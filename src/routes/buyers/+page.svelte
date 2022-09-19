<script>
	import Button from "$lib/components/Button.svelte";
	import ContentWrap from "$lib/components/ContentWrap.svelte";
	import Htag from "$lib/components/Htag.svelte";
	import UnderlineBar from "$lib/components/UnderlineBar.svelte";
</script>

<ContentWrap>
	<Htag size={1} style={1} message="Buyers" />
	<Button>Click here!</Button>

	<section>
		<Htag size={2} style={3} message="Looking to buy?" />
		<UnderlineBar />
		<p>
			We know that buying a property is a big decision no matter if it's your first home, next home
			or part of an investment portfolio. Our dedicated sales team is committed to helping you find
			the right one and facilitating the best possible purchase experience .
		</p>
		<p>Get help finding your next property</p>
		<p>
			Our team has the expertise and connections to help you find the right property for you.
			Whether you're looking to invest or occupy, we will help you take that next step.
		</p>
		<Button>Click here!</Button>
	</section>
</ContentWrap>

<style>
	/* your styles go here */
</style>
