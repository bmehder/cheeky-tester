<script>
	import SEO from '$lib/SEO.svelte'
	import Member from '$lib/Member.svelte'

  export let data
</script>

<SEO title="Team - CheekyCMS" />

<section class="section">
	<h1>Team Members By Team</h1>
	{#each data.team as members, idx}
		<h2>{data.teams[idx].name}</h2>
		<div class="fixed-grid">
			{#each members as member}
				<Member {member} />
			{/each}
		</div>
	{/each}
</section>