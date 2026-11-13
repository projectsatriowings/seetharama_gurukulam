import { Link } from 'react-router-dom'

export function buttonClasses(variant = 'primary') {
  const base = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition hover:-translate-y-px focus-visible:outline-none'
  if (variant === 'secondary') return `${base} border-2 border-gold bg-transparent text-maroon hover:bg-gold-soft/40`
  if (variant === 'light') return `${base} bg-cream text-maroon hover:bg-white`
  return `${base} bg-maroon text-cream hover:bg-saffron-deep`
}

export default function Button({ to, href, variant = 'primary', children, className = '', ...rest }) {
  // If the caller overrides colour, drop the conflicting base colour utilities
  // (Tailwind order, not class order, would otherwise win).
  // Strip only unprefixed bg-/text- tokens from the base, so hover: variants survive.
  const strip = (cls, prefix) => cls.split(' ').filter((tok) => !tok.startsWith(prefix)).join(' ')
  let base = buttonClasses(variant)
  if (className.split(' ').some((tok) => tok.startsWith('bg-'))) base = strip(base, 'bg-')
  if (className.split(' ').some((tok) => tok.startsWith('text-'))) base = strip(base, 'text-')
  const cls = `${base} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
