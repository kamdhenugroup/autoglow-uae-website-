import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sun, Sparkles, Droplets } from "lucide-react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Window Tinting Dubai | Ceramic & IR Film — AutoGlow",
  description: "Cut cabin heat and UV with premium ceramic window tinting in Dubai & Abu Dhabi. RTA-compliant VLT options, precision installation. Book a consultation.",
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
            "name": "Window Tinting",
            "description": "Cut cabin heat and UV with premium ceramic window tinting in Dubai & Abu Dhabi. RTA-compliant VLT options, precision installation. Book a consultation.",
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
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Service 03 / Window Tinting</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Window Tinting
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">IR REJECTION</span><span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">UV PROTECTION</span><span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-3 py-1 text-foreground/70">VLT OPTIONS</span>
            </div>
            <p className="text-lg font-medium text-foreground mb-3">
              Serious Heat Rejection. Zero Compromise on Compliance.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg font-light">
              Premium IR-rejecting film that cuts cabin temperature and blocks harmful UV — installed with precision and verified against UAE tint regulations, so you get the heat relief without the fine.
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
                href="#packages" 
                className="inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground px-8 py-4 font-medium uppercase tracking-wide hover:bg-foreground/5 transition-colors text-center"
              >
                See Film Options
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full border border-border overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785217453/Window_Tinting_euh7cq.jpg"
              alt="Window Tinting at AutoGlow"
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
              Dubai and Abu Dhabi don&apos;t have mild summers — cabin temperatures in an untinted, parked car regularly climb well past 60°C. That heat doesn&apos;t just make getting in uncomfortable; it accelerates dashboard cracking, upholstery fading, and long-term wear on interior plastics and leather. It also means your air conditioning works harder, longer, every single drive.
            </p>
            <p>
              Quality window film cuts infrared heat transfer and blocks the UV radiation responsible for interior fading — without sacrificing visibility or running afoul of UAE tint regulations. At AutoGlow, we don&apos;t just install film to whatever shade a customer requests; we verify the resulting VLT after installation, so what goes on your windows is both effective and road-legal.
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
              <h3 className="font-medium text-lg mb-3">We verify legality, not just darkness.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">UAE traffic law sets minimum VLT requirements that vary by window position, and factory glass tint stacks with film to affect the final reading. We measure the actual result after installation, not just the film&apos;s rated percentage.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Ceramic and IR films, not just dyed film.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Heat rejection performance varies enormously between film types. We carry ceramic, ceramic IR, and carbon options specifically for their heat-blocking performance, not just their appearance.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Precision installation, computer-cut or hand-cut.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Film is trimmed to your vehicle&apos;s exact window dimensions, whichever cutting method suits the job, for a clean edge-to-edge fit with no visible gaps or overlap.</p>
            </div>
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none flex flex-col h-full">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">More than just side windows.</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Windshield protection film, sunroof tint, and headlight/taillight smoke film are all part of a complete tint package, not separate add-ons treated as afterthoughts.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Coverage Options</h2>
            <p className="text-foreground/60 text-sm">We offer a range of film types and VLT percentage options, using both computer-cut and hand-cut installation techniques depending on your vehicle:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Nano Ceramic Window Tint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Ceramic IR Window Tint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Carbon Window Tint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Dyed Window Tint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Safety & Security Window Film</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Front Windshield Protection Film</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Sunroof Tint</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Headlight & Taillight Smoke Film</span>
            </div>
            <div className="bg-surface p-6 border border-border shadow-sm shadow-black/5 dark:shadow-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground/90 text-sm">Window Film Removal & Replacement</span>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Our structured four-step process delivers flawless alignment and guaranteed compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 01 / Consult</div>
              <h3 className="font-display text-xl font-bold mb-3">Consultation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We discuss your heat, privacy, and styling priorities, and identify which film type and shade level fit both your goals and legal requirements.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 02 / Cut</div>
              <h3 className="font-display text-xl font-bold mb-3">Precision Cutting</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Film is cut to your vehicle&apos;s exact window dimensions using computer-cut or hand-cut techniques as appropriate.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 03 / Apply</div>
              <h3 className="font-display text-xl font-bold mb-3">Installation</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Applied in a clean, controlled environment to avoid trapped dust or bubbling under the film.</p>
            </div>
            <div className="relative">
              <div className="font-mono text-xs text-accent mb-4">Step 04 / Verify</div>
              <h3 className="font-display text-xl font-bold mb-3">VLT Verification</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">We measure the installed film&apos;s actual VLT reading before handover, confirming it matches what was agreed and remains compliant.</p>
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
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">Select a window tint package tailored to your heat rejection and protection needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Essential Tint</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Dyed or carbon film across side and rear windows, for privacy and basic heat reduction.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Side Windows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Rear Windshield</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Basic Heat Protection</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-accent/20 shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full ring-1 ring-accent/10">
              <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase border border-accent/30 bg-accent/5 px-2 py-0.5 text-accent">Most Requested</span>
              <h3 className="font-display text-2xl font-bold mb-4">Ceramic Heat Rejection</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Full nano ceramic or ceramic IR tint across all windows, our most-requested option for serious cabin heat control.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Nano Ceramic Film</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> High IR Rejection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> No Signal Interference</li>
              </ul>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none relative overflow-hidden flex flex-col h-full">
              <h3 className="font-display text-2xl font-bold mb-4">Complete Tint Package</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">Ceramic tint across all windows plus windshield protection film and sunroof tint, for total heat and UV coverage.</p>
              <ul className="space-y-3 text-sm text-foreground/80 mt-auto pt-6 border-t border-border/60">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Full Side & Rear Ceramic Tint</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Windshield Protection Film</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Sunroof IR Rejection Film</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-12">
            Get a <Link href="/contact" className="text-foreground underline decoration-accent/50 hover:text-accent transition-colors font-medium">Quote</Link> for a recommendation and cost specific to your vehicle.
          </p>
        </div>
      </ScrollReveal>

      {/* Feature Icon Grid */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sun className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Serious Heat Rejection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Ceramic and IR films block a significant share of infrared heat before it enters the cabin, keeping interior temperatures noticeably lower.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Shield className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">UV Protection</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Blocks the UV radiation responsible for dashboard cracking, upholstery fading, and long-term interior wear.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Sparkles className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Glare Reduction</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Cuts windscreen and side-window glare, especially valuable during Dubai&apos;s low-sun morning and evening commutes.</p>
            </div>
            <div className="bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <Droplets className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-medium text-lg mb-3">Verified Compliance</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">Every installation is measured for actual VLT after application, not just installed to a requested shade and left unchecked.</p>
            </div>
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
              <p className="text-sm text-foreground/50">Add a hydrophobic layer for extreme paint depth and gloss.</p>
            </Link>
            <Link href="/services/paint-protection-film" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Protection Film</h3>
              <p className="text-sm text-foreground/50">Durable self-healing armor against road grit and stone chips.</p>
            </Link>
            <Link href="/services/paint-correction" className="group bg-background p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none hover:border-foreground/20 transition-colors">
              <h3 className="font-medium text-lg mb-2 group-hover:text-foreground transition-colors">Paint Correction</h3>
              <p className="text-sm text-foreground/50">Restore paint gloss and eliminate swirl marks before wrapping.</p>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Accordions */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Specifications & Before/After Teaser */}
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Specifications</h2>
              <Accordion>
                <AccordionItem title="Durability & Warranty">
                  Our ceramic and infrared window films come with a comprehensive 5 to 10-year manufacturer warranty protecting against bubbling, peeling, adhesive failure, and purple-shifting.
                </AccordionItem>
                <AccordionItem title="What's Included">
                  Every installation includes full window decontamination, glass scraping to remove microscopic grit, computer-guided precision film cutting, scratch-free squeegee application, and post-installation heating.
                </AccordionItem>
                <AccordionItem title="Materials & Tools">
                  We utilize premium nano-ceramic and ceramic IR films, professional slip-solutions, and soft-grip heat guns that ensure uniform film shrinking without distortion.
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-surface p-8 border border-border shadow-sm shadow-black/5 dark:shadow-none">
              <h3 className="font-display text-2xl font-bold mb-4">Before & After Gallery</h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Our physical portfolio showcases microscopic closeups of edge alignment, heat-lamp thermal tests comparing dyed vs. ceramic film performance, and actual client installations.
              </p>
              <Link 
                href="/gallery" 
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wide font-medium text-foreground hover:text-accent transition-colors"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion>
              <AccordionItem title="Is dark window tinting legal in Dubai and Abu Dhabi?">
                Under UAE traffic laws, private passenger vehicles are permitted to have window tinting up to a maximum of 50% Visible Light Transmission (VLT). Note that this limit does not apply to front windscreens, which must remain clear unless equipped with a dedicated transparent heat-shielding film.
              </AccordionItem>
              <AccordionItem title="What is the difference between Nano Ceramic and standard tint?">
                Standard dyed or carbon film relies on dark pigment to block visible light, but offers limited protection against infrared heat (the heat you actually feel). Nano Ceramic film uses microscopic ceramic particles to block up to 99% of infrared rays and 99% of UV radiation, providing superior heat rejection even at lighter, fully legal shade levels.
              </AccordionItem>
              <AccordionItem title="Will window tinting affect my car's GPS, mobile, or radio signals?">
                No. Unlike older metallic films that can block radio waves, our advanced Nano Ceramic and Graphene films are entirely non-conductive and signal-friendly. Your mobile network, GPS navigation, and tire pressure monitoring systems will work perfectly.
              </AccordionItem>
              <AccordionItem title="How long does the installation take, and can I roll down my windows immediately?">
                A full window tint installation typically takes 2 to 4 hours. After application, you must keep your windows rolled up for 48 hours to allow the slip solution to fully evaporate and the adhesive to cure properly.
              </AccordionItem>
              <AccordionItem title="Does my windshield need to be tinted to block heat?">
                Yes, the front windshield is the largest entry point for heat into your cabin. While you cannot apply a dark tint to the windshield legally, we offer specialized, optically clear IR-blocking films designed specifically to block heat without reducing visibility.
              </AccordionItem>
              <AccordionItem title="How should I clean and maintain my new window tint?">
                Always clean tinted glass with a soft microfiber towel and an ammonia-free glass cleaner. Ammonia can degrade the film&apos;s scratch-resistant top coat and adhesive over time. Avoid rolling down windows or scrubbing the glass for the first 48 hours after installation.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollReveal>

      {/* Closing CTA */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to border-t border-border text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to beat the heat, legally?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-light">
            Book a consultation and get a tint recommendation that balances heat rejection, style, and full UAE compliance.
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