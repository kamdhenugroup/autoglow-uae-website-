"use client";

import "@/components/patch-insertion-effect";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

import { Marquee } from "@/components/ui/marquee";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t, language } = useLanguage();
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "AutoGlow",
            "description": "Precision engineering and premium surface protection for vehicles and properties in UAE.",
            "url": "https://autoglow.ae", // NOTE TO OWNER: Update real URL
            "telephone": "+971506321408",
            "email": "info@autoglow.ae",
            "logo": "https://autoglow.ae/images/autoglow-logo.png",
            "priceRange": "$$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              }
            ],
            "location": [
              {
                "@type": "Place",
                "name": "AUTOGLOW UAE - Dubai HQ",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Gate No.3 - Plot No. 1014 22nd St, Al Qouz Industrial Second",
                  "addressLocality": "Dubai",
                  "addressCountry": "AE"
                }
              },
              {
                "@type": "Place",
                "name": "AUTOGLOW - Abu Dhabi",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Al Hail Business Centre, Motors - Block-1 Unit-4, Musaffah M4",
                  "addressLocality": "Abu Dhabi",
                  "addressCountry": "AE"
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <ScrollReveal as="section" className="scroll-mt-24 relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-[1.01]"
          >
            <source src="https://qrzyehvzqaymtvxa.public.blob.vercel-storage.com/AutoGlow%20Hero%20Section.webm" type="video/webm" />
          </video>
          {/* High-contrast overlays for readability and smooth bottom fading */}
          <div className="absolute inset-0 bg-black/65 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-black/40 z-[2]" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent z-[2]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl flex flex-col items-center"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-wider text-white mb-8 uppercase select-none leading-[1.05] drop-shadow-md">
              <span className="block">{t("hero.title.line1")}</span>
              <span className="block mt-2 sm:mt-3">{t("hero.title.line2")}</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3.5 max-w-3xl mx-auto mb-10 select-none">
              <p className="text-base sm:text-lg md:text-xl text-white/95 font-light leading-relaxed drop-shadow-sm rtl:text-right">
                {t("hero.desc")}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white hover:bg-white/95 text-black px-8 py-4 font-semibold uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-2xl rounded-xs"
              >
                {t("btn.book")}
                <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      <Marquee 
        text={language === "ar" ? "هندسة دقيقة / متخصصو حماية الأسطح الموثوقون في الإمارات / جودة لا تهاون فيها /" : "PRECISION ENGINEERED / UAE'S TRUSTED SURFACE SPECIALISTS / UNCOMPROMISING QUALITY /"} 
        speed={25} 
      />

      {/* Trusted By Owners Of - Luxury Car Brands */}
      <ScrollReveal as="section" className="py-14 sm:py-20 bg-background border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent uppercase tracking-widest mb-3 font-semibold">
              <Icon icon="solar:crown-minimalistic-bold-duotone" className="w-4 h-4 text-accent" />
              {language === "ar" ? "ثقة مالكي السيارات الفاخرة" : "Excellence Approved"}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
              {language === "ar" ? "يعتمده مالكو أشهر العلامات العالمية" : "Trusted By Owners Of"}
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              {language === "ar"
                ? "حماية وصيانة واحترافية فائقة لأرقى السيارات الفارهة والسوبركار في دبي وأبوظبي."
                : "Providing bespoke PPF, ceramic coating, and precision detailing for over 1,200+ exotic supercars and luxury vehicles across the UAE."}
            </p>
          </div>

          {/* Car Brand Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: "Porsche", icon: "simple-icons:porsche", badge: "GT3 / Turbo S / Taycan" },
              { name: "Ferrari", icon: "simple-icons:ferrari", badge: "SF90 / F8 / 812" },
              { name: "Lamborghini", icon: "simple-icons:lamborghini", badge: "Revuelto / Urus / Huracán" },
              { name: "Rolls-Royce", icon: "simple-icons:rollsroyce", badge: "Cullinan / Phantom / Ghost" },
              { name: "Bentley", icon: "simple-icons:bentley", badge: "Continental GT / Bentayga" },
              { name: "McLaren", icon: "simple-icons:mclaren", badge: "720S / 750S / Artura" },
              { name: "Aston Martin", icon: "simple-icons:astonmartin", badge: "DBS / DB12 / Vantage" },
              { name: "Mercedes-AMG", icon: "simple-icons:mercedes", badge: "G63 AMG / GT Black Series" },
              { name: "BMW M", icon: "simple-icons:bmw", badge: "M3 / M5 / XM" },
              { name: "Bugatti", icon: "simple-icons:bugatti", badge: "Chiron / Tourbillon" },
              { name: "Audi Sport", icon: "simple-icons:audi", badge: "RS6 / RSQ8 / R8" },
              { name: "Range Rover", icon: "simple-icons:landrover", badge: "SV / Autobiography" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-surface/40 hover:bg-surface border border-border/80 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 select-none text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-foreground/80 group-hover:text-accent transition-colors mb-3">
                  <Icon icon={brand.icon} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-foreground group-hover:text-foreground transition-colors">
                  {brand.name}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground group-hover:text-accent/80 transition-colors mt-1 truncate max-w-full">
                  {brand.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Official Partners & Certified Brands Showcase */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 sm:py-24 bg-surface/50 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-foreground/5 border border-border text-xs font-mono text-muted uppercase tracking-widest mb-4">
              <Icon icon="solar:verified-check-bold" className="w-4 h-4 text-accent" />
              {language === "ar" ? "اعتمادات الجودة العالمية" : "Certified Accreditation"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {language === "ar" ? "الشركاء المعتمدون والعلامة التجارية" : "Official Partners & Certified Brand"}
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
              {language === "ar"
                ? "نضمن لعملائنا أعلى مستويات الحماية والضمان بفضل شراكاتنا مع رواد التكنولوجيا العالميين وعلامتنا التجارية الخاصة."
                : "We partner with world-leading surface technology giants and engineer our proprietary nanocoatings to deliver uncompromised quality, authentic warranties, and showroom perfection."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* XPEL Card */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785223781/XPEL-no-r-wht-1_kcecbm.png"
                      alt="XPEL Protection Film"
                      width={120}
                      height={32}
                      className="h-7 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-wider font-semibold">
                    {language === "ar" ? "شريك معتمد" : "Authorized Installer"}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">XPEL Paint Protection</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {language === "ar"
                    ? "أفلام حماية الطلاء ذاتية الشفاء وحماية النوافذ الت الت الت مع ضمان مصنعي الموثوق."
                    : "World-class self-healing PPF and DAP precision computer-cut films providing invisible 10-year UV and rock-chip defense."}
                </p>
              </div>
              <Link
                href="/services/paint-protection-film"
                className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-amber-400 group-hover:text-amber-300 font-semibold pt-4 border-t border-zinc-800/80 transition-colors"
              >
                <span>{language === "ar" ? "استكشف خدمات XPEL" : "Explore XPEL PPF"}</span>
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Link>
            </div>

            {/* Permagard Card */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
                  <svg viewBox="0 0 340 75" className="h-8 w-auto" aria-label="Permagard Automotive">
                    <defs>
                      <linearGradient id="pg-red-home" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF4D4D" />
                        <stop offset="40%" stopColor="#E31B23" />
                        <stop offset="100%" stopColor="#8B0000" />
                      </linearGradient>
                      <linearGradient id="pg-shine-home" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(18, 5) rotate(-22)">
                      <path d="M 12,2 C 22,2 28,12 24,32 C 20,52 10,64 6,64 C 2,64 2,52 6,32 C 10,12 2,2 12,2 Z" fill="url(#pg-red-home)" />
                      <ellipse cx="15" cy="16" rx="4" ry="9" fill="url(#pg-shine-home)" transform="rotate(15 15 16)" />
                    </g>
                    <g transform="translate(42, 14) rotate(-18)">
                      <path d="M 10,2 C 18,2 22,10 19,25 C 16,40 8,48 5,48 C 2,48 2,40 5,25 C 8,10 2,2 10,2 Z" fill="url(#pg-red-home)" />
                      <ellipse cx="12" cy="13" rx="3" ry="6" fill="url(#pg-shine-home)" transform="rotate(15 12 13)" />
                    </g>
                    <text x="72" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="33" letterSpacing="0.04em" fill="#FFFFFF">
                      PERMAGARD<tspan fontSize="18" dy="-14">®</tspan>
                    </text>
                    <text x="200" y="66" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="0.34em" fill="#E31B23">
                      AUTOMOTIVE
                    </text>
                  </svg>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 uppercase tracking-wider font-semibold">
                    {language === "ar" ? "شريك معتمد" : "Recognized Applicator"}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Permagard Ceramic & Aviation</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {language === "ar"
                    ? "تقنية الطلاء المتبادلة والطلاء السيراميكي المعتمد طيرانياً لحماية القوارب والسيارات الفاخرة."
                    : "Aviation-certified reactive polymer and ceramic technology protecting commercial aircraft, superyachts, and luxury supercars."}
                </p>
              </div>
              <Link
                href="/services/ceramic-coating"
                className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-red-400 group-hover:text-red-300 font-semibold pt-4 border-t border-zinc-800/80 transition-colors"
              >
                <span>{language === "ar" ? "استكشف خدمات Permagard" : "Explore Permagard Coating"}</span>
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Link>
            </div>

            {/* GlanzPro Card (Our In-House Brand) */}
            <div className="group relative bg-zinc-950 dark:bg-zinc-900 border border-purple-500/30 hover:border-purple-500/70 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800">
                  <Image
                    src="https://qrzyehvzqaymtvxa.public.blob.vercel-storage.com/Glanz_Pro.png"
                    alt="GlanzPro"
                    width={400}
                    height={120}
                    sizes="(max-width: 640px) 48vw, 240px"
                    className="h-12 sm:h-16 w-auto object-contain"
                  />
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 uppercase tracking-wider font-semibold">
                    {language === "ar" ? "علامتنا التجارية" : "In-House Brand"}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">GlanzPro Surface Systems</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {language === "ar"
                    ? "تقنية نانو سيراميك متطورة وSiO2 وجرافين صممت خصيصاً للسيارات والمباني التجارية والسكنية واليخوت."
                    : "Next-gen SiO2 & graphene nanocoatings engineered specifically for Automotive, Commercial, Residential, and Marine protection."}
                </p>
              </div>
              <Link
                href="/glanzpro"
                className="inline-flex items-center justify-between text-xs font-mono uppercase tracking-wider text-purple-400 group-hover:text-purple-300 font-semibold pt-4 border-t border-zinc-800/80 transition-colors"
              >
                <span>{language === "ar" ? "اكتشف GlanzPro" : "Discover GlanzPro Range"}</span>
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Services Grid Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">{t("nav.disciplines")}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{t("services.title")}</h2>
            </div>
            <Link href="/services" className="text-sm uppercase tracking-wide border-b border-foreground/20 hover:border-foreground pb-1 transition-colors self-start md:self-auto">
              {t("btn.view_all")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {SERVICES.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group bg-background p-8 hover:bg-surface transition-colors flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-muted transition-colors">
                  <span className="text-muted">{service.icon}</span>
                </div>
                <h3 className="font-display font-medium text-lg mb-3 group-hover:text-foreground text-foreground/90">
                  {t(service.title)}
                </h3>
                <p className="text-sm text-muted leading-relaxed mt-auto">
                  {t(service.description)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Trust Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">{t("trust.tag")}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
                {t("trust.title")}
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-10">
                {t("trust.desc")}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-muted pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
                  <div className="font-display text-4xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-sm text-muted uppercase tracking-wide">{t("trust.years")}</div>
                </div>
                <div className="border-l-2 border-muted pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="solar:shield-check-bold-duotone" className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-sm text-muted uppercase tracking-wide">{t("trust.partner")}</div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden border border-border bg-muted flex items-center justify-center">
              <Image 
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785226114/Landing_page_image_iu6n8q.jpg" 
                alt="Precision Paint Polishing" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-background/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">{t("testimonials.tag")}</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">{t("testimonials.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The attention to detail is unparalleled. My GT3 looks better than the day it left the showroom, and the PPF installation is entirely invisible.",
                name: "Ahmed Al M.",
                vehicle: "Porsche 911 GT3 Owner"
              },
              {
                quote: "I brought in my new G-Wagon for ceramic coating and interior protection. The hydrophobic effect is insane, and the service was professional from day one.",
                name: "Sarah K.",
                vehicle: "Mercedes-AMG G 63 Owner"
              },
              {
                quote: "After off-roading, my paint was covered in desert pinstripes. Their paint correction restored it perfectly, and the new PPF gives me peace of mind.",
                name: "Omar T.",
                vehicle: "Nissan Patrol Nismo Owner"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-surface p-10 border border-border shadow-sm shadow-black/5 dark:shadow-none">
                <div className="flex gap-1 text-muted mb-6">
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-accent" />
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-accent" />
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-accent" />
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-accent" />
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-accent" />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 italic">
                  &quot;{t(testimonial.quote)}&quot;
                </p>
                <div>
                  <p className="font-medium text-foreground">{t(testimonial.name)}</p>
                  <p className="text-xs text-foreground/40 mt-1">{t(testimonial.vehicle)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Ask AI About Us Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-28 bg-surface/50 border-t border-border relative overflow-hidden">
        {/* Background ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {t({ en: "Ask AI About AutoGlow", ar: "اسأل الذكاء الاصطناعي عن أوتوجلو" })}
            </h2>
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed">
              {t({ 
                en: "Research our XPEL accreditation, GlanzPro nanocoatings, and studio facilities independently across leading artificial intelligence platforms.", 
                ar: "استكشف اعتمادنا من XPEL، وطلاء جلانزبرو، ومرافق استوديوهاتنا عبر أشهر منصات الذكاء الاصطناعي بكل استقلالية." 
              })}
            </p>
          </div>

          {/* AI Platforms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(() => {
              const AI_SOURCE_URL = "https://autoglow.ae/llms.txt";
              const ASK_AI_PROMPT =
                `Read ${AI_SOURCE_URL} for AutoGlow's official details. Then answer: what makes ` +
                `AutoGlow different from other detailing and paint protection studios in Dubai and ` +
                `Abu Dhabi? Answer in terms of their accreditations, process and studio facilities. ` +
                `Then tell me what I should generally look for when choosing a PPF installer in the UAE.`;
              const encodedPrompt = encodeURIComponent(ASK_AI_PROMPT);

              return [
                {
                  name: "ChatGPT",
                  provider: "OpenAI",
                  icon: "simple-icons:openai",
                  link: `https://chatgpt.com/?q=${encodedPrompt}`,
                },
                {
                  name: "Claude",
                  provider: "Anthropic",
                  icon: "simple-icons:claude",
                  link: `https://claude.ai/new?q=${encodedPrompt}`,
                },
                {
                  name: "Gemini",
                  provider: "Google",
                  icon: "simple-icons:googlegemini",
                  link: `https://gemini.google.com/app?q=${encodedPrompt}`,
                },
                {
                  name: "Perplexity",
                  provider: "Perplexity AI",
                  icon: "simple-icons:perplexity",
                  link: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
                },
                {
                  name: "Grok",
                  provider: "xAI",
                  icon: "simple-icons:x",
                  link: `https://grok.com/?q=${encodedPrompt}`,
                },
              ].map((ai, index) => (
                <a
                  key={index}
                  href={ai.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 bg-background/80 backdrop-blur-md border border-border/80 rounded-xl hover:border-accent/60 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-foreground group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                        <Icon icon={ai.icon} className="w-6 h-6" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface border border-border/80 flex items-center justify-center text-foreground/40 group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                        <Icon icon="solar:arrow-right-up-linear" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest block mb-1">
                        {ai.provider}
                      </span>
                      <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                        {ai.name}
                      </h3>
                    </div>
                  </div>
                </a>
              ));
            })()}
          </div>
        </div>
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal as="section" className="scroll-mt-24 py-20 md:py-32 bg-gradient-to-br from-placeholder-from to-placeholder-to text-foreground text-center px-4 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {t({ en: "Ready to secure your investment?", ar: "هل أنت مستعد لتأمين استثمارك وحماية سيارتك؟" })}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto">
            {t({ en: "Book a consultation with our experts in Dubai or Abu Dhabi.", ar: "احجز استشارة مجانية الآن مع خبرائنا في دبي أو أبوظبي." })}
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wide hover:bg-muted transition-colors"
          >
            {t({ en: "Schedule Now", ar: "احجز موعداً الآن" })}
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}

const SERVICES = [
  {
    title: "Paint Protection Film",
    description: "Invisible, self-healing shield against rock chips and scratches.",
    href: "/services/paint-protection-film",
    icon: "01",
  },
  {
    title: "Ceramic & Graphene Coating",
    description: "Hydrophobic layer for extreme gloss and chemical resistance.",
    href: "/services/ceramic-coating",
    icon: "02",
  },
  {
    title: "Paint Correction & Polishing",
    description: "Precision machine polishing to remove swirls and imperfections.",
    href: "/services/paint-correction",
    icon: "03",
  },
  {
    title: "Window Tinting",
    description: "Premium IR-rejection films for maximum heat reduction.",
    href: "/services/window-tinting",
    icon: "04",
  },
  {
    title: "Vinyl Wrapping & Customization",
    description: "Complete aesthetic transformation with premium cast vinyl.",
    href: "/services/vinyl-wrapping",
    icon: "05",
  },
  {
    title: "Full Detailing",
    description: "Deep extraction, sanitization, and material protection.",
    href: "/services/full-detailing",
    icon: "06",
  },
  {
    title: "Glass & Windshield Repair",
    description: "Hydrophobic coatings and impact-resistant windshield films.",
    href: "/services/glass-repair",
    icon: "07",
  },
  {
    title: "Commercial & Residential Surface Protection",
    description: "Architectural films and surface protection for properties.",
    href: "/services/commercial-residential",
    icon: "08",
  },
];
