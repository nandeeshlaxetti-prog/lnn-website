"use client"

import { useEffect, useState } from 'react'

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has prefers-reduced-motion: reduce
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to detect scroll position
 */
export function useScrollPosition(): number {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * Hook to detect if element is in viewport
 */
export function useInView(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(ref)
    return () => observer.unobserve(ref)
  }, [ref, options])

  return { ref: setRef, inView }
}

/**
 * Utility to stagger reveal children elements
 */
export function staggerReveal(
  containerSelector: string,
  options?: {
    staggerDelay?: number
    animationDelay?: number
    threshold?: number
  }
) {
  const {
    staggerDelay = 90,
    animationDelay = 0,
    threshold = 0.1,
  } = options || {}

  useEffect(() => {
    const container = document.querySelector(containerSelector)
    if (!container) return

    const children = Array.from(container.children)
    if (children.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in-up')
              }, animationDelay + index * staggerDelay)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [containerSelector, staggerDelay, animationDelay, threshold])
}

/**
 * Utility to create smooth scroll to element
 */
export function smoothScrollTo(element: HTMLElement | string, offset = 0) {
  const target = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element

  if (!target) return

  const targetPosition = target.offsetTop - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 800
  let start: number | null = null

  function animation(currentTime: number) {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
