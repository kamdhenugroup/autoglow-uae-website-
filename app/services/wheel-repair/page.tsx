import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Droplets, Wrench, Palette, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Wheel & Rim Repair Dubai | Curb Rash, Diamond Cut — AutoGlow",
  description: "Curb rash repair, diamond cut refinishing, and rim straightening in Dubai & Abu Dhabi. Restore or refresh your wheels. Get a quote today.",
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
            "name": "Wheel & Rim Repair",
            "description": "Curb rash repair, diamond cut refinishing, and rim straightening in Dubai & Abu Dhabi. Restore or refresh your wheels. Get a quote today.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 11 / Wheel & Rim Repair</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Wheel & Rim Repair
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">CURB RASH REPAIR</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">DIAMOND CUT</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">POWDER COAT</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              Curb Rash Isn&apos;t a Reason to Replace the Wheel.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Precision repair for scraped, scuffed, and bent alloy wheels — diamond cut refinishing, curb rash correction, and full color changes that restore or reinvent your rims without the cost of replacement.
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
                href="#repair-options" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Repair Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217454/Wheel_Rim_Repair_nun3sb.jpg"
              alt="Wheel & Rim Repair at AutoGlow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              referrerPolicy="no-referrer"
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
              A scraped curb or a pothole on a poorly marked road is often all it takes to leave a visible gouge on an otherwise perfect wheel — and it&apos;s one of the most common, most avoidable-looking damage types on the road. The good news: curb rash, light bends, and worn finishes are almost always repairable rather than requiring full wheel replacement, at a fraction of the cost.
            </p>
            <p>
              AutoGlow repairs alloy wheels back to a genuine factory-quality finish, whether that&apos;s correcting curb rash, straightening a bent rim, restoring a diamond cut finish, or refinishing wheels in a new color or powder coat entirely. Every repair starts with an assessment of whether the wheel is structurally sound — cosmetic repair only ever happens on wheels that are safe to repair in the first place.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Honest Engineering</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Wheel & Rim Repair</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Structural safety assessed first.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We check for cracks or structural damage before any cosmetic repair — a wheel that isn&apos;t safe to repair gets flagged honestly, not cosmetically patched over.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Diamond cut precision, not approximation.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Diamond cut finishes require lathe precision to restore correctly — a mismatched cut is as obvious as the damage it was meant to fix.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Color change without new wheels.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Rim painting and powder coating let you change your car&apos;s entire look through the wheels alone, at a fraction of new wheel cost.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Brake calipers included.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Caliper painting is available alongside wheel work for a complete, coordinated finish — not a separate, disconnected job.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="repair-options" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We provide expert alloy correction and high-durability finish applications to restore visual perfection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Alloy Wheel Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">General repair for scuffs, scrapes, and surface damage across your alloy wheels, renewing original contours.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Rim Straightening</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Corrects bent rims from pothole or curb impact where structurally safe to repair, preventing high-speed vibrations.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Diamond Cut Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Restores the precision-cut, two-tone finish common on premium alloy wheels using sophisticated CNC lathe cutting.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Rim Painting</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A full color change or factory-color refinish using premium automotive-grade coatings with high gloss or matte options.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Powder Coating</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A durable, long-lasting finish baked in high-temp ovens that is far more resistant to road salt and chipping than standard paint.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Curb Rash Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Corrects the scraped, gouged edge damage caused by curb contact, blending the perimeter flawlessly into the wheel spoke lines.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Wheel Refinishing</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A complete refresh for faded, oxidized, or worn wheel finishes to return aging alloys to showroom condition.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Color Change</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A full cosmetic color change independent of damage repair, letting you restyle the vehicle completely.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Brake Caliper Painting</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Cosmetic color change for brake calipers, distinct from protective caliper coating. See our <Link href="/services/ceramic-coating" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">Ceramic & Graphene Coating</Link> page for protective options.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Protocol</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our meticulous wheel reconditioning process ensures perfect geometry and aesthetic longevity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Probe</div>
              <h3 className="font-display text-xl font-bold mb-3">Structural Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every wheel is checked for cracks or structural damage before any cosmetic repair is scheduled.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Rectify</div>
              <h3 className="font-display text-xl font-bold mb-3">Repair</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Curb rash, scuffs, or bends are corrected using the appropriate technique for the damage type.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Refinish</div>
              <h3 className="font-display text-xl font-bold mb-3">Refinishing</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Diamond cut, paint, or powder coat finishing is applied depending on the service chosen.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Calibrate</div>
              <h3 className="font-display text-xl font-bold mb-3">Final Balance & Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Wheels are checked and balanced before reinstallation, with a final finish inspection.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Tiered Options</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Honest assessments with specialized wheel packages designed around your specific requirements.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Curb Rash Repair</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Correction for scraped or gouged wheel edges on one or more wheels.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Edge profiling & sanding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Alloy weld filler compound</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Matched spot painting & lacquer</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Full Wheel Refinish</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Complete refinishing across a full set, including diamond cut or paint as needed.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Chemical stripping to raw alloy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Lathe machining / Powder backing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Factory spec protective clear coating</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Coordinated Style</span>
              <h3 className="font-display text-2xl font-bold mb-4">Complete Wheel & Caliper Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full wheel refinishing paired with brake caliper painting for a coordinated finish.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> 4 Wheels restored and refinished</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Brake calipers prepped & custom colored</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High-temperature decals & finish sealant</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for an assessment specific to your wheels.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Why Invest in Wheel & Rim Repair</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Avoids Full Wheel Replacement</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Most curb rash and light bends are repairable at a fraction of new wheel cost.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Factory-Quality Diamond Cut Restoration</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Precision lathe work restores the exact finish premium wheels are known for.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Complete Style Refresh</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Color change and powder coating let you reinvent your car&apos;s look through the wheels alone.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Structural Safety First</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repair only proceeds on wheels confirmed safe to repair by our engineers.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            A curb-scraped wheel edge or a faded factory finish looks dramatically different after proper repair and refinishing — often indistinguishable from a new wheel. Our gallery documents real repair and refinishing work. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Computerized CNC Lathe Profiling">
                Our diamond cut repairs utilize advanced optical probes and computerized lathe cutters. This maps the spoke curvature dynamically to shave off a micrometric layer, replicating the factory sheen.
              </AccordionItem>
              <AccordionItem title="Multi-Layer High-Temp Powder Backing">
                Powder coats are applied electrostatically and cured in heavy industrial ovens at 200°C, producing a dense thermal bond that shields the substrate from micro-pitting.
              </AccordionItem>
              <AccordionItem title="Straightening Structural Limits">
                We measure run-out using dial gauges. Straightening only proceeds if radial or lateral deformation falls within strict tolerance levels, preserving aluminum grain boundaries.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Can curb rash actually be fully repaired?">
                In most cases, yes — curb rash is typically a cosmetic surface issue that can be corrected and refinished to look factory-fresh.
              </AccordionItem>
              <AccordionItem title="Is a bent rim always beyond repair?">
                Not necessarily. Light to moderate bends can often be straightened if the wheel is structurally sound; more severe bends may not be safely repairable, and we&apos;ll tell you honestly if that&apos;s the case.
              </AccordionItem>
              <AccordionItem title="What&apos;s the difference between rim painting and powder coating?">
                Painting offers a wide range of color options; powder coating provides a more durable, chip-resistant finish. We can advise which suits your wheels and usage best.
              </AccordionItem>
              <AccordionItem title="How long does wheel repair take?">
                Timing depends on the number of wheels and type of repair needed; your assessment will confirm an estimate.
              </AccordionItem>
              <AccordionItem title="Can you match a diamond cut finish exactly?">
                Yes — diamond cut repair uses lathe precision specifically to match the original cut and finish.
              </AccordionItem>
              <AccordionItem title="Do you paint brake calipers too?">
                Yes — caliper painting is available as a cosmetic color-change service, separate from protective caliper coating.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      {/* Complementary Services */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-10 text-center">Complementary Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic & Graphene Coating</h3>
              <p className="text-sm text-foreground/50 font-light">Add premium heat-resistant ceramic protection to wheels and calipers, repelling aggressive brake dust.</p>
            </Link>
            <Link href="/services/body-shop" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Body Shop & Collision Repair</h3>
              <p className="text-sm text-foreground/50 font-light">Eradicate body scratches, dents, and minor panel issues to match your pristine wheels.</p>
            </Link>
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50 font-light">Restore wheel wells, deep clean tire threads, and apply protective dressings to complete the stance.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            That curb rash isn&apos;t permanent.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book an assessment and get a repair or refinish plan for your wheels — often at a fraction of replacement cost.
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
            Scraped rims, restored properly.
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
