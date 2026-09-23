interface TechIconProps {
  path: string
  size?: number
  className?: string
}

export function TechIcon({ path, size = 14, className }: TechIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={path} />
    </svg>
  )
}
