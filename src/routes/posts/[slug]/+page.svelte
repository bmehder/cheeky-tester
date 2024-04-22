<script>
	import SEO from '$lib/SEO.svelte'

  export let data
</script>

<SEO
	title={data.post[0].acf.seo_title}
	description={data.post[0].acf.seo_description}
/>

<section class="section">
  <h1>{@html data.post[0].title.rendered}</h1>
  <div>{@html data.post[0].content.rendered}</div>
</section>
