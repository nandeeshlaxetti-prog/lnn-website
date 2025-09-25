"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion, useScrollPosition } from "@/lib/motion-hooks"
import { smoothScrollTo } from "@/lib/motion-hooks"

export interface BackToTopProps {
  threshold?: number
  className?: string
}

export function BackToTop({ threshold = 0.4, className }: BackToTopProps) {
  const prefersReducedMotion = useReducedMotion()
  const scrollPosition = useScrollPosition()
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = scrollPosition / (scrollHeight - windowHeight)
    setShow(scrollPercent > threshold)
  }, [scrollPosition, threshold])

  const handleClick = () => {
    smoothScrollTo(document.body, 0)
  }

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {show && (
          <button
            onClick={handleClick}
            className={cn(
              "fixed bottom-6 right-6 z-50 w-12 h-12 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
              className
            )}
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={handleClick}
          className={cn(
            "fixed bottom-6 right-6 z-50 w-12 h-12 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
            className
          )}
          aria-label="Back to top"
          variants={motionVariants.scaleIn}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transitions.fast}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}









