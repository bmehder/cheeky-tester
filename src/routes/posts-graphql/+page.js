import { graphqlRoute, setFetchOptions } from '$lib/utils.js'

export async function load({ fetch }) {
	const query = {
		query: `{
      posts {
        nodes {
          title
          excerpt
					slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }`,
	}

	const options = setFetchOptions(query)

	const response = await fetch(graphqlRoute, options)

	const posts = (await response.json()).data.posts.nodes

	return {
		posts,
	}
}
