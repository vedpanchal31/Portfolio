import { education } from '@/data/education'
import { EducationCard } from '@/components/EducationCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function EducationSection() {
  return (
    <section id="education" className="bg-bg-elevated/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="Academic foundation in computer engineering, algorithmic thinking and software systems."
        />
        <div className="mt-12">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.06}>
              <EducationCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
