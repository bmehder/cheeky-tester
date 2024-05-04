import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch }) {
	const query = {
		query: `{
			zones {
				nodes {
					name
					locations {
						nodes {
							title
							locationMeta {
								city
								state
							}
							excerpt
							content
							slug
							zones {
								nodes {
									name
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

	// Callbacks
	const isZoneHasLocations = node => node.locations.nodes.length > 0
	const sortByName = (a, z) => (a.name > z.name ? 1 : -1)

	const locationsByZones = (await response.json()).data.zones.nodes
		.filter(isZoneHasLocations)
		.sort(sortByName)

	return {
		locationsByZones,
	}
}
