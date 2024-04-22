export async function load({ fetch }) {
  const route = 'https://cheekycms.com/wp-json/wp/v2/posts?_embed'

  const posts = await fetch(route).then(x => x.json()).catch(console.error)

  return {
    posts
  }
  
}