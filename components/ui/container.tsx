import * as React from "react"
import { cn } from "@/lib/cn"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-6",
          {
            "max-w-2xl": size === "sm",
            "max-w-4xl": size === "md",
            "max-w-6xl": size === "lg",
            "max-w-7xl": size === "xl",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }








