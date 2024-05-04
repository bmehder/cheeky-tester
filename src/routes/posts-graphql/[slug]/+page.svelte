<script>
	import SEO from '$lib/SEO.svelte'

	export let data
</script>

<SEO
	title={data.post.sEO.seoTitle}
	description={data.post.sEO.seoDescription}
/>

<section class="section">
	<div class="inner">
		<img
			class="square"
			src={data.post.featuredImage.node.sourceUrl}
			alt={data.post.title}
		/>
		<div>
			<h1>{@html data.post.title}</h1>
			<div>{@html data.post.content}</div>
		</div>
	</div>
</section>

<style>
	.inner {
		display: grid;
		gap: 3rem;

		@media (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
