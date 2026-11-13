import { writeFileSync } from 'node:fs'

const base = 'https://seetharamagurukulam.example.org' // TODO: replace with the real domain
const routes = ['/', '/about', '/gurukulam', '/admission', '/parayanam-pooja', '/donation-enquiry', '/events', '/gallery', '/contact', '/thank-you', '/privacy']
const today = new Date().toISOString().slice(0, 10)
const urls = routes.map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${r === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`)
console.log(`Sitemap written for ${routes.length} routes`)
