<script>
	export let data

	console.log(data)
</script>

<section
	class="section"
	style="background-image: url('{data.homePageTitle[0]._embedded['wp:featuredmedia'][0]
		.source_url}')"
>
	<div>{@html data.homePageTitle[0].content.rendered}</div>
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
