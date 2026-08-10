import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Paint Protection Film in Dubai & Abu Dhabi | AutoGlow",
  description: "An invisible, self-healing shield engineered to absorb impacts from rock chips, sandstorms, and debris before they reach your clear coat.",
};

export default function PPFServicePage() {
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Paint Protection Film",
            "description": "An invisible, self-healing shield engineered to absorb impacts from rock chips, sandstorms, and debris before they reach your clear coat.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 01 / PPF</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Paint Protection Film.
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">Self-Healing</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">10-Year Durability</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">Invisible Finish</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              Invisible Protection. Permanent Peace of Mind.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              An optically clear, self-healing film engineered to absorb the impact of stone chips, sand abrasion, and road debris before they ever reach your clear coat — installed using digitally plotted patterns for your vehicle&apos;s exact make and model.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217459/Paint_Protection_Film_dgafmd.jpg"
              alt="Paint Protection Film at AutoGlow"
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
          <h2 className="font-display text-3xl font-bold mb-6">Why PPF matters in the UAE.</h2>
          <div className="text-foreground/60 leading-relaxed text-lg font-light space-y-6 text-left md:text-center">
            <p>
              Dubai and Abu Dhabi&apos;s roads ask more of a paint job than almost anywhere else. Sheikh Zayed Road and the E11 move fast, and fast means constant exposure to loose gravel, sand, and debris kicked up from the vehicle ahead. Add in UV intensity strong enough to fade unprotected paint within a couple of summers, and the case for physical protection stops being optional for anyone who cares about how their car looks in year three.
            </p>
            <p>
              Paint Protection Film (PPF) is a thin, transparent urethane film applied directly over your factory paint. It absorbs impacts that would otherwise chip or scratch the clear coat, resists the chemical damage of bird droppings and tree sap baking in the heat, and — in the case of quality film — heals minor scratches and swirl marks on its own with nothing more than ambient warmth. At AutoGlow, we install XPEL film to the brand&apos;s own specification, in a dust-controlled bay, by technicians trained specifically for film application.
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
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">XPEL — Not a Generic Substitute</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">XPEL is one of the most established film brands globally, chosen for proven clarity, self-healing performance, and manufacturer-backed warranty support.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Digitally Plotted, Never Freehand</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every film pattern is cut from your vehicle&apos;s exact make, model, and year using digital templates to guarantee risk-free precision.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Dust-Controlled Isolation Bay</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Film traps whatever&apos;s in the air underneath it permanently — our bays are built to keep dust and debris out during application.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Tailored Coverage Assessments</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We assess your car and usage before recommending Front Package or Full Body coverage, not the other way around.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Coverage Options (Tabs) */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Coverage Options</h2>
            <p className="text-foreground/60">Tailored protection for high-impact zones or complete peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <h3 className="font-display text-2xl font-bold mb-2">Front Package</h3>
                <p className="text-foreground/50 text-sm mb-6">Essential protection for the highest impact areas.</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Bonnet</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Bumper</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Fenders</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Mirrors</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Headlights</li>
                </ul>
              </div>

              <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
                <h3 className="font-display text-2xl font-bold mb-2">Full Body</h3>
                <p className="text-foreground/50 text-sm mb-6">Comprehensive protection for every painted surface.</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> All Front Package Items</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Doors & Skirts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Roof & Pillars</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Quarter Panels & Trunk</li>
                </ul>
              </div>

              <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
                <h3 className="font-display text-2xl font-bold mb-2">Interior & Accents</h3>
                <p className="text-foreground/50 text-sm mb-6">Protecting the delicate details.</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Piano Black Trims</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Infotainment Screens</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-muted" /> Door Cups & Edges</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="sticky top-32 bg-surface p-10 border border-border shadow-sm shadow-black/5 dark:shadow-none">
                <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-6">Film Types</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium text-lg mb-2">Clear TPU (Gloss)</h4>
                    <p className="text-sm text-foreground/60">Optically clear protection that enhances the factory gloss finish.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Matte / Stealth TPU</h4>
                    <p className="text-sm text-foreground/60">Transforms any gloss paint into a rich satin/matte finish while providing full protection.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Colored PPF</h4>
                    <p className="text-sm text-foreground/60">Change your vehicle&apos;s color entirely with a film that offers real impact protection, unlike standard vinyl.</p>
                  </div>
                </div>
              </div>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our structured, certified four-step application process ensures absolute paint perfection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Assess</div>
              <h3 className="font-display text-xl font-bold mb-3">Consultation & Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We inspect your paint condition and talk through how you use the vehicle to recommend the right coverage level.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Plot</div>
              <h3 className="font-display text-xl font-bold mb-3">Digital Pattern Cutting</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Your film is cut to your vehicle&apos;s exact specifications, guaranteeing no on-car freehand cutting.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Install</div>
              <h3 className="font-display text-xl font-bold mb-3">Precision Installation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Application happens in a dust-controlled bay, with every edge carefully tucked and checked as it&apos;s applied.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Inspect</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Inspection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every installation is inspected under dedicated lighting before handover, with care instructions specific to your film.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Feature Icon Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Absorbs Impact</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Stops stone chips, gravel, and road debris before they reach factory paint.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Self-Healing Surface</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Light scratches and swirl marks close up on their own with heat exposure.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Blocks UV Degradation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Prevents the fading and dulling that unprotected paint suffers over time.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Resists Staining</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repels bird droppings, tree sap, and other UAE-common contaminants.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Tiers & Coverage</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Select a coverage tier tailored to your driving habits and protection needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Front Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Essential protection for the highest-impact areas: bonnet, bumper, fenders, mirrors, headlights.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Bonnet</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Bumper</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Fenders</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Mirrors & Headlights</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Most Requested</span>
              <h3 className="font-display text-2xl font-bold mb-4">Full Body Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Complete coverage across every painted panel, our most-requested option for new vehicles.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> All Front Package Items</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Doors & Skirts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Roof & Pillars</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Quarter Panels & Trunk</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Complete Protection Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full body PPF plus interior accent protection (piano black trims, screens, door edges) for total coverage in one visit.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> All Full Body Package Items</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Interior Trim & Console</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Infotainment Screen Protectors</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> door cups & edge guards</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for a recommendation and cost specific to your vehicle.
          </p>
        </div>
      </ScrollReveal>

      {/* Accordions */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Specifications / Warranty */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Specifications</h2>
            <Accordion>
              <AccordionItem title="Durability & Warranty: Up to 10-year warranty">
                {/* NOTE TO OWNER: Update warranty and film specifics */}
                AutoGlow offers premium XPEL film configurations backed by up to a 10-year manufacturer warranty. This comprehensive protection guards against cracking, bubbling, peeling, or yellowing under intense regional sun.
              </AccordionItem>
              <AccordionItem title="What&apos;s Included">
                Every package includes consultation, digital pattern cutting, installation, and a final inspection under dedicated lighting to ensure precision alignment, wrapped edges, and a seamless visual transition.
              </AccordionItem>
              <AccordionItem title="Thickness & Material: Premium urethane film">
                {/* NOTE TO OWNER: Update the exact thickness and brand */}
                We utilize elite-tier aliphatic polyurethane (TPU) measuring approximately 8 to 10 mils in thickness, providing a robust, highly elastic barrier that preserves optical clarity while maximizing stone chip absorption.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Stone chips, sand pitting, and highway debris show up fast on unprotected paint in the UAE — PPF stops the damage before it happens rather than repairing it after. Our gallery documents real installations, from front-end kits to full-body coverage.
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
              <AccordionItem title="How long does PPF last in Dubai&apos;s climate?">
                Quality XPEL film is rated to perform for several years even under intense UV and heat exposure, provided it&apos;s installed correctly and cared for per manufacturer guidance.
              </AccordionItem>
              <AccordionItem title="Will PPF change how my car looks?">
                No — clear PPF is optically transparent. Your car looks identical to stock, just protected. Matte and colored PPF are the exception, chosen specifically for a finish change.
              </AccordionItem>
              <AccordionItem title="What&apos;s the difference between PPF and ceramic coating?">
                PPF is a physical film that absorbs impacts like stone chips. Ceramic coating is a chemical layer that adds gloss and chemical resistance but doesn&apos;t stop physical damage. Many owners combine both.
              </AccordionItem>
              <AccordionItem title="Can PPF be removed later?">
                Yes, professionally installed PPF can be removed without damaging the paint underneath, provided the paint was in good condition at installation.
              </AccordionItem>
              <AccordionItem title="What happens if a section of film gets damaged?">
                Minor scratches self-heal with heat. Deeper damage to a single panel can typically be addressed by replacing that panel&apos;s film section alone.
              </AccordionItem>
              <AccordionItem title="Do you serve both Dubai and Abu Dhabi?">
                Yes, AutoGlow operates dedicated studios in both cities with the same XPEL-certified installation process.
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
              <p className="text-sm text-foreground/50">Add a hydrophobic layer over your PPF.</p>
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
            Ready to protect your investment?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and get a coverage recommendation matched to your vehicle — no pressure, no default package.
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
