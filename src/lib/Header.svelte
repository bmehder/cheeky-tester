<script>
	import menuItems from '$lib/menuItems'
</script>

<header>
	<nav>
		<ul>
			{#each menuItems as { name, url }}
				<li>
					<a href={url}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		padding-block-start: 1.5rem;
	}
</style>
