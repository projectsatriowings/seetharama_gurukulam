import SectionHeading from './SectionHeading.jsx'

function Mandala() {
  return (
    <svg width="340" height="340" viewBox="0 0 340 340" fill="none" aria-hidden="true" className="h-full w-full">
      <g stroke="#C9A24B" strokeWidth="1.5">
        <circle cx="170" cy="170" r="40" />
        <circle cx="170" cy="170" r="85" />
        <circle cx="170" cy="170" r="130" />
        <circle cx="170" cy="170" r="165" />
      </g>
      <g fill="#C9A24B">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="170" cy="90" rx="12" ry="34" transform={`rotate(${a} 170 170)`} />
        ))}
      </g>
      <circle cx="170" cy="170" r="10" fill="#C9A24B" />
    </svg>
  )
}

export default function PageHero({
  eyebrow,
  title,
  description,
  maxWidth = 'max-w-4xl lg:max-w-5xl',
  titleClassName = 'sm:text-[34px] md:text-[38px] lg:text-[44px] md:whitespace-nowrap',
  className = '',
}) {
  return (
    <section className="relative overflow-hidden bg-ivory py-14 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.07] sm:block">
        <Mandala />
      </div>
      <div className="site-container relative">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="left"
          maxWidth={maxWidth}
          titleClassName={titleClassName}
          className={className}
        />
      </div>
    </section>
  )
}
