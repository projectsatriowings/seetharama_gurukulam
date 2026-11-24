import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'
import OrnamentDivider from './OrnamentDivider.jsx'

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="site-container pb-28 pt-14 sm:pb-14">
        <OrnamentDivider className="mb-10 opacity-80" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-circle.png" alt="" width="56" height="56" className="h-14 w-14 shrink-0 rounded-full object-cover" />
              <h2 className="font-serif text-2xl font-semibold">{site.name}</h2>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{site.tagline}. A place of traditional learning, discipline and seva.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-soft">
              Patasala Started: {site.patasalaStartedYear} · Trust Regd: {site.trustRegisteredYear}
            </p>
          </div>
          <nav aria-label="Footer quick links">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {[...site.nav, { label: 'Privacy Policy', to: '/privacy' }].map((l) => (
                <li key={l.to}><Link to={l.to} className="text-cream/85 hover:text-gold-soft">{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer enquiries">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Enquiries</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="text-cream/85 hover:text-gold-soft">Admission Enquiry</Link></li>
              <li><Link to="/parayanam-pooja" className="text-cream/85 hover:text-gold-soft">Prayoga & Studies</Link></li>
              <li><Link to="/contact" className="text-cream/85 hover:text-gold-soft">General & Seva Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <address className="mt-4 space-y-3 text-[15px] not-italic text-cream/85">
              <p className="flex gap-2"><MapPin size={18} className="mt-1 shrink-0 text-gold" />{site.addressLines.join(', ')}</p>
              <p><a href={`tel:${site.phoneTel}`} className="flex gap-2 hover:text-gold-soft"><Phone size={18} className="mt-1 shrink-0 text-gold" />{site.phoneDisplay}</a></p>
              <p><a href={whatsappLink('Namaste, I would like to contact Seetha Rama Gurukulam Trust.')} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-gold-soft"><MessageCircle size={18} className="mt-1 shrink-0 text-whatsapp" />WhatsApp: {site.phoneDisplay}</a></p>
              <p><a href={`mailto:${site.email}`} className="flex gap-2 hover:text-gold-soft"><Mail size={18} className="mt-1 shrink-0 text-gold" />{site.email}</a></p>
              {site.visitingHours ? <p>Visiting hours: {site.visitingHours}</p> : null}
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-gold/40 pt-6 text-center text-sm text-cream/70">
          <p className="font-serif text-sm font-medium text-gold-soft">
            Seetha Rama Gurukula Veda Patasala (Estd. {site.patasalaStartedYear}) · {site.trustType} (Regd. {site.trustRegisteredYear})
          </p>
          <p className="mt-2">Made with devotion for the preservation of Vedic wisdom.</p>
          <p className="mt-1 text-xs text-gold-soft/90">Contributions to Seetha Rama Gurukulam Trust are eligible for tax exemption under Section 80-G of the Income Tax Act.</p>
        </div>
      </div>
    </footer>
  )
}
