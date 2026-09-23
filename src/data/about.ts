import {
  Component,
  Gauge,
  KeyRound,
  Layers,
  Plug,
  Search,
  ServerCog,
  Sparkles,
} from 'lucide-react'
import type { FocusItem, WhatIBring } from '@/types'

export const whatIBring: WhatIBring[] = [
  { title: 'Scalable Frontend Architecture', icon: Layers },
  { title: 'Full-Stack Development', icon: ServerCog },
  { title: 'API Integration', icon: Plug },
  { title: 'Authentication & RBAC', icon: KeyRound },
  { title: 'Performance Optimization', icon: Gauge },
  { title: 'SEO & SSR', icon: Search },
  { title: 'Production Problem Solving', icon: Sparkles },
  { title: 'Clean Component Architecture', icon: Component },
]

export const focusAreas: FocusItem[] = [
  { title: 'Scalable frontend systems', icon: Layers },
  { title: 'Full-stack application development', icon: ServerCog },
  { title: 'Backend API development', icon: Plug },
  { title: 'Modern React / Next.js architecture', icon: Component },
  { title: 'TypeScript-first codebases', icon: Sparkles },
  { title: 'Secure authentication systems', icon: KeyRound },
]
