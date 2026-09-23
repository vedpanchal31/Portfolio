import { experience } from '@/data/experience'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { SectionHeading } from '@/components/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="bg-bg-elevated/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          description="Where I've applied React.js, Next.js and full-stack skills to ship production software."
        />
        <div className="mt-12">
          <ExperienceTimeline items={experience} />
        </div>
      </div>
    </section>
  )
}
