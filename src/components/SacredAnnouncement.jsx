import { Calendar, ChevronRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/dates.js'

export default function SacredAnnouncement({ event }) {
  if (!event) return null

  return (
    <div className="relative border-y border-gold/40 bg-gradient-to-r from-saffron-soft/90 via-ivory to-saffron-soft/90 py-3 sm:py-3.5 shadow-xs">
      <div className="site-container flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {/* Left Side: Badge + Event Details */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-cream shadow-xs">
            <Sparkles size={12} className="text-saffron" aria-hidden="true" />
            <span>Sacred Gathering</span>
          </span>

          <span className="font-serif text-[16px] font-semibold text-maroon sm:text-[18px]">
            {event.title}
          </span>

          <span className="hidden items-center gap-1.5 text-xs font-medium text-ink-soft md:inline-flex">
            <Calendar size={13} className="text-saffron-deep" aria-hidden="true" />
            <span>
              {formatDate(event.date)} · {event.time}
            </span>
          </span>
        </div>

        {/* Right Side: Interactive Action Link */}
        <Link
          to="/events"
          className="group inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-maroon hover:text-saffron-deep sm:text-sm"
        >
          <span className="underline decoration-gold underline-offset-4">
            View all gatherings &amp; calendar
          </span>
          <ChevronRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  )
}
