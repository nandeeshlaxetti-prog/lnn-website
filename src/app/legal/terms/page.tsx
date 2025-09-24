import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service - LNN Legal",
  description: "Terms of Service for LNN Legal website and legal services.",
};

export default function TermsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on LNN Legal's 
              website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on LNN Legal's website are provided on an 'as is' basis. LNN Legal makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall LNN Legal or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on LNN Legal's website, even if LNN Legal 
              or a LNN Legal authorized representative has been notified orally or in writing of the 
              possibility of such damage. Because some jurisdictions do not allow limitations on implied 
              warranties, or limitations of liability for consequential or incidental damages, these 
              limitations may not apply to you.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on LNN Legal's website could include technical, typographical, 
              or photographic errors. LNN Legal does not warrant that any of the materials on its 
              website are accurate, complete, or current. LNN Legal may make changes to the materials 
              contained on its website at any time without notice.
            </p>

            <h2>6. Links</h2>
            <p>
              LNN Legal has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by LNN Legal of the site. Use of any such linked website is at the user's 
              own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              LNN Legal may revise these terms of service for its website at any time without notice. 
              By using this website you are agreeing to be bound by the then current version of these 
              terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws 
              of the State of New York and you irrevocably submit to the exclusive jurisdiction of 
              the courts in that state or location.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              LNN Legal<br />
              1234 Legal Plaza<br />
              New York, NY 10001<br />
              Phone: (555) 123-4567<br />
              Email: info@lnnlegal.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}






