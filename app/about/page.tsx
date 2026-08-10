import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "About AutoGlow | Precision Surface Protection Specialists in the UAE",
  description: "Learn more about AutoGlow, our partnerships with international leaders like Permagard, our master craftsmanship, and precision engineering.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <ScrollReveal as="section" className="scroll-mt-24 pt-32 pb-20 md:pt-48 md:pb-32 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Driven by Perfection.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              AutoGlow was founded with a singular purpose: to bring engineering-grade surface protection to the UAE. We believe that protecting your investment shouldn&apos;t compromise its aesthetics.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Brand Story / Facility */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] lg:h-[600px] w-full border border-border overflow-hidden rounded-sm bg-muted">
              <Image
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226321/WhatsApp_Image_2026-07-28_at_1.34.08_PM_kp5one.jpg"
                alt="AutoGlow Luxury Detailing Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="space-y-8 text-foreground/70 leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">The AutoGlow Standard</h2>
              <p>
                Founded in the UAE, AutoGlow recognized a critical gap in the automotive care market. The intense regional UV radiation, extreme ambient heat, and constant fine sand exposure require more than standard car washes or temporary dealership glazes.
              </p>
              <p>
                We engineered our state-of-the-art facilities from the ground up to support surgical-grade detailing, ceramic coating, and precision Paint Protection Film (PPF) application. Our climate-controlled, dust-filtered installation bays guarantee that every micron of film and coating cures in a spotless environment.
              </p>
              <p>
                Our master technicians hold top international certifications and approach every luxury supercar, SUV, and daily driver with absolute precision and uncompromising care.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Our Locations Showcase */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-28 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">Our Studios</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">AutoGlow UAE Centers</h2>
            <p className="text-foreground/60 text-sm mt-3">Visit our flagship detailing centers in Abu Dhabi and Dubai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AutoGlow Abu Dhabi */}
            <div className="group border border-border rounded-sm overflow-hidden bg-surface transition-all duration-300 hover:border-accent/40">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-muted">
                <Image
                  src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226317/AbuDhabi_ju9xxw.jpg"
                  alt="AutoGlow Abu Dhabi Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-medium border border-border">
                  Abu Dhabi Flagship
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">AutoGlow Abu Dhabi</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  Fully equipped with dedicated clean-room bays for PPF, ceramic curing lights, and executive consultation lounges.
                </p>
              </div>
            </div>

            {/* AutoGlow Dubai */}
            <div className="group border border-border rounded-sm overflow-hidden bg-surface transition-all duration-300 hover:border-accent/40">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-muted">
                <Image
                  src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226320/Dubai_nym2pk.jpg"
                  alt="AutoGlow Dubai Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-medium border border-border">
                  Dubai Studio
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">AutoGlow Dubai</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  Situated in Dubai&apos;s prime automotive hub, offering high-capacity detailing, paint correction, and custom wraps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Facilities & Office Gallery */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Behind the Scenes</p>
            <h2 className="font-display text-3xl font-bold">Executive Office & Craftsmanship Studios</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-sm overflow-hidden border border-border bg-muted">
              <Image
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226317/WhatsApp_Image_2026-07-28_at_1.34.08_PM_2_tz5twn.jpg"
                alt="AutoGlow Executive Office Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative h-72 rounded-sm overflow-hidden border border-border bg-muted">
              <Image
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226317/WhatsApp_Image_2026-07-28_at_1.34.08_PM_4_z10f1t.jpg"
                alt="AutoGlow Lounge & Office Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative h-72 rounded-sm overflow-hidden border border-border bg-muted">
              <Image
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226321/WhatsApp_Image_2026-07-28_at_1.34.08_PM_kp5one.jpg"
                alt="AutoGlow Studio Work Bays"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Values / Pillars */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-t border-muted pt-8">
              <Icon icon="solar:shield-check-bold-duotone" className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Genuine Products</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                We strictly use verified, authentic products from industry leaders. No diluted chemicals, no white-label films. As a recognized Permagard partner, we guarantee the origin and quality of every coating we apply.
              </p>
            </div>
            
            <div className="border-t border-muted pt-8">
              <Icon icon="solar:medal-ribbons-bold-duotone" className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Master Craftsmanship</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {/* NOTE TO OWNER: Verify certifications of technicians */}
                Our lead technicians hold multiple international certifications. Paint correction is an art, and PPF installation is a science. We employ only those who have mastered both.
              </p>
            </div>

            <div className="border-t border-muted pt-8">
              <Icon icon="solar:target-bold-duotone" className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">Precision Engineering</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                From digital pattern cutting for films to utilizing specific spectrum lighting for paint inspection, our approach relies on data, proper tools, and controlled environments.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
