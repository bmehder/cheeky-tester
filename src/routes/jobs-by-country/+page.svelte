<script>
	import Job from '$lib/Job.svelte'

	export let data
</script>

<section class="section">
	<h1>Jobs by Country</h1>
	{#each data.jobsByRegions || [] as region}
		<div class="flow">
			<h2>{region.name}</h2>
			<div class="fixed-grid">
				{#each region.entries as job}
					<Job {job} />
				{/each}
			</div>
		</div>
	{/each}
</section>
