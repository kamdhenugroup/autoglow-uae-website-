import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Droplets, Palette, Sun, ShieldAlert } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Peelable Paint Dubai | Reversible Color Change — AutoGlow",
  description: "Change your car's color with fully removable peelable paint in Dubai & Abu Dhabi. Matte, satin, gloss, and custom finishes. Get a quote.",
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
            "name": "Peelable Paint",
            "description": "Change your car's color with fully removable peelable paint in Dubai & Abu Dhabi. Matte, satin, gloss, and custom finishes. Get a quote.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 12 / Peelable Paint</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Peelable Paint
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">FULLY REVERSIBLE</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">TEMPORARY COLOR</span>
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">CUSTOM FINISH</span>
            </div>
            <p className="text-xl font-medium text-foreground mb-3">
              A New Color, With an Undo Button.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              A sprayed-on rubberized coating that changes your car&apos;s color completely — and peels off cleanly whenever you want your factory paint back underneath.
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
                href="#finish-options" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Finish Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785224173/Peelable_Pain_qh3xzy.png"
              alt="Peelable Paint Protection at AutoGlow"
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
              Peelable paint is a rubberized coating applied in liquid form and cured into a flexible finish that can later be peeled away in sheets — a genuine color change that&apos;s entirely temporary by design. It&apos;s a different approach from <Link href="/services/vinyl-wrapping" className="text-foreground underline decoration-accent/30 hover:text-accent transition-colors font-medium">vinyl wrap</Link>: rather than a precision-cut film applied panel by panel, peelable paint is sprayed on, which makes it particularly suited to full vehicle color changes, motorsport and track-day styling, or anyone who wants to test a color commitment-free before considering something more permanent.
            </p>
            <p>
              At AutoGlow, peelable paint is applied over properly prepared panels for even coverage and clean removal later, in your choice of matte, satin, gloss, or metallic finish — including fully custom colors.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Why Choose AutoGlow */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Honest Consultation</p>
            <h2 className="font-display text-3xl font-bold">Why Choose AutoGlow for Peelable Paint</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Genuinely removable, not just marketed that way.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Applied and cured correctly, peelable paint comes off in clean sheets, leaving your factory paint underneath exactly as it was.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Full finish flexibility.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Matte, satin, gloss, and metallic finishes are all available, alongside fully custom color mixing.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Proper surface prep, proper removal later.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Even coverage starts with correct panel preparation — and that same care is what makes clean peeling possible when you&apos;re ready for a change.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">An honest fit for the right use case.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We&apos;ll tell you if a wrap or paint respray genuinely suits your goal better — peelable paint isn&apos;t the right tool for every project, and we&apos;d rather recommend correctly than oversell.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Detailed Service Explanation */}
      <ScrollReveal as="section" id="finish-options" className="py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold mb-4">Detailed Service Explanation</h2>
            <p className="text-foreground/60 text-sm">We spray high-elastomeric removable coatings that conform to intricate curves and contours flawlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Full Vehicle Peelable Paint</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Complete color coverage across the entire vehicle, changing the visual aesthetic fully.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Partial Peelable Paint</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Targeted panels or sections (hoods, mirrors, roofs) for an accent or high-contrast two-tone look.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Matte Finish</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A flat, non-reflective, stealth-inspired look that emphasizes body contour styling lines.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Satin Finish</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A subtle, frosted sheen between matte and gloss, offering a sophisticated, modern metallic look.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Gloss Finish</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A reflective, high-gloss traditional paint-like finish that mirrors factory clear coat reflection.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Metallic Finish</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">A premium, multi-layered finish infused with visible metallic flake depth for sunlit brilliance.</p>
              </div>
            </div>
            <div className="bg-surface p-6 border border-border flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-base text-foreground mb-2">Custom Colors</h3>
                <p className="text-xs text-foreground/50 leading-relaxed">Bespoke color mixing and matching beyond standard catalog options, tailored around your exact style concept.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Process / How It Works */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Spraying Method</p>
            <h2 className="font-display text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our dust-controlled application booth protocol ensures smooth coats and seamless peelability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Align</div>
              <h3 className="font-display text-xl font-bold mb-3">Consultation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We discuss your color, finish, and coverage goals, and confirm peelable paint is the right fit for what you&apos;re after.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Prepare</div>
              <h3 className="font-display text-xl font-bold mb-3">Surface Preparation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Panels are properly cleaned, clay-barred, and prepped to ensure perfect paint-to-coating contact and clean removal.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Spray</div>
              <h3 className="font-display text-xl font-bold mb-3">Application</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Coating is applied in multiple controlled layers inside our specialized booth to build structural density and uniform finish.</p>
            </div>
            <div>
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Bake</div>
              <h3 className="font-display text-xl font-bold mb-3">Cure & Final Check</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">The coating is fully cured under heat and inspected before handover, with guidance on care and eventual removal.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Packages Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Coating Packages</p>
            <h2 className="font-display text-3xl font-bold mb-4">Packages</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">We assess honestly and help you select the exact reversible styling scope for your car.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Accent Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Partial coverage on select panels for a two-tone or accent look.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Contrast roof, mirrors, or spoilers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Seamless masking line execution</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Safe edge-trimming techniques</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Full Vehicle Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Complete color coverage across the entire vehicle.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Every visible exterior painted panel</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High-micron depth for gravel resistance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Choice of standard matte, satin, or gloss</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Bespoke Style</span>
              <h3 className="font-display text-2xl font-bold mb-4">Custom Finish Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full vehicle coverage in a bespoke custom color or metallic finish.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Bespoke color-matching and blending</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Metal flake, pearl, or color-shifting flakes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High gloss protective clear coating coat</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for an assessment specific to your vehicle and chosen finish.
          </p>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Aesthetic Protection</p>
            <h2 className="font-display text-3xl font-bold mb-4">Benefits of Peelable Paint</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <ShieldAlert className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Fully Reversible</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Peel it off when you&apos;re ready for a change, with factory paint intact underneath.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Palette className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Complete Color Flexibility</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Matte, satin, gloss, metallic, or fully custom colors, all in one removable coating.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Protects Factory Paint While Applied</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">The coating shields your original finish from minor scuffs, light scratches, and UV exposure during use.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Lower Commitment Than a Respray</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Test a bold color or a bespoke matte finish on your car without permanent alterations.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Before & After */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Before & After</h2>
          <p className="text-foreground/60 leading-relaxed text-lg font-light mb-8">
            A full peelable paint application transforms a vehicle&apos;s look completely — and reveals factory-original paint underneath when peeled away later. Our gallery documents real color-change projects. <em>(To be populated with real project photography.)</em>
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
              <AccordionItem title="Rubberized Layer Density & Thickness">
                Formulated at up to 200+ microns thick, providing substantial thickness that functions as a flexible cushion against gravel, sandstorms, and road debris.
              </AccordionItem>
              <AccordionItem title="Elastomeric Tensile Strength">
                The sprayed compound retains elastomeric properties over multiple seasons, allowing it to remain flexible and peel cleanly in full sheets without tearing or leaving residue.
              </AccordionItem>
              <AccordionItem title="Non-Invasive Curing Tech">
                Applied inside dry spray booths with low-temp convection curing, ensuring that no chemical bonding occurs with the underlying automotive factory clear coat.
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Does peelable paint damage the factory paint underneath?">
                No, when applied and removed correctly — properly cured coating peels away cleanly, leaving factory paint in its original condition.
              </AccordionItem>
              <AccordionItem title="How long does peelable paint last before it needs removing or redoing?">
                Typically, a high-quality peelable paint coating lasts 2-4 years depending on how the vehicle is used, washed, and stored; your consultation will confirm a realistic timeframe.
              </AccordionItem>
              <AccordionItem title="What&apos;s the difference between peelable paint and vinyl wrap?">
                Peelable paint is a sprayed rubberized coating, better suited to full color changes and motorsport-style finishes. Vinyl wrap is a precision-cut film, better suited to patterns, designs, and longer-term wraps. We can help you decide which fits your goal.
              </AccordionItem>
              <AccordionItem title="Can I wash a car with peelable paint applied?">
                Hand washing is recommended, avoiding high-pressure jets that could lift edges — we provide specific care guidance at handover.
              </AccordionItem>
              <AccordionItem title="Can I remove it myself, or does it need professional removal?">
                Removal can often be done without special tools, though professional removal ensures no residue or damage to the paint underneath.
              </AccordionItem>
              <AccordionItem title="Is peelable paint suitable for a daily driver?">
                It can be, though it&apos;s more commonly chosen for shorter-term styling, events, or track use — we&apos;ll advise honestly based on how you use your vehicle.
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
            <Link href="/services/vinyl-wrapping" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Vinyl Wrapping & Customization</h3>
              <p className="text-sm text-foreground/50 font-light">Explore premium precision-cut cast vinyl films for detailed patterns, liveries, and long-term decals.</p>
            </Link>
            <Link href="/services/paint-protection-film" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Protection Film</h3>
              <p className="text-sm text-foreground/50 font-light">Invest in crystal-clear polyurethane films that shield your underlying factory panels from high-speed stone impact.</p>
            </Link>
            <Link href="/services/ceramic-coating" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Ceramic & Graphene Coating</h3>
              <p className="text-sm text-foreground/50 font-light">Coat your peelable paint with advanced nano-coatings to repel sand dust, mud, and hard mineral water spots.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Strong Call-To-Action Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Try a new color, without the commitment.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and explore finish options that come off cleanly whenever you&apos;re ready for something else.
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
            A color change you can take back.
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
