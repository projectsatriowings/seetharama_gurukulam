import { Phone } from 'lucide-react'
import { site } from '../data/site.js'

export default function CallButton() {
  return (
    <a href={`tel:${site.phoneTel}`} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-gold px-5 py-2 font-semibold text-maroon">
      <Phone size={18} /> Call {site.phoneDisplay}
    </a>
  )
}
