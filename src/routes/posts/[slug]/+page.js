export async function load({ fetch, params }) {
  const route = `https://cheekycms.com/wp-json/wp/v2/posts?slug=${params.slug}`

  const post = await fetch(route).then(x => x.json()).catch(console.error)

  return {
    post
  }
}