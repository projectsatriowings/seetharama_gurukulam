import { Phone } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { messageForRoute, whatsappLink } from '../utils/whatsapp.js'

export function WhatsAppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.7-.1 1.3z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  const href = whatsappLink(messageForRoute(pathname))
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a href={`tel:${site.phoneTel}`} aria-label={`Call ${site.name}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-cream shadow-warm transition hover:bg-saffron-deep sm:hidden">
        <Phone size={22} />
      </a>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="group flex items-center gap-3">
        <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card group-hover:block sm:group-hover:block">Chat with us</span>
        <span className="whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-warm">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  )
}


export { default as CallButton } from './CallButton.jsx'
