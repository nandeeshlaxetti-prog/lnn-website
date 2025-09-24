# LNN Legal Website

A modern, fast marketing website for LNN Legal built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Apple-style spacing, big typography, near-black/white palette with soft-gold accents
- **Professional Motion System**: Subtle, trustworthy animations with Framer Motion
- **Responsive**: Works perfectly on desktop and mobile devices
- **Fast Performance**: Built with Next.js 14 App Router and optimized for speed
- **SEO Optimized**: Includes sitemap, robots.txt, and proper meta tags
- **Accessible**: Follows accessibility best practices with proper focus states, semantic HTML, and reduced motion support
- **Motion System**: Comprehensive animation system with staggered reveals, hover effects, and scroll-based animations

## Motion System

The website includes a professional motion system with:

- **Subtle Animations**: 120-250ms durations with smooth easing curves
- **Accessibility First**: Respects `prefers-reduced-motion: reduce`
- **Performance Optimized**: Only animates `opacity` and `transform` properties
- **Staggered Reveals**: Elements animate in sequence for visual hierarchy
- **Interactive Feedback**: Hover effects, button presses, and form feedback
- **Scroll-Based**: Animations trigger as elements enter the viewport

### Motion Components

- **MotionSection**: Animated sections with stagger support
- **Toast**: Animated notifications with auto-dismiss
- **BackToTop**: Smooth scroll to top button
- **StickyCTA**: Contextual call-to-action
- **ProgressBar**: Reading progress indicator
- **Enhanced Cards**: Hover lift effects
- **Enhanced Buttons**: Press animations

Visit `/motion-playground` to see all motion components in action.

## Pages

- **Home** (`/`) - Hero section, practice areas highlights, why choose us, contact CTA
- **About** (`/about`) - Firm overview, values, highlights, office information
- **Services** (`/services`) - Complete list of legal services with descriptions
- **Team** (`/team`) - Team members with filtering by role (Partners, Associates, Clerks, Interns)
- **Contact** (`/contact`) - Contact form with validation and success states
- **Legal Pages** (`/legal/terms`, `/legal/privacy`) - Terms of service and privacy policy
- **Motion Playground** (`/motion-playground`) - Interactive showcase of all motion components

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **Deployment**: Ready for Vercel deployment

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── legal/             # Legal pages
│   ├── motion-playground/ # Motion system showcase
│   ├── services/          # Services page
│   ├── team/              # Team page
│   └── layout.tsx         # Root layout
├── components/
│   ├── site/              # Site-specific components
│   │   ├── header.tsx     # Navigation header with motion
│   │   ├── footer.tsx     # Site footer
│   │   ├── hero.tsx       # Hero section with animations
│   │   ├── service-card.tsx
│   │   └── team-card.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Enhanced with motion
│       ├── card.tsx       # Enhanced with hover effects
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       ├── container.tsx
│       ├── section.tsx
│       ├── motion-section.tsx  # Motion-aware section
│       ├── toast.tsx          # Animated notifications
│       ├── back-to-top.tsx    # Smooth scroll button
│       ├── sticky-cta.tsx     # Contextual CTA
│       └── progress-bar.tsx   # Reading progress
├── data/                  # JSON data files
│   ├── services.json      # Legal services data
│   ├── team.json         # Team members data
│   └── contact.json      # Contact information
├── lib/
│   ├── cn.ts             # Utility for class merging
│   ├── motion.ts         # Motion configuration and variants
│   └── motion-hooks.ts   # Motion-related React hooks
└── MOTION_SYSTEM.md      # Comprehensive motion system documentation
```

## Data Management

The website uses local JSON files for content management:

- **Services**: Edit `src/data/services.json` to update legal services
- **Team**: Edit `src/data/team.json` to update team members
- **Contact**: Edit `src/data/contact.json` to update contact information

## Contact Form

The contact form at `/contact` includes:
- Client-side validation
- Server-side API endpoint at `/api/contact`
- Success/error state handling with animated toasts
- Form data logging (ready for database integration)

## Motion System Documentation

See `MOTION_SYSTEM.md` for comprehensive documentation on:
- Motion configuration and variants
- Usage examples
- Accessibility considerations
- Performance optimization
- Best practices

## Deployment

The website is ready for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Customization

### Colors
The design uses a soft-gold accent color (`amber-600`) that can be easily changed by updating the Tailwind classes throughout the components.

### Content
All content is managed through JSON files in the `src/data/` directory, making it easy to update without touching code.

### Styling
The design follows Apple's design principles with:
- Generous white space
- Large, readable typography
- Subtle shadows and rounded corners
- Clean, minimal interface
- Professional motion system

### Motion
The motion system is highly configurable:
- Adjust durations in `src/lib/motion.ts`
- Modify easing curves
- Add new motion variants
- Customize stagger delays

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to LNN Legal.