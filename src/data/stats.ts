import type { ImpactMetric, StatItem } from '@/types'

export const quickStats: StatItem[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Production Projects' },
  { value: '3+', label: 'Products Using Shared Components' },
  { value: '40%', label: 'Fewer Duplicate API Requests' },
]

export const impactMetrics: ImpactMetric[] = [
  {
    value: '~40%',
    label: 'Reduction in duplicate API requests',
    description:
      'Achieved through strategic Redux Toolkit caching and state normalization across large-scale applications.',
  },
  {
    value: '30–35%',
    label: 'Frontend performance improvement',
    description: 'Measured via Core Web Vitals (LCP, CLS, FID) through code splitting, lazy loading and memoization.',
  },
  {
    value: '~25%',        
    label: 'Faster feature development',
    description: 'Enabled by a reusable React component library adopted across multiple product teams.',
  },
  {
    value: '3+',
    label: 'Products using shared components',
    description: 'A single component library kept UI consistent while accelerating delivery across products.',
  },
]
