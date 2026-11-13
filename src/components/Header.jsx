import { Menu } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'
import { useScrollY } from '../hooks/useScrollY.js'
import MobileMenu from './MobileMenu.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuTriggerRef = useRef(null)
  const y = useScrollY()

  const scrolled = y > 24

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'border-b border-gold-soft/60 bg-cream/95 shadow-header backdrop-blur-md'
            : 'border-b border-gold-soft/40 bg-cream/85 backdrop-blur-md'
        }`}
      >
        <div className="site-container flex h-[76px] items-center justify-between gap-3 lg:h-[84px] lg:gap-4">
          {/* Institutional Brand Lockup */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-2 sm:gap-3"
            aria-label="Sri Seetharama Gurukulam Trust — Return to home"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 lg:h-14 lg:w-14">
              <img
                src="/logo-circle.png"
                alt=""
                width="56"
                height="56"
                className="h-full w-full rounded-full border border-gold/70 object-cover shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <div
                className="pointer-events-none absolute -inset-0.5 rounded-full border border-gold/40 transition-opacity duration-200 group-hover:border-gold"
                aria-hidden="true"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-[15px] font-bold leading-tight tracking-tight text-maroon transition-colors duration-200 sm:text-[19px] lg:text-[22px]">
                Sri Seetharama Gurukulam
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="text-[8.5px] font-sans font-bold uppercase tracking-[0.18em] text-saffron-deep transition-colors duration-200 sm:text-[10px] sm:tracking-[0.2em]">
                  Veda Patasala
                </span>
                <span className="inline-block rounded border border-gold-soft bg-gold-soft/40 px-1 py-0.2 text-[8px] font-bold uppercase tracking-wider text-maroon transition-colors duration-200 sm:px-1.5 sm:text-[9px]">
                  Trust
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (1280px+) */}
          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary site navigation"
          >
            {site.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative whitespace-nowrap rounded-full px-3 py-1.5 text-[14px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'border border-gold-soft bg-maroon/10 text-maroon font-semibold shadow-xs'
                      : 'text-ink hover:bg-gold-soft/30 hover:text-maroon'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-saffron"
                        aria-hidden="true"
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop & Tablet Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Desktop & Tablet Primary Action: Admission Enquiry */}
            <Link
              to="/admission"
              className="hidden min-h-[40px] items-center justify-center rounded-full bg-saffron px-4.5 py-2 text-[14px] font-bold text-maroon-dark shadow-xs whitespace-nowrap transition-all duration-200 hover:-translate-y-px hover:bg-[#f0a64a] active:translate-y-0 sm:inline-flex"
            >
              Admission Enquiry
            </Link>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation-drawer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-soft bg-ivory text-maroon shadow-xs transition-all duration-200 hover:border-gold hover:bg-gold-soft/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron xl:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile & Tablet Navigation Drawer */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        triggerRef={menuTriggerRef}
      />
    </>
  )
}
