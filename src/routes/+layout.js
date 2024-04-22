export const trailingSlash = 'always'

export async function load({ fetch }) {
	const zones = await fetch(`https://cheekycms.com/wp-json/wp/v2/zones`)
		.then(x => x.json())
		.catch(console.error)

	const teams = await fetch(`https://cheekycms.com/wp-json/wp/v2/teams`)
		.then(x => x.json())
		.catch(console.error)

	return {
		zones,
		teams,
	}
}
