import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react'
import type { EducationItem } from '@/types'

interface EducationCardProps {
  item: EducationItem
}

export function EducationCard({ item }: EducationCardProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      {/* Left Column: Degree Dossier & Academic Standing (5 cols on lg) */}
      <div className="space-y-6 self-start lg:sticky lg:top-24 lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 backdrop-blur-sm transition-all hover:border-accent/30 sm:p-8">
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />

          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {item.status || 'Graduated'}
            </div>
            {item.honors && (
              <span className="rounded-md border border-border bg-bg-card px-2.5 py-1 text-xs font-medium text-dim">
                {item.honors}
              </span>
            )}
          </div>

          {/* Degree & Institution */}
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl">
                  {item.degree}
                </h3>
                {item.field && (
                  <p className="text-sm font-semibold text-accent">{item.field}</p>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted">
              <Building2 size={15} className="shrink-0 text-dim" />
              <span>{item.institution}</span>
            </div>
          </div>

          {/* Period & Location Metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-4 border-y border-border/60 py-3 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <Calendar size={13} className="text-dim" />
              <span>{item.period}</span>
            </div>
            {item.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-dim" />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          {/* CGPA & Academic Standing */}
          <div className="mt-6 rounded-xl border border-border/80 bg-bg-card/70 p-4 transition-colors hover:border-accent/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-dim uppercase">
                  Academic Performance
                </p>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold tracking-tight text-accent-strong sm:text-3xl">
                    {item.gpa}
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {item.gpaScale || 'CGPA'}
                  </span>
                </div>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent">
                <Award size={18} aria-hidden="true" />
              </span>
            </div>
            {item.honors && (
              <p className="mt-2 text-xs font-medium text-text">
                Standing: <span className="text-accent">{item.honors}</span>
              </p>
            )}
          </div>

          {/* Summary */}
          {item.summary && (
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {item.summary}
            </p>
          )}
        </div>
      </div>

      {/* Right Column: Coursework & Engineering Foundation (7 cols on lg) */}
      <div className="space-y-5 lg:col-span-7">
        {/* Coursework Panel */}
        {item.coursework && item.coursework.length > 0 && (
          <div className="group rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-card/40 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                <BookOpen size={18} />
              </span>
              <div>
                <span className="font-mono text-[11px] font-medium tracking-wider text-accent uppercase">
                  Curriculum Specialization
                </span>
                <h4 className="text-base font-semibold text-text sm:text-lg">
                  Core Computer Science Coursework
                </h4>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {item.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-bg-card/60 p-3 text-xs font-medium text-text transition-colors hover:border-accent/40 hover:text-accent-strong"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-snug">{course}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Foundation & Highlights Panel */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="group rounded-2xl border border-border bg-bg-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-card/40 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                <Sparkles size={18} />
              </span>
              <div>
                <span className="font-mono text-[11px] font-medium tracking-wider text-accent uppercase">
                  Engineering Foundations
                </span>
                <h4 className="text-base font-semibold text-text sm:text-lg">
                  Core Competencies & Academic Focus
                </h4>
              </div>
            </div>

            <ul className="mt-5 space-y-3.5">
              {item.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
