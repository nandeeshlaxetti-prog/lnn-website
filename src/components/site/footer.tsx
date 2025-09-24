import Link from "next/link"
import contactData from "@/data/contact.json"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
              <img
                src="/images/logo/lnn-legal-logo.png"
                alt="LNN Legal Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-semibold text-foreground">LNN Legal</span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
            Providing exceptional legal services with integrity, expertise, and personalized attention to every client.
          </p>
          <div className="space-y-2">
            <p className="text-xs md:text-sm text-muted-foreground">
              <strong>Address:</strong> {contactData.address.fullAddress}
            </p>
          </div>
        </div>

        <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mb-3 md:mb-0">
            <Link
              href="/legal/privacy"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <a
              href={contactData.socialMedia.linkedin}
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={contactData.socialMedia.twitter}
              className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}





