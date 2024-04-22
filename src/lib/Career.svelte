<script>
	export let career
</script>

<div>
	<h3>{career.acf.position}</h3>
	<p>{career.acf.city}, {career.acf.state}</p>
	<p>{career.acf.salary}</p>
	<p><a href={career.acf.href} target="_blank">Apply Now &raquo;</a></p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
