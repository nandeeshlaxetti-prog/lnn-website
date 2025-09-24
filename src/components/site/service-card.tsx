"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

interface Service {
  id: string
  title: string
  blurb: string
  description: string
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={motionVariants.staggerItem}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        ...transitions.smooth,
      }}
    >
      <Card hover className="h-full">
        <CardHeader>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription className="text-base">
            {service.blurb}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>
          <motion.div
            whileHover={prefersReducedMotion ? {} : { x: 4 }}
            transition={transitions.fast}
          >
            <Link
              href="/contact"
              className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors inline-flex items-center"
            >
              Learn More
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
