import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { About } from '@/sections/About'
import { Architecture } from '@/sections/Architecture'
import { Contact } from '@/sections/Contact'
import { CurrentFocus } from '@/sections/CurrentFocus'
import { EducationSection } from '@/sections/EducationSection'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Impact } from '@/sections/Impact'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { Stats } from '@/sections/Stats'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Architecture />
        <Projects />
        <Impact />
        <EducationSection />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
