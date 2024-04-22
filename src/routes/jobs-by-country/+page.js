export const prerender = true

export async function load({ fetch }) {
	const route = 'https://cheekycms.com/wp-json/cheeky/v1/jobs'
	const params = '?group=regions&groupby=countries'

	const jobsByRegions = await fetch(route + params).then(x => x.json())

	return {
		jobsByRegions,
	}
}
