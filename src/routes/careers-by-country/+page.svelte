<script>
	import Career from '$lib/Career.svelte'

	export let data
</script>

<section class="section">
	<h1>Careers By Country</h1>
	{#each data.careersByZones as careers, idx}
		<h2>{data.zones[idx].name}</h2>
		<div class="fixed-grid">
			{#each careers as career}
				<Career {career} />
			{:else}
				<p>No results</p>
			{/each}
		</div>
	{/each}
</section>
