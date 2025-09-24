import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"
import { useInView } from "@/lib/motion-hooks"

export interface MotionSectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl"
  stagger?: boolean
}

const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  ({ className, spacing = "lg", stagger = false, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion()
    const { ref: inViewRef, inView } = useInView()
    
    const sectionRef = React.useCallback((node: HTMLElement) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(node)
        } else {
          ref.current = node
        }
      }
      inViewRef(node)
    }, [ref, inViewRef])

    if (prefersReducedMotion) {
      return (
        <section
          ref={sectionRef}
          className={cn(
            "py-16",
            {
              "py-8": spacing === "sm",
              "py-12": spacing === "md",
              "py-16": spacing === "lg",
              "py-24": spacing === "xl",
            },
            className
          )}
          {...props}
        >
          {children}
        </section>
      )
    }

    return (
      <motion.section
        ref={sectionRef}
        className={cn(
          "py-16",
          {
            "py-8": spacing === "sm",
            "py-12": spacing === "md",
            "py-16": spacing === "lg",
            "py-24": spacing === "xl",
          },
          className
        )}
        variants={stagger ? motionVariants.staggerContainer : motionVariants.slideUp}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        transition={transitions.smooth}
        {...(props as any)}
      >
        {stagger ? (
          <motion.div variants={motionVariants.staggerContainer}>
            {React.Children.map(children, (child, index) => (
              <motion.div
                key={index}
                variants={motionVariants.staggerItem}
                custom={index}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          children
        )}
      </motion.section>
    )
  }
)
MotionSection.displayName = "MotionSection"

export { MotionSection }
