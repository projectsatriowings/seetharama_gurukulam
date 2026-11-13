import { CalendarPlus, Clock, MapPin } from 'lucide-react'
import EventCard from '../components/EventCard.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO from '../components/SEO.jsx'
import events from '../data/events.json'
import { formatDate, googleCalendarLink, isUpcoming } from '../utils/dates.js'
import { whatsappLink } from '../utils/whatsapp.js'

export default function Events() {
  const upcoming = events.filter((e) => isUpcoming(e)).sort((a, b) => a.date.localeCompare(b.date))
  const past = events.filter((e) => !isUpcoming(e)).sort((a, b) => b.date.localeCompare(a.date))
  const featured = upcoming[0] || null
  const rest = upcoming.slice(1)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: upcoming.map((e, i) => ({
      '@type': 'ListItem', position: i + 1,
      item: { '@type': 'Event', name: e.title, startDate: e.date, location: e.venue, description: e.description },
    })),
  }
  return (
    <>
      <SEO title="Events" description="Upcoming and past events at Seetharama Gurukulam Trust." path="/events" jsonLd={jsonLd} />
      <PageHero eyebrow="Events" title="Gatherings at the gurukulam" description="Parayanams, annadanam days and open evenings — all are welcome. Come, sit, and be part of the gathering." />
      <section className="py-14">
        <div className="site-container">
          <div className="flex flex-wrap gap-2" aria-label="Jump to events">
            <a href="#upcoming" className="min-h-[44px] rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-cream">Upcoming ({upcoming.length})</a>
            <a href="#past" className="min-h-[44px] rounded-full border border-gold bg-ivory px-5 py-2 text-sm font-semibold text-maroon">Past ({past.length})</a>
          </div>

          {featured ? (
            <div id="upcoming" className="mt-8 scroll-mt-28 overflow-hidden rounded-card border border-gold-soft bg-maroon text-cream shadow-warm">
              <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[140px_1fr]">
                <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-2xl bg-cream text-maroon">
                  <span className="font-serif text-5xl font-bold leading-none">{featured.date.split('-')[2]}</span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest text-saffron-deep">{new Date(featured.date + 'T00:00:00').toLocaleDateString('en-IN', { month: 'long' })}</span>
                  <span className="text-xs font-semibold text-ink-soft">{formatDate(featured.date).split(',')[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Next gathering</p>
                  <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">{featured.title}</h2>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-cream/85">
                    <span className="flex items-center gap-1.5"><Clock size={15} /> {featured.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={15} /> {featured.venue}</span>
                  </p>
                  <p className="mt-3 max-w-2xl text-cream/85">{featured.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={googleCalendarLink(featured)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-maroon-dark hover:bg-[#f0a64a]">
                      <CalendarPlus size={17} /> Add to calendar
                    </a>
                    <a href={whatsappLink(`Namaste, I would like to know more about ${featured.title} on ${formatDate(featured.date)} at Seetharama Gurukulam.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center rounded-full border-2 border-gold px-5 py-2 text-sm font-semibold text-cream hover:bg-white/10">
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {rest.length ? (
          <div className="mt-12">
            <SectionHeading eyebrow="Upcoming" title="More upcoming events" align="left" />
            {rest.length || !featured ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{(featured ? rest : upcoming).map((e) => <EventCard key={e.id} event={e} />)}</div>
            ) : upcoming.length ? null : (
              <p className="mt-8 rounded-card border border-gold-soft bg-ivory p-6 text-center text-ink-soft">No upcoming events right now. Please check back soon.</p>
            )}
          </div>
          ) : null}
          {!upcoming.length ? (
            <p className="mt-8 rounded-card border border-gold-soft bg-ivory p-6 text-center text-ink-soft">No upcoming events right now. Please check back soon.</p>
          ) : null}

          <div id="past" className="mt-16 scroll-mt-28">
            <SectionHeading eyebrow="Past" title="Past events" align="left" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{past.map((e) => <EventCard key={e.id} event={e} />)}</div>
          </div>
        </div>
      </section>
    </>
  )
}
