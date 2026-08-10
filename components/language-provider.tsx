"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { playSound } from "@/lib/sounds";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: Direction;
  t: {
    (key: string): string;
    <T>(obj: { en: T; ar: T }): T;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core translation dictionary for main layout and common elements
const DICTIONARY: Record<string, { en: any; ar: any }> = {
  // Navigation Links
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.glanzpro": { en: "GlanzPro", ar: "جلاينز برو" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.gallery": { en: "Gallery", ar: "المعرض" },
  "nav.reviews": { en: "Reviews", ar: "الآراء" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.book": { en: "Book Consultation", ar: "احجز استشارة" },
  "nav.search": { en: "Search", ar: "بحث" },
  "nav.close": { en: "Close", ar: "إغلاق" },
  "nav.navigation": { en: "Navigation", ar: "التنقل" },
  "nav.studios": { en: "Studios", ar: "الفروع" },
  "nav.disciplines": { en: "Our Disciplines", ar: "تخصصاتنا" },
  "nav.repair": { en: "Repair & Detailing", ar: "الإصلاح والعناية" },
  "nav.direct_contact": { en: "Direct Contact", ar: "اتصال مباشر" },

  // Footer/General
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.official_partners": { en: "Official Partners", ar: "الشركاء المعتمدون" },
  "footer.brand_desc": { 
    en: "Precision engineering and premium surface protection for those who demand perfection.", 
    ar: "الهندسة الدقيقة وحماية الأسطح المتميزة لمن يطلبون الكمال والتفوق." 
  },

  // Contact / Buttons
  "btn.book": { en: "Book a Free Consultation", ar: "احجز استشارة مجانية" },
  "btn.view_all": { en: "View All Services", ar: "عرض جميع الخدمات" },
  "btn.send": { en: "Send Message", ar: "إرسال الرسالة" },

  // Hero Section
  "hero.title.line1": { en: "PROTECT. ENHANCE.", ar: "احمِ. حسّن." },
  "hero.title.line2": { en: "PRESERVE.", ar: "حافظ." },
  "hero.desc": { 
    en: "Premium automotive protection and detailing, crafted for those who demand perfection.", 
    ar: "حماية وتفصيل متميز للسيارات، مُصمم خصيصاً لأولئك الذين يطلبون الكمال والتميز." 
  },

  // Services
  "services.title": { en: "Engineered to Protect.", ar: "مُصممة لحماية فائقة." },
  "services.ppf": { en: "Paint Protection Film", ar: "فيلم حماية الطلاء" },
  "services.ppf.desc": { en: "Self-healing ultra-gloss or matte clear films shielding from chips and scratches.", ar: "أفلام شفافة ذاتية المعالجة فائقة اللمعان أو مطفية تحمي من الخدوش والحصى." },
  "services.ceramic": { en: "Ceramic & Graphene Coating", ar: "طلاء السيراميك والغرافين" },
  "services.ceramic.desc": { en: "Nanotechnology-grade molecular bonding delivering hyper-hydrophobic surface performance.", ar: "ترابط جزيئي بتقنية النانو يمنح الأسطح حماية فائقة ومقاومة ممتازة للماء والملوثات." },
  "services.tinting": { en: "Window Tinting", ar: "تظليل النوافذ" },
  "services.tinting.desc": { en: "Advanced heat, UV and glare reduction nano-ceramic window film solutions.", ar: "حلول تظليل النوافذ بنانو السيراميك المتطور لتقليل الحرارة والأشعة فوق البنفسجية والوهج." },
  "services.vinyl": { en: "Vinyl Wrapping", ar: "تغليف الفينيل" },
  "services.vinyl.desc": { en: "Bespoke color changes, chrome deletes, and visual accents to redefine style.", ar: "تغيير الألوان المخصصة وإزالة الكروم واللمسات البصرية لإعادة تحديد مظهر سيارتك الأنيق." },

  // Trust / Experience Section
  "trust.tag": { en: "Unrivaled Expertise", ar: "خبرة لا تضاهى" },
  "trust.title": { en: "Trust earned through precision.", ar: "ثقة نكتسبها من خلال الدقة اللامتناهية." },
  "trust.desc": { 
    en: "With over 15+ years of experience in the UAE's demanding climate, our technicians apply engineering-grade rigor to every vehicle. We don't just wash cars; we preserve them.", 
    ar: "مع أكثر من 15 عاماً من الخبرة في المناخ الصعب بدولة الإمارات، يطبق فنيونا دقة هندسية صارمة على كل مركبة. نحن لا نقوم فقط بتنظيف السيارات، بل نحافظ عليها." 
  },
  "trust.years": { en: "Years Active", ar: "سنوات من العطاء" },
  "trust.partner": { en: "Permagard Partner", ar: "شريك بيرماجارد المعتمد" },

  // Testimonials
  "testimonials.tag": { en: "Client Feedback", ar: "آراء عملائنا الكرام" },
  "testimonials.title": { en: "The Standard of Excellence.", ar: "معيار التميز والريادة." },
};

const STRING_MAP: Record<string, { en: string; ar: string }> = {
  // Titles
  "Paint Protection Film": { en: "Paint Protection Film", ar: "فيلم حماية الطلاء (PPF)" },
  "Ceramic & Graphene Coating": { en: "Ceramic & Graphene Coating", ar: "طلاء السيراميك والغرافين" },
  "Window Tinting": { en: "Window Tinting", ar: "تظليل النوافذ" },
  "Vinyl Wrapping & Customization": { en: "Vinyl Wrapping & Customization", ar: "تغليف الفينيل والتخصيص" },
  "Peelable Paint": { en: "Peelable Paint", ar: "الطلاء القابل للإزالة" },
  "Commercial & Residential Surface Protection": { en: "Commercial & Residential Surface Protection", ar: "حماية أسطح تجارية وسكنية" },
  "Paint Correction & Polishing": { en: "Paint Correction & Polishing", ar: "تصحيح الطلاء والتلميع" },
  "Body Shop & Collision Repair": { en: "Body Shop & Collision Repair", ar: "إصلاح الهيكل والحوادث" },
  "Full Detailing": { en: "Full Detailing", ar: "تلميع وتفصيل كامل" },
  "Wash": { en: "Wash", ar: "غسيل سيارات متميز" },
  "Glass & Windshield Repair": { en: "Glass & Windshield Repair", ar: "إصلاح الزجاج والزجاج الأمامي" },
  "Interior & Leather Restoration": { en: "Interior & Leather Restoration", ar: "ترميم مقصورة وجلود السيارات" },
  "Wheel & Rim Repair": { en: "Wheel & Rim Repair", ar: "إصلاح الإطارات والعجلات" },
  "Auto Maintenance": { en: "Auto Maintenance", ar: "صيانة السيارات الميكانيكية" },
  "Auto Maintenance (Oil Change & Quick Service)": { en: "Auto Maintenance (Oil Change & Quick Service)", ar: "صيانة السيارات (تغيير الزيت والخدمة السريعة)" },

  // Descriptions
  "Invisible, self-healing shield against rock chips and scratches.": { 
    en: "Invisible, self-healing shield against rock chips and scratches.", 
    ar: "درع غير مرئي ذاتي المعالجة ضد حصى الطريق والخدوش." 
  },
  "Hydrophobic layer for extreme gloss and chemical resistance.": { 
    en: "Hydrophobic layer for extreme gloss and chemical resistance.", 
    ar: "طبقة مقاومة للماء للمعان فائق ومقاومة للمواد الكيميائية." 
  },
  "Premium IR-rejection films for maximum heat reduction.": { 
    en: "Premium IR-rejection films for maximum heat reduction.", 
    ar: "أفلام ممتازة لرفض الأشعة تحت الحمراء لتقليل الحرارة لأقصى حد." 
  },
  "Complete aesthetic transformation with premium cast vinyl.": { 
    en: "Complete aesthetic transformation with premium cast vinyl.", 
    ar: "تحول جمالي كامل مع الفينيل المصبوب المتميز لسيارتك." 
  },
  "Aesthetic color change with the protection of traditional PPF.": { 
    en: "Aesthetic color change with the protection of traditional PPF.", 
    ar: "تغيير اللون الجمالي مع حماية فيلم PPF التقليدي." 
  },
  "Architectural films and surface protection for properties.": { 
    en: "Architectural films and surface protection for properties.", 
    ar: "أفلام هندسية وحماية الأسطح للعقارات والمباني." 
  },
  "Precision machine polishing to remove swirls and imperfections.": { 
    en: "Precision machine polishing to remove swirls and imperfections.", 
    ar: "تلميع آلي دقيق لإزالة الدوائر والعيوب من الطلاء." 
  },
  "Expert restoration and repair for collision damage.": { 
    en: "Expert restoration and repair for collision damage.", 
    ar: "ترميم وإصلاح خبير لأضرار الحوادث والاصطدام لهيكل السيارة." 
  },
  "Deep extraction, sanitization, and material protection.": { 
    en: "Deep extraction, sanitization, and material protection.", 
    ar: "تنظيف عميق، تعقيم، وحماية فائقة للمواد الداخلية." 
  },
  "Premium safe-wash methods to maintain your vehicle's finish.": { 
    en: "Premium safe-wash methods to maintain your vehicle's finish.", 
    ar: "طرق غسيل آمنة وممتازة للحفاظ على مظهر سيارتك اللامع." 
  },
  "Hydrophobic coatings and impact-resistant windshield films.": { 
    en: "Hydrophobic coatings and impact-resistant windshield films.", 
    ar: "طلاءات مقاومة للماء وأفلام زجاج أمامي مقاومة للصدمات." 
  },
  "Restoring and protecting premium interior materials.": { 
    en: "Restoring and protecting premium interior materials.", 
    ar: "ترميم وحماية مقصورة السيارة والمواد الداخلية الفاخرة." 
  },
  "Curb rash repair and custom wheel finishes.": { 
    en: "Curb rash repair and custom wheel finishes.", 
    ar: "إصلاح خدوش العجلات واللمسات المخصصة لجنوط سيارتك." 
  },
  "Essential mechanical upkeep to keep your vehicle running perfectly.": { 
    en: "Essential mechanical upkeep to keep your vehicle running perfectly.", 
    ar: "صيانة ميكانيكية أساسية للحفاظ على تشغيل سيارتك بشكل مثالي." 
  },

  // General Links / Headers
  "Home": { en: "Home", ar: "الرئيسية" },
  "About Us": { en: "About Us", ar: "من نحن" },
  "For Your Vehicle": { en: "For Your Vehicle", ar: "تخصصاتنا لمركبتك" },
  "For Business & Property": { en: "For Business & Property", ar: "للأعمال والعقارات" },
  "All Services": { en: "All Services", ar: "جميع الخدمات" },
  "Gallery": { en: "Gallery", ar: "المعرض" },
  "Reviews": { en: "Reviews", ar: "الآراء والتقييمات" },
  "Contact / Book": { en: "Contact / Book", ar: "اتصل بنا / احجز معنا" },
  "Protection & Restyling": { en: "Protection & Restyling", ar: "الحماية والتصميم" },
  "Repair & Detailing": { en: "Repair & Detailing", ar: "الإصلاح والعناية بالتفاصيل" },

  // Testimonial Quotes
  "The attention to detail is unparalleled. My GT3 looks better than the day it left the showroom, and the PPF installation is entirely invisible.": {
    en: "The attention to detail is unparalleled. My GT3 looks better than the day it left the showroom, and the PPF installation is entirely invisible.",
    ar: "الاهتمام بالتفاصيل لا يصدق ولا يضاهى. سيارتي الـ GT3 تبدو أفضل بكثير من يوم خروجها من صالة العرض، وتركيب فيلم الحماية (PPF) غير مرئي تماماً."
  },
  "I brought in my new G-Wagon for ceramic coating and interior protection. The hydrophobic effect is insane, and the service was professional from day one.": {
    en: "I brought in my new G-Wagon for ceramic coating and interior protection. The hydrophobic effect is insane, and the service was professional from day one.",
    ar: "أحضرت سيارتي الجديدة الجي كلاس لطلاء السيراميك وحماية المقصورة الداخلية. تأثير طرد الماء جنوني والخدمة كانت غاية في الاحترافية من اليوم الأول."
  },
  "After off-roading, my paint was covered in desert pinstripes. Their paint correction restored it perfectly, and the new PPF gives me peace of mind.": {
    en: "After off-roading, my paint was covered in desert pinstripes. Their paint correction restored it perfectly, and the new PPF gives me peace of mind.",
    ar: "بعد القيادة في الطرق الوعرة والصحراء، كان طلاء سيارتي مليئاً بالخدوش السطحية. أعاد تصحيح الطلاء مظهرها اللامع بشكل مثالي، وتركيب فيلم الحماية الجديد يمنحني راحة بال كاملة."
  },
  "Ahmed Al M.": { en: "Ahmed Al M.", ar: "أحمد الم." },
  "Porsche 911 GT3 Owner": { en: "Porsche 911 GT3 Owner", ar: "مالك بورشه 911 GT3" },
  "Sarah K.": { en: "Sarah K.", ar: "سارة ك." },
  "Mercedes-AMG G 63 Owner": { en: "Mercedes-AMG G 63 Owner", ar: "مالك مرسيدس G 63 AMG" },
  "Omar T.": { en: "Omar T.", ar: "عمر ت." },
  "Nissan Patrol Nismo Owner": { en: "Nissan Patrol Nismo Owner", ar: "مالك نيسان باترول نيسمو" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("autoglow_language") as Language;
      if (savedLang === "ar" || savedLang === "en") return savedLang;
    }
    return "en";
  });
  const [dir, setDir] = useState<Direction>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("autoglow_language") as Language;
      if (savedLang === "ar") return "rtl";
    }
    return "ltr";
  });
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setDir(lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("autoglow_language", lang);
  };

  // Sync document attributes
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    
    // Add RTL class on html tag for custom CSS overrides if needed
    if (dir === "rtl") {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language, dir]);

  // Translate function implementation
  const t = (arg: string | { en: any; ar: any }): any => {
    if (typeof arg === "string") {
      const entry = DICTIONARY[arg];
      if (entry) {
        return entry[language];
      }
      const directEntry = STRING_MAP[arg];
      if (directEntry) {
        return directEntry[language];
      }
      return arg;
    } else if (arg && typeof arg === "object") {
      return arg[language];
    }
    return "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => {
        setLanguage(language === 'en' ? 'ar' : 'en');
        playSound("tick");
      }}
      className="text-xs font-mono font-semibold uppercase tracking-wider px-2 py-1.5 rounded border border-border/80 hover:border-foreground/50 hover:bg-muted/35 transition-all select-none cursor-pointer flex items-center gap-1 shrink-0"
      title={language === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية'}
    >
      <span className={language === 'en' ? 'font-bold text-foreground' : 'text-foreground/40'}>EN</span>
      <span className="text-foreground/20">|</span>
      <span className={language === 'ar' ? 'font-bold text-foreground font-sans' : 'text-foreground/40'}>عربي</span>
    </button>
  );
}
