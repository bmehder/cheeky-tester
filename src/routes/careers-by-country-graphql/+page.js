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

	const fetchOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(query),
	}

	const response = await fetch('https://cheekycms.com/graphql', fetchOptions)

	const careersByZones = (await response.json()).data.zones.nodes
		.filter(x => x.careers.nodes.length)
		.sort((a, z) => (a.name > z.name ? 1 : -1))

	return {
		careersByZones,
	}
}
