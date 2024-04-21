<script>
	export let location

	const title = location.title.rendered
	const city = location.acf.city
	const state = location.acf.state
	const country = location._embedded['wp:term'][2][0].name
	const excerpt = location.excerpt.rendered
	const content = location.content.rendered
</script>

<div class="flow">
	<h3>{title}</h3>
	<p>{city}, {state}</p>
	<p>{country}</p>
	<p>{@html excerpt}</p>
	<p>{@html content}</p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>