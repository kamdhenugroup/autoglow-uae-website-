import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import commercialHeroImg from "@/src/assets/images/comm_res_clean_1785220614222.jpg";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Building, Key, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Commercial & Residential Window Film Dubai | AutoGlow",
  description: "Architectural window film and surface PPF for offices, hotels, and homes in Dubai & Abu Dhabi. Heat rejection, privacy, protection. Request a quote.",
};

export default function ServicePage() {
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial & Residential Surface Protection",
            "description": "Architectural window film and surface PPF for offices, hotels, and homes in Dubai & Abu Dhabi. Heat rejection, privacy, protection. Request a quote.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "AutoGlow"
            },
            "areaServed": [
              { "@type": "Place", "name": "Dubai" },
              { "@type": "Place", "name": "Abu Dhabi" }
            ]
          })
        }}
      />
      
      {/* Service Hero */}
      <ScrollReveal as="section" className="scroll-mt-24 relative pt-32 pb-20 md:pt-48 md:pb-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 14 / Property Protection</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Commercial & Residential Surface Protection
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">WINDOW FILM</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">SURFACE PPF</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">SOLAR REJECTION</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              The Same Precision, Applied to Your Property.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Architectural window film and surface protection film for offices, hotels, retail spaces, and homes — reducing heat and glare, protecting glass and high-value surfaces, and adding privacy where it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors text-center"
              >
                Request a Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#protection-options" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Protection Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src={commercialHeroImg}
              alt="Commercial & Residential Surface Protection at AutoGlow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Introduction */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Why it matters.</h2>
          <div className="text-foreground/60 leading-relaxed text-lg font-light space-y-6 text-left md:text-center">
            <p>
              Glass and high-value surfaces in a commercial or residential property face many of the same pressures a vehicle does in this climate — intense UV exposure, solar heat gain, and everyday wear on finishes that are expensive to replace. The difference is scale: a building&apos;s glazing, a hotel lobby&apos;s marble, or an office&apos;s glass partitions represent a much larger surface area and a much larger investment to protect properly.
            </p>
            <p>
              AutoGlow applies the same film and coating discipline used on vehicles to properties — architectural window film for heat rejection, privacy, and security, and surface protection film for glass, marble, furniture, and other high-value finishes in homes, offices, hotels, and retail spaces. Every project starts with an assessment of the space and its actual requirements, not a generic residential-vs-commercial template.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Architectural Standard</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Property Protection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Building className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">One team for the whole project.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">From a single home office window to a full hotel lobby, the same assessment-first approach and installation discipline apply at any scale.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Film selected for the space, not a default.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Heat rejection, privacy, security, and decorative film all serve different purposes — we recommend based on the specific space and its use, not a one-size film.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Surface protection beyond glass.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Marble, furniture, kitchen cabinets, countertops, and display surfaces can all be protected the same way glass and paint can — an often-overlooked layer of property protection.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Key className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Project-based, quoted properly.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every property is different in scale and requirement — we assess and quote per project rather than force-fitting a fixed package.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="protection-options" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We provide high-tech architectural film integrations and durable custom polyurethane barrier shields.</p>
          </div>

          {/* Window Film Category */}
          <div className="mb-16">
            <h3 className="font-display text-xl font-bold mb-6 border-b border-border pb-3 uppercase tracking-wider text-foreground/80">Window Film</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Heat Rejection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Reduces solar heat gain and cooling load, lowering energy consumption considerably.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">UV Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Blocks 99% of UV radiation that fades luxury furniture, wood flooring, and delicate artwork.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Privacy Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Obscures interior visibility from outside without sacrificing pleasant natural light transmission.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Frosted Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">A decorative, translucent frosted finish tailored for office partitions, showers, and meeting rooms.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Decorative Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Elegant patterns, textures, and bespoke designs optimized for brand integration or aesthetic purposes.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Security Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Adds shatter resistance to glazing, preventing injury or forced entry by bonding glass together.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Anti-Glare Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Reduces harsh computer screen and workspace glare caused by direct sunlight exposure.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">One-Way Vision Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Provides high visibility from one side only, common for street-facing glass and retail frontages.</p>
              </div>
              <div className="bg-surface p-6 border border-border col-span-1 md:col-span-2 lg:col-span-1">
                <h4 className="font-medium text-base text-foreground mb-2">Building Heat Control Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Large-scale high-performance solar thermal management designed for entire commercial buildings.</p>
              </div>
              <div className="bg-surface p-6 border border-border col-span-1 md:col-span-2 lg:col-span-3">
                <h4 className="font-medium text-base text-foreground mb-2">Branding Film</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Custom printed and precision-cut films optimized for corporate storefronts, logos, and premium corporate signs.</p>
              </div>
            </div>
          </div>

          {/* Surface PPF Category */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 border-b border-border pb-3 uppercase tracking-wider text-foreground/80">Surface PPF</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Glass Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Protects high-value glass tables and balustrades from physical scratching, key marks, and etching.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Marble Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">A specialized clear protective barrier layer for porous marble flooring, bar counters, and wall features.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Furniture Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Safeguards premium wooden, lacquered, or metal designer furniture surfaces from daily wear and tear.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Elevator Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Protects stainless steel and high-gloss elevator interior walls and panels from handbags, keys, and daily scuffing.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Kitchen Cabinet Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Guards kitchen cabinet surfaces from thermal expansion, moisture, oils, finger marks, and staining.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Countertop Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Protects countertop surfaces in high-traffic residential kitchens or heavy-duty commercial food prep stations.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Display Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Protects high-end watch, jewelry, or electronics retail glass display surfaces from persistent handling wear.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Hotel Surface Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Protects high-traffic hospitality surfaces (reception pods, vanity areas) from luggage impacts and guest wear.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <h4 className="font-medium text-base text-foreground mb-2">Wall Protection</h4>
                <p className="text-xs text-foreground/50 leading-relaxed">Guards highly vulnerable wall surfaces, moldings, and painted trims in busy commercial hallways.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Architectural Protocol</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our structured engineering process ensures non-disruptive installation and pristine visual outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Probe</div>
              <h3 className="font-display text-xl font-bold mb-3">Site Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We review the property, glazing, and surfaces involved, and discuss your specific goals — heat reduction, privacy, protection, or branding.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Prescribe</div>
              <h3 className="font-display text-xl font-bold mb-3">Film & Recommendation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">You receive a detailed structural recommendation matched to the space, with options and trade-offs explained clearly.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Apply</div>
              <h3 className="font-display text-xl font-bold mb-3">Installation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Work is scheduled to minimize disruption to occupied spaces, whether residential or commercial, utilizing expert installers.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Sign-off</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Walkthrough</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Completed work is thoroughly reviewed with you on-site to inspect clarity, edges, and dust-free seals before project sign-off.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Project Types Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Sectors</p>
            <h2 className="font-display text-3xl font-bold mb-4">Project Types</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">We execute flawless installations across residential, corporate, and hospitality architectural projects.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Residential Properties</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Homes and apartments seeking heat reduction, privacy, and surface protection.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Custom villas & luxury penthouses</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Marble counter & table protection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High-transmission heat rejection</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Commercial Offices</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Glazing and surface film for corporate offices, meeting rooms, and collaborative workspaces.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Frosted glass office partitions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Anti-glare and UV filter treatments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Corporate branding logo cuts</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Commercial Scale</span>
              <h3 className="font-display text-2xl font-bold mb-4">Hospitality & Retail</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Hotels, restaurants, and retail spaces requiring both aesthetic film and high-traffic surface protection.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Hotel lobbies & luxury boutique pods</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Heavy-wear elevator & panel armor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Retail display scratch prevention</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Request a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Custom Quote</Link> for an assessment specific to your property.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Value Realized</p>
            <h2 className="font-display text-3xl font-bold mb-4">Benefits of Property Protection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Reduces Cooling Costs</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Heat rejection film lowers solar heat gain, significantly easing the load on heavy-duty HVAC systems.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Protects High-Value Surfaces</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Marble, furniture, and glass surfaces are shielded from physical and chemical wear that is expensive to reverse.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Key className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Enhances Privacy & Security</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Privacy and security films add discrete visual screening and crucial glass shatter-resistance properties where needed.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Building className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Scales to Any Project</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Engineered to scale from a single residential window pane up to a multi-story commercial or hospitality estate.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Sun-faded furniture, scratched marble, and glare-heavy workspaces are avoidable with the right film and surface protection applied early. Our gallery documents real commercial and residential projects. <em>(To be populated with real project photography.)</em>
          </p>
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-foreground hover:text-accent transition-colors"
          >
            See the Gallery →
          </Link>
        </div>
      </ScrollReveal>

      {/* Specifications & FAQs */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Specifications */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Specifications</h2>
            <Accordion>
              <AccordionItem title="Spectrally Selective Tech">
                Our high-performance window films utilize multi-layered, sputtered metal and ceramic layers. This blocks near-infrared heat while retaining crystal-clear optical light transmission, keeping views perfect.
              </AccordionItem>
              <AccordionItem title="Architectural Grade Aliphatic Polyurethane">
                Surface PPF utilizes a non-yellowing, high-density thermoplastic polyurethane (TPU) back-coated with a stable acrylic adhesive. This ensures secure adhesion and residue-free removal years later.
              </AccordionItem>
              <AccordionItem title="Site Logistics & Work Safety Compliance">
                Every project is overseen by a dedicated supervisor who coordinates all site logistics, access platforms/scaffolds, and absolute compliance with building safety and cleaning regulations.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Do you handle both residential and commercial projects?">
                Yes — from a single home to a full commercial or hospitality property, the same assessment and installation approach applies at any scale.
              </AccordionItem>
              <AccordionItem title="What's the difference between window film and surface PPF for buildings?">
                Window film is applied to glass and glazing for heat, privacy, or security purposes. Surface PPF protects other high-value surfaces — marble, furniture, countertops — from physical wear.
              </AccordionItem>
              <AccordionItem title="Can window film reduce our cooling costs?">
                Heat rejection film reduces solar heat gain, which can meaningfully ease air conditioning load, particularly on west and south-facing glazing.
              </AccordionItem>
              <AccordionItem title="How long does a commercial installation take?">
                Timing depends on project scale, accessibility of the glazing, and whether the work needs to be performed during non-operating hours; this is fully confirmed during our on-site assessment.
              </AccordionItem>
              <AccordionItem title="Do you work around business hours to avoid disruption?">
                Yes — to avoid disrupting your operations, residents, or guests, our commercial installation teams can schedule application shifts during nights, weekends, or scheduled maintenance windows.
              </AccordionItem>
              <AccordionItem title="Can you match window film across multiple properties or a portfolio?">
                Yes — consistent film specification across multiple sites or a property portfolio can be coordinated as part of a larger project.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Protect the property, not just the paint.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Request a custom quote and get a film and surface protection plan matched to your space.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors animate-pulse"
          >
            Request a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Footer CTA */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-background border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            From vehicles to properties — the same precision.
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
          >
            Request a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
