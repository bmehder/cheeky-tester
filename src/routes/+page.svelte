<script>
	import Job from '$lib/Job.svelte'

	export let data
</script>

{#each data.jobsByRegions as region}
	<div class="flow">
		<h3>{region.state}</h3>
		<div class="columns">
			{#each region.entries as job}
				<Job {job} />
			{/each}
		</div>
	</div>
{/each}
