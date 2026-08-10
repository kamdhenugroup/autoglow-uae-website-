import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "GlanzPro | Advanced Surface Protection & High-Gloss Coatings",
  description: "Discover GlanzPro — cutting-edge nanocoating technology and surface protection systems engineered for ultimate UV resistance, self-cleaning hydrophobic gloss, and showroom perfection.",
};

export default function GlanzProPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero Section */}
      <ScrollReveal as="section" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border bg-gradient-to-b from-zinc-950 via-zinc-900 to-background text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* GlanzPro Logo Header */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 px-8 py-6 rounded-2xl bg-black border border-zinc-800 shadow-2xl backdrop-blur-md" dir="ltr" style={{ direction: 'ltr' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://qrzyehvzqaymtvxa.public.blob.vercel-storage.com/Glanz_Pro.png" 
                alt="GlanzPro Logo" 
                className="h-24 sm:h-32 md:h-40 w-auto object-contain" 
              />
            </div>

            <p className="font-mono text-xs sm:text-sm text-cyan-400 uppercase tracking-widest mb-4 font-semibold">
              Advanced Surface Protection Technology
            </p>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Unrivaled High-Gloss Precision.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-light mb-6">
              Engineered for supreme surface protection across <span className="text-white font-semibold underline decoration-cyan-400/60 underline-offset-4">Automotive</span>, <span className="text-white font-semibold underline decoration-indigo-400/60 underline-offset-4">Commercial</span>, <span className="text-white font-semibold underline decoration-purple-400/60 underline-offset-4">Residential</span>, and <span className="text-white font-semibold underline decoration-blue-400/60 underline-offset-4">Marine</span> applications — delivering next-generation nano-ceramic technology, extreme UV defense, and self-cleaning hydrophobic gloss.
            </p>

            {/* Applications Sector Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Icon icon="solar:wheel-bold-duotone" className="w-4 h-4 text-purple-400" />
                Automotive
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                <Icon icon="solar:buildings-bold-duotone" className="w-4 h-4 text-indigo-400" />
                Commercial
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Icon icon="solar:home-smile-bold-duotone" className="w-4 h-4 text-purple-400" />
                Residential
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <Icon icon="solar:water-bold-duotone" className="w-4 h-4 text-cyan-400" />
                Marine
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                data-cuelume-press="sparkle"
                data-cuelume-hover="bloom"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-900/30 text-sm uppercase tracking-wider"
              >
                Book GlanzPro Application
              </Link>
              <a
                href="https://www.instagram.com/glanzpro.film/reels/"
                target="_blank"
                rel="noopener noreferrer"
                data-cuelume-press="chime"
                className="px-8 py-4 rounded-xl border border-purple-500/40 bg-zinc-900/90 text-white font-medium hover:border-purple-400 hover:bg-zinc-800 transition-all flex items-center gap-2.5 text-sm uppercase tracking-wider group"
              >
                <Icon icon="ri:instagram-line" className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>@glanzpro.film Reels</span>
              </a>
              <a
                href="https://wa.me/971506321408?text=Hello%20AutoGlow,%20I%20want%20to%20inquire%20about%20GlanzPro%20services."
                target="_blank"
                rel="noopener noreferrer"
                data-cuelume-press="droplet"
                className="px-8 py-4 rounded-xl border border-zinc-700 bg-zinc-900/80 text-white font-medium hover:border-zinc-500 transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                <Icon icon="ri:whatsapp-line" className="w-5 h-5 text-emerald-400" />
                WhatsApp Inquiry
              </a>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* Overview & Key Advantages */}
      <ScrollReveal as="section" className="py-20 md:py-32 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <p className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                Why GlanzPro
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Micro-Surgical Depth & Hydrophobic Defense
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                GlanzPro is formulated with high-purity silica dioxide (SiO2) and graphene polymers that cross-link directly with painted, glass, metallic, and architectural substrates. Beyond world-class <strong>Automotive</strong> detailing, GlanzPro provides specialized protection solutions tailored for <strong>Commercial</strong> facades, high-end <strong>Residential</strong> architectural glass and stone, and high-salinity <strong>Marine</strong> vessels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <Icon icon="solar:shield-star-bold-duotone" className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">9H Diamond Hardness</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">Resists minor swirl marks, wash marring, and surface friction.</p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <Icon icon="solar:water-drops-bold-duotone" className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Extreme Hydrophobic</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">Water contact angle &gt;110° for self-cleaning water beading.</p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <Icon icon="solar:sun-2-bold-duotone" className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">UAE UV Shield</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">Prevents paint oxidation, color fading, and clear coat failure.</p>
                </div>

                <div className="p-5 rounded-xl border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3">
                    <Icon icon="solar:sparkles-bold-duotone" className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Deep Candy Gloss</h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">Enhances reflection depth, metallic flake pop, and glass-like finish.</p>
                </div>
              </div>
            </div>

            {/* Visual Specs Panel */}
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800 text-white space-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-display text-2xl font-bold tracking-tight text-white border-b border-zinc-800 pb-4">
                GlanzPro Technical Metrics
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-zinc-400">Gloss Reflection Rating</span>
                    <span className="text-cyan-400 font-bold">99.8%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[99.8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-zinc-400">Chemical Resistance (pH Range)</span>
                    <span className="text-cyan-400 font-bold">pH 2 – pH 13</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-zinc-400">Thermal Tolerance</span>
                    <span className="text-cyan-400 font-bold">Up to 750°C</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-zinc-400">Warranty Coverage</span>
                    <span className="text-cyan-400 font-bold">Up to 5 Years</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[90%]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Certified Studio Application</span>
                <span>Al Quoz, Dubai</span>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* Application Process */}
      <ScrollReveal as="section" className="py-20 md:py-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-semibold">Surgical Precision</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">The GlanzPro Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-border bg-surface relative">
              <span className="font-mono text-4xl font-bold text-accent/30 mb-4 block">01</span>
              <h3 className="font-bold text-lg mb-2">Decontamination</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">Multi-stage foam wash, iron chemical decontamination, and clay bar treatment.</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface relative">
              <span className="font-mono text-4xl font-bold text-accent/30 mb-4 block">02</span>
              <h3 className="font-bold text-lg mb-2">Paint Correction</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">Precision dual-action machine polishing to eliminate swirls and oxidation.</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface relative">
              <span className="font-mono text-4xl font-bold text-accent/30 mb-4 block">03</span>
              <h3 className="font-bold text-lg mb-2">GlanzPro Layering</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">Hand-applied ceramic nanocoating in climate-controlled, dust-free bays.</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface relative">
              <span className="font-mono text-4xl font-bold text-accent/30 mb-4 block">04</span>
              <h3 className="font-bold text-lg mb-2">IR Curing & Inspection</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">Infrared heat lamp curing for optimal ceramic bond strength before release.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal as="section" className="py-20 bg-zinc-950 text-white text-center border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Experience GlanzPro Protection
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Book your consultation today or visit our studio in Dubai or Abu Dhabi for a paint assessment and bespoke protection plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all uppercase tracking-wider text-sm"
            >
              Book Consultation
            </Link>
            <a
              href="https://www.instagram.com/glanzpro.film/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-purple-500/40 bg-zinc-900 text-white font-medium hover:border-purple-400 transition-all text-sm uppercase tracking-wider flex items-center gap-2 group"
            >
              <Icon icon="ri:instagram-line" className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              Follow @glanzpro.film
            </a>
            <a
              href="tel:+971504670081"
              className="px-8 py-4 rounded-xl border border-zinc-700 bg-zinc-900 text-white font-medium hover:border-zinc-500 transition-all text-sm uppercase tracking-wider flex items-center gap-2"
            >
              <Icon icon="solar:phone-calling-bold-duotone" className="w-5 h-5 text-accent" />
              +971 50 467 0081
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
