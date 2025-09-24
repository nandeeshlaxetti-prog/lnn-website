# Motion System Documentation

This document explains how to use the professional motion system built for the LNN Legal website.

## Overview

The motion system provides subtle, trustworthy animations that enhance user experience while maintaining accessibility and performance. All animations respect `prefers-reduced-motion` and use optimized properties (opacity, transform) to avoid layout thrash.

## Core Principles

- **Subtle & Professional**: Animations enhance rather than distract
- **Accessible**: Respects `prefers-reduced-motion: reduce`
- **Performant**: Only animates `opacity` and `transform` properties
- **Consistent**: Uses standardized durations and easing curves
- **Trustworthy**: Motion palette of 120-250ms with smooth easing

## Motion Configuration

### Durations
```typescript
durations: {
  fast: 120,    // Quick interactions
  normal: 200,  // Standard transitions
  slow: 250,    // Deliberate animations
}
```

### Easing Curves
```typescript
easings: {
  smooth: [0.2, 0, 0, 1],    // Primary easing
  easeOut: [0, 0, 0.2, 1],   // Exit animations
  easeIn: [0.4, 0, 1, 1],    // Entrance animations
}
```

### Distances
```typescript
distances: {
  small: 12,    // Subtle movements
  medium: 16,   // Standard slides
  large: 24,    // Prominent animations
}
```

## Motion Variants

### Basic Animations
- `fadeIn` - Simple opacity transition
- `fadeInDelayed` - Fade with 100ms delay
- `slideUp` - Opacity + translateY (12px)
- `slideUpDelayed` - Slide up with delay
- `scalePress` - Button press effect (scale 0.98)

### Card Animations
- `cardHover` - Lift effect (translateY -4px + shadow)
- `iconScale` - Icon scale on hover (0.96 → 1.0)

### Stagger Animations
- `staggerContainer` - Parent container for staggered children
- `staggerItem` - Individual items in staggered sequence

### Page Transitions
- `pageTransition` - Route change animations
- `crossFade` - Content cross-fade (150ms)
- `slideInRight` - Slide from right (16px)
- `slideInLeft` - Slide from left (16px)
- `scaleIn` - Scale in effect

### UI Components
- `toastSlideUp` - Toast notification entrance
- `progressBar` - Progress bar fill animation

## Motion Hooks

### `useReducedMotion()`
Detects if user prefers reduced motion:
```typescript
const prefersReducedMotion = useReducedMotion()
// Returns true if prefers-reduced-motion: reduce
```

### `useScrollPosition()`
Tracks scroll position for scroll-based animations:
```typescript
const scrollPosition = useScrollPosition()
// Returns current scroll Y position
```

### `useInView(options?)`
Detects when element enters viewport:
```typescript
const { ref, inView } = useInView({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
})
```

### `staggerReveal(containerSelector, options?)`
Utility to stagger reveal children elements:
```typescript
staggerReveal('.my-container', {
  staggerDelay: 90,
  animationDelay: 0,
  threshold: 0.1
})
```

### `smoothScrollTo(element, offset?)`
Smooth scroll to element:
```typescript
smoothScrollTo('#section-id', 80) // Scroll with 80px offset
```

## Components

### MotionSection
Replaces regular Section with motion capabilities:
```tsx
<MotionSection stagger>
  <div>Content that will stagger in</div>
</MotionSection>
```

### Button (Enhanced)
Now includes press animations:
```tsx
<Button>Press me for scale effect</Button>
```

### Card (Enhanced)
Optional hover animations:
```tsx
<Card hover>Hover for lift effect</Card>
```

### Toast
Animated notifications:
```tsx
<Toast
  open={open}
  onOpenChange={setOpen}
  title="Success!"
  description="Action completed"
  variant="success"
/>
```

### BackToTop
Appears at 40% scroll with smooth scroll:
```tsx
<BackToTop />
```

### StickyCTA
Appears after 50% scroll or 20s dwell:
```tsx
<StickyCTA />
```

### ProgressBar
Shows reading progress:
```tsx
<ProgressBar />
```

## Usage Examples

### Basic Page Animation
```tsx
import { MotionSection } from "@/components/ui/motion-section"

export default function Page() {
  return (
    <MotionSection stagger>
      <h1>This will animate in</h1>
      <p>This will stagger after the heading</p>
    </MotionSection>
  )
}
```

### Custom Animation
```tsx
import { motion } from "framer-motion"
import { motionVariants, transitions } from "@/lib/motion"
import { useReducedMotion } from "@/lib/motion-hooks"

export function CustomComponent() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={prefersReducedMotion ? {} : motionVariants.slideUp}
      initial="initial"
      whileInView="animate"
      transition={transitions.smooth}
    >
      Content
    </motion.div>
  )
}
```

### Scroll-Based Animation
```tsx
import { useScrollPosition } from "@/lib/motion-hooks"

export function ScrollComponent() {
  const scrollPosition = useScrollPosition()
  const isScrolled = scrollPosition > 100
  
  return (
    <motion.div
      animate={{ 
        opacity: isScrolled ? 0.8 : 1,
        scale: isScrolled ? 0.95 : 1 
      }}
    >
      Scroll to see effect
    </motion.div>
  )
}
```

## Accessibility

### Reduced Motion Support
All components automatically detect and respect `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are disabled */
}
```

### Focus Management
- All interactive elements have visible focus states
- Mobile menu locks body scroll when open
- Focus trapping in modals and overlays

### Keyboard Navigation
- All animations work with keyboard navigation
- Focus states are clearly visible
- Tab order is logical and accessible

## Performance

### Optimized Properties
Only animates `opacity` and `transform` to avoid layout thrash:
- ✅ `opacity`
- ✅ `transform` (translateX, translateY, scale)
- ❌ `width`, `height`, `top`, `left`

### Intersection Observer
Uses Intersection Observer for scroll-based animations to improve performance.

### Reduced Motion Fallbacks
When reduced motion is enabled, animations are simplified or disabled entirely.

## Testing

Visit `/motion-playground` to see all motion components in action. This page demonstrates:
- All motion variants
- Interactive components
- Stagger animations
- Toast notifications
- Scroll-based effects

## Best Practices

1. **Always check reduced motion**: Use `useReducedMotion()` hook
2. **Use semantic variants**: Choose appropriate motion variants
3. **Keep it subtle**: Avoid flashy or distracting animations
4. **Test with reduced motion**: Ensure functionality without animations
5. **Performance first**: Only animate transform and opacity
6. **Accessibility**: Maintain focus states and keyboard navigation

## Troubleshooting

### Animation not working?
- Check if `prefers-reduced-motion` is enabled
- Ensure you're using the correct motion variants
- Verify the component is in viewport for `whileInView` animations

### Performance issues?
- Avoid animating layout properties (width, height, top, left)
- Use `transform` and `opacity` only
- Consider using `will-change` CSS property for complex animations

### Accessibility concerns?
- Test with keyboard navigation
- Verify focus states are visible
- Check color contrast ratios
- Test with screen readers








