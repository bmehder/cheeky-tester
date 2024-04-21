import { error } from '@sveltejs/kit'

export const ssr = false

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/wp/v2/locations?_embed'

	const response = await fetch(route)

	if (!response.ok) {
		error(404, {
			message: response.statusText,
		})
	}

	const locations = await response.json()

	return {
		locations,
	}
}
