export const ssr = false

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/bsm/v1/jobs'
	const params = '?arrange=regions&arrangeby=countries'

	const response = await fetch(route + params)
	const jobsByRegions = await response.json()
	
	return {
		jobsByRegions,
	}
}
