import { Hero } from './components/hero'
import { Services } from './components/services'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { About } from './components/about'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}

