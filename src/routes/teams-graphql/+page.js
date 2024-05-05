import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch }) {
	const query = {
		query: `{
			teamsCats {
				nodes {
					name
					teams {
						nodes {
							title
							content
							teamMeta {
								organization
								position
							}
							featuredImage {
								node {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}`,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	const sortByName = (a, z) => (a.name > z.name ? 1 : -1)

	const teams = (await response.json()).data.teamsCats.nodes.sort(sortByName)

	return {
		teams,
	}
}
