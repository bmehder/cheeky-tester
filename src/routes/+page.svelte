<script>
	import Job from '$lib/Job.svelte'

	export let data
	console.log(data)
</script>

<section class="section">
	<h1>Jobs by Countries</h1>
	{#each data.jobsByRegions || [] as region}
		<div class="flow">
			<h2>{region.country}</h2>
			<div class="fixed-grid">
				{#each region.entries as job}
					<Job {job} />
				{/each}
			</div>
		</div>
	{/each}
</section>
