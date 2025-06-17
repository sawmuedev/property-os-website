import Hero from '@/components/Hero'
import FeatureSlider from '@/components/FeatureSlider'
import ScrollStorytelling from '@/components/ScrollStorytelling'
import ProblemSolution from '@/components/ProblemSolution'
import PricingTable from '@/components/PricingTable'
import FeatureComparison from '@/components/FeatureComparison'
import EditorialService from '@/components/EditorialService'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureSlider />
      <ScrollStorytelling />
      <ProblemSolution />
      <PricingTable />
      <FeatureComparison />
      <EditorialService />
      <ContactCTA />
    </main>
  );
}
