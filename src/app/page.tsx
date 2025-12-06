import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { Pricing } from "@/components/marketing/pricing"
import { Footer } from "@/components/marketing/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}
