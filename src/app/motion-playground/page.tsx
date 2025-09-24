"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toast } from "@/components/ui/toast"
import { PartnersOrbit, PartnerLogo } from "@/components/ui/partners-orbit"
import { BackToTop } from "@/components/ui/back-to-top"
import { StickyCTA } from "@/components/ui/sticky-cta"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Container } from "@/components/ui/container"
import { MotionSection } from "@/components/ui/motion-section"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

export default function MotionPlaygroundPage() {
  const [toastOpen, setToastOpen] = useState(false)
  const [toastVariant, setToastVariant] = useState<"success" | "error">("success")
  const prefersReducedMotion = useReducedMotion()

  const samplePartners: PartnerLogo[] = [
    {
      src: "https://via.placeholder.com/100x100/3B82F6/FFFFFF?text=Tech",
      alt: "TechCorp",
      href: "https://example.com"
    },
    {
      src: "https://via.placeholder.com/100x100/10B981/FFFFFF?text=Innovate", 
      alt: "InnovateLabs",
      href: "https://example.com"
    },
    {
      src: "https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=Global",
      alt: "Global Systems",
      href: "https://example.com"
    },
    {
      src: "https://via.placeholder.com/100x100/EF4444/FFFFFF?text=Future",
      alt: "FutureTech",
      href: "https://example.com"
    }
  ]

  const showToast = (variant: "success" | "error") => {
    setToastVariant(variant)
    setToastOpen(true)
  }

  return (
    <>
      <ProgressBar />
      
      <MotionSection className="bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-foreground mb-6"
              variants={motionVariants.slideUp}
              initial="initial"
              animate="animate"
            >
              Motion Playground
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={motionVariants.slideUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
            >
              Explore all the motion components and animations in our design system.
              {prefersReducedMotion && (
                <span className="block mt-2 text-sm text-amber-600">
                  Reduced motion is enabled - animations are simplified
                </span>
              )}
            </motion.p>
          </div>
        </Container>
      </MotionSection>

      <MotionSection stagger>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card hover>
              <CardHeader>
                <CardTitle>Card Hover Effect</CardTitle>
                <CardDescription>Hover to see the lift animation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card lifts up and gets a shadow on hover.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <CardTitle>Stagger Animation</CardTitle>
                <CardDescription>Part of staggered reveal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card appears with a delay as part of the stagger effect.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <CardTitle>Motion Variants</CardTitle>
                <CardDescription>Using predefined animations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All animations use our motion configuration system.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Interactive Components
            </h2>
            <p className="text-lg text-muted-foreground">
              Test buttons, toasts, and other interactive elements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Buttons</h3>
              <div className="space-y-4">
                <Button className="w-full">Primary Button</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
                <Button variant="ghost" className="w-full">Ghost Button</Button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Toast Notifications</h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => showToast("success")}
                  className="w-full"
                >
                  Show Success Toast
                </Button>
                <Button 
                  onClick={() => showToast("error")}
                  variant="outline"
                  className="w-full"
                >
                  Show Error Toast
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Motion Variants
            </h2>
            <p className="text-lg text-muted-foreground">
              Different animation types and their configurations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-sm"
              variants={motionVariants.fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2">Fade In</h3>
              <p className="text-sm text-muted-foreground">
                Simple opacity transition
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-sm"
              variants={motionVariants.slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2">Slide Up</h3>
              <p className="text-sm text-muted-foreground">
                Opacity + translateY
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-sm"
              variants={motionVariants.scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2">Scale In</h3>
              <p className="text-sm text-muted-foreground">
                Opacity + scale
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-sm"
              variants={motionVariants.slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-2">Slide Right</h3>
              <p className="text-sm text-muted-foreground">
                Opacity + translateX
              </p>
            </motion.div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Partners Orbit
            </h2>
            <p className="text-lg text-muted-foreground">
              Interactive partner showcase with orbital animations
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80">
              <PartnersOrbit
                logos={samplePartners}
                radius={120}
                intervalMs={3000}
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Badge Animations
            </h2>
            <p className="text-lg text-muted-foreground">
              Different badge variants with hover effects
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="default">Default Badge</Badge>
            <Badge variant="secondary">Secondary Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
          </div>
        </Container>
      </MotionSection>

      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        title={toastVariant === "success" ? "Success!" : "Error"}
        description={
          toastVariant === "success"
            ? "This is a success message with smooth animations."
            : "This is an error message with smooth animations."
        }
        variant={toastVariant}
      />

      <BackToTop />
      <StickyCTA />
    </>
  )
}
