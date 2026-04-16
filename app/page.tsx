import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorks } from "@/components/how-it-works"
import { DigitalFeatures } from "@/components/digital-features"
import { SpecialistsCatalog } from "@/components/specialists-catalog"
import { Portfolio } from "@/components/portfolio"
import { AdditionalSections } from "@/components/additional-sections"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <DigitalFeatures />
      <SpecialistsCatalog />
      <Portfolio />
      <AdditionalSections />
      <ContactSection />
      <Footer />
    </main>
  )
}
