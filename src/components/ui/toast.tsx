"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

export interface ToastProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  variant?: "default" | "success" | "error"
  duration?: number
}

export function Toast({
  open,
  onOpenChange,
  title,
  description,
  variant = "default",
  duration = 5000,
}: ToastProps) {
  const prefersReducedMotion = useReducedMotion()

  React.useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [open, duration, onOpenChange])

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800"
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      default:
        return "bg-white border-gray-200 text-gray-800"
    }
  }

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {open && (
          <div
            className={cn(
              "fixed top-4 right-4 z-50 max-w-sm rounded-2xl border p-4 shadow-lg",
              getVariantStyles()
            )}
          >
            {title && <div className="font-semibold">{title}</div>}
            {description && <div className="text-sm mt-1">{description}</div>}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={cn(
            "fixed top-4 right-4 z-50 max-w-sm rounded-2xl border p-4 shadow-lg",
            getVariantStyles()
          )}
          variants={motionVariants.toastSlideUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transitions.smooth}
        >
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="text-sm mt-1">{description}</div>}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}









