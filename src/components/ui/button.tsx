import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion()
    const Comp = asChild ? Slot : "button"
    
    const MotionComp = motion(Comp as React.ElementType)
    
    return (
      <MotionComp
        className={cn(
          "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-amber-600 text-white hover:bg-amber-700": variant === "default",
            "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "underline-offset-4 hover:underline text-primary": variant === "link",
          },
          {
            "h-10 py-2 px-4": size === "default",
            "h-9 px-3 rounded-xl": size === "sm",
            "h-11 px-8 rounded-2xl": size === "lg",
          },
          className
        )}
        ref={ref}
        variants={prefersReducedMotion ? {} : motionVariants.scalePress}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={transitions.fast}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
