import { Intro } from '@/components/pages/intro'
import { About } from '@/components/pages/about'
import { Experience } from '@/components/pages/experience'
import { Education } from '@/components/pages/education'
import { Skills } from '@/components/pages/skills'
import { Projects } from '@/components/pages/projects'
import { Contact } from '@/components/pages/contact'

export default function Main() {
  return (
    <div className='w-full pb-12 max-w-2xl mx-auto'>
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}
