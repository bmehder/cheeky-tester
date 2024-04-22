export async function load({ fetch, parent }) {
	const { zones } = await parent()

	const locationsByZones = await Promise.all(
		zones.map(({ id }) =>
			fetch(`https://cheekycms.com/wp-json/wp/v2/locations?_embed&zones=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		locationsByZones,
	}
}
