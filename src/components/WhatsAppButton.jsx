import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { messageForRoute, whatsappLink } from '../utils/whatsapp.js'

export function WhatsAppIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.277-.1-.478-.15-.678.15-.2.3-.777.977-.952 1.177-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.526.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.928-2.235-.244-.585-.492-.505-.678-.515-.176-.009-.377-.01-.578-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.616h-.008c-1.68 0-3.328-.45-4.767-1.303l-.342-.203-3.547.93.946-3.457-.223-.354A9.56 9.56 0 0 1 2.478 12.04c0-5.28 4.298-9.578 9.582-9.578 2.56 0 4.966.998 6.774 2.808a9.52 9.52 0 0 1 2.804 6.773c0 5.283-4.298 9.582-9.596 9.582zm8.19-17.783A11.53 11.53 0 0 0 12.04 0C5.402 0 .01 5.393.008 12.035a11.5 11.5 0 0 0 1.765 6.137L0 24l5.992-1.572a11.54 11.54 0 0 0 6.042 1.688h.008c6.634 0 12.028-5.393 12.03-12.037 0-3.216-1.253-6.24-3.53-8.514z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  const href = whatsappLink(messageForRoute(pathname))
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center sm:bottom-6 sm:right-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-2 sm:gap-3"
      >
        <span className="hidden rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-card group-hover:block sm:group-hover:block">
          Chat with us
        </span>
        <span className="whatsapp-pulse flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-warm transition-transform duration-300 hover:scale-105">
          <WhatsAppIcon size={30} />
        </span>
      </a>
    </div>
  )
}


export { default as CallButton } from './CallButton.jsx'
