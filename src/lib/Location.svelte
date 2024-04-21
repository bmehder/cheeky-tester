<script>
	export let location
</script>

<div class="flow">
	<h3>{location.title.rendered}</h3>
	<p>{location.acf.city}, {location.acf.state}</p>
	<p>{location._embedded['wp:term'][2][0].name}</p>
	<p>{@html location.excerpt.rendered}</p>
	<p>{@html location.content.rendered}</p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>