import type { ComponentType } from 'react'
import type { Project } from '@/types'

interface ProjectMockupProps {
  mockup: Project['mockup']
  label: string
}

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-bg-card px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
      <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
      <span className="h-2.5 w-2.5 rounded-full bg-dim/40" />
      <span className="ml-2 truncate font-mono text-[11px] text-dim">{label}</span>
    </div>
  )
}

function VenueMockup() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      <div className="col-span-2 space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-border bg-bg-card p-3">
          <div className="h-2.5 w-24 rounded bg-muted/30" />
          <div className="h-6 w-16 rounded bg-accent-soft" />
        </div>
        <div className="grid grid-cols-7 gap-1.5 rounded-lg border border-border bg-bg-card p-3">
          {Array.from({ length: 21 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square rounded ${[3, 8, 12, 17].includes(i) ? 'bg-accent/70' : 'bg-muted/15'}`}
            />
          ))}
        </div>
        <div className="space-y-2 rounded-lg border border-border bg-bg-card p-3">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-8 w-8 shrink-0 rounded bg-accent-soft" />
              <div className="h-2 flex-1 rounded bg-muted/25" />
              <div className="h-5 w-14 rounded bg-muted/15" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-bg-card p-3">
          <div className="h-2 w-14 rounded bg-muted/30" />
          <div className="mt-3 h-16 rounded bg-accent/20" />
        </div>
        <div className="space-y-2 rounded-lg border border-border bg-bg-card p-3">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="h-2 rounded bg-muted/20" style={{ width: `${70 - i * 10}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function HomeServicesMockup() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      <div className="space-y-3">
        <div className="relative overflow-hidden rounded-lg border border-border bg-bg-card p-3">
          <div className="h-2 w-20 rounded bg-muted/30" />
          <div className="mt-3 grid grid-cols-5 grid-rows-4 gap-0.5">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="h-3 rounded-sm border border-border/60" />
            ))}
          </div>
          <span className="absolute right-6 top-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]" />
          <span className="absolute right-16 top-16 h-3 w-3 rounded-full bg-accent-strong shadow-[0_0_0_4px_var(--color-accent-soft)]" />
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-3">
          <div className="h-2 w-16 rounded bg-muted/30" />
          <div className="mt-3 h-8 rounded bg-accent-soft" />
        </div>
      </div>
      <div className="space-y-2">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="rounded-lg border border-border bg-bg-card p-3">
            <div className="h-2 w-1/2 rounded bg-muted/30" />
            <div className="mt-2 h-2 w-1/3 rounded bg-muted/15" />
            <div className="mt-3 flex items-center justify-between">
              <div className="h-5 w-12 rounded bg-accent-soft" />
              <div className="h-2 w-8 rounded bg-muted/25" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FintechMockup() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      <div className="col-span-2 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="rounded-lg border border-border bg-bg-card p-2.5">
              <div className="h-2 w-8 rounded bg-muted/25" />
              <div className="mt-2 h-3 w-12 rounded bg-accent-soft" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-3">
          <div className="flex h-24 items-end gap-1.5">
            {[40, 65, 30, 80, 55, 90, 45, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-accent/60" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg border border-border bg-bg-card p-3">
          <div className="h-2 w-10 rounded bg-muted/30" />
          <div className="mx-auto mt-3 h-16 w-16 rounded-full border-4 border-accent/70" style={{ borderTopColor: 'var(--color-border)' }} />
        </div>
        <div className="space-y-1.5 rounded-lg border border-border bg-bg-card p-3">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="h-1.5 w-10 rounded bg-muted/20" />
              <div className="h-1.5 w-6 rounded bg-muted/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const MOCKUPS: Record<Project['mockup'], ComponentType> = {
  venue: VenueMockup,
  'home-services': HomeServicesMockup,
  fintech: FintechMockup,
}

export function ProjectMockup({ mockup, label }: ProjectMockupProps) {
  const MockupBody = MOCKUPS[mockup]

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated">
      <BrowserChrome label={label} />
      <MockupBody />
    </div>
  )
}
