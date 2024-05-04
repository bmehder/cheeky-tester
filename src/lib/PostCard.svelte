<script>
	export let post
</script>

<div class="post-card">
	<a href="/posts-graphql/{post.slug}"
		><img class="square" src={post.featuredImage.node.sourceUrl} alt={post.title} /></a
	>
	<div class="inner">
		<h3><a href="/posts-graphql/{post.slug}">{@html post.title}</a></h3>
		<div>{@html post.excerpt}</div>
	</div>
</div>

<style>
	.post-card {
		border: 1px solid;

		& .inner {
			padding: 1.5rem;
		}
	}
</style>
