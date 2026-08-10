import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Full Car Detailing Dubai | Interior & Exterior — AutoGlow",
  description: "Deep interior extraction and exterior decontamination in Dubai & Abu Dhabi. Steam cleaning, leather care, odor removal, and more. Book a consultation.",
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
            "name": "Full Car Detailing",
            "description": "Deep interior extraction and exterior decontamination in Dubai & Abu Dhabi. Steam cleaning, leather care, odor removal, and more. Book a consultation.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 07 / Full Detailing</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Full Detailing
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">DEEP CLEAN</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">EXTRACTION</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">SANITIZED</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              Deep Clean. Fully Decontaminated. Genuinely Restored.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              A complete interior and exterior deep clean that goes beyond a wash — extraction cleaning, decontamination, and sanitization designed to undo what sand, dust, and daily use actually do to a vehicle in this climate.
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
                href="#whats-included" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See What&apos;s Included
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217454/Car_detailing_in_progress_with_GlanzPro_ttipxi.jpg"
              alt="Car Detailing in Progress with GlanzPro at AutoGlow"
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
              Regular washing keeps a car looking clean on the surface. It doesn&apos;t remove the iron particles embedded in your paint from brake dust, the tar picked up from fresh asphalt, the fine sand worked into carpet fibers and air vents, or the bacteria buildup inside an air conditioning system that&apos;s been recirculating the same cabin air for months. Full detailing addresses all of it — a genuine deep clean, not a faster version of a regular wash.
            </p>
            <p>
              At AutoGlow, full detailing covers both sides of the vehicle properly: exterior decontamination that removes what&apos;s actually bonded to your paint, and interior extraction cleaning that reaches into carpet, upholstery, and trim rather than just vacuuming the visible surface. It&apos;s the service most owners underestimate until they see — and smell — the difference afterward.
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
              <h3 className="font-medium text-lg mb-3">Decontamination, not just a wash.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Snow foam and washing remove surface dirt. Clay bar treatment and iron fallout removal go further, lifting contamination that&apos;s physically bonded to your paint.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Extraction cleaning, not surface vacuuming.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Interior fabric and carpet shampoo uses extraction methods that pull dirt and moisture out of fibers, not just lift what&apos;s sitting on top.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Genuine odor elimination.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Air vent cleaning and odor removal address the actual source of persistent smells — recirculated air and trapped bacteria — rather than masking them with fragrance.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Every surface, inside and out.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">From engine bay cleaning to roof lining and dashboard care, full detailing treats the entire vehicle as one job, not a checklist of the easy parts.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="whats-included" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We deep clean and restore every square inch of your vehicle using specialized climate-appropriate methods.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Exterior Panel */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground border-b border-border pb-3 flex items-center gap-3">
                <Sun className="w-6 h-6 text-accent" /> Exterior
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Snow Foam Wash</h4>
                    <p className="text-xs text-foreground/50 mt-1">A pre-wash foam that loosens surface dirt before contact washing, reducing the risk of scratching.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Clay Bar Treatment</h4>
                    <p className="text-xs text-foreground/50 mt-1">Removes bonded contaminants that washing alone can&apos;t lift.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Iron Fallout Removal</h4>
                    <p className="text-xs text-foreground/50 mt-1">Dissolves embedded brake dust particles from paint and wheels.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Tar Removal</h4>
                    <p className="text-xs text-foreground/50 mt-1">Lifts fresh asphalt and tar spotting from lower panels.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Engine Bay Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">A careful, component-safe clean of the engine compartment.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Wheel Deep Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Removes embedded brake dust and grime from wheel faces and barrels.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3 md:col-span-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Plastic Trim Restoration</h4>
                    <p className="text-xs text-foreground/50 mt-1">Restores UV-faded exterior plastic trim to a rich, non-greyed finish.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Panel */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground border-b border-border pb-3 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-accent" /> Interior
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Vacuuming</h4>
                    <p className="text-xs text-foreground/50 mt-1">Thorough removal of loose debris, sand, and dust from carpets and seats.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Steam Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Sanitizes surfaces and lifts grime using heat rather than harsh chemicals.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Leather Cleaning & Conditioning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Cleans and conditions leather to prevent UV cracking.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Fabric Shampoo</h4>
                    <p className="text-xs text-foreground/50 mt-1">Deep-cleans fabric upholstery, lifting stains and odor sources.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Carpet Shampoo</h4>
                    <p className="text-xs text-foreground/50 mt-1">Extraction cleaning for embedded dirt and sand in carpet fibers.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Roof Lining Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Careful cleaning of headliner fabric without saturation damage.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Dashboard Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Removes dust buildup and restores a clean, non-greasy finish.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Door Panel Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Detailed cleaning of door cards and interior trim.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Odor Removal</h4>
                    <p className="text-xs text-foreground/50 mt-1">Addresses the source of persistent smells, not just masking them.</p>
                  </div>
                </div>
                <div className="bg-surface p-5 border border-border flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-foreground">Air Vent Cleaning</h4>
                    <p className="text-xs text-foreground/50 mt-1">Removes dust and bacteria buildup from the AC vent system.</p>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Every detailing session follows a strict, logical sequence to guarantee a flawless restore.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Assess</div>
              <h3 className="font-display text-xl font-bold mb-3">Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We review your vehicle&apos;s interior and exterior condition to identify specific problem areas — stains, odors, contamination, or trim wear.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Lift</div>
              <h3 className="font-display text-xl font-bold mb-3">Exterior Decontamination</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Snow foam, clay bar treatment, and iron/tar removal lift what a regular wash leaves behind.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Deep Clean</div>
              <h3 className="font-display text-xl font-bold mb-3">Interior Extraction Clean</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Steam cleaning, fabric and carpet shampoo, and vent cleaning address dirt and odor at the source, not just the surface.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Perfect</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Detail & Inspection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Trim, dashboard, and door panels are finished and inspected before handover.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" id="packages" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Detailing Tiers</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Select from our specialized deep-cleaning services tailored for your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Exterior Refresh</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Snow foam wash, clay bar treatment, and wheel deep cleaning for a fully decontaminated exterior.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Snow Foam Wash & Decontamination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Clay Bar Paint Smoothing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Wheel & Barrel Deep Clean</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Interior Deep Clean</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Steam cleaning, fabric or leather care, and odor removal for a fully sanitized cabin.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Hot Steam & Sanitization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Fabric & Carpet Extraction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Odor & Bacteria Elimination</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Best Value</span>
              <h3 className="font-display text-2xl font-bold mb-4">Complete Detail</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full exterior decontamination and interior extraction cleaning combined, our most thorough single-visit option.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Exterior Decontamination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Deep Interior Steam & Sanitization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Complete Cabin & Engine Bay Refresh</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for a recommendation specific to your vehicle&apos;s condition.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Why Deep Detail Your Vehicle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Removes Bonded Contamination</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Clay bar and iron fallout removal lift what washing alone leaves behind.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Genuine Odor Elimination</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Addresses the source of persistent smells rather than masking them with fragrance.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Extends Interior Life</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Leather conditioning and fabric care prevent UV cracking and premature wear.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">A Fully Sanitized Cabin</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Steam cleaning and vent cleaning reduce bacteria buildup, not just visible dirt.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After Gallery Teaser */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Sand worked into carpet fibers, dulled plastic trim, and a cabin that&apos;s absorbed months of daily use all respond dramatically to proper extraction cleaning and decontamination. Our gallery documents real full detailing transformations, interior and exterior. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Decontamination Quality Standards">
                We work with industry-standard ph-neutral chemical solutions, non-marring detailing clay, and fine-grade iron dissolvers to safely lift deeply embedded contaminants without introducing paint marring.
              </AccordionItem>
              <AccordionItem title="Interior Safety and Sanitization">
                Our interior steam extraction relies on dry saturated steam heated to high temperatures. This kills 99.9% of bacteria, mold spores, and dust mites inside your ventilation ducts and deep fabric upholstery without saturating or warping sensitive electronics or fine leather.
              </AccordionItem>
              <AccordionItem title="Leather & Trim Feedstock">
                We treat leather surfaces with nourishing, silicon-free premium conditioners that replenish natural oils. This provides long-term flexibility and safe UV blocking without creating a greasy or high-shine surface finish.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="What's the difference between a regular wash and full detailing?">
                A wash cleans the surface. Full detailing decontaminates — removing bonded particles like iron fallout and tar from paint, and deep-extracting dirt and odor sources from interior fabric and carpet.
              </AccordionItem>
              <AccordionItem title="How often should I get a full detail in the UAE climate?">
                We recommend a full detailing service every 6 to 12 months in the UAE climate to combat the intense heat, sand, dust, and UV exposure that accelerate wear on both interior and exterior materials.
              </AccordionItem>
              <AccordionItem title="Can you remove persistent odors from my car?">
                Yes — odor removal targets the actual source, whether that&apos;s trapped bacteria in the AC system, spills in fabric, or other contamination, rather than masking the smell with heavy scents.
              </AccordionItem>
              <AccordionItem title="Is steam cleaning safe for leather and electronics?">
                Yes, when performed correctly — steam cleaning uses controlled dry heat and is safe for leather, fabric, and interior surfaces when handled by trained, certified technicians.
              </AccordionItem>
              <AccordionItem title="Do you clean the engine bay safely?">
                Yes — engine bay cleaning is done with specialized dry clean care around sensitive electrical and mechanical components, avoiding direct high-pressure water intrusion into key electronics.
              </AccordionItem>
              <AccordionItem title="How long does a full detail take?">
                A comprehensive full detail typically takes 1 to 2 days depending on the size and condition of the vehicle. This ensures sufficient time for deep cleaning, hot water extraction, and proper drying.
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
            <Link href="/services/wash" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Wash</h3>
              <p className="text-sm text-foreground/50">Keep your detailed vehicle immaculate with our non-abrasive maintenance washes.</p>
            </Link>
            <Link href="/services/interior-restoration" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Interior & Leather Restoration</h3>
              <p className="text-sm text-foreground/50">Repair and dye scuffed leather, cracked bolsters, or faded trim elements.</p>
            </Link>
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic & Graphene Coating</h3>
              <p className="text-sm text-foreground/50">Seal your pristine, freshly decontaminated surfaces with years of chemical defense.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready for a genuine deep clean?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and get a detailing plan matched to your vehicle&apos;s actual condition — inside and out.
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
            A wash gets it clean. This gets it right.
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
