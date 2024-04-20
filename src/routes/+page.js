import { error } from '@sveltejs/kit'

export const ssr = false

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/bsm/v1/jobs'
	// const params = '?arrange=regions&arrangeby=states'
	const params = '?arrange=regions&arrangeby=countries'

	const response = await fetch(route + params)
	console.log(response)

	if (!response.ok) {
		error(404, {
			message: 'Response is not okay.',
		})
	}

	const jobsByRegions = await response.json()

	return {
		jobsByRegions,
	}
}
