<script>
	import { page } from '$app/stores'
</script>

<section class="section">
	<h1>Don't panic, but...</h1>
	<h2>{$page.status}: {$page.error.message}</h2>
</section>
