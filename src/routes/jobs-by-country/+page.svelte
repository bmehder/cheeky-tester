<script>
	import SEO from '$lib/SEO.svelte';
	import Job from '$lib/Job.svelte'

	export let data
</script>

<SEO title="Jobs by Country - CheekyCMS" />

<section class="section">
	<h1>Jobs by Country</h1>
	{#each data.jobsByRegions || [] as region}
		<div class="flow">
			<h2>{region.name}</h2>
			<div class="auto-fill">
				{#each region.entries as job}
					<Job {job} />
				{/each}
			</div>
		</div>
	{/each}
</section>
