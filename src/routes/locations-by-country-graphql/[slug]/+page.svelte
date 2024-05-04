<script>
	export let data
</script>

<section class="section">
	<h1>{@html data.location.title}</h1>
	<h2>
		{data.location.locationMeta.city}, {data.location.locationMeta.state} ({data.location
			.zones.nodes[0].name})
	</h2>
	<div>{@html data.location.content}</div>
</section>
