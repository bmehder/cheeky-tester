<script>
	import Location from '$lib/Location.svelte'

	export let data

	console.log(data)
</script>

<section class="section">
	<h1>Locations By Country</h1>
	{#each data.locationsByZone as locations, idx}
		<h2>{data.zones[idx].name}</h2>
		<div class="fixed-grid">
			{#each locations as location}
				<Location {location} />
			{/each}
		</div>
	{/each}
</section>
