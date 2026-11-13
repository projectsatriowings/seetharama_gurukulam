import { lazy, Suspense } from 'react'
import Layout from './components/Layout.jsx'

const lazyPage = (importer) => {
  const Page = lazy(importer)
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
const DonationEnquiry = lazyPage(() => import('./pages/DonationEnquiry.jsx'))
const Events = lazyPage(() => import('./pages/Events.jsx'))
const Gallery = lazyPage(() => import('./pages/Gallery.jsx'))
const Contact = lazyPage(() => import('./pages/Contact.jsx'))
const ThankYou = lazyPage(() => import('./pages/ThankYou.jsx'))
const Privacy = lazyPage(() => import('./pages/Privacy.jsx'))
const NotFound = lazyPage(() => import('./pages/NotFound.jsx'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gurukulam', element: <Gurukulam /> },
      { path: 'admission', element: <Admission /> },
      { path: 'parayanam-pooja', element: <ParayanamPooja /> },
      { path: 'donation-enquiry', element: <DonationEnquiry /> },
      { path: 'events', element: <Events /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export const sitemapRoutes = ['/', '/about', '/gurukulam', '/admission', '/parayanam-pooja', '/donation-enquiry', '/events', '/gallery', '/contact', '/thank-you', '/privacy']
