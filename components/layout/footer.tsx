"use client";

import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border">
      <Marquee 
        text={
          language === "ar" 
            ? "تواصل معنا / احجز استشارتك / استوديوهات دبي وأبوظبي / حماية فاخرة وحصرية / تميز بلا حدود /" 
            : "GET IN TOUCH / BOOK CONSULTATION / DUBAI & ABU DHABI STUDIOS / BESPOKE PROTECTION / EXPERIENCE EXCELLENCE /"
        } 
        speed={30} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 mb-20">
          
          {/* Brand & Contact (1/3) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png" 
                alt="AutoGlow" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain hidden dark:block"
              />
              <Image 
                src="https://res.cloudinary.com/dnf24p24f/image/upload/e_negate/v1781864421/Auto_Glow_Logo.png" 
                alt="AutoGlow" 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain block dark:hidden"
              />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              {t("footer.brand_desc")}
            </p>
            <div className="flex flex-col gap-3 text-sm mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-foreground/50 uppercase tracking-wider">Dubai HQ:</span>
                <a href="tel:+971504670081" className="flex items-center gap-2 text-foreground hover:text-muted transition-colors">
                  <Icon icon="solar:phone-calling-bold-duotone" className="w-5 h-5 text-accent shrink-0" />
                  <span>+971 50 467 0081</span>
                </a>
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <span className="text-[11px] font-mono text-foreground/50 uppercase tracking-wider">Abu Dhabi:</span>
                <a href="tel:+971506321408" className="flex items-center gap-2 text-foreground hover:text-muted transition-colors">
                  <Icon icon="solar:phone-calling-bold-duotone" className="w-5 h-5 text-accent shrink-0" />
                  <span>+971 50 632 1408</span>
                </a>
              </div>
              <a href="mailto:info@autoglow.ae" className="flex items-center gap-2 text-foreground hover:text-muted transition-colors mt-1">
                <Icon icon="solar:letter-bold-duotone" className="w-5 h-5 text-accent shrink-0" />
                <span>info@autoglow.ae</span>
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/autoglow.uae" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors" aria-label="Instagram">
                <Icon icon="ri:instagram-line" className="w-4 h-4" />
              </a>
              <a href="https://www.snapchat.com/add/autoglow_uae" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors" aria-label="Snapchat">
                <Icon icon="ri:snapchat-fill" className="w-4 h-4" />
              </a>
              <a href="https://wa.me/971504670081" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors" aria-label="WhatsApp Dubai HQ" title="WhatsApp Dubai HQ">
                <Icon icon="ri:whatsapp-line" className="w-4 h-4" />
              </a>
              <a href="https://wa.me/971506321408" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors" aria-label="WhatsApp Abu Dhabi" title="WhatsApp Abu Dhabi">
                <Icon icon="ri:whatsapp-fill" className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Our Brand & Official Partners */}
            <div className="mt-6 pt-6 border-t border-border/60 flex flex-col gap-5">
              {/* Our In-House Brand */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-mono text-[10px] text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  {t({ en: "Our Brand", ar: "علامتنا التجارية" })}
                </h4>
                <div className="flex flex-wrap items-center gap-3" dir="ltr" style={{ direction: 'ltr' }}>
                  <Link href="/glanzpro" className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-purple-500/40 hover:border-purple-500/80 transition-colors shadow-md select-none group" dir="ltr" style={{ direction: 'ltr' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://qrzyehvzqaymtvxa.public.blob.vercel-storage.com/Glanz_Pro.png" 
                      alt="GlanzPro" 
                      className="h-12 sm:h-16 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform" 
                    />
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider pl-3 border-l border-zinc-700/80 font-bold" dir="ltr">COATINGS</span>
                  </Link>
                </div>
              </div>

              {/* Official Partners */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-mono text-[10px] text-muted uppercase tracking-widest font-semibold">
                  {t("footer.official_partners")}
                </h4>
                <div className="flex flex-wrap items-center gap-3" dir="ltr" style={{ direction: 'ltr' }}>
                  {/* XPEL Badge */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 text-white shadow-xs select-none" dir="ltr" style={{ direction: 'ltr' }}>
                    <Image
                      src="https://res.cloudinary.com/dnf24p24f/image/upload/v1785223781/XPEL-no-r-wht-1_kcecbm.png"
                      alt="XPEL"
                      width={100}
                      height={26}
                      className="h-5 sm:h-6 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider pl-2 border-l border-zinc-700/80 font-semibold" dir="ltr">PPF</span>
                  </div>

                  {/* Permagard Badge */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 shadow-xs select-none" dir="ltr" style={{ direction: 'ltr' }}>
                    <svg viewBox="0 0 340 75" className="h-7 sm:h-8 w-auto" aria-label="Permagard Automotive" style={{ direction: 'ltr' }}>
                      <defs>
                        <linearGradient id="pg-red" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF4D4D" />
                          <stop offset="40%" stopColor="#E31B23" />
                          <stop offset="100%" stopColor="#8B0000" />
                        </linearGradient>
                        <linearGradient id="pg-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Left Drop */}
                      <g transform="translate(18, 5) rotate(-22)">
                        <path d="M 12,2 C 22,2 28,12 24,32 C 20,52 10,64 6,64 C 2,64 2,52 6,32 C 10,12 2,2 12,2 Z" fill="url(#pg-red)" />
                        <ellipse cx="15" cy="16" rx="4" ry="9" fill="url(#pg-shine)" transform="rotate(15 15 16)" />
                      </g>

                      {/* Right Drop */}
                      <g transform="translate(42, 14) rotate(-18)">
                        <path d="M 10,2 C 18,2 22,10 19,25 C 16,40 8,48 5,48 C 2,48 2,40 5,25 C 8,10 2,2 10,2 Z" fill="url(#pg-red)" />
                        <ellipse cx="12" cy="13" rx="3" ry="6" fill="url(#pg-shine)" transform="rotate(15 12 13)" />
                      </g>

                      {/* PERMAGARD text */}
                      <text x="72" y="42" direction="ltr" textAnchor="start" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="33" letterSpacing="0.04em" fill="#FFFFFF" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
                        PERMAGARD<tspan fontSize="18" dy="-14">®</tspan>
                      </text>

                      {/* AUTOMOTIVE text */}
                      <text x="200" y="66" direction="ltr" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="0.34em" fill="#E31B23" style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
                        AUTOMOTIVE
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links (2/3) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Studios / Locations */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-xs text-muted uppercase tracking-widest">{t("nav.studios")}</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t({ en: "Dubai HQ", ar: "المقر الرئيسي بدبي" })}</h4>
                  <a
                    href="https://maps.app.goo.gl/jysz6nVVBeTLsmz56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-accent transition-colors leading-relaxed block"
                  >
                    {language === "ar" ? (
                      <>بوابة رقم 3 - قطعة 1014 شارع 22<br />القوز الصناعية الثانية - دبي، الإمارات</>
                    ) : (
                      <>Gate No.3 - Plot No. 1014 22nd St<br />Al Qouz Ind. 2 - Dubai, UAE</>
                    )}
                  </a>
                  <Link href="/locations/dubai" className="mt-2 inline-flex text-xs text-accent underline underline-offset-4">{language === "ar" ? "تفاصيل استوديو دبي" : "Dubai studio details"}</Link>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">{t({ en: "Abu Dhabi", ar: "أبوظبي" })}</h4>
                  <a
                    href="https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-accent transition-colors leading-relaxed block"
                  >
                    {language === "ar" ? (
                      <>مركز الهائل للأعمال، مصفح M4<br />بلوك 1 وحدة 4 - أبوظبي، الإمارات</>
                    ) : (
                      <>Al Hail Business Centre, Motors - Block-1 Unit-4<br />Musaffah - M4 - Abu Dhabi, UAE</>
                    )}
                  </a>
                  <Link href="/locations/abu-dhabi" className="mt-2 inline-flex text-xs text-accent underline underline-offset-4">{language === "ar" ? "تفاصيل استوديو أبوظبي" : "Abu Dhabi studio details"}</Link>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t({ en: "Hours", ar: "ساعات العمل" })}</h4>
                  <p className="text-sm text-foreground/60">{t({ en: "Mon - Sat: 9:00 AM - 7:00 PM", ar: "الإثنين - السبت: 9:00 صباحاً - 7:00 مساءً" })}</p>
                </div>
              </div>
            </div>

            {/* Protection & Restyling */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-xs text-muted uppercase tracking-widest">{t("Protection & Restyling")}</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link href="/services/paint-protection-film" className="text-foreground/60 hover:text-foreground transition-colors">{t("Paint Protection Film")}</Link></li>
                <li><Link href="/services/ceramic-coating" className="text-foreground/60 hover:text-foreground transition-colors">{t("Ceramic & Graphene Coating")}</Link></li>
                <li><Link href="/services/window-tinting" className="text-foreground/60 hover:text-foreground transition-colors">{t("Window Tinting")}</Link></li>
                <li><Link href="/services/vinyl-wrapping" className="text-foreground/60 hover:text-foreground transition-colors">{t("Vinyl Wrapping & Customization")}</Link></li>
                <li><Link href="/services/peelable-paint" className="text-foreground/60 hover:text-foreground transition-colors">{t("Peelable Paint")}</Link></li>
                <li><Link href="/services/commercial-residential" className="text-foreground/60 hover:text-foreground transition-colors">{t("Commercial & Residential Surface Protection")}</Link></li>
              </ul>
            </div>

            {/* Correction, Repair & Detailing */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-xs text-muted uppercase tracking-widest">{t("Repair & Detailing")}</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li><Link href="/services/paint-correction" className="text-foreground/60 hover:text-foreground transition-colors">{t("Paint Correction & Polishing")}</Link></li>
                <li><Link href="/services/body-shop" className="text-foreground/60 hover:text-foreground transition-colors">{t("Body Shop & Collision Repair")}</Link></li>
                <li><Link href="/services/full-detailing" className="text-foreground/60 hover:text-foreground transition-colors">{t("Full Detailing")}</Link></li>
                <li><Link href="/services/wash" className="text-foreground/60 hover:text-foreground transition-colors">{t("Wash")}</Link></li>
                <li><Link href="/services/glass-repair" className="text-foreground/60 hover:text-foreground transition-colors">{t("Glass & Windshield Repair")}</Link></li>
                <li><Link href="/services/interior-restoration" className="text-foreground/60 hover:text-foreground transition-colors">{t("Interior & Leather Restoration")}</Link></li>
                <li><Link href="/services/wheel-repair" className="text-foreground/60 hover:text-foreground transition-colors">{t("Wheel & Rim Repair")}</Link></li>
                <li><Link href="/services/auto-maintenance" className="text-foreground/60 hover:text-foreground transition-colors">{t("Auto Maintenance")}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 pb-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            © 2026 AutoGlow. A{" "}
            <a
              href="https://kamdhenucars.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Kamdhenu Group
            </a>{" "}
            company.
          </p>
          <p className="text-xs text-foreground/40">
            Designed & Developed by{" "}
            <a
              href="https://rishishah.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors font-medium underline underline-offset-2"
            >
              Rishi Shah
            </a>
          </p>
          <div className="flex items-center gap-6 text-xs text-foreground/40">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-foreground transition-colors text-left"
            >
              Manage Cookies
            </button>
            <Link href="/blog" className="hover:text-foreground transition-colors font-medium text-accent">Editorial Blog</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">{t("footer.privacy")}</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
