export async function load({ fetch }) {
  const countryIds = [34, 35]
	
  const countries = await fetch('https://cheekycms.com/wp-json/wp/v2/categories')
		.then(x => x.json())
		.catch(console.error)

	const locationsByCountry = await Promise.all(
		countries.map(({ id }) =>
			fetch(`https://cheekycms.com/wp-json/wp/v2/locations?_embed&categories=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		countries: countries.filter(x => countryIds.includes(x.id)),
		locationsByCountry: locationsByCountry.filter(x => x.length),
	}
}
