interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-4 max-w-2xl text-base text-muted ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p>
      ) : null}
    </div>
  )
}
