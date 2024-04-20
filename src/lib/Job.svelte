<script>
	export let job
</script>

<div>
	<h3>{job.title}</h3>
	<p>
		{#if job.state_abbrev}
			{job.city + ', ' + job.state_abbrev}
		{:else}
			{job.city}
		{/if}
	</p>
	<p>{job.salary}</p>
	<p><a href={job.href}>Apply Now &raquo;</a></p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
