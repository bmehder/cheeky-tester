<script>
	import '$lib/app.css'
	import '@picocss/pico'
	import Header from '$lib/Header.svelte'
</script>

<div class="container">
	<Header />

	<main>
		<slot />
	</main>
</div>
