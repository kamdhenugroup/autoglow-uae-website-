import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Ceramic & Graphene Coating Dubai | Permagard — AutoGlow",
  description: "Protect your paint from Dubai's sun and sand with Permagard ceramic & graphene coating. Hydrophobic, 9H-hard, long-lasting gloss. Book a consultation.",
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
            "name": "Ceramic & Graphene Coating",
            "description": "Protect your paint from Dubai's sun and sand with Permagard ceramic & graphene coating. Hydrophobic, 9H-hard, long-lasting gloss. Book a consultation.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 02 / Ceramic & Graphene Coating</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Ceramic & Graphene Coating
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">HYDROPHOBIC</span><span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">9H HARDNESS</span><span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">UV RESISTANT</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              A Liquid-Glass Finish, Bonded to Your Paint.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              A hydrophobic, chemically resistant layer that locks in gloss and shrugs off Dubai&apos;s sun, sand, and daily contamination — years of protection in a single application, not a wax that washes out in a month.
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
                href="#packages" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Coverage Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217455/Ceramic_Graphene_Coating_nvscpf.jpg"
              alt="Ceramic & Graphene Coating at AutoGlow"
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
              Paint damage in the UAE rarely happens in one dramatic moment. It happens in a hundred small ones: a bird dropping baking into the clear coat in 45°C heat, a run through an automatic wash brush that leaves swirl marks you only notice at a certain angle, fine sand carried on the wind settling into every panel gap. None of it looks urgent. All of it is permanent once it etches in.
            </p>
            <p>
              Ceramic and graphene coating is a chemical layer bonded directly to your paint, glass, wheels, and trim — creating a hard, hydrophobic barrier that actively resists UV oxidation, chemical staining, and the everyday contamination that dulls a finish over time. At AutoGlow, we apply Permagard coating to manufacturer specification, on paint that&apos;s been properly assessed and corrected first — because sealing damage in doesn&apos;t slow it down, it just locks it in.
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
              <h3 className="font-medium text-lg mb-3">Recognized Permagard Partner</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every coating we apply is sourced and installed to Permagard&apos;s own specification — not a diluted, white-labeled substitute.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Assessed Before It Gets Sealed</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">If your paint has swirl marks, light scratches, or early oxidation, we tell you before coating goes on, not after. Coating over compromised paint locks the damage in permanently.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Coverage Beyond Just Bodywork</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Glass, wheels, brake calipers, trim, and even interior leather and fabric can all be coated — a complete exterior and interior protection approach, not just a paint treatment.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Built for Dubai&apos;s Climate</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Between UV intensity, airborne sand, and the thermal stress of extreme seasonal heat, coating chosen for other climates underperforms here. Ours is selected specifically for UAE conditions.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
      
      {/* Coverage Options */}
      <ScrollReveal as="section" id="coverage" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Coverage Options</h2>
            <p className="text-foreground/60 text-sm">Ceramic and graphene coating isn&apos;t limited to your car&apos;s paint. A complete application can cover:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Body Ceramic Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Graphene Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Glass Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Wheel Ceramic Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Brake Caliper Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Plastic Trim Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Leather Ceramic Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Interior Ceramic Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Fabric Protection Coating</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/95 text-sm font-medium">Convertible Roof Coating</span>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Every application follows our meticulous four-step quality protocol.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Assess</div>
              <h3 className="font-display text-xl font-bold mb-3">Paint Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every panel is inspected under proper lighting before we recommend anything. Existing swirl marks or contamination get flagged first.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Correct</div>
              <h3 className="font-display text-xl font-bold mb-3">Correction, If Needed</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Paint carrying scratches, swirls, or oxidation is corrected before any coating is applied — coating over damage only seals it in.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Apply</div>
              <h3 className="font-display text-xl font-bold mb-3">Application</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Permagard coating is applied to specification across your chosen coverage — body, glass, wheels, trim, or interior surfaces.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Cure</div>
              <h3 className="font-display text-xl font-bold mb-3">Cure & Final Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Coating is given proper cure time and inspected before handover, with care guidance for the first weeks of maintenance.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" id="packages" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Tiers & Formulations</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Structured protection programs crafted for comprehensive results.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Essential Coating</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Body ceramic coating, the foundation layer for paint protection and gloss.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Premium Paint Coating</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Multi-Stage Paint Prep</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Intense Gloss Enhancement</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Highly Durable</span>
              <h3 className="font-display text-2xl font-bold mb-4">Advanced Protection</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Graphene coating plus wheel and glass coating, for owners who want the higher-hardness formulation and more surface coverage.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Ultra-Hard Graphene Coating</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Wheel & Glass Coating</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Ultimate Thermal Resistance</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Complete Coating Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full exterior coating (body, graphene, glass, wheels, trim) plus interior leather and fabric protection, for total coverage in one visit.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Body Graphene Protection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Wheel, Glass, & Trim Coating</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Interior Leather & Fabric Guard</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Named packages shown, deliberately without pricing. <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Get a Quote</Link> for a recommendation and cost specific to your vehicle.
          </p>
        </div>
      </ScrollReveal>

      {/* Feature Icon Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Hydrophobic Sheeting</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Water and contaminants sheet off immediately, keeping your vehicle cleaner for longer.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Intense Gloss Depth</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Creates a mirror-like, candy-gloss finish that enhances the visual depth of factory paint.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Chemical Resistance</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Protects paint from acidic bird droppings, harsh car wash soap, and industrial fallout.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">UV Oxidation Guard</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Blocks solar radiation to prevent clear coat yellowing, fading, and oxidation.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Accordions */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Specifications / Warranty */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Specifications</h2>
            <Accordion>
              <AccordionItem title="Durability & Warranty">
                {/* NOTE TO OWNER: Update durability according to your specific coating tiers */}
                Our coatings offer protection ranging from 2 to 7+ years. Durability depends on the specific coating tier applied and how the vehicle is used and maintained.
              </AccordionItem>
              <AccordionItem title="What's Included">
                Paint assessment, correction if needed, coating application to your chosen coverage, cure time, and a final inspection before handover.
              </AccordionItem>
              <AccordionItem title="Materials & Tools">
                Permagard-specification ceramic and graphene coating products.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Unprotected paint in the UAE shows water spotting, swirl marks, and dulled gloss within months. Coated paint sheets water on contact and holds its depth years later. Our gallery documents real Permagard coating applications, before correction and after cure.
              </p>
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors text-sm font-medium"
              >
                See the Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Accordion>
              <AccordionItem title="What's the difference between ceramic coating and a regular wax?">
                Wax sits on top of paint and wears off within weeks. Ceramic coating chemically bonds to the surface and lasts years, with far stronger hydrophobic and chemical resistance.
              </AccordionItem>
              <AccordionItem title="Does my car need paint correction before coating?">
                If your paint has swirl marks, light scratches, or oxidation, yes. Applying coating over compromised paint locks the damage in permanently — we assess this during consultation.
              </AccordionItem>
              <AccordionItem title="How long does ceramic or graphene coating last?">
                {/* NOTE TO OWNER: Update durability according to your specific coating tiers */}
                Our coatings offer protection ranging from 2 to 7+ years. Durability depends on the specific coating tier applied and how the vehicle is used and maintained; your consultation will confirm a realistic timeline for your vehicle.
              </AccordionItem>
              <AccordionItem title="Will coating make my car easier to clean?">
                Significantly. Coated surfaces repel dust, water, and contamination far more effectively than bare paint, so washing takes less time and effort.
              </AccordionItem>
              <AccordionItem title="What's the difference between ceramic coating and PPF?">
                Ceramic coating is a chemical layer that adds gloss and chemical resistance. PPF is a physical film that absorbs impacts like stone chips. Many owners apply coating over PPF for complete protection.
              </AccordionItem>
              <AccordionItem title="Do you coat surfaces beyond the paint?">
                Yes — glass, wheels, brake calipers, plastic trim, and interior leather and fabric can all be coated as part of a complete protection package.
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
            <Link href="/services/paint-protection-film" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Protection Film</h3>
              <p className="text-sm text-foreground/50">Protect against physical impacts with self-healing TPU.</p>
            </Link>
            <Link href="/services/window-tinting" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Window Tinting</h3>
              <p className="text-sm text-foreground/50">Complete your protection with IR-rejecting films.</p>
            </Link>
            <Link href="/services/paint-correction" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Correction</h3>
              <p className="text-sm text-foreground/50">Restore perfection before locking it in.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Closing CTA */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to lock in that finish?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and get a coating recommendation matched to your paint&apos;s actual condition — not a one-size package.
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
    </div>
  );
}