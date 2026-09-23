import type { ComponentType } from 'react'

export type IconComponent = ComponentType<{ size?: number; className?: string }>

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
}

export interface SkillCategory {
  title: string
  icon: IconComponent
  skills: string[]
}

export interface StatItem {
  value: string
  label: string
}

export interface ExperienceHighlight {
  text: string
}

export interface ExperiencePillar {
  title: string
  points: string[]
}

export interface ExperienceRoleMetric {
  value: string
  label: string
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  duration?: string
  status?: string
  summary?: string
  highlights: string[]
  metrics?: ExperienceRoleMetric[]
  skills?: string[]
  pillars?: ExperiencePillar[]
}

export interface WhatIBring {
  title: string
  icon: IconComponent
}

export interface ArchitectureLayer {
  id: string
  label: string
  technologies: string[]
}

export interface ProjectDetail {
  overview: string
  contribution: string
  challenges: string[]
  approach: string[]
  impact: string[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  frontend: string[]
  backend: string[]
  integrations: string[]
  features: string[]
  highlight: string
  mockup: 'venue' | 'home-services' | 'fintech'
  featured?: boolean
  detail: ProjectDetail
}

export interface ImpactMetric {
  value: string
  label: string
  description: string
}

export interface EducationItem {
  degree: string
  field?: string
  institution: string
  location?: string
  period: string
  gpa: string
  gpaScale?: string
  status?: string
  honors?: string
  summary?: string
  coursework?: string[]
  highlights?: string[]
}

export interface FocusItem {
  title: string
  icon: IconComponent
}
