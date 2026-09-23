import { quickStats } from '@/data/stats'
import { Reveal } from '@/components/Reveal'

export function Stats() {
  return (
    <section className="border-y border-border bg-bg-elevated" aria-label="Highlights">
      <div className="container-px mx-auto max-w-6xl py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {quickStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="text-center">
              <p className="font-mono text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
