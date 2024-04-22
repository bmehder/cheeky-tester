<script>
  import SEO from "$lib/SEO.svelte";
  
  export let data
</script>

<SEO title="Blog Posts - CheekyCMS" description="These are the blog posts."/>

<section class="section">
  <h1>Posts</h1>
  <ul>
    {#each data.posts as post}
    <li>
      <a href=/posts/{post.slug}>{@html post.title.rendered}</a>
    </li>
    {/each}
  </ul>
</section>