import { useState } from 'react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectModal } from '@/components/ProjectModal'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? null

  return (
    <section id="projects" className="bg-bg-elevated/40 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected Projects"
          description="Production applications I've built end-to-end or contributed to significantly, spanning booking platforms, payments and admin systems."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08} className={project.featured ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} onOpen={setActiveSlug} featured={project.featured} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
    </section>
  )
}
