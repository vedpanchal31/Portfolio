import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    company: 'Wappnet Systems Pvt. Ltd.',
    role: 'Software Developer',
    location: 'Ahmedabad, India',
    period: 'January 2024 – Present',
    duration: '1+ Years',
    status: 'Current Role · Full-Time',
    summary:
      'Driving frontend architecture, design system development, and high-performance React/Next.js engineering across multiple production business workflows.',
    metrics: [
      { value: '40%', label: 'API Request Reduction' },
      { value: '30–35%', label: 'Core Web Vitals Boost' },
      { value: '3+', label: 'Products on UI System' },
      { value: '25%', label: 'Sprint Delivery Velocity' },
    ],
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'NextAuth',
      'Keycloak',
      'Tailwind CSS',
      'REST APIs',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
    ],
    pillars: [
      {
        title: 'Frontend Architecture & UI Systems',
        points: [
          'Delivered production-grade React.js and Next.js applications supporting multiple business workflows, maintaining consistent cross-browser compatibility and responsive cross-device performance.',
          'Architected scalable Redux Toolkit state management solutions, reducing duplicate API requests by approximately 40%.',
          'Built a reusable React component library used across 3+ products, accelerating feature development by 25% while maintaining UI consistency.',
        ],
      },
      {
        title: 'Performance Optimization & Core Web Vitals',
        points: [
          'Improved frontend performance by 30–35% through code splitting, lazy loading, memoization and optimized rendering strategies, directly improving Core Web Vitals (LCP, CLS, FID).',
          'Monitored and debugged UI and performance issues using Chrome DevTools and React Developer Tools, resolving critical issues pre-release.',
        ],
      },
      {
        title: 'Security, Authentication & Code Quality',
        points: [
          'Implemented secure authentication and authorization flows using NextAuth, Keycloak and JWT-based RBAC across multi-tenant applications.',
          'Refactored legacy JavaScript codebases into modern ES6+/TypeScript patterns, improving maintainability and reducing production regressions.',
        ],
      },
      {
        title: 'Full-Stack Integration & Team Delivery',
        points: [
          'Integrated RESTful APIs with proper authentication, loading state management, error boundaries and graceful degradation.',
          'Applied intermediate-level backend knowledge (Node.js, Express.js, NestJS, MongoDB, PostgreSQL) to collaborate on API design and debug integration issues.',
          'Collaborated with backend developers, UI/UX designers and product owners in Agile/Scrum sprints, participating in code reviews to uphold engineering standards.',
        ],
      },
    ],
    highlights: [
      'Delivered production-grade React.js and Next.js applications supporting multiple business workflows, maintaining consistent cross-browser compatibility and responsive cross-device performance.',
      'Architected scalable Redux Toolkit state management solutions, reducing duplicate API requests by approximately 40%.',
      'Improved frontend performance by 30–35% through code splitting, lazy loading, memoization and optimized rendering strategies, directly improving Core Web Vitals (LCP, CLS, FID).',
      'Built a reusable React component library used across 3+ products, accelerating feature development by 25% while maintaining UI consistency.',
      'Implemented secure authentication and authorization flows using NextAuth, Keycloak and JWT-based RBAC across multi-tenant applications.',
      'Refactored legacy JavaScript codebases into modern ES6+/TypeScript patterns, improving maintainability and reducing production regressions.',
      'Integrated RESTful APIs with proper authentication, loading state management, error boundaries and graceful degradation.',
      'Applied intermediate-level backend knowledge (Node.js, Express.js, NestJS, MongoDB, PostgreSQL) to collaborate on API design and debug integration issues.',
      'Collaborated with backend developers, UI/UX designers and product owners in Agile/Scrum sprints, participating in code reviews to uphold engineering standards.',
      'Monitored and debugged UI and performance issues using Chrome DevTools and React Developer Tools, resolving critical issues pre-release.',
    ],
  },
]
