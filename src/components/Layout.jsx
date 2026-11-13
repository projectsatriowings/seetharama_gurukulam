import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const [progress, setProgress] = useState(0)
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])
  return (
    <div className="flex min-h-screen flex-col">
      <div aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] bg-saffron transition-[width] duration-150" style={{ width: `${progress}%` }} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:text-cream">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={pathname === "/" ? "flex-1" : "flex-1 pt-[76px] lg:pt-[84px]"}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
