<script>
	export let job

	const { title, state_abbrev, city, salary, href } = job
</script>

<div>
	<h3>{title}</h3>
	<p>
		{#if state_abbrev}
			{city + ', ' + state_abbrev}
		{:else}
			{city}
		{/if}
	</p>
	<p>{salary}</p>
	<p><a {href}>Apply Now &raquo;</a></p>
</div>

<style>
	div {
		padding: 1.5rem;
		border: 1px solid;
	}
</style>
