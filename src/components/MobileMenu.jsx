import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronRight, MapPin, Phone, Sparkles, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function MobileMenu({ open, onClose, triggerRef }) {
  const reduce = useReducedMotion()
  const drawerRef = useRef(null)
  const previouslyFocusedElement = useRef(null)

  // Manage focus trapping, focus restoration, escape key, and scroll locking
  useEffect(() => {
    if (!open) return undefined

    // 1. Remember the trigger element for focus restoration
    previouslyFocusedElement.current = triggerRef?.current || document.activeElement

    // 2. Lock background scrolling cleanly
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    // 3. Focus first focusable element inside the drawer
    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

    const timeoutId = setTimeout(() => {
      if (drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll(focusableSelector)
        if (focusables.length > 0) {
          focusables[0].focus()
        }
      }
    }, 50)

    // 4. Keyboard handlers: Escape key & Tab trapping
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = Array.from(drawerRef.current.querySelectorAll(focusableSelector))
        if (focusables.length === 0) return

        const firstElement = focusables[0]
        const lastElement = focusables[focusables.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight

      // Restore focus on close
      if (previouslyFocusedElement.current && typeof previouslyFocusedElement.current.focus === 'function') {
        previouslyFocusedElement.current.focus()
      }
    }
  }, [open, onClose, triggerRef])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Dimmed backdrop scrim with subtle blur */}
          <motion.div
            className="fixed inset-0 bg-maroon-dark/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-y-0 right-0 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-gold/40 bg-gradient-to-b from-[#4A1212] via-[#5A1515] to-[#3E0E0E] text-cream shadow-2xl"
            initial={reduce ? { opacity: 0 } : { x: '100%' }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top Bar with Institutional Identity & Close Button */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gold/25 bg-maroon-dark/95 px-5 py-4 backdrop-blur-md sm:px-6">
              <Link to="/" onClick={onClose} className="flex items-center gap-3" aria-label="Seetharama Gurukulam Trust — home">
                <div className="relative shrink-0">
                  <img
                    src="/logo-circle.png"
                    alt=""
                    width="44"
                    height="44"
                    className="h-11 w-11 rounded-full border border-gold/80 object-cover shadow-md"
                  />
                  <div className="absolute -inset-0.5 rounded-full border border-gold/40" aria-hidden="true" />
                </div>
                <div>
                  <span className="block font-serif text-[17px] font-semibold leading-tight text-cream sm:text-lg">
                    Sri Seetharama Gurukulam
                  </span>
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-gold-soft">
                    Veda Patasala · Trust
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors hover:border-gold hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {/* Sacred Motto Strip */}
            <div className="border-b border-gold/15 bg-black/20 px-5 py-2.5 sm:px-6">
              <p className="flex items-center gap-2 text-xs font-medium text-gold-soft/90">
                <Sparkles size={13} className="shrink-0 text-saffron" aria-hidden="true" />
                <span>Preserving the timeless wisdom of the Vedas</span>
              </p>
            </div>

            {/* Navigation Destinations */}
            <nav className="flex-1 px-4 py-5 sm:px-6" aria-label="Mobile primary navigation">
              <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gold-soft/70">
                Menu
              </p>
              <ul className="space-y-1">
                {site.nav.map((item, index) => {
                  const num = String(index + 1).padStart(2, '0')
                  return (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `group flex min-h-[48px] items-center justify-between rounded-xl px-3.5 py-2.5 transition-all ${
                            isActive
                              ? 'border border-gold/60 bg-white/15 text-gold-soft shadow-sm'
                              : 'text-cream/90 hover:bg-white/10 hover:text-cream'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-baseline gap-3">
                              <span
                                className={`font-mono text-xs font-semibold ${
                                  isActive ? 'text-saffron' : 'text-gold-soft/60 group-hover:text-gold-soft'
                                }`}
                              >
                                {num}
                              </span>
                              <span className="font-serif text-[22px] font-medium leading-none tracking-tight sm:text-2xl">
                                {item.label}
                              </span>
                            </div>
                            <ChevronRight
                              size={18}
                              className={`transition-transform group-hover:translate-x-0.5 ${
                                isActive ? 'text-saffron' : 'text-cream/40 group-hover:text-gold-soft'
                              }`}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Call To Action Buttons */}
            <div className="border-t border-gold/25 bg-black/25 px-5 py-5 sm:px-6">
              <Link
                to="/admission"
                onClick={onClose}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-saffron px-5 py-3 text-center text-[15px] font-bold text-maroon-dark shadow-md transition-all hover:bg-[#f0a64a] active:translate-y-px"
              >
                <span>Admission Enquiry</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              {/* Quick Contact & WhatsApp Links */}
              <div className="mt-5 border-t border-gold/20 pt-4 text-xs text-cream/80">
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="flex items-center gap-2.5 hover:text-gold-soft"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-saffron">
                      <Phone size={13} aria-hidden="true" />
                    </span>
                    <span className="font-medium">{site.phoneDisplay}</span>
                  </a>

                  <a
                    href={whatsappLink('Namaste, I would like to enquire about Seetharama Gurukulam.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-gold-soft"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-whatsapp/20 text-[#25D366]">
                      <span className="text-[12px] font-bold">WA</span>
                    </span>
                    <span className="font-medium">Message on WhatsApp</span>
                  </a>

                  <div className="flex items-start gap-2.5 pt-1 text-cream/70">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-gold-soft" aria-hidden="true" />
                    <span>No. 486, T.T.K. Road, Alwarpet, Chennai - 600018</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
