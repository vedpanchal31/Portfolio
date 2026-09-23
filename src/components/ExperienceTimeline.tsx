import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  Gauge,
  ShieldCheck,
  GitBranch,
} from 'lucide-react'
import type { ExperienceItem } from '@/types'
import { Reveal } from './Reveal'
import { skillIconPaths } from '@/data/skillIconPaths'
import { TechIcon } from './icons/TechIcon'

interface ExperienceTimelineProps {
  items: ExperienceItem[]
}

const pillarIcons = [Layers, Gauge, ShieldCheck, GitBranch]

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-16">
      {items.map((item, index) => (
        <div key={item.company} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Role Dossier & Key Metrics (5 cols on lg) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 self-start">
            <Reveal delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-accent/30">
                {/* Glow accent in the top corner */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

                {/* Status Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    {item.status || 'Active Role'}
                  </div>
                  {item.duration && (
                    <span className="rounded-md border border-border bg-bg-card px-2.5 py-1 text-xs font-medium text-dim">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                    {item.role}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-base font-medium text-accent">
                    <Briefcase size={16} className="shrink-0" />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Period & Location Metadata */}
                <div className="mt-4 flex flex-wrap items-center gap-4 border-y border-border/60 py-3 text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-dim" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-dim" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Summary */}
                {item.summary && (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                )}

                {/* Key Impact Stats Grid */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="mt-6">
                    <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-dim uppercase">
                      <Sparkles size={12} className="text-accent" />
                      Key Quantifiable Outcomes
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2.5">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border/80 bg-bg-card/70 p-3.5 transition-colors hover:border-accent/40"
                        >
                          <div className="text-xl font-bold tracking-tight text-accent-strong sm:text-2xl">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-xs leading-snug text-muted">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies used in this role */}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-6 border-t border-border/60 pt-5">
                    <p className="text-xs font-semibold tracking-wider text-dim uppercase">
                      Technologies Applied
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg-card px-2.5 py-1 text-xs font-medium text-text transition-colors hover:border-accent/50 hover:text-accent-strong"
                        >
                          {skillIconPaths[skill] ? (
                            <TechIcon path={skillIconPaths[skill]} size={12} className="text-dim" />
                          ) : null}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Engineering Pillars & Contributions (7 cols on lg) */}
          <div className="space-y-5 lg:col-span-7">
            {item.pillars && item.pillars.length > 0 ? (
              item.pillars.map((pillar, pIndex) => {
                const Icon = pillarIcons[pIndex % pillarIcons.length]
                return (
                  <Reveal key={pillar.title} delay={0.08 + pIndex * 0.07}>
                    <div className="group rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-card/40 sm:p-7">
                      {/* Pillar Header */}
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                          <Icon size={18} />
                        </span>
                        <div>
                          <span className="font-mono text-[11px] font-medium tracking-wider text-accent uppercase">
                            Pillar 0{pIndex + 1}
                          </span>
                          <h4 className="text-base font-semibold text-text sm:text-lg">
                            {pillar.title}
                          </h4>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="mt-5 space-y-3.5">
                        {pillar.points.map((point, ptIndex) => (
                          <li
                            key={ptIndex}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })
            ) : (
              /* Fallback for items without pillars */
              <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
                <ul className="space-y-4">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
