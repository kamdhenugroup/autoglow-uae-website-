import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Wrench, Sparkles, Eye, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Windshield & Glass Repair Dubai | AutoGlow",
  description: "Fast stone chip and crack repair, plus OEM-quality windshield replacement in Dubai & Abu Dhabi. Don't let a small chip become a full replacement.",
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
            "name": "Glass & Windshield Repair",
            "description": "Fast stone chip and crack repair, plus OEM-quality windshield replacement in Dubai & Abu Dhabi. Don't let a small chip become a full replacement.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 09 / Glass Repair</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Glass & Windshield Repair
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">SAME-DAY REPAIR</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">OEM GLASS</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">CHIP SPECIALISTS</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              A Small Chip Doesn&apos;t Have to Become a Full Replacement.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Fast, precise repair for stone chips and cracks, and OEM-quality replacement when repair isn&apos;t enough — because a chip caught early is a fraction of the cost and hassle of the crack it becomes later.
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
                href="#glass-services" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Glass Services
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217457/Glass_Windshield_Repair_x5phyf.jpg"
              alt="Glass & Windshield Repair at AutoGlow"
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
              Highway driving in Dubai and Abu Dhabi means constant exposure to loose stone and gravel — and a windshield chip that seems minor today can spread into a full crack within days, especially with the temperature swings between air-conditioned interiors and exterior heat. What starts as a AED-light repair often turns into a full windshield replacement simply because it wasn&apos;t addressed in time.
            </p>
            <p>
              AutoGlow repairs stone chips and cracks using resin injection that restores structural integrity and stops the damage from spreading, and handles full windshield, side, and rear glass replacement using OEM-quality glass when repair genuinely isn&apos;t an option. The goal is always the same: fix what can be fixed, and only replace what actually needs replacing.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Honest Care</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Glass & Windshield Repair</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Repair first, replace only when necessary.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Most stone chips can be repaired rather than requiring a full windshield swap — we assess honestly rather than defaulting to the more expensive option.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">OEM-quality glass when replacement is needed.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">When a windshield or side glass genuinely needs replacing, we use OEM-quality glass, not an inferior aftermarket substitute.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Fast turnaround.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Chip repairs are typically same-day — because the longer a chip sits, the more likely it is to spread into a full crack.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Eye className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Protection after repair.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Once your windshield is repaired or replaced, protection film is available to reduce the chance of it happening again — see our <Link href="/services/window-tinting" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">Window Tinting</Link> page for full details.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="glass-services" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We provide expert glass repair and precision installation to restore safety and crystal-clear optics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Windshield Stone Chip Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Resin injection that stops small chips from spreading into cracks, restoring structural integrity quickly.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Crack Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Repair for cracks within a repairable size and location, restoring structural integrity where possible before it runs.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Windshield Replacement</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Full OEM-quality windshield replacement when damage is beyond repair, maintaining structural safety requirements.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Side Glass Replacement</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Replacement for cracked or shattered side windows using exact factory-grade glass fitments.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Rear Glass Replacement</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Replacement for damaged rear windshield glass, integrating any defroster grid connections flawlessly.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Windshield Protection Film Installation</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A preventive film layer that helps resist future chips. Read full film details on our <Link href="/services/window-tinting" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">Window Tinting</Link> page.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Our Protocol</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our precision-led methodology ensures glass clarity and optimal driver safety.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Inspect</div>
              <h3 className="font-display text-xl font-bold mb-3">Damage Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We inspect the chip or crack&apos;s size, depth, and location to determine whether it&apos;s repairable or needs full replacement.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Execute</div>
              <h3 className="font-display text-xl font-bold mb-3">Repair or Replacement</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repairable chips and cracks are treated with resin injection. Damage beyond repair is scheduled for OEM-quality glass replacement.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Cure</div>
              <h3 className="font-display text-xl font-bold mb-3">Curing & Quality Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repairs are cured and inspected for clarity and structural integrity before handover.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Defend</div>
              <h3 className="font-display text-xl font-bold mb-3">Optional Protection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Windshield protection film can be added immediately after repair or replacement to reduce future risk.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Glass Tiers</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">We assess honestly and offer specialized glass restoration depending on damage severity.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Chip Repair</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Resin injection for a single stone chip, typically same-day.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High-Pressure Resin Injection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> UV-Curing Process</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Structural Stability Guarantee</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Crack Repair</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Repair for cracks within a repairable size and location.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Micro-drill Preparation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Deep Resin Flow Treatment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Finished Surface Buffing</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Safety Standard</span>
              <h3 className="font-display text-2xl font-bold mb-4">Full Replacement</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">OEM-quality windshield, side, or rear glass replacement when repair isn&apos;t viable.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> OEM-Quality Replacement Glass</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> ADAS Sensor & Camera Calibration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Factory Adhesive Seals & Gaskets</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for an assessment specific to your damage.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Why Deal With Glass Damage Immediately</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Stops Damage From Spreading</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Early repair prevents a small chip from becoming a full crack requiring replacement.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">OEM-Quality Glass</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Replacement work uses proper factory glass, not a lower-grade aftermarket substitute.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Fast, Often Same-Day</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Chip repairs are typically completed quickly, minimizing time off the road.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Restores Structural Integrity</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Proper repair and replacement maintain the windshield&apos;s role in your vehicle&apos;s structural safety.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            A stone chip the size of a coin can spread into a crack running the width of a windshield within days if left unaddressed. Our gallery documents real chip and crack repairs, along with replacement work. <em>(To be populated with real project photography.)</em>
          </p>
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-foreground hover:text-accent transition-colors"
          >
            See the Gallery →
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
              <AccordionItem title="Optic Clarity Standards">
                Our advanced resin formulas possess the exact refractive index of standard automotive glass. This ensures repaired chips are visually minimized, restoring uninterrupted visibility.
              </AccordionItem>
              <AccordionItem title="Structural Safety & ADAS Specs">
                Our replacement services conform strictly to federal safety standards. All forward-facing cameras and ADAS radar sensors mounted behind the windshield are recalibrated using specialist diagnostic equipment during installation.
              </AccordionItem>
              <AccordionItem title="Adhesive and Cure Specifications">
                We utilize premium, high-modulus polyurethane adhesives with rapid safe-drive-away times, assuring that windshield replacements cure safely in ambient climate conditions within hours.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Can all windshield chips be repaired?">
                Most small to medium chips can be repaired, depending on size, depth, and location relative to the driver&apos;s direct line of sight. We assess this honestly during inspection.
              </AccordionItem>
              <AccordionItem title="How long does a chip repair take?">
                Chip repairs are typically completed same-day, often within an hour, depending on the resin curing time required.
              </AccordionItem>
              <AccordionItem title="Will a repaired chip be completely invisible?">
                Repair restores structural integrity and stops spreading, though a faint mark may remain visible depending on the chip&apos;s original size and depth.
              </AccordionItem>
              <AccordionItem title="Do you use OEM glass for replacements?">
                Yes — windshield, side, and rear glass replacements use OEM-quality glass rather than lower-grade aftermarket alternatives.
              </AccordionItem>
              <AccordionItem title="Is windshield protection film worth it after a repair?">
                Many owners add it specifically to reduce the chance of repeat chip damage — see our Window Tinting page for full film options.
              </AccordionItem>
              <AccordionItem title="How much does a chip repair cost compared to full replacement?">
                Repair is significantly less costly and time-consuming than replacement in almost every case; your assessment will confirm specifics for your damage.
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
            <Link href="/services/window-tinting" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Window Tinting</h3>
              <p className="text-sm text-foreground/50 font-light">Reduce solar cabin heat, ultraviolet rays, and add specialized outer windshield protection film.</p>
            </Link>
            <Link href="/services/body-shop" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Body Shop & Collision Repair</h3>
              <p className="text-sm text-foreground/50 font-light">Comprehensive dent, scratch, and panel repair alongside your window restoration work.</p>
            </Link>
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50 font-light">Follow up crystal-clear glass with deep extraction carpet cleaning and leather restoration.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Don&apos;t wait for a chip to become a crack.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book an assessment and get a same-day repair recommendation before it spreads.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors animate-pulse"
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
            Small chip. Fast fix. Real difference.
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