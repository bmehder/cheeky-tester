<script>
	import Job from '$lib/Job.svelte'

	export let data
</script>

<section class="section">
	{#each data.jobsByRegions as region}
		<div class="flow">
			<h3>{region.state}</h3>
			<div class="fixed-grid">
				{#each region.entries as job}
					<Job {job} />
				{/each}
			</div>
		</div>
	{/each}
</section>
