// Motion configuration for professional law firm website
export const motionConfig = {
  durations: {
    fast: 120,
    normal: 200,
    slow: 250,
  },
  easings: {
    smooth: [0.2, 0, 0, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
  stagger: {
    fast: 60,
    normal: 90,
  },
  distances: {
    small: 12,
    medium: 16,
    large: 24,
  },
} as const

// Motion variants for common animations
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInDelayed: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { delay: 0.1 },
  },
  slideUp: {
    initial: { opacity: 0, y: motionConfig.distances.small },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -motionConfig.distances.small },
  },
  slideUpDelayed: {
    initial: { opacity: 0, y: motionConfig.distances.small },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -motionConfig.distances.small },
    transition: { delay: 0.1 },
  },
  scalePress: {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  },
  cardHover: {
    initial: { y: 0, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" },
    hover: { 
      y: -4, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: motionConfig.durations.fast / 1000 }
    },
  },
  iconScale: {
    initial: { scale: 0.96 },
    hover: { scale: 1 },
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: motionConfig.stagger.normal / 1000,
      },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: motionConfig.distances.small },
    animate: { opacity: 1, y: 0 },
  },
  pageTransition: {
    initial: { opacity: 0, y: motionConfig.distances.small },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -motionConfig.distances.small },
    transition: { duration: motionConfig.durations.normal / 1000 },
  },
  crossFade: {
    initial: { opacity: 0, x: 8 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -8 },
    transition: { duration: 0.15 },
  },
  slideInRight: {
    initial: { opacity: 0, x: motionConfig.distances.medium },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -motionConfig.distances.medium },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -motionConfig.distances.medium },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: motionConfig.distances.medium },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  toastSlideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  progressBar: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.3, ease: motionConfig.easings.smooth },
  },
} as const

// Common transition configurations
export const transitions = {
  smooth: {
    duration: motionConfig.durations.normal / 1000,
    ease: motionConfig.easings.smooth,
  },
  fast: {
    duration: motionConfig.durations.fast / 1000,
    ease: motionConfig.easings.easeOut,
  },
  slow: {
    duration: motionConfig.durations.slow / 1000,
    ease: motionConfig.easings.smooth,
  },
} as const









