"use client"

import { PartnersOrbit, PartnerLogo } from "@/components/ui/partners-orbit"
import { Container } from "@/components/ui/container"
import { MotionSection } from "@/components/ui/motion-section"

// Sample partner logos (you can replace these with actual partner logos)
const samplePartners: PartnerLogo[] = [
  {
    src: "https://via.placeholder.com/100x100/3B82F6/FFFFFF?text=Partner+1",
    alt: "TechCorp Solutions",
    href: "https://example.com/partner1"
  },
  {
    src: "https://via.placeholder.com/100x100/10B981/FFFFFF?text=Partner+2", 
    alt: "InnovateLabs",
    href: "https://example.com/partner2"
  },
  {
    src: "https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=Partner+3",
    alt: "Global Systems",
    href: "https://example.com/partner3"
  },
  {
    src: "https://via.placeholder.com/100x100/EF4444/FFFFFF?text=Partner+4",
    alt: "FutureTech",
    href: "https://example.com/partner4"
  },
  {
    src: "https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=Partner+5",
    alt: "Digital Partners",
    href: "https://example.com/partner5"
  },
  {
    src: "https://via.placeholder.com/100x100/06B6D4/FFFFFF?text=Partner+6",
    alt: "Cloud Solutions",
    href: "https://example.com/partner6"
  }
]

export default function PartnersOrbitDemo() {
  return (
    <>
      <MotionSection className="bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Partners Orbit Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive partner showcase with smooth orbital animations and accessibility features.
            </p>
          </div>
        </Container>
      </MotionSection>

      <MotionSection stagger>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Our Trusted Partners
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We work with industry leaders to deliver exceptional legal services. 
                Hover over the orbit to pause the animation, or click any logo to visit their website.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Center logo rotates every 3 seconds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Orbit direction alternates automatically</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Respects prefers-reduced-motion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Hover to pause and interact</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto">
                <PartnersOrbit
                  logos={samplePartners}
                  radius={120}
                  intervalMs={3000}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Different Configurations
            </h2>
            <p className="text-lg text-muted-foreground">
              Customize the orbit radius, timing, and behavior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Small Orbit</h3>
              <div className="w-48 h-48 mx-auto">
                <PartnersOrbit
                  logos={samplePartners.slice(0, 4)}
                  radius={80}
                  intervalMs={2000}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Large Orbit</h3>
              <div className="w-64 h-64 mx-auto">
                <PartnersOrbit
                  logos={samplePartners}
                  radius={140}
                  intervalMs={4000}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container>
          <div className="bg-amber-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Usage Example
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { PartnersOrbit, PartnerLogo } from "@/components/ui/partners-orbit"

const partners: PartnerLogo[] = [
  {
    src: "/logos/partner1.png",
    alt: "Partner Company",
    href: "https://partner.com"
  },
  // ... more partners
]

<PartnersOrbit
  logos={partners}
  radius={120}
  intervalMs={3000}
  className="w-80 h-80"
/>`}</pre>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}









