<script>
	import SEO from '$lib/SEO.svelte'
	import Location2 from '$lib/Location2.svelte'

	export let data

	console.log(data.locationsByZones);
</script>

<SEO title="Locations by Country (GraphQL) - CheekyCMS" />

<section class="section">
	<h1>Locations By Country (GraphQL)</h1>
	{#each data.locationsByZones as {locations, name}}
		<h2>{name}</h2>
		<div class="fixed-grid">
			{#each locations.nodes as location}
				<Location2 {location} />
			{/each}
		</div>
	{/each}
</section>
