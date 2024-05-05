<script>
	export let member

	console.log(member);
</script>

<div class="card">
	<img
		class="square"
		src={member.featuredImage.node.sourceUrl}
		alt={member.title}
	/>
	<div class="flow content">
    <h3>{member.title}</h3>
    <p>{member.teamMeta.organization}</p>
    <p>{member.teamMeta.position}</p>
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
