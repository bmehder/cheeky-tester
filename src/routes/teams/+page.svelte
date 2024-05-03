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
		<!-- <div class="fixed-grid"> -->
		<div class="auto-fill">
			{#each members as member}
				<Member {member} />
			{/each}
		</div>
	{/each}
</section>

<style>
	.auto-fill {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		gap: 3rem;
	}
</style>