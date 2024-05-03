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

	const careersByZones = await fetch('https://cheekycms.com/graphql', fetchOptions)
		.then(x => x.json())

	return {
		careersByZones: careersByZones.data.zones.nodes.filter(x => x.careers.nodes.length),
	}
}
