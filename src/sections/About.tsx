import { whatIBring } from '@/data/about'
import { personal } from '@/data/socials'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Full-stack direction, frontend-first expertise" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              I'm a Software Developer at {personal.company} with 2+ years of
              experience building production-grade React.js and Next.js applications across multiple business
              workflows. My strongest depth is on the frontend — component architecture, state management and
              performance — and I've been steadily building toward full-stack ownership.
            </p>
            <p>
              On the backend, I work with Node.js, Express.js and NestJS alongside MongoDB and PostgreSQL,
              collaborating on API design and debugging integration issues rather than owning backend systems
              end-to-end. This lets me reason about the full request lifecycle — from a React component down to
              the database — even where my day-to-day strength remains the frontend.
            </p>
            <p>
              I've implemented secure authentication and authorization flows using NextAuth, Keycloak and
              JWT-based RBAC across multi-tenant applications, integrated REST APIs with proper error handling
              and loading states, and refactored legacy JavaScript into modern TypeScript. I care about
              measurable outcomes: reducing duplicate API calls, improving Core Web Vitals, and building
              component libraries that speed up delivery across teams.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-dim uppercase">What I Bring</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {whatIBring.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-lg border border-border bg-bg-card p-3.5 transition-colors hover:border-accent/40"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-text">{item.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
