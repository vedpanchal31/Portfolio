import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useScrollLock } from '@/hooks/useScrollLock'
import type { Project } from '@/types'
import { ProjectMockup } from './ProjectMockup'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

function TechList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null

  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-dim uppercase">{title}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="rounded border border-border bg-bg-card px-2 py-1 text-xs text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useScrollLock(project !== null)

  useEffect(() => {
    if (!project) return

    closeButtonRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex cursor-pointer items-start justify-center overflow-y-auto bg-black/70 p-4 py-8 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            className="w-full max-w-3xl cursor-default rounded-2xl border border-border bg-bg-elevated shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-accent">{project.highlight}</p>
                <h2 id="project-modal-title" className="mt-1 text-2xl font-bold text-text">
                  {project.name}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-muted hover:text-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[70vh] space-y-8 overflow-y-auto p-5 sm:p-6">
              <ProjectMockup mockup={project.mockup} label={project.slug} />

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Overview</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.detail.overview}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">My Contribution</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.detail.contribution}</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Technical Stack</h3>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <TechList title="Frontend" items={project.frontend} />
                  <TechList title="Backend" items={project.backend} />
                  <TechList title="Integrations" items={project.integrations} />
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Key Features</h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Challenges</h3>
                <ul className="mt-3 space-y-2">
                  {project.detail.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dim" aria-hidden="true" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Technical Approach</h3>
                <ul className="mt-3 space-y-2">
                  {project.detail.approach.map((approach) => (
                    <li key={approach} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {approach}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-semibold tracking-wide text-accent uppercase">Result / Impact</h3>
                <ul className="mt-3 space-y-2">
                  {project.detail.impact.map((impact) => (
                    <li key={impact} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" aria-hidden="true" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
