<script>
	import SEO from '$lib/SEO.svelte';
	import Location from '$lib/Location.svelte'

  export let data
</script>

<SEO title="Locations - CheekyCMS" />

<section class="section">
  <h1>Locations</h1>
  <div class="auto-fill">
    {#each data.locations as location}
      <Location {location} />
    {/each}
  </div>
</section>