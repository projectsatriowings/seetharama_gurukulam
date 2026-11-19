import { Link } from 'react-router-dom'

export function buttonClasses(variant = 'primary', size = 'md') {
  const sizeClasses = {
    sm: 'min-h-[38px] px-4 py-1.5 text-sm',
    md: 'min-h-[44px] px-6 py-2.5 text-[15px]',
    lg: 'min-h-[48px] px-7 py-3 text-base',
  }
  const sizeStr = sizeClasses[size] || sizeClasses.md

  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none ${sizeStr}`

  if (variant === 'saffron') {
    return `${base} bg-saffron text-maroon-dark font-bold hover:bg-[#f0a64a] shadow-xs hover:shadow-sm`
  }
  if (variant === 'secondary') {
    return `${base} border-2 border-gold bg-transparent text-maroon hover:bg-gold-soft/40`
  }
  if (variant === 'light') {
    return `${base} bg-cream text-maroon hover:bg-white shadow-xs`
  }
  // primary
  return `${base} bg-maroon text-cream hover:bg-saffron-deep shadow-xs`
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}) {
  // If the caller overrides colour, drop the conflicting base colour utilities
  // Strip only unprefixed bg-/text- tokens from the base, so hover: variants survive.
  const strip = (cls, prefix) => cls.split(' ').filter((tok) => !tok.startsWith(prefix)).join(' ')
  let base = buttonClasses(variant, size)
  if (className.split(' ').some((tok) => tok.startsWith('bg-'))) base = strip(base, 'bg-')
  if (className.split(' ').some((tok) => tok.startsWith('text-'))) base = strip(base, 'text-')
  const cls = `${base} ${className}`

  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
