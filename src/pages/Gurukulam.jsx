import { Award, BookOpen, CheckCircle2, Clock, Home, Library, Quote, Sprout, UtensilsCrossed } from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO from '../components/SEO.jsx'
import { vedaPatshala } from '../data/vedaPatshala.js'

const subjects = [
  { icon: BookOpen, title: 'Vedas', text: 'Traditional recitation (adhyayanam) with correct pronunciation, taught step by step.' },
  { icon: BookOpen, title: 'Shastras', text: 'In-depth study of Vedic sciences and shastra texts in the traditional Gurukulam method.' },
  { icon: BookOpen, title: 'Sanskrit', text: 'Reading, writing and spoken Sanskrit, so students understand what they recite.' },
  { icon: BookOpen, title: 'Prayers and values', text: 'Daily prayers, good conduct and seva, woven into routine rather than added on.' },
]
const facilities = [
  { icon: Home, title: 'Free Boarding & Lodging', text: 'Simple, clean residential accommodation, clothing, medicines and weekly oil bath provided without any cost.' },
  { icon: UtensilsCrossed, title: 'Nutritious Meals & Seva', text: 'Wholesome vegetarian meals served daily to all residential students. Annadanam days are open to devotees.' },
  { icon: Library, title: 'Books, Stationery & Study', text: 'Free books, stationery and quiet study spaces for Vedic and shastra learning, meetings and publications.' },
  { icon: Sprout, title: 'Student Welfare & Recreation', text: 'One-time free transport, indoor games kits and open campus spaces supporting holistic daily life.' },
]
const routine = [
  ['Early morning (TODO)', 'Morning prayers and recitation'],
  ['Morning (TODO)', 'Veda and Sanskrit classes'],
  ['Midday (TODO)', 'Meal, rest and revision'],
  ['Afternoon (TODO)', 'Study, library and seva'],
  ['Evening (TODO)', 'Evening prayer and recitation'],
]

export default function Gurukulam() {
  const { award, dharma, aimStatement, freeProvisions } = vedaPatshala
  return (
    <>
      <SEO title="The Gurukulam" description="Veda Patasala courses, aims and objectives, free student facilities, daily routine and admission at Sri Seetharama Gurukulam." path="/gurukulam" />
      <PageHero eyebrow="The gurukulam & Veda Patasala" title="Learning, lived every day" description="Traditional teaching in a simple residential setting — founded at the command and blessings of His Holiness Sri Paramacharyal of Kanchi." />
      <section className="py-14">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="What we teach" title="Subjects of study" /></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((s) => (
              <Card key={s.title} className="h-full"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep"><s.icon size={24} /></span><h3 className="mt-4 font-serif text-2xl font-semibold text-maroon">{s.title}</h3><p className="mt-2 text-ink-soft">{s.text}</p></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14">
        <div className="site-container space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Veda Patasala"
              title={dharma.heading}
              description={dharma.subHeading}
              align="left"
            />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <Card className="h-full bg-cream">
                <p className="text-ink-soft">{dharma.intro}</p>
                <blockquote className="mt-4 border-l-4 border-gold pl-5 font-serif text-xl leading-relaxed text-maroon">
                  <Quote size={20} className="mb-2 text-saffron-deep" aria-hidden="true" />
                  {dharma.quote}
                </blockquote>
                <p className="mt-4 text-ink-soft">{dharma.assurance}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full bg-cream">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">Aims &amp; Objectives</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-maroon">Education without any cost</h3>
                <p className="mt-3 text-ink-soft">{aimStatement}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-maroon">Provided to students free of cost:</p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {freeProvisions.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 rounded-xl border border-gold-soft bg-ivory px-3.5 py-2.5 text-sm font-medium text-ink">
                      <CheckCircle2 size={17} className="shrink-0 text-saffron-deep" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="site-container">
          <Reveal>
            <Card className="overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">
                    <Award size={16} aria-hidden="true" /> Blessing &amp; Recognition
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-maroon sm:text-4xl">{award.title}</h2>
                </div>
                <span className="rounded-full border border-gold-soft bg-cream px-4 py-1.5 text-sm font-semibold text-maroon">{award.date}</span>
              </div>
              <p className="mt-3 max-w-3xl text-ink-soft">{award.summary}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {award.images.map((img) => (
                  <div key={img.src} className="overflow-hidden rounded-2xl border border-gold-soft bg-cream">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width="1200"
                      height="800"
                      loading="lazy"
                      className={`h-72 w-full object-cover ${img.position}`}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-14">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Daily routine" title="A steady rhythm" align="left" description="Placeholder times — the trust will confirm the exact routine before launch." />
            <ol className="mt-8 space-y-4">
              {routine.map(([time, title]) => (
                <li key={title} className="flex gap-4 rounded-card border border-gold-soft bg-cream p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-cream"><Clock size={18} /></span>
                  <span><strong className="block text-maroon">{title}</strong><span className="text-sm text-ink-soft">{time}</span></span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Facilities" title="Simple, cared-for spaces" align="left" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {facilities.map((f) => (
                <Card key={f.title} className="h-full"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-soft text-saffron-deep"><f.icon size={24} /></span><h3 className="mt-4 font-serif text-xl font-semibold text-maroon">{f.title}</h3><p className="mt-2 text-sm text-ink-soft">{f.text}</p></Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="site-container text-center">
          <Reveal><SectionHeading eyebrow="Admission &amp; Contact" title="Join or connect with the Veda Patasala" description="Parents interested in traditional Vedic education for their child are invited to submit an admission enquiry. For visits, seva or general questions, our team is always glad to assist." /></Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/admission">Start an admission enquiry</Button>
            <Button to="/contact" variant="secondary">Contact the Gurukulam</Button>
          </div>
        </div>
      </section>
    </>
  )
}
