import { useState } from 'react'
import { architectureLayers, architectureServices } from '@/data/architecture'

export function ArchitectureDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeTechnologies = new Set(
    activeId
      ? (architectureServices.find((service) => service.id === activeId)?.relatedLayers ?? [activeId])
      : [],
  )

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-2.5" role="list" aria-label="Full-stack architecture layers">
        {architectureLayers.map((layer, index) => {
          const isActive = activeId === layer.id || activeTechnologies.has(layer.id)
          return (
            <div key={layer.id}>
              <button
                type="button"
                role="listitem"
                onMouseEnter={() => setActiveId(layer.id)}
                onFocus={() => setActiveId(layer.id)}
                onMouseLeave={() => setActiveId(null)}
                onBlur={() => setActiveId(null)}
                className={`w-full rounded-xl border p-4 text-left transition-all duration-200 ${
                  isActive ? 'border-accent/60 bg-accent-soft' : 'border-border bg-bg-elevated'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-sm font-semibold ${isActive ? 'text-accent-strong' : 'text-text'}`}>
                    {layer.label}
                  </span>
                  <span className="font-mono text-xs text-dim">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded border px-2 py-0.5 text-xs transition-colors ${
                        isActive ? 'border-accent/40 text-accent-strong' : 'border-border text-dim'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
              {index < architectureLayers.length - 1 ? (
                <div className="ml-4 h-2.5 w-px bg-border" aria-hidden="true" />
              ) : null}
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs font-semibold tracking-wide text-dim uppercase">Supporting Services</p>
        <p className="mt-1 text-xs text-dim">Hover a service to see where it connects in the stack.</p>
        <div className="mt-4 space-y-2">
          {architectureServices.map((service) => (
            <button
              key={service.id}
              type="button"
              onMouseEnter={() => setActiveId(service.id)}
              onFocus={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              onBlur={() => setActiveId(null)}
              className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                activeId === service.id
                  ? 'border-accent/50 bg-accent-soft text-accent-strong'
                  : 'border-border text-muted hover:border-border-strong hover:text-text'
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
