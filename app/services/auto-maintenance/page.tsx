import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Droplets, Wrench, Clock, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Car Maintenance & Oil Change Dubai | AutoGlow",
  description: "Oil changes, filter replacement, and multi-point inspection in Dubai & Abu Dhabi — from the studio that already knows your car. Book a service.",
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
            "name": "Auto Maintenance (Oil Change & Quick Service)",
            "description": "Oil changes, filter replacement, and multi-point inspection in Dubai & Abu Dhabi — from the studio that already knows your car. Book a service.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 13 / Auto Maintenance</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Auto Maintenance (Oil Change & Quick Service)
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">OIL CHANGE DUBAI</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">QUICK LUBE</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">MULTI-POINT CHECK</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              The Studio That Already Knows Your Car.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Essential mechanical upkeep — oil, filters, fluids, and a full multi-point inspection — from the same team already looking after your paint, coating, and interior.
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
                href="#checklist" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See What&apos;s Included
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217454/Auto_Maintenance_s2wa3j.jpg"
              alt="Auto Maintenance Services at AutoGlow"
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
              Extreme heat doesn&apos;t just affect paint and leather — it puts real strain on engine oil, fluids, and components that work harder in Dubai and Abu Dhabi&apos;s climate than they would almost anywhere else. Regular quick maintenance is the unglamorous but essential counterpart to the protection work most owners think of first.
            </p>
            <p>
              For AutoGlow clients already bringing their vehicle in for detailing, coating, or protection work, auto maintenance means one less separate stop — the same studio handling your oil change, filters, and inspection alongside everything else, rather than splitting your car&apos;s care across multiple shops.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Convenience & Context</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Auto Maintenance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">One studio, not a scattered history.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">If you already trust us with your paint and interior, there&apos;s no reason to hand routine maintenance to a separate shop with no context on your vehicle.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">A genuine check-off, not a rushed inspect.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Battery, brakes, and tire pressure are actually inspected, not just glanced at while you wait.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Clock className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Convenient alongside your visits.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Maintenance can be scheduled to coincide with a detailing or protection appointment, saving you a separate trip.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Straightforward, no upsell pressure.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">You get told what your vehicle actually needs, not a list of add-ons designed to inflate the ticket.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Checklist */}
      <ScrollReveal as="section" id="checklist" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation — Service Checklist</h2>
            <p className="text-foreground/60 text-sm">Comprehensive routine check-ups and filter replacements to keep your high-performance or premium vehicle operating at peak efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Engine Oil Replacement</h3>
                <p className="text-xs text-foreground/50 mt-1">Draining worn oil and refilling with premium factory-spec synthetics adapted to heat.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Oil Filter Replacement</h3>
                <p className="text-xs text-foreground/50 mt-1">Replacing the filter core with original OEM parts to capture microscopic combustion soot.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Air Filter Replacement</h3>
                <p className="text-xs text-foreground/50 mt-1">Ensuring the intake breathes dust-free air, maintaining fuel efficiency and horsepower.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Cabin Filter Replacement</h3>
                <p className="text-xs text-foreground/50 mt-1">Filtering out desert sand dust and allergens to provide absolute purity inside the cabin.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Fuel Filter Replacement</h3>
                <p className="text-xs text-foreground/50 mt-1">Ensuring fuel injection pathways remain completely free from debris or particulate matter.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Fluid Top-Up</h3>
                <p className="text-xs text-foreground/50 mt-1">Replenishing crucial coolant, windshield washer, and steering fluids to optimal limits.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Multi-Point Inspection</h3>
                <p className="text-xs text-foreground/50 mt-1">A meticulous bumper-to-bumper check of mechanical fittings and electronic diagnostics.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Battery Check</h3>
                <p className="text-xs text-foreground/50 mt-1">Assessing cell charge capacity and state of health to prevent sudden thermal failure.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Brake Inspection</h3>
                <p className="text-xs text-foreground/50 mt-1">Analyzing rotor disc wear patterns, caliper slide action, and remaining pad thickness.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-medium text-base text-foreground">Tire Pressure Check</h3>
                <p className="text-xs text-foreground/50 mt-1">Setting appropriate hot inflation metrics to guarantee safe traction on hot pavement.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Service Pipeline</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Efficient turnaround times paired with premium engineering care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Check-In</div>
              <h3 className="font-display text-xl font-bold mb-3">Check-In</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Tell us your vehicle&apos;s mileage and any concerns, and we confirm which services apply.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Service</div>
              <h3 className="font-display text-xl font-bold mb-3">Service</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Oil, filters, and fluids are replaced or topped up as needed, alongside the multi-point inspection.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Report</div>
              <h3 className="font-display text-xl font-bold mb-3">Inspection Report</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">You&apos;re given a clear rundown of what was done and flagged for attention, if anything needs addressing beyond routine service.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Simple Options</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Honest assessments with specialized maintenance tiers configured for your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Essential Service</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Engine oil and filter replacement, fluid top-up.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Synthetic Oil Drain & Refill</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> OEM Filter Element replacement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Basic coolant & washer top-up</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Full Inspection Service</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Essential service plus multi-point inspection, battery, brake, and tire pressure check.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Essential oil and filter service</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Comprehensive multi-point checkup</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Brake and battery health metrics</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Studio Convenience</span>
              <h3 className="font-display text-2xl font-bold mb-4">Complete Maintenance Visit</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full inspection service scheduled alongside any detailing, coating, or protection appointment in one visit.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Coincides with detailing or PPF stay</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full inspection & fluid services</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Single invoice & single drop-off point</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for current service options and scheduling.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Core Values</p>
            <h2 className="font-display text-3xl font-bold mb-4">Benefits of Auto Maintenance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">One Trusted Studio</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Routine maintenance handled by the same team that knows your vehicle&apos;s protection and detailing history.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Wrench className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Genuine Multi-Point Inspection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Battery, brakes, and tires actually checked by expert mechanics, not skipped or glossed over.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Clock className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Scheduling Convenience</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Pair maintenance with your existing detailing or protection appointments to save trips.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">No Upsell Pressure</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">A straightforward, transparent recommendation based strictly on what your vehicle actually needs.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Routine maintenance doesn&apos;t have a dramatic visual &quot;after&quot; — its value shows up in avoided breakdowns and a vehicle that keeps running the way it should. <em>(Gallery content for this service will focus on inspection documentation rather than visual transformation.)</em>
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
              <AccordionItem title="OEM Parts & Fluids Compliance">
                We source original equipment manufacturer (OEM) filters and synthetic lubricants that strictly adhere to your manufacturer warranty guidelines, maintaining absolute compliance.
              </AccordionItem>
              <AccordionItem title="GCC-Spec Calibration Check">
                Diagnostics and multi-point checks are specifically calibrated for harsh Middle Eastern climates, ensuring cooling and electrical systems survive peak summer heat.
              </AccordionItem>
              <AccordionItem title="Integrated Service History Log">
                Every inspection is logged electronically, building a clean, single-point service history combined with your detailing and protection records for resale preservation.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="How often should I get an oil change in the UAE?">
                This typically depends on your vehicle, oil type, and driving conditions. Generally, synthetic lubricants under GCC climate strain should be replaced every 5,000 to 10,000 kilometers; we can confirm a recommended interval during your visit.
              </AccordionItem>
              <AccordionItem title="Can I book maintenance alongside a detailing or protection appointment?">
                Yes — many clients schedule routine maintenance to coincide with an existing visit, saving a separate trip.
              </AccordionItem>
              <AccordionItem title="Do you check my battery and brakes as standard?">
                Yes — a genuine multi-point inspection covering battery, brakes, and tire pressure is included, not just an oil and filter swap.
              </AccordionItem>
              <AccordionItem title="Will you try to upsell me on services I don't need?">
                No — you&apos;ll get a straightforward recommendation based on your vehicle&apos;s actual condition and mileage.
              </AccordionItem>
              <AccordionItem title="How long does a standard service take?">
                A standard maintenance service typically takes 1 to 2 hours depending on which services are included; check-in will confirm an estimate for your visit.
              </AccordionItem>
              <AccordionItem title="Do you handle all vehicle makes?">
                Yes — we handle a wide range of luxury, sports, and daily vehicles. Confirm your specific make and model during booking so we can secure the correct OEM filters and specifications.
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
            <Link href="/services/wash" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Premium Wash</h3>
              <p className="text-sm text-foreground/50 font-light">Get a thorough interior and exterior cleanse alongside your mechanical service check-ups.</p>
            </Link>
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50 font-light">Deep clean the cabin, address mechanical-scent build-up, and polish the outer paint paneling.</p>
            </Link>
            <Link href="/services/body-shop" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Body Shop & Collision Repair</h3>
              <p className="text-sm text-foreground/50 font-light">Address physical panel scuffs, alignments, or paint blemishes during your vehicle&apos;s stay.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            One less separate trip.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book your routine maintenance alongside the team that already knows your vehicle.
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
            Maintenance, without the separate stop.
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
