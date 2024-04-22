export const prerender = true

export async function load({ fetch, parent }) {
	const { teams } = await parent()

	const team = await Promise.all(
		teams.map(({ id }) =>
			fetch(`https://cheekycms.com/wp-json/wp/v2/team?_embed&teams=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		teams,
		team,
	}
}
