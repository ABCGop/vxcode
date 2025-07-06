import AgentSection from '@/components/AgentSection'
import CueSection from '@/components/CueSection'
import DownloadSection from '@/components/DownloadSection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PrivacySection from '@/components/PrivacySection'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <AgentSection />
      <CueSection />
      <PrivacySection />
      <Testimonials />
      <DownloadSection />
      <Footer />
    </main>
  )
}
