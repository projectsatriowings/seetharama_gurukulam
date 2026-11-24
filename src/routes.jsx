import { lazy, Suspense } from 'react'
import { useRouteError } from 'react-router-dom'
import Layout from './components/Layout.jsx'

function RouteErrorBoundary() {
  const error = useRouteError()
  console.error('Route error caught by ErrorBoundary:', error)

  return (
    <div className="site-container py-24 text-center">
      <div className="mx-auto max-w-md rounded-2xl border border-gold-soft bg-ivory p-8 shadow-card">
        <span className="text-xs font-bold uppercase tracking-widest text-saffron-deep">
          Page Refresh Needed
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold text-maroon">
          Updates Available
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          A recent update or connection refresh occurred. Please refresh to load the latest page resources.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-maroon px-6 py-2.5 text-sm font-semibold text-cream shadow-xs transition hover:bg-saffron-deep"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}

const lazyPage = (importer) => {
  const Page = lazy(async () => {
    try {
      return await importer()
    } catch (error) {
      const isDynamicImportError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('Importing a module script failed')

      if (typeof window !== 'undefined' && isDynamicImportError) {
        const retryKey = 'vite_page_retry_' + window.location.pathname
        const alreadyRetried = sessionStorage.getItem(retryKey)
        if (!alreadyRetried) {
          sessionStorage.setItem(retryKey, 'true')
          window.location.reload()
          return new Promise(() => {})
        }
        sessionStorage.removeItem(retryKey)
      }
      throw error
    }
  })

  return function LazyPage() {
    return (
      <Suspense fallback={<div className="site-container py-20 text-center text-ink-soft">Loading…</div>}>
        <Page />
      </Suspense>
    )
  }
}

const Home = lazyPage(() => import('./pages/Home.jsx'))
const About = lazyPage(() => import('./pages/About.jsx'))
const Gurukulam = lazyPage(() => import('./pages/Gurukulam.jsx'))
const Admission = lazyPage(() => import('./pages/Admission.jsx'))
const ParayanamPooja = lazyPage(() => import('./pages/ParayanamPooja.jsx'))
const Gallery = lazyPage(() => import('./pages/Gallery.jsx'))
const Contact = lazyPage(() => import('./pages/Contact.jsx'))
const ThankYou = lazyPage(() => import('./pages/ThankYou.jsx'))
const Privacy = lazyPage(() => import('./pages/Privacy.jsx'))
const NotFound = lazyPage(() => import('./pages/NotFound.jsx'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gurukulam', element: <Gurukulam /> },
      { path: 'admission', element: <Admission /> },
      { path: 'parayanam-pooja', element: <ParayanamPooja /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export const sitemapRoutes = ['/', '/about', '/gurukulam', '/admission', '/parayanam-pooja', '/gallery', '/contact', '/thank-you', '/privacy']
