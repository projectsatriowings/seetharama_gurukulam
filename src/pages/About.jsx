import Card from '../components/Card.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SEO, { orgJsonLd } from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { vedaPatshala } from '../data/vedaPatshala.js'

const trustees = ['Trustee Name (TODO)', 'Trustee Name (TODO)', 'Trustee Name (TODO)', 'Trustee Name (TODO)', 'Trustee Name (TODO)', 'Trustee Name (TODO)']

export default function About() {
  const { leadership, aimStatement, dharma, award } = vedaPatshala
  return (
    <>
      <SEO title="About" description="The story, vision, patronage and trustees of Seetharama Gurukulam Trust." path="/about" jsonLd={orgJsonLd} />
      <PageHero eyebrow="About the trust" title="Rooted in tradition, open to all who seek it" description="Seetharama Gurukulam Trust exists to preserve and pass on Vedic learning — in its traditional form, with care for every student who comes to learn." />
      <section className="py-14">
        <div className="site-container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-maroon sm:text-4xl">Our story</h2>
            <p className="mt-4 text-ink-soft">Sri Seetharama Gurukulam Veda Patasala was founded at the command and blessings of His Holiness Sri Paramacharyal of Kanchi in the traditional gurukulam method by Nannilam Brahmasri V. Rajagopala Ganapatigal, to impart Vedic sciences and the shastras in depth — through daily classes, weekly meetings and books that bring spiritual study within reach of the general public.</p>
            <p className="mt-3 text-ink-soft">The same acharya founded and edited the monthly spiritual magazine Vaithikasri, and taught the Vedas, Sanskrit and Dharma Sastra in the same spirit: knowledge lived daily, not merely studied. That tradition continues at the gurukulam today under the guidance of his son and successor, Nannilam Brahmasri R. SriKrishna Ganapatigal.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h3 className="font-serif text-2xl font-semibold text-maroon">Vision and mission</h3>
              <p className="mt-3 text-ink-soft"><strong className="text-ink">Guiding ideal:</strong> {dharma.heading} — {dharma.subHeading}</p>
              <p className="mt-3 text-ink-soft"><strong className="text-ink">Mission:</strong> {aimStatement}</p>
            </Card>
          </Reveal>
        </div>
      </section>
      <section className="bg-ivory py-14">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Sacred Patronage &amp; Leadership" title="Founder &amp; Acharya" align="left" /></Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr]">
            <img src={leadership.founder.image} alt={`Portrait of ${leadership.founder.name}, Founder & Patron of Seetharama Gurukulam Trust`} width="512" height="512" loading="lazy" className="w-full rounded-full object-cover drop-shadow-lg" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">{leadership.founder.role}</p>
              <h3 className="mt-1 font-serif text-3xl font-semibold text-maroon">Nannilam Brahmasri V. Rajagopala Ganapatigal</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-saffron-deep">Founder, Sri Seetharama Gurukulam &bull; Founder &amp; Editor, Vaithikasri magazine</p>
              <p className="mt-4 text-ink-soft">A Nitya Agnihotri and Salakshana Ganapatee, Brahmasri Rajagopala Ganapatigal was a renowned Vedic scholar and a publisher of many books on Dharma Sastram. He hailed from a family of Deekshithars, and was born in Sengalipuram on 20 August 1963 to Brahmasri Vaidyanatha Dikshitar and Srimathi Rajeswari Ammal.</p>
              <p className="mt-3 text-ink-soft">He performed Jata and Ghana Veda Parayanam in many places, and was well known and respected for his deep knowledge of Sanskrit, Vedic scriptures, Vedic rituals and Dharma Sastra. He was also a priest and lecturer for the Ramayana, Bhagavata and Mahabharata puranas.</p>
              <p className="mt-3 text-ink-soft">Through Sri Seetharama Gurukulam he imparted Vedic sciences and shastras in the traditional gurukulam method. He passed away on 24 December 2019. The gurukulam is now managed by his eldest son, Nannilam Brahmasri R. SriKrishna Ganapatigal, who is also a Salakshana Ganapatee.</p>
              <p className="mt-4 text-sm text-ink-soft">Sources: <a href="https://vaithikasri.com/about-us-vaithikasri/" target="_blank" rel="noopener noreferrer" className="font-semibold text-maroon underline decoration-gold underline-offset-2">Vaithikasri &mdash; About Us</a>, <a href="https://vaithikasri.com/veda-patshala" target="_blank" rel="noopener noreferrer" className="font-semibold text-maroon underline decoration-gold underline-offset-2">Vaithikasri &mdash; Veda Patashala</a>, and Mylapore Times, March 2020.</p>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-8 border-t border-gold-soft pt-12 md:grid-cols-[280px_1fr]">
            <img src={leadership.acharya.image} alt={`Portrait of ${leadership.acharya.name}, Vedic Teacher & Acharya at Sri Seetharama Gurukulam Trust`} width="512" height="512" loading="lazy" className="h-[280px] w-full rounded-full border-4 border-gold-soft object-cover object-top drop-shadow-lg" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">{leadership.acharya.role}</p>
              <h3 className="mt-1 font-serif text-3xl font-semibold text-maroon">{leadership.acharya.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-saffron-deep">Acharya, Sri Seetharama Gurukulam Trust &bull; Chief Editor, Vaithikasri</p>
              <p className="mt-4 text-ink-soft">{leadership.acharya.motto}. As the son and successor of Brahmasri V. Rajagopala Ganapatigal, he guides students in daily Veda Adhyayanam, Krishna Yajur Veda, Grihya traditions, and Sastra learning at the Gurukulam.</p>
              <p className="mt-3 text-ink-soft">In {award.date}, {award.summary}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Trustees" title="The trustees" description="Placeholder profiles — replace names, roles and photos before launch." /></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustees.map((name) => (
              <Card key={name} className="text-center">
                <img src="/placeholders/campus-01.svg" alt="Placeholder portrait" width="400" height="400" loading="lazy" className="mx-auto h-24 w-24 rounded-full border border-gold-soft object-cover" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-maroon">{name}</h3>
                <p className="text-sm text-ink-soft">Role (TODO)</p>
              </Card>
            ))}
          </div>
          <Card className="mt-10">
            <h3 className="font-serif text-2xl font-semibold text-maroon">Trust details</h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              <div><dt className="text-xs font-bold uppercase tracking-widest text-ink-soft">Registration number</dt><dd className="mt-1 font-semibold">{site.registrationNumber}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-widest text-ink-soft">Established</dt><dd className="mt-1 font-semibold">{site.establishedYear}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-widest text-ink-soft">Address</dt><dd className="mt-1 font-semibold">{site.addressLines.join(', ')}</dd></div>
            </dl>
          </Card>
        </div>
      </section>
    </>
  )
}
