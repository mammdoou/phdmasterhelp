import { Hero } from './components/hero'
import { Services } from './components/services'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { About } from './components/about'
import { Navbar } from './components/navbar'
import { Process } from './components/process'
import { FAQ } from './components/faq'
import { WhatsappFloat } from './components/whatsapp-float'
import { LatestArticles } from './components/latest-articles'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <LatestArticles />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsappFloat />
    </main>
  )
}
