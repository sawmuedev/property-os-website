import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import FeatureSlider from '@/components/FeatureSlider'
import AISection from '@/components/AISection'
import ScrollStorytelling from '@/components/ScrollStorytelling'
import ProblemSolution from '@/components/ProblemSolution'
import ExpertiseSection from '@/components/ExpertiseSection'
import PricingTable from '@/components/PricingTable'
import FeatureComparison from '@/components/FeatureComparison'
import EditorialService from '@/components/EditorialService'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <FeatureSlider />
      <AISection />
      <ScrollStorytelling />
      <ProblemSolution />
      <ExpertiseSection />
      <PricingTable />
      <FeatureComparison />
      <EditorialService />
      <ContactCTA />
    </main>
  );
}
