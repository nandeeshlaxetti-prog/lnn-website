"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/cn"
import { useReducedMotion } from "@/lib/motion-hooks"

export interface PartnerLogo {
  src: string
  alt: string
  href: string
}

export interface PartnersOrbitProps {
  logos: PartnerLogo[]
  radius?: number
  intervalMs?: number
  className?: string
}

export function PartnersOrbit({
  logos,
  radius = 120,
  intervalMs = 3000,
  className,
}: PartnersOrbitProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [direction, setDirection] = React.useState<1 | -1>(1)
  const [isHovered, setIsHovered] = React.useState(false)

  // Calculate positions for orbit logos
  const orbitPositions = React.useMemo(() => {
    return logos.map((_, index) => {
      const angle = (index * 360) / logos.length
      const radians = (angle * Math.PI) / 180
      return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
        angle,
      }
    })
  }, [logos, radius])

  // Auto-rotate active partner
  React.useEffect(() => {
    if (prefersReducedMotion || isHovered) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length)
      setDirection((prev) => (prev * -1) as 1 | -1)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [logos.length, intervalMs, prefersReducedMotion, isHovered])

  // Handle logo click
  const handleLogoClick = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  if (logos.length === 0) return null

  return (
    <div
      className={cn("relative w-full h-full flex items-center justify-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orbit Container */}
      <div className="relative w-full h-full">
        {/* Orbit Logos */}
        {logos.map((logo, index) => {
          const position = orbitPositions[index]
          const isActive = index === activeIndex
          
          return (
            <motion.div
              key={`${logo.src}-${index}`}
              className="absolute top-1/2 left-1/2"
              style={{
                x: position.x,
                y: position.y,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : 0.4,
                scale: isActive ? 1 : 0.6,
                filter: isActive ? 'blur(0px)' : 'blur(1px)',
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.button
                className="w-16 h-16 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white p-2"
                onClick={() => handleLogoClick(logo.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit ${logo.alt}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </motion.div>
          )
        })}

        {/* Center Active Logo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <motion.button
              className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white p-3"
              onClick={() => handleLogoClick(logos[activeIndex].href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit ${logos[activeIndex].alt}`}
            >
              <Image
                src={logos[activeIndex].src}
                alt={logos[activeIndex].alt}
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Orbit Ring (Visual Guide) */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-full opacity-20"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
            animate={{
              rotate: direction * 360,
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        )}

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full opacity-60" />
      </div>

      {/* Partner Name Display */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm font-medium text-gray-600 text-center">
          {logos[activeIndex]?.alt}
        </p>
      </motion.div>

      {/* Reduced Motion Indicator */}
      {prefersReducedMotion && (
        <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">
          Reduced Motion
        </div>
      )}
    </div>
  )
}
