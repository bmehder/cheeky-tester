import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch, params }) {
	const query = {
		query: `
      {
        location(id: "${params.slug}", idType: SLUG) {
          content
          title
          locationMeta {
            city
            state
          }
          zones {
            nodes {
              name
            }
          }
        }
      }
    `,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	const location = (await response.json()).data.location

	return {
		location,
	}
}
