import { Head } from 'vite-react-ssg'
import { site } from '../data/site.js'

export default function SEO({ title, description, path = '/', jsonLd }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name
  const canonical = `${site.siteUrl}${path}`
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site.siteUrl}/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.siteUrl}/og-image.jpg`} />
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Head>
  )
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  description: site.tagline,
  email: site.email,
  telephone: site.phoneTel,
  url: site.siteUrl,
}
