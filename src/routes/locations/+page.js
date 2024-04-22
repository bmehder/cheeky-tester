export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/wp/v2/locations?_embed'

	const locations = await fetch(route)
		.then(x => x.json())
		.catch(console.error)

	return {
		locations,
	}
}
