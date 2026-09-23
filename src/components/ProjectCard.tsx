import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'
import { ProjectMockup } from './ProjectMockup'

interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
  featured?: boolean
}

export function ProjectCard({ project, onOpen, featured = false }: ProjectCardProps) {
  const badges = [...project.frontend, ...project.backend, ...project.integrations].slice(0, 6)

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-24px_rgba(45,212,191,0.25)] ${
        featured ? 'lg:flex-row lg:items-stretch' : ''
      }`}
    >
      <div className={`p-4 pb-0 sm:p-5 sm:pb-0 ${featured ? 'lg:w-1/2 lg:p-6 lg:pb-6' : ''}`}>
        <div className="h-full transition-transform duration-300 group-hover:scale-[1.015]">
          <ProjectMockup mockup={project.mockup} label={project.slug} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-5 sm:p-6 ${featured ? 'lg:w-1/2' : ''}`}>
        <p className="font-mono text-xs tracking-wide text-accent">{project.highlight}</p>
        <h3 className="mt-2 text-xl font-semibold text-text">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {badges.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-bg-card px-2 py-1 text-xs text-dim transition-colors group-hover:border-border-strong group-hover:text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project.slug)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-strong"
        >
          View Case Study
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  )
}
