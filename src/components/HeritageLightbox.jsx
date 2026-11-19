import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function HeritageLightbox({
  isOpen,
  photos = [],
  currentIndex = 0,
  onClose,
  onNavigate,
}) {
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchStartY, setTouchStartY] = useState(null)
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const overlayRef = useRef(null)
  const previousActiveElement = useRef(null)

  const currentPhoto = photos[currentIndex] || null

  const handlePrev = useCallback(() => {
    if (!photos.length) return
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    setIsImgLoaded(false)
    setImgError(false)
    onNavigate(prevIndex)
  }, [currentIndex, photos.length, onNavigate])

  const handleNext = useCallback(() => {
    if (!photos.length) return
    const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    setIsImgLoaded(false)
    setImgError(false)
    onNavigate(nextIndex)
  }, [currentIndex, photos.length, onNavigate])

  // Keyboard navigation & Escape key listener
  useEffect(() => {
    if (!isOpen) return undefined

    // Remember currently focused element to restore upon close
    previousActiveElement.current = document.activeElement

    // Lock body scrolling cleanly
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Focus overlay for immediate keyboard handling
    if (overlayRef.current) {
      overlayRef.current.focus()
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus()
      }
    }
  }, [isOpen, onClose, handlePrev, handleNext])

  // Reset image loaded status on index change
  useEffect(() => {
    setIsImgLoaded(false)
    setImgError(false)
  }, [currentIndex])

  // Touch Swipe Handlers for mobile gestures
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX)
      setTouchStartY(e.touches[0].clientY)
    }
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null || touchStartY === null) return

    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY

    const deltaX = touchEndX - touchStartX
    const deltaY = touchEndY - touchStartY

    // Horizontal swipe threshold: at least 45px, predominantly horizontal
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        handleNext() // swiped left -> next
      } else {
        handlePrev() // swiped right -> prev
      }
    }

    setTouchStartX(null)
    setTouchStartY(null)
  }

  if (!isOpen || !currentPhoto) return null

  const formattedIndex = String(currentIndex + 1).padStart(2, '0')
  const formattedTotal = String(photos.length).padStart(2, '0')

  return (
    <div
      ref={overlayRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={`Visual Heritage Journal: ${currentPhoto.caption}`}
      className="fixed inset-0 z-50 flex flex-col bg-maroon-dark/95 backdrop-blur-md text-cream outline-none select-none"
    >
      {/* ── 1. ARCHIVAL HEADER BAR ── */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-gold/25 bg-black/30 px-4 sm:px-6 lg:px-8">
        {/* Institutional Branding */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img
            src="/logo-circle.png"
            alt=""
            width="32"
            height="32"
            className="h-8 w-8 rounded-full border border-gold/60 object-cover shadow-xs"
          />
          <div className="flex flex-col">
            <span className="font-serif text-[15px] sm:text-base font-semibold leading-tight text-cream">
              Sri Seetharama Gurukulam
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-gold-soft/80">
              Visual Heritage Journal
            </span>
          </div>
        </div>

        {/* Plate Counter & Album Badge */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {currentPhoto.album && (
            <span className="hidden sm:inline-block rounded-full border border-gold/40 bg-gold-soft/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-soft">
              {currentPhoto.album}
            </span>
          )}

          <div className="rounded-full border border-gold/30 bg-white/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest text-gold-soft sm:text-[13px]">
            <span>PLATE {formattedIndex}</span>
            <span className="mx-1.5 text-cream/40">/</span>
            <span className="text-cream/80">{formattedTotal}</span>
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photograph viewer (Escape)"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gold-soft/40 bg-white/10 text-cream transition-all duration-200 hover:border-gold hover:bg-saffron hover:text-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ── 2. IMMERSIVE VIEWPORT ── */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-3 py-2 sm:px-16 sm:py-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Navigation Button */}
        {photos.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photograph (Left Arrow)"
            className="absolute left-2 sm:left-4 lg:left-6 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-soft/40 bg-maroon-dark/80 text-gold-soft backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-saffron hover:text-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron shadow-lg active:scale-95"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
        )}

        {/* Central Archival Stage */}
        <div className="relative flex max-h-[66vh] sm:max-h-[72vh] lg:max-h-[76vh] w-full max-w-5xl items-center justify-center">
          {/* Subtle loading placeholder */}
          {!isImgLoaded && !imgError && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Loading photograph"
            >
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-soft/30 border-t-gold" />
            </div>
          )}

          {imgError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-cream/70">
              <p className="font-serif text-lg text-gold-soft">Photograph unavailable</p>
              <p className="mt-1 text-xs">Please try viewing another plate in the collection.</p>
            </div>
          ) : (
            <div className="relative inline-block rounded-md p-1.5 sm:p-2 bg-gradient-to-b from-gold/30 via-gold/15 to-gold/30 shadow-2xl">
              <img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.alt || currentPhoto.caption}
                width="1200"
                height="800"
                onLoad={() => setIsImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`max-h-[64vh] sm:max-h-[70vh] lg:max-h-[74vh] w-auto max-w-full rounded-sm object-contain transition-opacity duration-300 ${
                  isImgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          )}
        </div>

        {/* Next Navigation Button */}
        {photos.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photograph (Right Arrow)"
            className="absolute right-2 sm:right-4 lg:right-6 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-soft/40 bg-maroon-dark/80 text-gold-soft backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gold hover:bg-saffron hover:text-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron shadow-lg active:scale-95"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* ── 3. EDITORIAL METADATA & CAPTION DECK ── */}
      <footer className="border-t border-gold/25 bg-black/45 px-4 py-3 sm:px-8 sm:py-4 backdrop-blur-md">
        <div className="mx-auto max-w-3xl text-center">
          {/* Mobile Category Tag */}
          {currentPhoto.album && (
            <div className="mb-1 sm:hidden">
              <span className="inline-block rounded-full border border-gold/40 bg-gold-soft/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-soft">
                {currentPhoto.album}
              </span>
            </div>
          )}

          {/* Caption */}
          <h2 className="font-serif text-lg sm:text-2xl font-bold leading-snug text-cream">
            {currentPhoto.caption}
          </h2>

          {/* Contextual Alt Description */}
          {currentPhoto.alt && (
            <p className="mt-1 font-sans text-xs sm:text-[13px] text-cream/75 leading-relaxed">
              {currentPhoto.alt}
            </p>
          )}

          {/* Desktop Keyboard & Touch Instruction */}
          <p className="mt-2 hidden sm:block text-[10.5px] font-mono tracking-widest text-gold-soft/60 uppercase">
            [←] Previous · [→] Next · [Esc] Close · Swipe on touch devices
          </p>
        </div>
      </footer>
    </div>
  )
}
