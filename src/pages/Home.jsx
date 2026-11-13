import { BookOpen, Clock, HandHeart, HeartHandshake, Landmark, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import EnquiryCard from '../components/EnquiryCard.jsx'
import EventCard from '../components/EventCard.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SacredAnnouncement from '../components/SacredAnnouncement.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import events from '../data/events.json'
import { site } from '../data/site.js'
import { formatDate, isUpcoming, nextUpcomingEvent } from '../utils/dates.js'

const pillars = [
  { icon: BookOpen, title: 'Vedic Learning', text: 'Daily recitation, Sanskrit and shastra study, taught patiently by experienced acharyas.' },
  { icon: HandHeart, title: 'Discipline and Seva', text: 'Simple living, regular routine and service to others, woven into everyday life at the gurukulam.' },
  { icon: Landmark, title: 'Cultural Heritage', text: 'Festivals, traditions and values passed on living — not just read about — from guru to student.' },
]

const daySteps = [
  { time: 'Early morning (TODO)', title: 'Morning prayers and recitation', text: 'The day begins quietly, with prayer and Vedic chanting.' },
  { time: 'Morning (TODO)', title: 'Classes in Veda and Sanskrit', text: 'Structured study with acharyas, in small groups.' },
  { time: 'Afternoon (TODO)', title: 'Study, rest and seva', text: 'Revision, library time and simple service around the campus.' },
  { time: 'Evening (TODO)', title: 'Evening prayer and reflection', text: 'The day closes with prayer, recitation and time together.' },
]

export default function Home() {
  const next = nextUpcomingEvent(events)
  const upcoming = events.filter((e) => isUpcoming(e)).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3)
  return (
    <>
      <SEO description="Seetharama Gurukulam Trust — traditional Vedic learning, parayanam and pooja services, and a warm welcome for parents, devotees and donors." path="/" jsonLd={orgJsonLd} />
      <Hero
        title="Preserving the Timeless Wisdom of the Vedas"
        subtitle="A sacred institution founded under the divine command and blessings of His Holiness Sri Paramacharyal of Kanchi — imparting authentic Krishna Yajur Veda adhyayanam, Sanskrit, and Shastras with discipline, devotion, and care."
        primary={{ label: 'Explore the Gurukulam', to: '/gurukulam' }}
        secondary={{ label: 'Admission Enquiry', to: '/admission' }}
      />
      <SacredAnnouncement event={next} />

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Our mission" title="Learning that lives, not just lessons" description="The gurukulam exists to keep Vedic learning alive in daily life — through study, good conduct and service, in a calm and caring environment." /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep"><p.icon size={26} /></span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-maroon">{p.title}</h3>
                  <p className="mt-2 text-ink-soft">{p.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="How can we help?" title="Begin with an enquiry" description="Tell us what you need, and our team will respond within 24 to 48 hours. No payment details are ever shared on this website." /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <EnquiryCard icon={BookOpen} title="Admission" description="For parents considering Vedic education for their child — ask about eligibility, routine and life at the gurukulam." to="/admission" buttonLabel="Admission enquiry" />
            <EnquiryCard icon={Sparkles} title="Parayanam and Pooja" description="Book a recitation or pooja at the gurukulam or at your home, guided by our acharyas." to="/parayanam-pooja" buttonLabel="Book a service" />
            <EnquiryCard icon={HeartHandshake} title="Support the Gurukulam" description="Annadanam, student sponsorship and general seva — enquire, and we will share official details privately." to="/donation-enquiry" buttonLabel="Donation enquiry" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Daily life" title="A day at the gurukulam" description="A simple, steady rhythm of prayer, study and service. Times below are placeholders — the exact routine will be confirmed by the trust." /></Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {daySteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="h-full rounded-card border border-gold-soft bg-ivory p-6 shadow-card">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron-deep"><Clock size={15} /> Step {i + 1} · {s.time}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-maroon">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-8 text-center"><Button to="/gurukulam" variant="secondary">Explore life at the gurukulam</Button></div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Gatherings" title="Upcoming events" /></Reveal>
          {upcoming.length ? (
            <div className="mt-12 grid gap-5 md:grid-cols-3">{upcoming.map((e) => <EventCard key={e.id} event={e} />)}</div>
          ) : (
            <p className="mt-8 text-center text-ink-soft">No upcoming events right now. Please check back soon.</p>
          )}
          <div className="mt-8 text-center"><Button to="/events" variant="secondary">View all events</Button></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Glimpses" title="Life at the gurukulam" description="Festivals, classes, poojas and campus life." /></Reveal>
          <div className="mt-12"><GalleryGrid limit={6} /></div>
          <div className="mt-8 text-center"><Button to="/gallery" variant="secondary">View full gallery</Button></div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Kind words" title="What families and devotees say" /></Reveal>
          <div className="mt-10"><TestimonialCarousel /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-maroon py-16 text-center text-cream sm:py-20">
        <div className="pattern-kolam absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="site-container relative">
          <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Come, sit, listen — and be part of it.</h2>
          <p className="mt-4 text-cream/85">Whether you are seeking admission, a pooja, or a way to support this work, we would be glad to hear from you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" className="bg-saffron text-maroon-dark hover:bg-[#f0a64a]">Contact us</Button>
            <Button to="/donation-enquiry" variant="light">Support the Gurukulam</Button>
          </div>
          <p className="mt-6 text-sm text-cream/70">{site.phoneDisplay} · {site.email}</p>
          </div>
        </div>
      </section>
    </>
  )
}
