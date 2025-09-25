import * as React from "react"
import { cn } from "@/lib/cn"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", ...props }, ref) => {
    return (
      <section
        ref={ref}
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
      />
    )
  }
)
Section.displayName = "Section"

export { Section }









