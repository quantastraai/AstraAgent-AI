import { BackgroundEffects } from './BackgroundEffects'
import { AutomationSection } from './AutomationSection'
import { DashboardPreviewSection } from './DashboardPreviewSection'
import { FeaturesSection } from './FeaturesSection'
import { Footer } from './Footer'
import { HeroShowcase } from './HeroShowcase'
import { IntegrationsSection } from './IntegrationsSection'
import { Navbar } from './Navbar'
import { TrustedBySection } from './TrustedBySection'

export function LandingPage() {
  return (
    <div className="relative bg-[#09090B]">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <HeroShowcase />
        <TrustedBySection />
        <FeaturesSection />
        <DashboardPreviewSection />
        <AutomationSection />
        <IntegrationsSection />
      </main>
      <Footer />
    </div>
  )
}
