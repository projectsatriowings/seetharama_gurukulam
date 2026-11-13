import { CalendarPlus, Clock, MapPin } from 'lucide-react'
import { formatDate, googleCalendarLink, isUpcoming } from '../utils/dates.js'
import Card from './Card.jsx'

export default function EventCard({ event }) {
  const upcoming = isUpcoming(event)
  const day = event.date.split('-')[2]
  const month = new Date(event.date + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short' })
  return (
    <Card className="flex flex-col">
      <div className="flex gap-4">
        <div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-2xl bg-maroon text-cream" aria-label={formatDate(event.date)}>
          <span className="font-serif text-3xl font-bold leading-none">{day}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-soft">{month}</span>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-semibold leading-snug text-maroon">{event.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft"><Clock size={15} /> {event.time}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft"><MapPin size={15} /> {event.venue}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-ink-soft">{event.description}</p>
      {upcoming ? (
        <a href={googleCalendarLink(event)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full border-2 border-gold px-5 py-2 text-sm font-semibold text-maroon hover:bg-gold-soft/40">
          <CalendarPlus size={17} /> Add to calendar
        </a>
      ) : null}
    </Card>
  )
}
