<script>
	export let member
</script>

<div class="card">
	<img
		class="square"
		src={member._embedded['wp:featuredmedia'][0].source_url}
		alt={member.title.rendered}
	/>
	<div class="flow content">
    <h3>{member.title.rendered}</h3>
    <p>{member.acf.organization}</p>
    <p>{member.acf.position}</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid;
  }
  
	.content {
    padding: 1.5rem;
	}
</style>
