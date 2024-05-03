<script>
	export let career
</script>

<div>
	<h3>{career.careersMeta.position}</h3>
	<p>{career.locationMeta.city}, {career.locationMeta.state}</p>
	<p>{career.careersMeta.salary}</p>
	<p><a href={career.careersMeta.href} target="_blank">Apply Now &raquo;</a></p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
