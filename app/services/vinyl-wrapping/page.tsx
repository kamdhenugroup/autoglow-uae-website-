import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Vinyl Wrapping Dubai | Car Wrap & Customization — AutoGlow",
  description: "Full color change, chrome delete, and custom vinyl wraps in Dubai & Abu Dhabi. Cast vinyl, paint-safe, fully reversible. Book a consultation.",
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
            "name": "Vinyl Wrapping & Customization",
            "description": "Full color change, chrome delete, and custom vinyl wraps in Dubai & Abu Dhabi. Cast vinyl, paint-safe, fully reversible. Book a consultation.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 05 / Vinyl Wrapping & Customization</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Vinyl Wrapping & Customization
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">CAST VINYL</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">PAINT-SAFE</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">REVERSIBLE</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              A New Finish. Your Factory Paint, Untouched.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Full color change, chrome delete, and custom accents in cast vinyl — a complete aesthetic transformation that&apos;s fully reversible, with your original paint protected underneath the entire time.
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
                href="#options" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Wrap Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217458/Vinyl_Wrapping_Customization_yx5qqe.jpg"
              alt="Vinyl Wrapping & Customization at AutoGlow"
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
              A wrap changes how a car looks without touching how it&apos;s made. Unlike a respray, vinyl wrapping sits over your factory paint rather than replacing it — meaning the color, finish, or accent you choose today can come off cleanly later, revealing the original paint underneath in the same condition it was in before installation. That reversibility is exactly why wraps have become the default choice for owners who want to refresh a look, brand a commercial vehicle, or protect resale value while still expressing something different in the meantime.
            </p>
            <p>
              At AutoGlow, we work exclusively in cast vinyl — the higher grade of wrap film that conforms properly to curves, mirrors, and compound-shaped panels without lifting or cracking at the edges over time. Whether it&apos;s a full color change, a partial accent wrap, or commercial branding across a fleet, the installation discipline is the same: proper panel prep, correct film tension, and edges that are wrapped and sealed, not just cut and left exposed.
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
              <h3 className="font-medium text-lg mb-3">Cast vinyl, not the cheaper alternative.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Calendered vinyl is thinner, shrinks over time, and struggles on curved panels. We wrap exclusively in cast film for a finish that holds its shape and color for years.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Fully reversible, genuinely paint-safe.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Correctly installed and removed, vinyl wrap protects your factory paint rather than risking it — many owners actually protect their paint condition by wrapping rather than leaving it exposed.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Edges wrapped, not just cut.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Panel edges, door jambs, and compound curves are where cheap wrap jobs fail first. We wrap and seal edges properly rather than leaving a cut line exposed to lifting.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">From full wraps to targeted accents.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Not every project needs a full color change — chrome delete, roof wraps, and racing stripes are complete services in their own right, not just upsells attached to a bigger job.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation — Wrap Options */}
      <ScrollReveal as="section" id="options" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Wrap Options & Specializations</h2>
            <p className="text-foreground/60 text-sm">We provide tailored custom wrap solutions to address every styling, finish, or commercial requirement:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Full Color Change Wrap</strong> — a complete transformation across every exterior panel, in gloss, matte, satin, or specialty finishes</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Partial Wrap</strong> — targeted panels or sections for a two-tone look or accent styling</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Roof Wrap</strong> — a contrasting roof finish, one of the most popular accent choices</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Bonnet Wrap</strong> — a satin or matte bonnet against a gloss body, or vice versa</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Mirror Wrap</strong> — a quick, high-impact accent for mirror caps</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Chrome Delete</strong> — replacing chrome trim, grilles, and badging with a blacked-out or color-matched finish</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Racing Stripes</strong> — classic or custom stripe designs for a motorsport-inspired look</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Custom Design Wrap</strong> — bespoke patterns, textures, or designs unique to your vehicle</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Commercial Branding Wrap</strong> — full or partial fleet branding for business vehicles</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm"><strong>Interior Wrap</strong> — trim and accent wrapping inside the cabin to match your exterior theme</span>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">A systematic, precision-engineered process ensures a flawless fit and fully reversible results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Consult</div>
              <h3 className="font-display text-xl font-bold mb-3">Design Consultation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We discuss the finish, color, and coverage you&apos;re after — full wrap, partial accents, or commercial branding — and confirm film options.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Prep</div>
              <h3 className="font-display text-xl font-bold mb-3">Surface Preparation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Panels are properly cleaned and prepped, since wrap film only performs as well as the surface it&apos;s applied to.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Wrap</div>
              <h3 className="font-display text-xl font-bold mb-3">Precision Installation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Cast vinyl is applied with correct tension and heat-formed around curves, with edges wrapped and sealed rather than left cut and exposed.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Verify</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Inspection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every panel and edge is checked before handover, with care guidance for wash and maintenance specific to wrap film.</p>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Choose the custom wrap package matched perfectly to your styling and coverage goals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Accent Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">A single high-impact element such as a roof wrap, bonnet wrap, or chrome delete.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Contrast Roof or Bonnet</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Chrome Trim Deletion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Premium Cast Vinyl</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Most Requested</span>
              <h3 className="font-display text-2xl font-bold mb-4">Partial Wrap Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">A curated combination of panels for a two-tone or custom accent look.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Multi-Panel Contrast Accents</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Mirror Caps & Badges</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Integrated Visual Design</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Full Wrap Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Complete color change across every exterior panel, our most comprehensive transformation.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Complete Exterior Coverage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Premium Cast Finish Option</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Edge Wrapping & Sealing</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for a recommendation and cost specific to your vehicle and chosen finish.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Why Wrap Your Vehicle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Aesthetic Transformation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Change your car&apos;s entire look without a single drop of paint.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Fully Reversible</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Remove the wrap later and your factory paint remains underneath, in the condition it was in before wrapping.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Paint Protection Bonus</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Cast vinyl shields the factory finish from minor scratches and UV exposure while installed.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Hundreds of Finish Options</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Gloss, matte, satin, chrome, and specialty textures, well beyond what a respray could offer.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After Gallery Teaser */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            A wrap transformation is immediate and dramatic — the same vehicle silhouette in a completely different finish, with panel lines and body creases still reading cleanly under the new material. Our gallery documents full color changes, chrome deletes, and commercial branding projects. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Cast Vinyl Quality & Lifespan">
                We work exclusively with high-grade cast vinyl films (such as 3M, Avery Dennison, and Oracal) to guarantee excellent UV stability, perfect dimensional conformity, and simple, residue-free reversibility.
              </AccordionItem>
              <AccordionItem title="What's Included">
                Every wrap installation includes deep paint decontamination (wash, clay bar, isopropyl alcohol prep), hardware trim removal (badges, door handles, light units as necessary for perfect edge wrap), custom alignment, heat-curing, and post-installation edge sealing.
              </AccordionItem>
              <AccordionItem title="Reversibility & Paint Safety">
                Our materials are strictly paint-safe. When removed properly by specialists within the film&apos;s specified lifespan, the vinyl leaves no adhesive residue and does not damage healthy factory clear coat.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Does vinyl wrap damage the paint underneath?">
                No, when installed and removed correctly. Cast vinyl is designed for clean removal, and many owners find their paint is better preserved under a wrap than left exposed to UV and road debris.
              </AccordionItem>
              <AccordionItem title="How long does a vinyl wrap last?">
                A full color change vinyl wrap generally lasts 3 to 5 years under Dubai and Abu Dhabi&apos;s climate conditions, depending on exposure to direct sunlight and proper hand-wash maintenance. Your consultation will confirm a realistic lifespan for your chosen wrap.
              </AccordionItem>
              <AccordionItem title="Can I wrap over an existing wrap?">
                Old wrap should generally be removed before new film is applied, to ensure proper adhesion and a clean finish — we&apos;ll assess your vehicle&apos;s current wrap condition during consultation.
              </AccordionItem>
              <AccordionItem title="Is a partial wrap cheaper than a full wrap?">
                Partial and accent wraps use less material and less installation time than a full color change, so they&apos;re typically a lower-cost way to make a targeted style change.
              </AccordionItem>
              <AccordionItem title="Can I wash a wrapped car normally?">
                Hand washing is recommended, particularly avoiding high-pressure jets directly at panel edges. We provide specific care guidance for your wrap finish at handover.
              </AccordionItem>
              <AccordionItem title="Do you wrap commercial fleet vehicles?">
                Yes — full and partial branding wraps for commercial and fleet vehicles are part of our standard service.
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
              <p className="text-sm text-foreground/50">Add clear self-healing protection to high-impact areas over your wrap.</p>
            </Link>
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic Coating</h3>
              <p className="text-sm text-foreground/50">Apply a specialized vinyl ceramic coating to protect and seal your wrap.</p>
            </Link>
            <Link href="/services/peelable-paint" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Peelable Paint</h3>
              <p className="text-sm text-foreground/50">Explore sprayable color changes for seamless protection and customization.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready for a new finish?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and explore wrap options matched to your vehicle — full transformation or a targeted accent.
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
            Change the look. Keep the paint.
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
