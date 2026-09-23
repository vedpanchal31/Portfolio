import { impactMetrics } from '@/data/stats'
import { ImpactMetric } from '@/components/ImpactMetric'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Impact() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Results"
          title="Impact & Results"
          description="Measurable outcomes from my work at Wappnet Systems, backed by the metrics on my resume."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <ImpactMetric value={metric.value} label={metric.label} description={metric.description} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
