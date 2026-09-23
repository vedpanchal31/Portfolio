import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { SectionHeading } from '@/components/SectionHeading'

export function Architecture() {
  return (
    <section id="architecture" className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Full-Stack Architecture"
          title="From Interface to Infrastructure"
          description="The layers I work across, from React interfaces down to the data and integrations that power them. Hover a layer or service to see how it connects."
        />
        <div className="mt-12">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}
