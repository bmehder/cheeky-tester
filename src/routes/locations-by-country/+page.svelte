<script>
	import SEO from '$lib/SEO.svelte';
	import Location from '$lib/Location.svelte'

	export let data
</script>

<SEO title="Locations by Country - CheekyCMS" />

<section class="section">
	<h1>Locations By Country</h1>
	{#each data.locationsByZones as locations, idx}
		{#if !!locations.length}
			<h2>{data.zones[idx].name}</h2>
			<div class="fixed-grid">
				{#each locations as location}
					<Location {location} />
				{/each}
			</div>
		{/if}
	{/each}
</section>
