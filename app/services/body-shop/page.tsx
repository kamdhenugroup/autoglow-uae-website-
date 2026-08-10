import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Body Shop & Collision Repair Dubai | AutoGlow",
  description: "Factory-matched paint, panel repair, and collision restoration in Dubai & Abu Dhabi. We handle the insurance process. Book an assessment today.",
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
            "name": "Body Shop & Collision Repair",
            "description": "Factory-matched paint, panel repair, and collision restoration in Dubai & Abu Dhabi. We handle the insurance process. Book an assessment today.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 06 / Body Shop & Collision Repair</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Body Shop & Collision Repair
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">FACTORY-MATCHED</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">INSURANCE READY</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">STRUCTURAL WORK</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              Restored to Factory Condition. Nothing Less.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              From a single dented panel to full collision restoration, our body shop repairs structural and cosmetic damage with factory-matched paint and proper panel alignment — and we handle the insurance process alongside you, not around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors text-center"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Repair Services
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217454/Body_Shop_Collision_Repair_yepqcn.jpg"
              alt="Body Shop & Collision Repair at AutoGlow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Intro */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Why it matters.</h2>
          <div className="text-foreground/60 leading-relaxed text-lg font-light space-y-6 text-left md:text-center">
            <p>
              A dent, a scrape, or a full collision all raise the same question: will this car look and drive exactly as it did before? At AutoGlow&apos;s body shop, the answer depends on getting three things right — accurate panel and structural repair, paint that&apos;s color-matched to your vehicle&apos;s exact factory code, and a finish that blends invisibly into the surrounding bodywork.
            </p>
            <p>
              We handle everything from minor dent and bumper repair through to full collision restoration and structural work, for both everyday parking-lot damage and insurance-claim accidents. Every repair starts with an honest assessment — what can be repaired versus what needs replacing, and what your insurance is likely to cover — before any work begins.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The AutoGlow Standard</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Factory color matching, not an approximation.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Paint is matched to your vehicle&apos;s exact factory code and blended into surrounding panels, so repaired areas don&apos;t stand out under sunlight.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">We work directly with insurance companies.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">From documentation to claims coordination, we handle the insurance process alongside you rather than leaving you to manage it separately.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Structural repair, not just cosmetic cover-up.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Chassis and structural damage is assessed and corrected properly, not masked with cosmetic panel work that leaves underlying issues unresolved.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">An honest repair-vs-replace assessment.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We tell you plainly whether a panel can be repaired or needs replacing, based on what&apos;s actually best for your vehicle&apos;s safety and finish — not what&apos;s easiest for us.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation — Repair Services */}
      <ScrollReveal as="section" id="services" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Repair Services & Specializations</h2>
            <p className="text-foreground/60 text-sm">Our fully equipped modern workshop is prepared to handle any scale of cosmetic and structural bodywork repair:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Dent Repair</strong> — removing dents from parking incidents, minor impacts, and hail damage</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Paint Repair</strong> — touch-up and blended repainting for scratches, chips, and localized damage</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Accident Repair</strong> — full restoration following collision damage, cosmetic and structural</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Smart Repair</strong> — fast, targeted repair for minor cosmetic damage without a full panel respray</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Panel Replacement</strong> — replacing panels that are damaged beyond safe or cost-effective repair</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Plastic Bumper Repair</strong> — repairing cracked or damaged bumpers rather than defaulting to replacement</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Insurance Repair</strong> — full-service repair coordinated with your insurance provider&apos;s claims process</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Spot Painting</strong> — localized repainting blended seamlessly into surrounding factory paint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Full Body Painting</strong> — complete repaint for extensive damage or a full color refresh</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Color Matching</strong> — matching new paint to your vehicle&apos;s exact factory color code</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Chassis Repair</strong> — structural repair and alignment following collision impact</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">We restore both function and aesthetics through structured, highly rigorous diagnostics and repair work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Diagnose</div>
              <h3 className="font-display text-xl font-bold mb-3">Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We inspect the damage, determine repair versus replacement needs, and discuss insurance coverage where applicable.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Co-ordinate</div>
              <h3 className="font-display text-xl font-bold mb-3">Documentation & Insurance</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We prepare the documentation your insurer requires and coordinate the claims process on your behalf to streamline approvals.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Restore</div>
              <h3 className="font-display text-xl font-bold mb-3">Repair & Panel Work</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Structural, panel, and bodywork repair is carried out, followed by color-matched painting where needed.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Guarantee</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Quality Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every repair is inspected for panel alignment, paint match, and finish quality before your vehicle is returned.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" id="packages" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Service Packages</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Tailored response tiers matching the complexity of damage on your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Minor Repair</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Dent, scratch, or bumper repair for everyday parking and minor impact damage.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Dent & Scratch Repair</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Minor Bumper Scuffs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Localized Spot Painting</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Most Comprehensive</span>
              <h3 className="font-display text-2xl font-bold mb-4">Collision Restoration</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full accident repair covering structural, panel, and paint work for moderate to significant damage.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Structural & Chassis Work</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Panel Reconstruction/Replacements</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Multi-Stage Oven Paint Baking</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Insurance Claim Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Complete collision repair coordinated with your insurance provider from assessment through handover.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Direct Claims Coordination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Documentation Provided</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Hassle-Free Handover</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for an assessment specific to your vehicle&apos;s damage.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Key Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Body Shop Advantages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Factory-Matched Results</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Color-matched paint and proper panel alignment restore your vehicle to its pre-damage condition.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Insurance Handled For You</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Documentation and claims coordination managed alongside your repair, not left to you separately.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Structural Integrity Restored</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Chassis and structural repair addressed properly, not just cosmetically covered.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Repair-First Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Panels are repaired where possible rather than defaulting to costlier replacement.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After Gallery Teaser */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Collision damage can look final — crumpled panels, mismatched paint, misaligned gaps — but proper structural and cosmetic repair restores both function and finish. Our gallery documents real repairs, from minor dents to full collision restoration. <em>(To be populated with real project photography.)</em>
          </p>
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-foreground hover:text-accent transition-colors animate-pulse"
          >
            See the Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Accordions */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Specifications / Warranty */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Specifications</h2>
            <Accordion>
              <AccordionItem title="Structural Repair Warranty">
                Our workmanship and structural alignment repairs come with a comprehensive structural warranty, ensuring absolute peace of mind under normal driving conditions.
              </AccordionItem>
              <AccordionItem title="What's Included">
                Every repair package includes deep panel preparation, computer-assisted spectrophotometer color scanning, paint mixing, baking oven paint application, and final wet-sanding and polishing.
              </AccordionItem>
              <AccordionItem title="Factory-Approved Tooling">
                We utilize state-of-the-art hydraulic chassis alignment rigs, premium paint booths, and original equipment manufacturer (OEM) replacement components to preserve structural integrity.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Do you work with my insurance company?">
                We coordinate directly with major insurance providers in Dubai and Abu Dhabi on documentation and claims for covered repairs; please confirm your specific insurer during your initial consultation.
              </AccordionItem>
              <AccordionItem title="Can a dent be repaired without repainting the whole panel?">
                Often, yes — many minor dents can be corrected using specialized tools without needing a full panel repaint, depending on whether the paint surface itself was cracked or scratched in the impact.
              </AccordionItem>
              <AccordionItem title="Will the repaired area match the rest of my car's paint?">
                Yes — paint is matched to your vehicle&apos;s exact factory color code and blended into surrounding panels to ensure a completely seamless finish under all lighting conditions.
              </AccordionItem>
              <AccordionItem title="How do I know if a panel needs replacing instead of repairing?">
                This depends on the severity and location of the damage. We assess this honestly during your consultation, prioritizing safety and finish quality over the cheaper option for us.
              </AccordionItem>
              <AccordionItem title="How long does collision repair take?">
                Timing depends on the extent of damage and parts availability; your assessment will confirm an estimated timeline. Minor repairs typically take 1 to 3 days, while major collision restoration may require longer.
              </AccordionItem>
              <AccordionItem title="Do you handle structural or chassis damage?">
                Yes — structural repair and alignment following collision impact is part of our body shop service, not limited to cosmetic panel work.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      {/* Related Services */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-10 text-center">Complementary Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/paint-correction" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Correction & Polishing</h3>
              <p className="text-sm text-foreground/50">Blend and refine the surrounding factory paint with newly repaired sections.</p>
            </Link>
            <Link href="/services/paint-protection-film" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Protection Film</h3>
              <p className="text-sm text-foreground/50">Shield your fresh paintwork from highway stone chips and sand abrasion.</p>
            </Link>
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic Coating</h3>
              <p className="text-sm text-foreground/50">Add deep hydrophobic shine and chemical resistance to newly cured paint.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Get your vehicle back to factory condition.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book an assessment and get an honest repair plan — with insurance coordination handled alongside you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Footer CTA */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-background border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Damage doesn&apos;t have to be permanent.
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
