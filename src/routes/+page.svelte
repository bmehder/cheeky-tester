<script>
	import SEO from '$lib/SEO.svelte';

	export let data

	console.log(data)
</script>

<SEO title="Home - CheekyCMS" />

<section
	class="section"
	style="background-image: url('{data.homePageTitle.featuredImage.node.sourceUrl}')"
>
	<div>{@html data.homePageTitle.content}</div>
</section>

<style>
	section {
		min-height: 80dvh;
		background-size: cover;
	}

	section div {
		max-width: 100%;
		padding-block: 3rem;
		padding-inline: 4rem;
	}

	section :global(h1) {
		font-size: clamp(1rem, 4rem, 5vw);
		text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
	}
</style>
