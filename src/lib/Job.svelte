<script>
	export let job
</script>

<div>
	<p>{job.job}</p>
	<p>{job.city}, {job.state_abbrev}</p>
	<p>{job.salary}</p>
	<p><a href={job.href}>Apply Now &raquo;</a></p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
