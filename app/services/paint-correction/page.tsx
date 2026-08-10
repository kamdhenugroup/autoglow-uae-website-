import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Paint Correction & Polishing Dubai | AutoGlow",
  description: "Remove swirl marks, scratches, and oxidation with multi-stage paint correction in Dubai & Abu Dhabi. Measured, clear-coat-safe process. Get a quote.",
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
            "name": "Paint Correction & Polishing",
            "description": "Remove swirl marks, scratches, and oxidation with multi-stage paint correction in Dubai & Abu Dhabi. Measured, clear-coat-safe process. Get a quote.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 04 / Paint Correction & Polishing</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Paint Correction & Polishing
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">SWIRL-FREE</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">MEASURED</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">GENUINELY RESTORED</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              Swirl-Free. Measured. Genuinely Restored.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Multi-stage machine polishing that removes swirl marks, scratches, and oxidation the way they should be removed — with paint thickness measured first, not guessed at, so correction restores your finish without risking what&apos;s underneath it.
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
                href="#levels" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Correction Levels
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217456/Paint_Correction_Polishing_tbd3j9.jpg"
              alt="Paint Correction & Polishing at AutoGlow"
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
              Most swirl marks on cars in Dubai and Abu Dhabi aren&apos;t caused by accidents — they&apos;re caused by washing. Automatic car washes, dirty wash mitts, and improper drying technique leave a web of fine scratches that only become visible in direct sunlight, which the UAE has no shortage of. Add genuine road hazards — sand pitting, minor scuffs, light oxidation from UV exposure — and most vehicles on the road here are carrying more surface damage than their owners realize.
            </p>
            <p>
              Paint correction is the process of machine polishing away that damage, using progressively finer compounds and pads to level the clear coat and restore true gloss. It&apos;s not a single product or a quick buff — it&apos;s a measured process that starts with knowing exactly how much clear coat you have to work with, because correction that isn&apos;t paint-thickness-aware risks burning through the very layer you&apos;re trying to restore. At AutoGlow, every correction job starts with a paint thickness reading, not an assumption.
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
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">We measure before we correct.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every panel is checked with a paint thickness gauge before polishing begins, so we know exactly how much correction your clear coat can safely support.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Matched to the damage, not a flat-rate buff.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Light swirls need a different approach than deep scratches or heavy oxidation. We assess and recommend single, two, or three-stage correction based on what your paint actually needs — not a default package.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">The right prep before protection.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Correction is the essential step before ceramic coating or PPF — sealing damage under either one locks it in permanently. We treat correction as the foundation, not an optional upsell.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Inspected under proper lighting, not guesswork.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Swirl marks and holograms are only visible under the right light angle. We inspect — and show you — results under dedicated lighting, not ambient garage light.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation — Correction Levels */}
      <ScrollReveal as="section" id="levels" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Correction Levels & Specialties</h2>
            <p className="text-foreground/60 text-sm">We provide tailored paint correction solutions to address specific paint defects and clear coat requirements:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Single Stage Polish</strong> — a single polishing pass for light swirl marks and minor dullness, restoring gloss without heavy correction</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Two Stage Paint Correction</strong> — a compounding stage followed by a polishing stage, for moderate swirls, scratches, and oxidation</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Three Stage Paint Correction</strong> — heavy cutting, compounding, and final polishing for significant damage or neglected paint, maximizing clarity and depth</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Swirl Mark Removal</strong> — targeted correction for the fine circular scratching caused by improper washing</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Scratch Removal</strong> — addressing light-to-moderate scratches that sit within the clear coat</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Oxidation Removal</strong> — restoring paint that&apos;s dulled, chalky, or faded from UV exposure</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Gloss Enhancement</strong> — a finishing pass to maximize reflectivity and depth after correction</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Paint Refinement</strong> — fine-tuning finish quality ahead of coating or film application</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Headlight Restoration</strong> — removing UV-yellowed oxidation from headlight lenses to restore clarity and light output</span>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">A highly controlled, scientific methodology ensures absolute clear coat safety and pristine results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Measure</div>
              <h3 className="font-display text-xl font-bold mb-3">Paint Thickness Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every panel is measured with a paint thickness gauge to determine how much correction your clear coat can safely support.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Inspect</div>
              <h3 className="font-display text-xl font-bold mb-3">Damage Assessment Under Lighting</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Swirl marks, scratches, and oxidation are inspected under dedicated lighting to determine the right correction stage.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Correct</div>
              <h3 className="font-display text-xl font-bold mb-3">Machine Correction</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Progressive compounding and polishing stages level the clear coat and remove imperfections, matched to what your paint actually needs.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Verify</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Inspection & Finish Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Results are checked under the same dedicated lighting used for assessment, confirming swirl-free clarity before handover.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" id="packages" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Tiers & Coverage</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Choose the correction package matched perfectly to your vehicle&apos;s clear coat condition.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Single Stage Refresh</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">A single polishing pass for light swirls and dullness, ideal ahead of a wash-and-protect visit.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Light Swirl Polish</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Gloss Restoration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Paint Thickness Check</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Most Requested</span>
              <h3 className="font-display text-2xl font-bold mb-4">Two Stage Correction</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Compounding plus polishing for moderate swirl marks, scratches, and oxidation. The ultimate sweet spot.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Deep Cutting Compound Stage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Refined Finish Polish Stage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Removes 80-90% of Imperfections</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Three Stage Full Correction</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Maximum-level correction for heavily marked or neglected paint, typically paired with ceramic coating or PPF afterward.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Multi-Stage Heavy Cutting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Intermediate Micro-Compounding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Ultra-Fine Finishing Polish</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for a recommendation and cost specific to your vehicle&apos;s condition.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Why Paint Correction Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Removes Swirl Marks & Holograms</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Eliminates the fine scratching that dulls a finish and becomes obvious in direct sunlight.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Restores True Gloss Depth</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Leveling the clear coat brings back the reflectivity and depth that washing and daily wear gradually strip away.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Paint-Thickness-Safe Process</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Correction is matched to what your clear coat can support, measured first rather than assumed.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">The Right Foundation for Protection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Coating or PPF applied over corrected paint locks in a genuinely improved finish, not existing damage.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After Gallery Teaser */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Under direct sunlight, swirl-marked paint looks hazy and flat no matter how clean the car is. Corrected paint reflects clearly, with genuine depth restored. Our gallery documents real correction work, from single-stage refreshes to full three-stage restorations. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Clear Coat Safety & Measurements">
                We utilize electronic paint thickness gauges to measure each panel&apos;s clear coat thickness before machine correction, ensuring any compounding stays well within safe limits.
              </AccordionItem>
              <AccordionItem title="What's Included">
                Every paint correction job includes multi-stage chemical and mechanical decontamination (snow foam wash, iron remover, clay bar treatment), tape masking of all rubber trims, multi-stage machine polishing, and panel wipe prep.
              </AccordionItem>
              <AccordionItem title="Materials & Compounds">
                We use premium, low-dusting, diminishing abrasives and pads of varying density matched to your vehicle&apos;s specific paint hardness.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="How do I know if my car needs one, two, or three-stage correction?">
                It depends on the severity of swirl marks, scratches, and oxidation on your paint, and how much clear coat thickness you have to work with. We assess this during consultation with a paint thickness gauge and inspection under dedicated lighting.
              </AccordionItem>
              <AccordionItem title="Will paint correction remove all scratches?">
                Correction removes scratches and swirl marks that sit within the clear coat. Deeper scratches that have gone through the clear coat into the base color may require touch-up or repainting rather than polishing alone.
              </AccordionItem>
              <AccordionItem title="Do I need paint correction before ceramic coating or PPF?">
                If your paint has swirl marks, scratches, or oxidation, yes. Applying coating or film over damaged paint locks that damage in permanently rather than fixing it.
              </AccordionItem>
              <AccordionItem title="Is paint correction safe for my car's clear coat?">
                Yes, when performed correctly. We measure paint thickness before correcting to ensure the process stays within safe limits for your specific vehicle.
              </AccordionItem>
              <AccordionItem title="How long does paint correction take?">
                A standard multi-stage service typically takes 1 to 2 days, while extensive three-stage packages require 3 to 5 days. This includes deep decontamination preparation, meticulous polishing, and final inspection checks.
              </AccordionItem>
              <AccordionItem title="Will the results last?">
                Correction results are permanent until new swirl marks or damage occur through washing or road exposure — which is why most owners pair correction with ceramic coating or PPF immediately after, to protect the newly restored finish.
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
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic Coating</h3>
              <p className="text-sm text-foreground/50">Lock in your newly corrected paint with a 9H ceramic coating.</p>
            </Link>
            <Link href="/services/paint-protection-film" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Protection Film</h3>
              <p className="text-sm text-foreground/50">Shield your flawless finish from highway stone chips.</p>
            </Link>
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50">Restore your interior to match your pristine exterior paint.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to see your paint&apos;s actual gloss again?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and get a correction recommendation based on your paint&apos;s measured condition — not a flat-rate buff.
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
            Swirl marks aren&apos;t permanent. Neglect is.
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
