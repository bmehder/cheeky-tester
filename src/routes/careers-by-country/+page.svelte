<script>
	import SEO from '$lib/SEO.svelte';
	import Career from '$lib/Career.svelte'

	export let data
</script>

<SEO title="Careers by Country - CheekyCMS" />

<section class="section">
	<h1>Careers By Country</h1>
	{#each data.careersByZones as careers, idx}
		{#if !!careers.length}
			<h2>{data.zones[idx].name}</h2>
			<div class="auto-fill">
				{#each careers as career}
					<Career {career} />
				{/each}
			</div>
		{/if}
	{/each}
</section>
