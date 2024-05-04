export const graphqlRoute = 'https://cheekycms.com/graphql'

export const setFetchOptions = x => {
  return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(x),
	}
}
