import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Car Wash Dubai | Express, Premium & VIP — AutoGlow",
  description: "Express, premium, and touchless car wash options in Dubai & Abu Dhabi. Regular maintenance that keeps sand and dust from damaging your finish.",
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
            "name": "Car Wash",
            "description": "Express, premium, and touchless car wash options in Dubai & Abu Dhabi. Regular maintenance that keeps sand and dust from damaging your finish.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 08 / Wash</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Wash
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">EXPRESS</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">TOUCHLESS OPTIONS</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">REGULAR CARE</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              Regular Care, Done Properly.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              From a quick express wash to a full interior and exterior clean, done with methods that won&apos;t scratch your paint or strip your coating.
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
                href="#wash-options" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Wash Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785224176/Wash_zyfaye.png"
              alt="Premium Safe Wash Services at AutoGlow"
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
          <p className="text-foreground/60 leading-relaxed text-lg font-light text-left md:text-center">
            Sand and dust settle on a car in the UAE faster than almost anywhere else — and how a car gets washed matters just as much as how often. Automatic brush washes and dirty mitts are the leading cause of the swirl marks that eventually need paint correction to fix. AutoGlow&apos;s wash services use methods that clean properly without adding damage, whether your car has <Link href="/services/ceramic-coating" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">ceramic coating</Link> or <Link href="/services/paint-protection-film" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">PPF</Link> that needs protecting, or just needs to look good for the week ahead.
          </p>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Our Standards</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Wash Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Safe for coated and film-protected vehicles.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Wash methods are chosen to work with <Link href="/services/ceramic-coating" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">ceramic coating</Link> and <Link href="/services/paint-protection-film" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">PPF</Link>, not strip or dull them over time.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">No brush, no swirl marks.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Contact methods and equipment are chosen specifically to avoid the fine scratching that automatic washes cause.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Options for every schedule.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Express, premium, and full <Link href="/contact" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">VIP washes</Link> mean you can get a quick maintenance clean or a complete refresh depending on the day.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Consistent, not a lottery.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">The same process and care every visit — not dependent on which attendant happens to be working.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="wash-options" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We provide tailored washing techniques to suit any schedule or preservation requirement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Express Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A quick, thorough exterior wash for regular maintenance between deeper cleans.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Premium Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Exterior wash plus wheel cleaning and a basic interior wipe-down.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">VIP Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">The complete package: full exterior wash, wheel deep clean, and interior vacuum and wipe-down.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Exterior Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A standalone exterior-only clean focusing purely on the body and glass.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Interior Cleaning</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A standalone interior vacuum and surface clean to restore cabin freshness.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Engine Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A careful, component-safe engine bay clean to clear dust and grease.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Underbody Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Removes sand and grime buildup from the vehicle&apos;s underside to protect components.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Waterless Wash</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A spray-and-wipe method for a quick, eco-friendly clean without a full water wash.</p>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Every wash follows a safe, structured sequence to protect your paint.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Level</div>
              <h3 className="font-display text-xl font-bold mb-3">Choose Your Wash Level</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Pick express, premium, or VIP based on how much time you have and what your car needs.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Care</div>
              <h3 className="font-display text-xl font-bold mb-3">Safe Wash Methods</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Contact-safe techniques are used throughout, protecting any existing coating or film.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Verify</div>
              <h3 className="font-display text-xl font-bold mb-3">Finish & Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">A final look-over confirms nothing was missed before you drive off.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Wash Tiers</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Select from our specialized washing tiers designed for regular vehicle preservation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Express Wash</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">A fast exterior clean for regular upkeep.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Snow Foam & Multi-Bucket Hand Wash</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Glass & Wheel Surface Clean</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Safe Blow-Dry Finish</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Premium Wash</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Exterior wash, wheels, and a basic interior wipe-down.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Premium Exterior Foam & Clean</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Wheel and Barrel Detailing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Basic Interior Console & Dash Wipe-Down</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Comprehensive Care</span>
              <h3 className="font-display text-2xl font-bold mb-4">VIP Wash</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full exterior, wheel deep clean, and interior vacuum and wipe-down in one visit.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Deep Foam Exterior Decontamination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Thorough Cabin Vacuum & Upholstery Wipe-down</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Premium Wheel, Fender, & Glass Care</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for current wash options and scheduling.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Regular Wash Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Coating & Film Safe</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Wash methods that won&apos;t strip ceramic coating or damage PPF.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">No Swirl Marks</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Proper technique avoids the fine scratching automatic washes cause.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Flexible Options</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">From a quick express wash to a full VIP clean, matched to your schedule.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Consistent Results</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">The same standard of care, every single visit.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Sand and dust dull a finish fast in this climate — a proper wash brings the shine back without adding fine scratches in the process. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Deionized Water System">
                We wash using multi-stage filtered deionized water. This removes dissolved minerals to ensure a clean, spot-free dry, preventing the formation of stubborn mineral scale marks.
              </AccordionItem>
              <AccordionItem title="pH-Neutral Formulations">
                All snow foams and surface shampoos are highly concentrated, pH-neutral luxury formulations that clean deep without degrading pre-installed ceramic protections or protective film coatings.
              </AccordionItem>
              <AccordionItem title="High-Efficiency Air-Dry">
                We utilize professional-grade heated air-blow systems to dry intricate panels, grilles, and mirrors, removing trapped water before it can run or pool on the surface.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Will washing damage my ceramic coating or PPF?">
                Not with the right method. Our wash techniques are chosen specifically to be safe for coated and film-protected vehicles.
              </AccordionItem>
              <AccordionItem title="What's the difference between express, premium, and VIP wash?">
                Express is a quick exterior-only clean. Premium adds wheels and a basic interior wipe-down. VIP is the complete package, including interior vacuuming.
              </AccordionItem>
              <AccordionItem title="How often should I wash my car in the UAE?">
                This depends on usage and exposure to sand and dust; a regular light wash between deeper details is generally recommended.
              </AccordionItem>
              <AccordionItem title="Do you offer waterless washing?">
                Yes — a spray-and-wipe waterless option is available for a quick clean without a full water wash.
              </AccordionItem>
              <AccordionItem title="Can I book a wash alongside another service?">
                Yes — wash services can be combined with detailing, coating, or other appointments.
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
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50 font-light">For a deeper clean that goes into extraction carpet cleaning and engine bay sanitization.</p>
            </Link>
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic Coating</h3>
              <p className="text-sm text-foreground/50 font-light">Seal your paint with premium ceramic or graphene layers to make weekly washing effortless.</p>
            </Link>
            <Link href="/services/auto-maintenance" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Auto Maintenance</h3>
              <p className="text-sm text-foreground/50 font-light">Combine routine wash appointments with scheduled fluid checks and engine maintenance.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Keep it looking the way it should.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a wash that fits your schedule — and won&apos;t undo your paint protection in the process.
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
            A proper wash, every time.
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
