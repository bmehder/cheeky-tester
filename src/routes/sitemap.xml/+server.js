import menuItems from '$lib/menuItems'

const getPosts = async () => {
  const endpoint = 'https://cheekycms.com/wp-json/wp/v2/posts?per_page=100'

  const response = await fetch(endpoint)
  const posts = await response.json()

  return posts 
}

const otherPages = [
  // { name: 'Frank Curvin, MD', url: '/about-restore-first-health/frank-curvin-md/' },
]

const createSitemap = ({ site, pages, posts }) => {
  const createSiteEntry = site => `
    <url>
      <loc>${site}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `

  const createPageEntry = page => `
    <url>
      <loc>${site}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `

  const createPostEntry = post => `
    <url>
      <loc>${site}/${post.slug}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${post.modified.slice(0, 10)}</lastmod>
      <priority>0.3</priority>
    </url>
  `

  const getPageEntries = pages => pages.map(createPageEntry).join('')
  const getPostEntries = posts => posts.map(createPostEntry).join('')

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${createSiteEntry(site)}
      ${getPageEntries(pages)}
      ${getPostEntries(posts)}
    </urlset>
  `
}

//list of posts containing a slug [{title: "Test title", slug: "test-title", updatedAt: "2023-01-01"}]

//list of pages as a string ex. ["about", "blog", "contact"]

const options = {
  site: 'https://cheekycms.com',
  pages: [
    ...menuItems.map(item => item.url.substring(1)).filter(Boolean),
    ...otherPages.map(item => item.url.substring(1)).filter(Boolean),
  ],
  posts: await getPosts(),
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const body = createSitemap(options)
  const response = new Response(body)

  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
  response.headers.set('Content-Type', 'application/xml')

  return response
}