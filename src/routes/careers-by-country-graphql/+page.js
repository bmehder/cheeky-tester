import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch }) {
	const query = {
		query: `{
			zones {
				nodes {
					name
					careers {
						nodes {
							title
							locationMeta {
								city
								state
							}
							careersMeta {
								href
								position
								salary
							}
						}
					}
				}
			}
		}`,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	// Callbacks
	const isZoneHasCareers = node => node.careers.nodes.length > 0
	const sortByName = (a, z) => (a.name > z.name ? 1 : -1)

	const careersByZones = (await response.json()).data.zones.nodes
		.filter(isZoneHasCareers)
		.sort(sortByName)

	return {
		careersByZones,
	}
}
