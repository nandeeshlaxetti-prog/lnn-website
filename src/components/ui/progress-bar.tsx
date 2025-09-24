"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion, useScrollPosition } from "@/lib/motion-hooks"

export interface ProgressBarProps {
  className?: string
}

export function ProgressBar({ className }: ProgressBarProps) {
  const prefersReducedMotion = useReducedMotion()
  const scrollPosition = useScrollPosition()
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = scrollPosition / (scrollHeight - windowHeight)
    setProgress(Math.min(scrollPercent, 1))
  }, [scrollPosition])

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50",
          className
        )}
      >
        <div
          className="h-full bg-amber-600 transition-all duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50",
        className
      )}
    >
      <motion.div
        className="h-full bg-amber-600 origin-left"
        variants={motionVariants.progressBar}
        initial="initial"
        animate="animate"
        style={{ scaleX: progress }}
        transition={transitions.smooth}
      />
    </div>
  )
}








