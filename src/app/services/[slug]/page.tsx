import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

// Data loader (replace with real data source)
const services = {
  "civil-commercial-litigation": {
    title: "Civil & Commercial Litigation",
    icon: "⚖️",
    description:
      "Courtroom strategy for complex disputes: recovery, injunctions, arbitration support, and appeals.",
    content: "We handle all aspects of civil and commercial litigation including contractual disputes, company matters, shareholder issues, and appellate representation.",
    scope: [
      "Contractual disputes and recovery suits",
      "Company and shareholder litigation",
      "Arbitration and mediation support",
      "Appellate representation",
      "Interim reliefs and injunctions",
      "Execution proceedings"
    ],
    process: [
      "Initial case evaluation and strategy",
      "Drafting pleadings and applications",
      "Evidence collection and preparation",
      "Court appearances and advocacy",
      "Settlement negotiations",
      "Appeal and execution proceedings"
    ]
  },
  "criminal-defence-white-collar-laws": {
    title: "Criminal Defence & White Collar Laws",
    icon: "🛡️",
    description:
      "Robust defence across criminal courts with focus on fairness, due process, and protecting client rights.",
    content: "Our criminal defence practice covers bail applications, economic offences, cyber-crime defence, and trial advocacy.",
    scope: [
      "Bail and anticipatory bail applications",
      "Economic offences and white-collar crimes",
      "Cyber-crime defence",
      "Trial and appellate advocacy",
      "Quashing petitions under Section 482",
      "Discharge applications"
    ],
    process: [
      "Case analysis and defence strategy",
      "Bail application preparation",
      "Evidence review and counter-strategy",
      "Trial preparation and witness examination",
      "Appeal and revision proceedings",
      "Settlement negotiations where applicable"
    ]
  },
  "real-estate-property-laws": {
    title: "Real Estate & Property Laws",
    icon: "🏠",
    description:
      "Comprehensive property law services from due diligence to conveyancing and litigation.",
    content: "We provide title verification, sale documentation, RERA compliance, and property dispute resolution.",
    scope: [
      "Title due diligence and verification",
      "Sale, lease, and license documentation",
      "RERA compliance and registration",
      "Property litigation and disputes",
      "Succession and inheritance matters",
      "Commercial property transactions"
    ],
    process: [
      "Title search and verification",
      "Document preparation and review",
      "Registration and stamp duty guidance",
      "RERA compliance assistance",
      "Dispute resolution and litigation",
      "Post-transaction support"
    ]
  },
  "family-matrimonial-laws": {
    title: "Family & Matrimonial Laws",
    icon: "❤️",
    description:
      "Empathetic legal counsel for matrimonial disputes, custody, maintenance, and domestic violence protection.",
    content: "Our family law practice includes divorce proceedings, custody arrangements, maintenance orders, and domestic violence petitions.",
    scope: [
      "Divorce and judicial separation",
      "Custody and guardianship matters",
      "Maintenance and alimony",
      "Domestic Violence petitions",
      "Property settlement agreements",
      "Mediation and counseling support"
    ],
    process: [
      "Initial consultation and case assessment",
      "Petition drafting and filing",
      "Interim relief applications",
      "Evidence collection and preparation",
      "Court proceedings and advocacy",
      "Settlement and mediation support"
    ]
  },
  "corporate-advisory-trainings": {
    title: "Corporate Advisory & Trainings",
    icon: "🏢",
    description:
      "Strategic advice for companies and startups on compliance, governance, and business structuring.",
    content: "We offer company incorporation, M&A advisory, employment policies, and leadership training programs.",
    scope: [
      "Company incorporation and compliance",
      "M&A advisory and due diligence",
      "Employment and HR policies",
      "Board and leadership training",
      "Corporate governance frameworks",
      "Regulatory compliance assistance"
    ],
    process: [
      "Business structure analysis",
      "Documentation and compliance setup",
      "Policy framework development",
      "Training program delivery",
      "Ongoing compliance monitoring",
      "Strategic advisory support"
    ]
  },
  "contract-drafting-negotiation": {
    title: "Contract Drafting & Negotiation",
    icon: "📄",
    description:
      "Clear, enforceable contracts tailored to your needs with legal safety and commercial viability.",
    content: "Our contract services include commercial agreements, employment contracts, joint ventures, and service-level agreements.",
    scope: [
      "Commercial agreements and MSAs",
      "Employment contracts and policies",
      "Joint venture and shareholder agreements",
      "Service-level agreements",
      "NDAs and confidentiality agreements",
      "Licensing and IP agreements"
    ],
    process: [
      "Contract requirement analysis",
      "Drafting and template creation",
      "Negotiation and revision",
      "Legal review and risk assessment",
      "Finalization and execution",
      "Post-execution support"
    ]
  },
  "consumer-protection-laws": {
    title: "Consumer Protection Laws",
    icon: "🛒",
    description:
      "Redressal of grievances under consumer law before district, state, and national commissions.",
    content: "We advocate for individuals and groups against unfair trade practices, product liability, and insurance disputes.",
    scope: [
      "Consumer complaints and appeals",
      "Product liability cases",
      "Insurance disputes",
      "Class action consumer litigation",
      "E-commerce and service disputes",
      "Warranty and guarantee matters"
    ],
    process: [
      "Grievance assessment and documentation",
      "Complaint drafting and filing",
      "Evidence collection and preparation",
      "Commission proceedings",
      "Settlement negotiations",
      "Appeal and execution proceedings"
    ]
  },
  "banking-finance-laws": {
    title: "Banking & Finance Laws",
    icon: "🏦",
    description:
      "Specialized services in recovery, insolvency, and banking litigation under SARFAESI, IBC, NI Act.",
    content: "Our banking practice covers debt recovery, SARFAESI proceedings, IBC litigation, and cheque dishonour cases.",
    scope: [
      "Debt recovery and enforcement",
      "SARFAESI proceedings",
      "IBC litigation and advisory",
      "Cheque dishonour under NI Act",
      "Banking disputes and appeals",
      "MSME Samadhaan assistance"
    ],
    process: [
      "Case analysis and strategy development",
      "Application preparation and filing",
      "Collateral review and valuation",
      "DRT/NCLT proceedings",
      "Settlement negotiations",
      "Appeal and execution support"
    ]
  },
  "lokayukta-administrative-laws": {
    title: "Lokayukta & Administrative Laws",
    icon: "⚖️",
    description:
      "Comprehensive representation in Lokayukta proceedings and Karnataka State Administrative laws, ensuring accountability and transparency in government actions.",
    content: "We handle Lokayukta complaints, administrative law disputes, government accountability matters, and public interest litigation.",
    scope: [
      "Lokayukta complaints and proceedings",
      "Administrative law disputes",
      "Government accountability matters",
      "Public interest litigation",
      "RTI and transparency matters",
      "Administrative appeals and revisions"
    ],
    process: [
      "Complaint assessment and documentation",
      "Lokayukta petition preparation",
      "Evidence collection and verification",
      "Administrative proceedings",
      "Appeal and revision proceedings",
      "Compliance and implementation support"
    ]
  },
  "labour-employment-laws": {
    title: "Labour & Employment Laws",
    icon: "👷",
    description:
      "Expert guidance on labour law compliance, industrial disputes, and employment-related matters for both employers and employees.",
    content: "Our labour law practice covers industrial disputes, employment compliance, workers' compensation, and labour court proceedings.",
    scope: [
      "Industrial disputes and conciliation",
      "Labour court proceedings",
      "Employment law compliance",
      "Workers' compensation matters",
      "Trade union matters",
      "Industrial relations and negotiations"
    ],
    process: [
      "Dispute analysis and strategy",
      "Conciliation and mediation",
      "Labour court representation",
      "Compliance audit and advisory",
      "Settlement negotiations",
      "Appeal and execution proceedings"
    ]
  },
  "local-laws-land-matters": {
    title: "Local Laws & Land Matters",
    icon: "🏛️",
    description:
      "Specialized services in BBMP, KIADB, KPTCL, BDA, Municipal Laws, Land Revenue, and Land Acquisition matters across Karnataka.",
    content: "We handle BBMP compliance, KIADB matters, KPTCL disputes, BDA issues, municipal laws, land revenue, and land acquisition proceedings.",
    scope: [
      "BBMP and municipal law compliance",
      "KIADB and BDA matters",
      "KPTCL disputes and regulations",
      "Land acquisition proceedings",
      "Land revenue and property disputes",
      "Urban development and planning laws"
    ],
    process: [
      "Legal compliance assessment",
      "Application and petition preparation",
      "Government liaison and representation",
      "Dispute resolution and litigation",
      "Land acquisition negotiations",
      "Post-acquisition support and appeals"
    ]
  },
  "intellectual-property-rights-ipr": {
    title: "Intellectual Property Rights (IPR)",
    icon: "💡",
    description:
      "Comprehensive IPR services including patents, trademarks, copyrights, and designs protection, enforcement, and litigation across various forums.",
    content: "Our IPR practice covers patent filing, trademark registration, copyright protection, design registration, and IPR litigation.",
    scope: [
      "Patent filing and prosecution",
      "Trademark registration and opposition",
      "Copyright protection and enforcement",
      "Design registration and disputes",
      "IPR litigation and infringement matters",
      "IP licensing and agreements"
    ],
    process: [
      "IP assessment and strategy",
      "Application preparation and filing",
      "Examination and prosecution",
      "Opposition and cancellation proceedings",
      "Enforcement and litigation",
      "Licensing and commercial exploitation"
    ]
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = services[slug as keyof typeof services];
  const title = item ? `${item.title} | LNN Legal` : "Service | LNN Legal";
  const desc = item?.description ?? "Service details – LNN Legal";
  const url = `https://lnnlegal.in/services/${slug}`;
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, type: "article" },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}


// Server Component
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services[slug as keyof typeof services];
  
  if (!item) {
    return <main className="p-10 text-white">Not found</main>;
  }

  return <ServiceDetailClient item={item} slug={slug} />;
}