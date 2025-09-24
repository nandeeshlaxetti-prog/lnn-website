"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"
import { transitions } from "@/lib/motion"
import { useReducedMotion, useScrollPosition } from "@/lib/motion-hooks"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setIsScrolled(scrollPosition > 80)
  }, [scrollPosition])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  const contactInfo = {
    phone: "+91 9033286123",
    email: "nandeesh@lnnlegal.in"
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        )}
        initial={false}
        animate={{
          height: isScrolled ? 64 : 80,
        }}
        transition={prefersReducedMotion ? {} : transitions.fast}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center space-x-2 md:space-x-4 group">
              <motion.div
                className="flex items-center justify-center"
                style={{ perspective: "1000px" }}
                animate={{
                  width: isScrolled ? 48 : 64,
                  height: isScrolled ? 48 : 64,
                  scale: isScrolled ? 0.9 : 1.1,
                }}
                transition={prefersReducedMotion ? {} : transitions.fast}
              >
                <img
                  src="/images/logo/lnn-legal-logo.png"
                  alt="LNN Legal Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  style={{
                    width: isScrolled ? "48px" : "64px",
                    height: isScrolled ? "48px" : "64px",
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2)) drop-shadow(0 4px 8px rgba(212,175,55,0.3))",
                    transformStyle: "preserve-3d",
                  }}
                />
              </motion.div>
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors leading-tight tracking-tight">
                  LNN Legal
                </span>
                <span className="text-sm md:text-base text-gray-600 group-hover:text-[#D4AF37]/80 transition-colors leading-tight hidden sm:block font-medium">
                  Advocates & Solicitors
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#D4AF37] transition-colors relative group py-2"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={prefersReducedMotion ? {} : transitions.fast}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <motion.img
                src="/images/logo/advocate-logo.png"
                alt="Advocate Logo"
                width={48}
                height={48}
                className="object-contain hidden md:block"
                animate={{
                  width: isScrolled ? 32 : 48,
                  height: isScrolled ? 32 : 48,
                }}
                transition={prefersReducedMotion ? {} : transitions.fast}
              />
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                  transition={prefersReducedMotion ? {} : transitions.fast}
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <motion.div
                      className="w-full h-0.5 bg-gray-600"
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 6 : 0,
                      }}
                      transition={prefersReducedMotion ? {} : transitions.fast}
                    />
                    <motion.div
                      className="w-full h-0.5 bg-gray-600"
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                      transition={prefersReducedMotion ? {} : transitions.fast}
                    />
                    <motion.div
                      className="w-full h-0.5 bg-gray-600"
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -6 : 0,
                      }}
                      transition={prefersReducedMotion ? {} : transitions.fast}
                    />
                  </div>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={prefersReducedMotion ? {} : transitions.fast}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={prefersReducedMotion ? {} : transitions.smooth}
            >
              <div className="p-6 pt-20 h-full flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
                  <div 
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src="/images/logo/lnn-legal-logo.png"
                      alt="LNN Legal Logo"
                      width={56}
                      height={56}
                      className="object-contain w-14 h-14"
                      style={{
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2)) drop-shadow(0 4px 8px rgba(212,175,55,0.3))",
                        transformStyle: "preserve-3d",
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">LNN Legal</div>
                    <div className="text-xs text-gray-600">Advocates & Solicitors</div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        ...transitions.fast,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-lg transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 w-full py-3 px-4 bg-[#D4AF37] text-black rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>📞</span>
                    <span>Call Now: {contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>✉️</span>
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
