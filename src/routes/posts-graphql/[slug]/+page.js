import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch, params }) {
	const query = {
		query: `
      {
        post(id: "${params.slug}", idType: SLUG) {
          id
          databaseId
          title
          content
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          sEO {
            seoDescription
            seoTitle
          }
        }
      }
    `,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	const post = (await response.json()).data.post

	return {
		post,
	}
}
