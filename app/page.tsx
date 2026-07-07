import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Portfolio } from "@/components/portfolio"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-primary-foreground pt-20">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Portfolio />
      <ContactSection />
      <Footer />
    </main>
  )
}
