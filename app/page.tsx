import Hero from '@/components/Hero'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Video from '@/components/Video'
import Security from '@/components/Security'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Video />
      <Security />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
} 