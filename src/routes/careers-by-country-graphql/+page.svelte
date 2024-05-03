<script>
	import SEO from '$lib/SEO.svelte'
	import Career2 from '$lib/Career2.svelte'

	export let data
</script>

<SEO title="Careers by Country (GraphQL) - CheekyCMS" />

<section class="section">
	<h1>Careers By Country (GraphQL)</h1>
	{#each data.careersByZones as {careers, name}}
		<h2>{name}</h2>
		<div class="fixed-grid">
			{#each careers.nodes as career}
				<Career2 {career} />
			{/each}
		</div>
	{/each}
</section>
