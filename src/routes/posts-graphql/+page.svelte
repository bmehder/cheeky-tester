<script>
  import SEO from "$lib/SEO.svelte";
	import PostCard from '$lib/PostCard.svelte'
  
  export let data
</script>

<SEO title="Blog Posts (GraphQL) - CheekyCMS" description="These are the blog posts."/>

<section class="section">
  <h1>Posts</h1>
  <ul>
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </ul>
</section>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 3rem;
  }
</style>