<script>
	import Location from '$lib/Location.svelte'

  export let data
</script>

<section class="section">
  <h1>Locations</h1>
  <div class="fixed-grid">
    {#each data.locations as location}
      <Location {location} />
    {/each}
  </div>
</section>