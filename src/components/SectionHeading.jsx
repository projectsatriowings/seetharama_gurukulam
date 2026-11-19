import OrnamentDivider from './OrnamentDivider.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverted = false,
  hideDivider = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow ? (
        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${inverted ? 'text-gold' : 'text-saffron-deep'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${inverted ? 'text-cream' : 'text-maroon'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-[15px] sm:text-base leading-relaxed ${inverted ? 'text-cream/80' : 'text-ink-soft'}`}>
          {description}
        </p>
      ) : null}
      {!hideDivider ? (
        <OrnamentDivider className={align === 'center' ? '' : 'justify-start'} />
      ) : null}
    </div>
  )
}
