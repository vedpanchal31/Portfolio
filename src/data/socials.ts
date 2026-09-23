import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import type { SocialLink } from '@/types'

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ved-panchal-0a8b2123a/',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vedpanchal31',
    icon: GithubIcon,
  },
  {
    label: 'Email',
    href: 'mailto:panchalved31@gmail.com',
    icon: Mail,
  },
]

export const personal = {
  name: 'Ved Panchal',
  role: 'Full-Stack Developer',
  tagline: 'React.js | Next.js | TypeScript | NestJS',
  location: 'Ahmedabad, Gujarat, India',
  email: 'panchalved31@gmail.com',
  phone: '+91 9499780888',
  resumeUrl: '/resume.pdf',
  company: 'Wappnet Systems Pvt. Ltd.',
}
