"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

interface HeroProps {
  headline: string
  subheadline: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
}

export function Hero({
  headline,
  subheadline,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-semibold text-foreground mb-6 text-balance"
            variants={motionVariants.slideUp}
            initial="initial"
            animate="animate"
            transition={transitions.smooth}
          >
            {headline}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto"
            variants={motionVariants.slideUp}
            initial="initial"
            animate="animate"
            transition={{
              delay: 0.1,
              ...transitions.smooth,
            }}
          >
            {subheadline}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={motionVariants.staggerContainer}
            initial="initial"
            animate="animate"
            transition={{
              delay: 0.2,
              ...transitions.smooth,
            }}
          >
            <motion.div variants={motionVariants.staggerItem}>
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href={primaryCtaHref}>{primaryCtaText}</Link>
              </Button>
            </motion.div>
            <motion.div variants={motionVariants.staggerItem}>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background animation */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </section>
  )
}
