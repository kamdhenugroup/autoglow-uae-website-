import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Our Services | AutoGlow Paint Protection & Detailing",
  description: "Explore AutoGlow's complete suite of high-end surface protection, window tinting, paint correction, interior restoration, and mechanical maintenance services in the UAE.",
};

const ALL_SERVICES = [
  {
    title: "Paint Protection Film",
    description: "Invisible, self-healing shield against rock chips and scratches.",
    href: "/services/paint-protection-film",
    icon: "01",
  },
  {
    title: "Ceramic & Graphene Coating",
    description: "Hydrophobic layer for extreme gloss and chemical resistance.",
    href: "/services/ceramic-coating",
    icon: "02",
  },
  {
    title: "Window Tinting",
    description: "Premium IR-rejection films for maximum heat reduction.",
    href: "/services/window-tinting",
    icon: "03",
  },
  {
    title: "Paint Correction & Polishing",
    description: "Precision machine polishing to remove swirls and imperfections.",
    href: "/services/paint-correction",
    icon: "04",
  },
  {
    title: "Vinyl Wrapping & Customization",
    description: "Complete aesthetic transformation with premium cast vinyl.",
    href: "/services/vinyl-wrapping",
    icon: "05",
  },
  {
    title: "Body Shop & Collision Repair",
    description: "Expert restoration and repair for collision damage.",
    href: "/services/body-shop",
    icon: "06",
  },
  {
    title: "Full Detailing",
    description: "Deep extraction, sanitization, and material protection.",
    href: "/services/full-detailing",
    icon: "07",
  },
  {
    title: "Wash",
    description: "Premium safe-wash methods to maintain your vehicle's finish.",
    href: "/services/wash",
    icon: "08",
  },
  {
    title: "Glass & Windshield Repair",
    description: "Hydrophobic coatings and impact-resistant windshield films.",
    href: "/services/glass-repair",
    icon: "09",
  },
  {
    title: "Interior & Leather Restoration",
    description: "Restoring and protecting premium interior materials.",
    href: "/services/interior-restoration",
    icon: "10",
  },
  {
    title: "Wheel & Rim Repair",
    description: "Curb rash repair and custom wheel finishes.",
    href: "/services/wheel-repair",
    icon: "11",
  },
  {
    title: "Peelable Paint",
    description: "Aesthetic color change with the protection of traditional PPF.",
    href: "/services/peelable-paint",
    icon: "12",
  },
  {
    title: "Auto Maintenance (Oil Change & Quick Service)",
    description: "Essential mechanical upkeep to keep your vehicle running perfectly.",
    href: "/services/auto-maintenance",
    icon: "13",
  },
  {
    title: "Commercial & Residential Surface Protection",
    description: "Architectural films and surface protection for properties.",
    href: "/services/commercial-residential",
    icon: "14",
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="flex flex-col w-full">
      <ScrollReveal as="section" className="scroll-mt-24 pt-32 pb-20 md:pt-48 md:pb-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Our Disciplines</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Engineered to Protect.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              We offer a comprehensive suite of surface protection, restyling, and restoration services for those who demand absolute perfection.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {ALL_SERVICES.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group bg-background p-8 hover:bg-surface transition-colors flex flex-col h-full lg:last:col-span-1 md:last:col-span-2"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                    <span className="text-muted group-hover:text-accent font-mono text-sm transition-colors">{service.icon}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/20 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display font-medium text-xl mb-3 group-hover:text-foreground text-foreground/90">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed mt-auto">
                  {service.description}
                </p>
              </Link>
            ))}
            {/* Fill empty cells to prevent grey background from showing through */}
            <div className="hidden lg:block bg-background" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
