import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch }) {
	const query = {
		query: `{
			stuff(id: "home-page-title", idType: URI) {
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
			}
		}`,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	const homePageTitle = (await response.json()).data.stuff

	return {
		homePageTitle,
	}
}

// export async function load({ fetch }) {
// 	const route = 'https://cheekycms.com/wp-json/wp/v2/stuff?slug="home-page-title&_embed'

// 	const homePageTitle = await fetch(route)
// 		.then(x => x.json())
// 		.catch(console.error)

// 	return {
// 		homePageTitle,
// 	}
// }
