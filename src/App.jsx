import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import MethodSection from './components/MethodSection'
import CasesSection from './components/CasesSection'
import ClientsSection from './components/ClientsSection'
import ManifestoSection from './components/ManifestoSection'
import BlogPreviewSection from './components/BlogPreviewSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-petrol min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <MethodSection />
        <CasesSection />
        <ClientsSection />
        <ManifestoSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
