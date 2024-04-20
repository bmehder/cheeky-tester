import { error } from '@sveltejs/kit'

export const ssr = false

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/cheeky/v1/jobs'
	// const params = '?arrange=regions&arrangeby=states'
	const params = '?arrange=regions&arrangeby=countries'

	const response = await fetch(route + params)
	console.log(response)

	if (!response.ok) {
		error(404, {
			message: response.statusText,
		})
	}

	const jobsByRegions = await response.json()

	return {
		jobsByRegions,
	}
}
