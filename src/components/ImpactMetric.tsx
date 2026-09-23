interface ImpactMetricProps {
  value: string
  label: string
  description: string
}

export function ImpactMetric({ value, label, description }: ImpactMetricProps) {
  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
      <p className="font-mono text-4xl font-bold text-accent sm:text-5xl">{value}</p>
      <p className="mt-3 text-base font-semibold text-text">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}
