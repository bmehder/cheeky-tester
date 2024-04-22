export const prerender = true

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/wp/v2/stuff?slug="home-page-title&_embed'

	const homePageTitle = await fetch(route)
		.then(x => x.json())
		.catch(console.error)

	return {
		homePageTitle,
	}
}
