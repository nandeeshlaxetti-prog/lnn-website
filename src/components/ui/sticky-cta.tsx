"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion, useScrollPosition } from "@/lib/motion-hooks"
import { Button } from "./button"

export interface StickyCTAProps {
  className?: string
  scrollThreshold?: number
  dwellTime?: number
  onDismiss?: () => void
}

export function StickyCTA({
  className,
  scrollThreshold = 0.5,
  dwellTime = 20000,
  onDismiss,
}: StickyCTAProps) {
  const prefersReducedMotion = useReducedMotion()
  const scrollPosition = useScrollPosition()
  const [show, setShow] = React.useState(false)
  const [dismissed, setDismissed] = React.useState(false)
  const [dwellTimer, setDwellTimer] = React.useState<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = scrollPosition / (scrollHeight - windowHeight)
    
    if (scrollPercent > scrollThreshold && !dismissed) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [scrollPosition, scrollThreshold, dismissed])

  React.useEffect(() => {
    if (show && dwellTime > 0) {
      const timer = setTimeout(() => {
        if (!dismissed) {
          setShow(true)
        }
      }, dwellTime)
      setDwellTimer(timer)
      return () => clearTimeout(timer)
    }
  }, [show, dwellTime, dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    setShow(false)
    onDismiss?.()
  }

  if (prefersReducedMotion || dismissed) {
    return null
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={cn(
            "fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto",
            className
          )}
          variants={motionVariants.slideUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transitions.smooth}
        >
          <div className="bg-white rounded-2xl shadow-lg border p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Free Consultation
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get expert legal advice tailored to your specific situation.
                </p>
                <Button size="sm" className="w-full">
                  Schedule Now
                </Button>
              </div>
              <button
                onClick={handleDismiss}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}








