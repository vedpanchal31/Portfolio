import { focusAreas } from '@/data/about'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function CurrentFocus() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Direction" title="What I'm Building Toward" align="center" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-text">{item.title}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
