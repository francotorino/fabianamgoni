import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Photobooks from '@/components/Photobooks'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Photobooks />
      <Contact />
    </main>
  )
}
