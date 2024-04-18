<script>
	import '$lib/app.css'
</script>

<main class="container">
	<slot />
</main>

<style>
	main {
		display: grid;
		gap: 3rem;
		padding-block: 3rem;
	}
</style>
