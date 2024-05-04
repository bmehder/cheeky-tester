<script>
	export let location

	console.log(location)
</script>

<div class="flow">
	<h3><a href="/locations-by-country-graphql/{location.slug}">{location.title}</a></h3>
	<p>{location.locationMeta.city}, {location.locationMeta.state}</p>
	<p>{location.zones.nodes[0].name}</p>
	<p>{@html location.excerpt}</p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
