export async function load({ fetch }) {
  const zones = await fetch(`https://cheekycms.com/wp-json/wp/v2/zones`)
		.then(x => x.json())
		.catch(console.error)

	const locationsByZone = await Promise.all(
		zones.map(({ id }) =>
			fetch(`https://cheekycms.com/wp-json/wp/v2/locations?_embed&zones=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		zones,
		locationsByZone,
	}
}
