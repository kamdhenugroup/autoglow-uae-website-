import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets, Wrench, Palette, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Leather & Interior Restoration Dubai | AutoGlow",
  description: "Repair cracked, torn, or sun-faded leather in Dubai & Abu Dhabi. Color-matched recoloring, seat and steering wheel restoration. Get a quote.",
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
            "name": "Interior & Leather Restoration",
            "description": "Repair cracked, torn, or sun-faded leather in Dubai & Abu Dhabi. Color-matched recoloring, seat and steering wheel restoration. Get a quote.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 10 / Interior Restoration</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Interior & Leather Restoration
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">COLOR MATCHING</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">CRACK REPAIR</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">LEATHER RECOLORING</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              Cracked, Faded, Worn. Not Beyond Saving.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Color-matched repair for cracked, torn, and sun-faded leather — restoring seats, steering wheels, and trim that daily heat exposure has genuinely damaged, not just cleaned and conditioned.
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
                href="#restoration-services" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Restoration Services
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217459/Interior_Leather_Restoration_brvvve.jpg"
              alt="Interior & Leather Restoration at AutoGlow"
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
              A car parked in direct UAE sun can see interior surface temperatures well past 70°C — and leather takes the brunt of it. Over a few summers, that heat cycle dries out natural oils, and the result is cracking, fading, and eventually tearing at stress points like the driver&apos;s seat bolster and steering wheel rim. Regular conditioning slows this down, but once cracking or tearing has actually started, cleaning and conditioning alone won&apos;t reverse it.
            </p>
            <p>
              Interior & Leather Restoration is the repair tier above routine care — color-matched recoloring for faded or worn leather, structural repair for cracks and tears, and full restoration for the seats and steering wheels that take the most punishment. If your leather just needs regular cleaning and conditioning as part of a broader detail, that&apos;s covered under Full Detailing. This page is for leather that&apos;s actually damaged and needs real repair.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Our Standards</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Leather Restoration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Color-matched, not a generic tint.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Recoloring is matched to your vehicle&apos;s actual leather color, not an approximate shade that looks off under different lighting.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Structural repair, not just surface patching.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Cracks and tears are repaired to restore both appearance and the leather&apos;s integrity at stress points, not just filled cosmetically.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Steering wheels and seats — the highest-wear areas.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">These take the most contact and UV exposure of any interior surface, and get dedicated restoration attention rather than generic treatment.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Conditioning that actually prevents recurrence.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Post-repair conditioning is chosen specifically to slow the UV drying cycle that caused the damage in the first place.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="restoration-services" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We offer high-precision interior repairs targeting leather, trim, and vital driver touchpoints.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Leather Cleaning</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Deep cleaning that prepares leather for repair or conditioning work, removing embedded sweat, dirt, and body oils.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Leather Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Structural repair for damaged leather sections, fixing physical punctures and surface abrasions.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Leather Recoloring</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Color-matched restoration for faded, worn, or sun-bleached leather panels back to factory brilliance.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Crack Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Filling and repairing cracked leather at stress points to stop fractures from spreading further.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Tear Repair</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Repairing torn leather using flexible under-patches, restoring both structure and original surface appearance.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Leather Conditioning</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Replenishing natural essential oils within the hide to slow future cracking and sun-induced drying.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Steering Wheel Restoration</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Full restoration for worn, cracked, or shiny steering wheel leather, renewing texture and driver grip tactile feel.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Seat Restoration</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Comprehensive structural repair and detailed recoloring specifically for high-wear driver and passenger seat surfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Process</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our expert restorative protocol brings back pristine beauty and structure to worn cabins.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Analyze</div>
              <h3 className="font-display text-xl font-bold mb-3">Assessment</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We inspect the extent of cracking, tearing, fading, or wear, and identify the exact leather color for matching.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Rebuild</div>
              <h3 className="font-display text-xl font-bold mb-3">Repair</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Cracks and tears are structurally repaired and stabilized before any cosmetic work begins.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Refinish</div>
              <h3 className="font-display text-xl font-bold mb-3">Color Matching & Recoloring</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repaired areas — and full panels where needed — are recolored to match your vehicle&apos;s actual leather shade.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Defend</div>
              <h3 className="font-display text-xl font-bold mb-3">Conditioning & Final Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Conditioning is applied to protect the restored leather, with a final inspection before handover.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Restoration Tiers</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Tailored solutions matching your cabin&apos;s current state, from single touchpoints to a total overhaul.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Spot Repair</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Targeted crack or tear repair on a single high-wear area, such as a steering wheel or seat bolster.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Single bolster or wheel treatment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Exact spectrophotometer color match</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Flexible structural bonding filler</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Seat Restoration</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full recoloring and repair for driver and passenger seats.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Deep oil stripping & decontamination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full surface crack fill and smoothing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Comprehensive seat leather recoloring</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Total Cabin</span>
              <h3 className="font-display text-2xl font-bold mb-4">Complete Interior Restoration</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full recoloring and repair across seats, steering wheel, and trim for a fully restored cabin.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> All seats, console, door card leather</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Steering wheel grip & stitching restoration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full UV protection breathable coating</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for an assessment specific to your interior&apos;s condition.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">The Benefits</p>
            <h2 className="font-display text-3xl font-bold mb-4">Benefits of Leather Restoration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Restores Genuinely Damaged Leather</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Repairs cracks and tears that routine cleaning and conditioning can&apos;t fix.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Color-Matched Results</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Recoloring matched to your vehicle&apos;s actual leather shade, not an approximation.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Targets the Highest-Wear Areas</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Dedicated attention for steering wheels and seat bolsters, where damage shows first.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Prevents Recurrence</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Post-repair conditioning slows the UV drying cycle that caused the original damage.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            Cracked seat bolsters and worn steering wheel leather age a cabin faster than almost anything else — and respond dramatically to proper structural repair and color-matched recoloring. Our gallery documents real restoration work. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Color Spectrometry Match">
                We use optical scanners to read color coordinates of unfaded leather underneath seams, ensuring our custom color blend is a flawless match for your specific vehicle cabin.
              </AccordionItem>
              <AccordionItem title="Leather Reinforcement and Bonders">
                Deep scars and tearing are reinforced from behind with sub-patching material, then filled with high-grade leather bonders that flex with the leather&apos;s natural movement.
              </AccordionItem>
              <AccordionItem title="Permeable Protective Finishes">
                Our top coatings protect newly dyed surfaces while remaining breathable, allowing future leather conditioners to penetrate and nourish the fibers.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Can cracked leather actually be repaired, or does it need replacing?">
                Most cracking and tearing can be structurally repaired and recolored rather than requiring full seat replacement — we assess this honestly during consultation.
              </AccordionItem>
              <AccordionItem title="Will the recolored leather match the rest of my interior?">
                Yes — recoloring is matched to your vehicle&apos;s actual leather shade, not a generic approximation.
              </AccordionItem>
              <AccordionItem title="What causes leather to crack in the first place?">
                Primarily UV exposure and heat cycling drying out the leather&apos;s natural oils over time — common in the UAE&apos;s climate, especially on vehicles parked outdoors.
              </AccordionItem>
              <AccordionItem title="How long does leather restoration take?">
                Timing depends on the extent of damage and how many areas need repair; your assessment will confirm an estimate.
              </AccordionItem>
              <AccordionItem title="Can you restore just my steering wheel, or does it need to be the whole interior?">
                Spot repair on a single area like a steering wheel or seat bolster is available — you don&apos;t need a full interior restoration to address one problem area.
              </AccordionItem>
              <AccordionItem title="How do I prevent this from happening again?">
                Regular conditioning as part of routine detailing significantly slows UV drying and cracking — see our <Link href="/services/full-detailing" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">Full Detailing</Link> page for ongoing maintenance care.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      {/* Complementary Services / Related */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold mb-10 text-center">Complementary Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/full-detailing" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Full Detailing</h3>
              <p className="text-sm text-foreground/50 font-light">Deep steam clean and sanitize all cabin materials to protect your newly restored leather surfaces.</p>
            </Link>
            <Link href="/services/wash" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Wash</h3>
              <p className="text-sm text-foreground/50 font-light">Keep your car exterior as immaculate and spotless as your newly-refinished cabin.</p>
            </Link>
            <Link href="/services/auto-maintenance" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Auto Maintenance</h3>
              <p className="text-sm text-foreground/50 font-light">Ensure mechanical excellence matches your car&apos;s refreshed aesthetic quality.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Damaged leather isn&apos;t a lost cause.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book an assessment and get a color-matched restoration plan for the areas that actually need it.
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
            Cracked leather has a fix. Let&apos;s start there.
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
