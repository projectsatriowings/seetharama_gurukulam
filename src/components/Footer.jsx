import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import OrnamentDivider from './OrnamentDivider.jsx'

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="site-container pb-28 pt-14 sm:pb-14">
        <OrnamentDivider className="mb-10 opacity-80" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo-circle.png" alt="" width="56" height="56" className="h-14 w-14 shrink-0 rounded-full object-cover" />
              <h2 className="font-serif text-2xl font-semibold">{site.name}</h2>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{site.tagline}. A place of traditional learning, discipline and seva.</p>
            <p className="mt-4 text-sm text-gold-soft">{site.registrationNumber} · Established: {site.establishedYear}</p>
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
              <li><Link to="/admission" className="text-cream/85 hover:text-gold-soft">Admission Enquiry</Link></li>
              <li><Link to="/parayanam-pooja" className="text-cream/85 hover:text-gold-soft">Parayanam / Pooja Booking</Link></li>
              <li><Link to="/contact" className="text-cream/85 hover:text-gold-soft">General & Seva Contact</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <address className="mt-4 space-y-3 text-[15px] not-italic text-cream/85">
              <p className="flex gap-2"><MapPin size={18} className="mt-1 shrink-0 text-gold" />{site.addressLines.join(', ')}</p>
              <p><a href={`tel:${site.phoneTel}`} className="flex gap-2 hover:text-gold-soft"><Phone size={18} className="mt-1 shrink-0 text-gold" />{site.phoneDisplay}</a></p>
              <p><a href={`mailto:${site.email}`} className="flex gap-2 hover:text-gold-soft"><Mail size={18} className="mt-1 shrink-0 text-gold" />{site.email}</a></p>
              <p>Visiting hours: {site.visitingHours}</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-gold/40 pt-6 text-center text-sm text-cream/70">
          <p>{site.registrationNumber}</p>
          <p className="mt-2">Made with devotion for the preservation of Vedic wisdom.</p>
          <p className="mt-1 text-xs">Donations are enquiry-only. Our team will share the official donation details after your enquiry.</p>
        </div>
      </div>
    </footer>
  )
}
