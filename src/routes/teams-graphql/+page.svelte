<script>
	import SEO from '$lib/SEO.svelte'
	import Member2 from '$lib/Member2.svelte'

  export let data
</script>

<SEO title="Team - CheekyCMS" />

<section class="section">
	<h1>Team Members By Team (GraphQL)</h1>
	{#each data.teams as {name, teams}}
		<h2>{name}</h2>
		<div class="auto-fill">
			{#each teams.nodes as member}
				<Member2 {member} />
			{/each}
		</div>
	{/each}
</section>