import OrnamentDivider from './OrnamentDivider.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls}`}>
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron-deep">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-maroon sm:text-5xl">{title}</h2>
      {description ? <p className="text-ink-soft">{description}</p> : null}
      <OrnamentDivider className={align === 'center' ? '' : 'justify-start'} />
    </div>
  )
}
