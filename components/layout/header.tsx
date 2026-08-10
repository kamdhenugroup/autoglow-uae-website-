"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

const SERVICES_PROTECTION = [
  {
    title: "Paint Protection Film",
    description: "Invisible, self-healing shield against rock chips and scratches.",
    href: "/services/paint-protection-film",
    icon: "solar:shield-bold-duotone",
  },
  {
    title: "Ceramic & Graphene Coating",
    description: "Hydrophobic layer for extreme gloss and chemical resistance.",
    href: "/services/ceramic-coating",
    icon: "solar:droplet-bold-duotone",
  },
  {
    title: "Window Tinting",
    description: "Premium IR-rejection films for maximum heat reduction.",
    href: "/services/window-tinting",
    icon: "solar:sun-bold-duotone",
  },
  {
    title: "Vinyl Wrapping & Customization",
    description: "Complete aesthetic transformation with premium cast vinyl.",
    href: "/services/vinyl-wrapping",
    icon: "solar:palet-bold-duotone",
  },
  {
    title: "Peelable Paint",
    description: "Aesthetic color change with the protection of traditional PPF.",
    href: "/services/peelable-paint",
    icon: "solar:magic-stick-bold-duotone",
  },
  {
    title: "Commercial & Residential Surface Protection",
    description: "Architectural films and surface protection for properties.",
    href: "/services/commercial-residential",
    icon: "solar:home-2-bold-duotone",
  },
];

const SERVICES_REPAIR = [
  {
    title: "Paint Correction & Polishing",
    description: "Precision machine polishing to remove swirls and imperfections.",
    href: "/services/paint-correction",
    icon: "solar:sparkles-bold-duotone",
  },
  {
    title: "Body Shop & Collision Repair",
    description: "Expert restoration and repair for collision damage.",
    href: "/services/body-shop",
    icon: "solar:hammer-bold-duotone",
  },
  {
    title: "Full Detailing",
    description: "Deep extraction, sanitization, and material protection.",
    href: "/services/full-detailing",
    icon: "solar:stars-bold-duotone",
  },
  {
    title: "Wash",
    description: "Premium safe-wash methods to maintain your vehicle's finish.",
    href: "/services/wash",
    icon: "solar:water-drops-bold-duotone",
  },
  {
    title: "Glass & Windshield Repair",
    description: "Hydrophobic coatings and impact-resistant windshield films.",
    href: "/services/glass-repair",
    icon: "solar:mirror-bold-duotone",
  },
  {
    title: "Interior & Leather Restoration",
    description: "Restoring and protecting premium interior materials.",
    href: "/services/interior-restoration",
    icon: "solar:sofa-bold-duotone",
  },
  {
    title: "Wheel & Rim Repair",
    description: "Curb rash repair and custom wheel finishes.",
    href: "/services/wheel-repair",
    icon: "solar:settings-bold-duotone",
  },
  {
    title: "Auto Maintenance",
    description: "Essential mechanical upkeep to keep your vehicle running perfectly.",
    href: "/services/auto-maintenance",
    icon: "solar:tuning-bold-duotone",
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/glanzpro", label: "GlanzPro" },
  { href: "/about", label: "About Us" },
  {
    label: "For Your Vehicle",
    subLinks: [
      { href: "/services/paint-protection-film", label: "Paint Protection Film" },
      { href: "/services/ceramic-coating", label: "Ceramic & Graphene Coating" },
      { href: "/services/window-tinting", label: "Window Tinting" },
      { href: "/services/paint-correction", label: "Paint Correction & Polishing" },
      { href: "/services/vinyl-wrapping", label: "Vinyl Wrapping & Customization" },
      { href: "/services/body-shop", label: "Body Shop & Collision Repair" },
      { href: "/services/full-detailing", label: "Full Detailing" },
      { href: "/services/wash", label: "Wash" },
      { href: "/services/glass-repair", label: "Glass & Windshield Repair" },
      { href: "/services/interior-restoration", label: "Interior & Leather Restoration" },
      { href: "/services/wheel-repair", label: "Wheel & Rim Repair" },
      { href: "/services/peelable-paint", label: "Peelable Paint" },
      { href: "/services/auto-maintenance", label: "Auto Maintenance (Oil Change & Quick Service)" },
    ]
  },
  { href: "/services/commercial-residential", label: "For Business & Property" },
  { href: "/services", label: "All Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact / Book" },
];

const ALL_SEARCH_ITEMS = [
  {
    title: "Paint Protection Film (PPF)",
    description: "Invisible, self-healing shield against rock chips and scratches.",
    href: "/services/paint-protection-film",
    icon: "solar:shield-bold-duotone",
    category: "Protection & Restyling",
    keywords: "ppf protective clear bra wrapping wrap shield self healing paint stone chips scratches uae",
  },
  {
    title: "Ceramic & Graphene Coating",
    description: "Hydrophobic layer for extreme gloss and chemical resistance.",
    href: "/services/ceramic-coating",
    icon: "solar:droplet-bold-duotone",
    category: "Protection & Restyling",
    keywords: "ceramic graphene coating detailing gloss paint correction hydrophobicity shine protection uae",
  },
  {
    title: "Window Tinting",
    description: "Premium IR-rejection films for maximum heat reduction.",
    href: "/services/window-tinting",
    icon: "solar:sun-bold-duotone",
    category: "Protection & Restyling",
    keywords: "window tinting tint glass solar ir rejection uv heat reduction shade sun protection uae",
  },
  {
    title: "Vinyl Wrapping & Customization",
    description: "Complete aesthetic transformation with premium cast vinyl.",
    href: "/services/vinyl-wrapping",
    icon: "solar:palet-bold-duotone",
    category: "Protection & Restyling",
    keywords: "vinyl wrap wrapping color change custom livery chrome delete cast vinyl aesthetic uae",
  },
  {
    title: "Peelable Paint",
    description: "Aesthetic color change with the protection of traditional PPF.",
    href: "/services/peelable-paint",
    icon: "solar:magic-stick-bold-duotone",
    category: "Protection & Restyling",
    keywords: "peelable paint ppf sprayable liquid wrap color change protection reversible uae",
  },
  {
    title: "Commercial & Residential Surface Protection",
    description: "Architectural films and surface protection for properties.",
    href: "/services/commercial-residential",
    icon: "solar:home-2-bold-duotone",
    category: "Protection & Restyling",
    keywords: "commercial residential building glass film architectural home window tinting office solar protection uae",
  },
  {
    title: "Paint Correction & Polishing",
    description: "Precision machine polishing to remove swirls and imperfections.",
    href: "/services/paint-correction",
    icon: "solar:sparkles-bold-duotone",
    category: "Repair & Detailing",
    keywords: "paint correction polishing machine polish swirl marks scratches buffing compounding gloss shine restoration uae",
  },
  {
    title: "Body Shop & Collision Repair",
    description: "Expert restoration and repair for collision damage.",
    href: "/services/body-shop",
    icon: "solar:hammer-bold-duotone",
    category: "Repair & Detailing",
    keywords: "body shop repair collision accident dent panel beating painting restoration scratch repair auto body uae",
  },
  {
    title: "Full Detailing",
    description: "Deep extraction, sanitization, and material protection.",
    href: "/services/full-detailing",
    icon: "solar:stars-bold-duotone",
    category: "Repair & Detailing",
    keywords: "detailing interior exterior deep clean sanitization extraction engine bay leather cleaning material protection uae",
  },
  {
    title: "Wash",
    description: "Premium safe-wash methods to maintain your vehicle's finish.",
    href: "/services/wash",
    icon: "solar:water-drops-bold-duotone",
    category: "Repair & Detailing",
    keywords: "wash car wash safe wash hand wash premium wash decontamination prep touchless foam bath uae",
  },
  {
    title: "Glass & Windshield Repair",
    description: "Hydrophobic coatings and impact-resistant windshield films.",
    href: "/services/glass-repair",
    icon: "solar:mirror-bold-duotone",
    category: "Repair & Detailing",
    keywords: "glass windshield repair chip crack replacement hydrophobic protection clear plex uae",
  },
  {
    title: "Interior & Leather Restoration",
    description: "Restoring and protecting premium interior materials.",
    href: "/services/interior-restoration",
    icon: "solar:sofa-bold-duotone",
    category: "Repair & Detailing",
    keywords: "interior leather restoration dye repair rip tears steering wheel luxury restoration materials uae",
  },
  {
    title: "Wheel & Rim Repair",
    description: "Curb rash repair and custom wheel finishes.",
    href: "/services/wheel-repair",
    icon: "solar:settings-bold-duotone",
    category: "Repair & Detailing",
    keywords: "wheel rim repair curb rash curb scraping alloy refinishing custom color calipers brake uae",
  },
  {
    title: "Auto Maintenance",
    description: "Essential mechanical upkeep to keep your vehicle running perfectly.",
    href: "/services/auto-maintenance",
    icon: "solar:tuning-bold-duotone",
    category: "Repair & Detailing",
    keywords: "maintenance mechanical service oil change filter replacement spark plugs brakes repair garage upkeep uae",
  },
  {
    title: "About Us",
    description: "Learn about AutoGlow's precision engineering and commitment to excellence.",
    href: "/about",
    icon: "solar:info-circle-bold-duotone",
    category: "Company",
    keywords: "about us autoglow company history team values mission quality uae dubai",
  },
  {
    title: "Gallery",
    description: "Browse real photo and video documentation of our client projects.",
    href: "/gallery",
    icon: "solar:gallery-bold-duotone",
    category: "Media",
    keywords: "gallery photos projects portfolio before after showcase video cars vehicles wrapping ppf uae",
  },
  {
    title: "Reviews",
    description: "See what our premium vehicle and property clients say about us.",
    href: "/reviews",
    icon: "solar:star-bold-duotone",
    category: "Social",
    keywords: "reviews testimonials feedback ratings google five star clients customer satisfaction uae",
  },
  {
    title: "GlanzPro",
    description: "Advanced surface protection and high-gloss nanocoating technologies.",
    href: "/glanzpro",
    icon: "solar:shield-star-bold-duotone",
    category: "Protection & Coatings",
    keywords: "glanzpro glanz pro coating surface protection hydrophobic gloss ceramic nanocoating uae dubai",
  },
  {
    title: "Contact & Book",
    description: "Schedule a consultation or book a premium detailing service.",
    href: "/contact",
    icon: "solar:calendar-bold-duotone",
    category: "Booking",
    keywords: "contact book consultation reservation schedule address maps location phone dubai abu dhabi uae",
  },
];

import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage, LanguageToggle } from "@/components/language-provider";

export function Header() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (isSearchOpen || isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen, isOpen]);

  // Focus search input when open
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      const timer = setTimeout(() => {
        setSearchQuery("");
        setSelectedIndex(0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Handle global key commands
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter items based on query
  const filteredItems = ALL_SEARCH_ITEMS.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  // Handle keyboard navigation in Search Modal
  useEffect(() => {
    if (!isSearchOpen || filteredItems.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          window.location.href = filteredItems[selectedIndex].href;
          setIsSearchOpen(false);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, filteredItems, selectedIndex]);

  // Group filtered items by category
  const groupedResults = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof ALL_SEARCH_ITEMS>);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border transition-colors duration-200"
      >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 xl:gap-6 relative">
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png" 
            alt="AutoGlow" 
            width={280} 
            height={80} 
            className="h-10 sm:h-12 xl:h-14 w-auto object-contain hidden dark:block"
            priority
          />
          <Image 
            src="https://res.cloudinary.com/dnf24p24f/image/upload/e_negate/v1781864421/Auto_Glow_Logo.png" 
            alt="AutoGlow" 
            width={280} 
            height={80} 
            className="h-10 sm:h-12 xl:h-14 w-auto object-contain block dark:hidden"
            priority
          />
        </Link>

        {/* Desktop Navbar (Inline) */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 shrink-0">
          {/* Services Tab with Hover Mega-Menu */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors uppercase flex items-center gap-1 cursor-pointer py-2 whitespace-nowrap"
              aria-expanded={isServicesOpen}
            >
              {t("nav.services")}
              <motion.div
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Icon icon="solar:alt-arrow-down-linear" className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </motion.div>
            </button>

            {/* Mega-Menu Panel */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed top-20 left-1/2 -translate-x-1/2 w-[95vw] max-w-[900px] max-h-[calc(100vh-6rem)] overflow-y-auto bg-background border border-border rounded-b-lg sm:rounded-lg shadow-xl shadow-black/5 dark:shadow-none p-6 sm:p-8 z-50 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                >
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-6 font-semibold border-b border-border/40 pb-2">
                      {t("Protection & Restyling")}
                    </h4>
                    <div className="flex flex-col gap-5">
                      {SERVICES_PROTECTION.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex gap-4 group"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-none mb-1">
                              {t(service.title)}
                            </p>
                            <p className="text-xs text-foreground/50 leading-normal">
                              {t(service.description)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-6 font-semibold border-b border-border/40 pb-2">
                      {t("Repair & Detailing")}
                    </h4>
                    <div className="flex flex-col gap-5">
                      {SERVICES_REPAIR.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex gap-4 group"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-none mb-1">
                              {t(service.title)}
                            </p>
                            <p className="text-xs text-foreground/50 leading-normal">
                              {t(service.description)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/glanzpro"
            className="text-[11px] xl:text-xs 2xl:text-sm font-bold tracking-wider transition-colors uppercase py-2 flex items-center whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-extrabold hover:opacity-90">GlanzPro</span>
          </Link>

          <Link
            href="/about"
            className="text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors uppercase py-2 whitespace-nowrap"
          >
            {t("nav.about")}
          </Link>

          <Link
            href="/gallery"
            className="text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors uppercase py-2 whitespace-nowrap"
          >
            {t("nav.gallery")}
          </Link>

          <Link
            href="/reviews"
            className="text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors uppercase py-2 whitespace-nowrap"
          >
            {t("nav.reviews")}
          </Link>

          <Link
            href="/contact"
            className="text-[11px] xl:text-xs 2xl:text-sm font-semibold tracking-wider text-foreground/70 hover:text-foreground transition-colors uppercase py-2 whitespace-nowrap"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Desktop Search + ThemeToggle + Action Button */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-5 shrink-0">
          <button
            onClick={() => setIsSearchOpen(true)}
            data-cuelume-press="tick"
            className="flex items-center gap-1.5 xl:gap-2 px-2.5 py-1.5 xl:px-3 xl:py-2 text-xs text-foreground/50 hover:text-foreground/80 bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-border/80 rounded-md transition-all cursor-pointer select-none font-medium whitespace-nowrap"
          >
            <Icon icon="solar:magnifer-linear" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-foreground/40 shrink-0" />
            <span className="hidden xl:inline">{t("nav.search")}...</span>
            <span className="xl:hidden">{t("nav.search")}</span>
            <span className="hidden xl:inline-block font-mono text-[10px] bg-foreground/[0.06] px-1.5 py-0.5 rounded text-foreground/40 border border-border/30">/</span>
          </button>

          <LanguageToggle />
          <ThemeToggle />
          <Link 
            href="/contact" 
            data-cuelume-press="chime"
            className="text-[11px] xl:text-xs 2xl:text-sm font-medium tracking-wide text-background bg-foreground px-3.5 xl:px-4 2xl:px-5 py-2 xl:py-2.5 hover:bg-muted transition-colors uppercase whitespace-nowrap rounded-sm"
          >
            {t("nav.book")}
          </Link>
        </div>

        {/* Mobile Menu & Search Trigger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-foreground p-2"
            aria-label="Search"
          >
            <Icon icon="solar:magnifer-linear" className="w-5 h-5" />
          </button>
          <LanguageToggle />
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(true)}
            className="text-foreground p-2 -mr-2"
            aria-label="Open Menu"
          >
            <Icon icon="solar:hamburger-menu-linear" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col relative">
              {/* Floating Mobile Scroll Down Prompt Indicator */}
              <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none md:hidden flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background/95 border border-accent/50 backdrop-blur-md shadow-lg shadow-black/40 text-accent text-[11px] font-mono font-semibold whitespace-nowrap animate-bounce max-w-[92vw]">
                <Icon icon="solar:double-alt-arrow-down-bold-duotone" className="w-4 h-4 text-accent shrink-0" />
                <span className="whitespace-nowrap">Scroll for menu</span>
              </div>

              {/* Overlay Header Bar */}
              <div className="h-20 flex items-center justify-between border-b border-border/40 shrink-0">
                <Link onClick={() => setIsOpen(false)} href="/" className="flex items-center">
                  <Image 
                    src="https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png" 
                    alt="AutoGlow" 
                    width={240} 
                    height={70} 
                    className="h-11 sm:h-13 w-auto object-contain hidden dark:block"
                  />
                  <Image 
                    src="https://res.cloudinary.com/dnf24p24f/image/upload/e_negate/v1781864421/Auto_Glow_Logo.png" 
                    alt="AutoGlow" 
                    width={240} 
                    height={70} 
                    className="h-11 sm:h-13 w-auto object-contain block dark:hidden"
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-foreground p-2 -mr-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold hover:text-accent transition-colors"
                >
                  {t("nav.close")} <Icon icon="solar:close-square-linear" className="w-5 h-5 text-accent" />
                </button>
              </div>

              {/* Scrollable Overlay Content */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 py-12 md:py-16">
                {/* Column 1: Main Pages */}
                <div className="space-y-6">
                  <p className="font-mono text-[10px] text-muted uppercase tracking-widest border-b border-border/40 pb-2">{t("nav.navigation")}</p>
                  <nav className="flex flex-col gap-4">
                    {NAV_LINKS.filter(link => !link.subLinks).map((link) => (
                      <Link
                        key={link.label}
                        href={link.href!}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl sm:text-3xl font-display font-medium text-foreground/80 hover:text-accent transition-colors flex items-center justify-between group py-1"
                      >
                        <span>{t(link.label)}</span>
                        <Icon icon="solar:arrow-right-linear" className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-accent" />
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Column 2: Specific Services */}
                <div className="space-y-6">
                  {NAV_LINKS.filter(link => link.subLinks).map((group) => (
                    <div key={group.label} className="space-y-6">
                      <p className="font-mono text-[10px] text-muted uppercase tracking-widest border-b border-border/40 pb-2">{t(group.label)}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                        {group.subLinks?.map(sub => (
                          <li key={sub.label}>
                            <Link 
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-foreground/60 hover:text-accent hover:translate-x-1 transition-all flex items-center gap-2.5 py-0.5 group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent shrink-0 transition-colors" />
                              <span className="truncate">{t(sub.label)}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact / Location Footer inside overlay */}
              <div className="border-t border-border/40 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-foreground/50 shrink-0">
                <div>
                  <h5 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">{t({ en: "Dubai HQ", ar: "المقر الرئيسي بدبي" })}</h5>
                  <a
                    href="https://maps.app.goo.gl/jysz6nVVBeTLsmz56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-accent transition-colors block"
                  >
                    {language === "ar" ? (
                      <>بوابة رقم 3 - قطعة 1014 شارع 22<br />القوز الصناعية الثانية - دبي، الإمارات</>
                    ) : (
                      <>Gate No.3 - Plot No. 1014 22nd St<br />Al Qouz Ind. 2 - Dubai, UAE</>
                    )}
                  </a>
                </div>
                <div>
                  <h5 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">{t({ en: "Abu Dhabi", ar: "أبوظبي" })}</h5>
                  <a
                    href="https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-accent transition-colors block"
                  >
                    {language === "ar" ? (
                      <>مركز الهائل للأعمال، مصفح M4<br />بلوك 1 وحدة 4 - أبوظبي، الإمارات</>
                    ) : (
                      <>Al Hail Business Centre, Motors - Block-1 Unit-4<br />Musaffah - M4 - Abu Dhabi, UAE</>
                    )}
                  </a>
                </div>
                <div>
                  <h5 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">{t("nav.direct_contact")}</h5>
                  <div className="leading-relaxed space-y-1 text-xs">
                    <div>
                      <span className="text-foreground/50 font-mono">Dubai HQ:</span>{" "}
                      <a href="tel:+971504670081" className="hover:text-accent transition-colors font-medium">+971 50 467 0081</a>
                    </div>
                    <div>
                      <span className="text-foreground/50 font-mono">Abu Dhabi:</span>{" "}
                      <a href="tel:+971506321408" className="hover:text-accent transition-colors font-medium">+971 50 632 1408</a>
                    </div>
                    <div className="pt-1">
                      <a href="mailto:info@autoglow.ae" className="hover:text-accent transition-colors">info@autoglow.ae</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Command Palette Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/50 dark:bg-black/75 backdrop-blur-md flex items-start justify-center pt-[10vh] sm:pt-[12vh] px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: -12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl relative bg-white/95 dark:bg-zinc-950/95 text-zinc-900 dark:text-zinc-100 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800 rounded-2xl shadow-[0_32px_96px_-16px_rgba(0,0,0,0.35)] dark:shadow-[0_32px_96px_-16px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col max-h-[72vh] group/modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CD2B34] to-transparent pointer-events-none" />

              {/* Search Header Input */}
              <div className="flex items-center px-4 sm:px-5 border-b border-zinc-200/80 dark:border-zinc-800/80 h-16 shrink-0 relative bg-zinc-50/50 dark:bg-zinc-900/30">
                <Icon icon="solar:magnifer-linear" className="w-5 h-5 text-[#CD2B34] mr-3.5 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Type to search services, paint protection, ceramic coating..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full bg-transparent text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 border-none outline-none focus:ring-0 py-3 font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      searchInputRef.current?.focus();
                    }}
                    className="text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200 transition-colors p-1 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 mr-2"
                  >
                    <Icon icon="solar:close-circle-bold" className="w-4 h-4" />
                  </button>
                )}
                <span className="text-[10px] font-mono bg-zinc-200/80 dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700/80 px-2 py-0.5 rounded-md text-zinc-700 dark:text-zinc-300 ml-2 uppercase select-none tracking-wider font-semibold shadow-xs">
                  Esc
                </span>
              </div>

              {/* Live Filter Results */}
              <div className="overflow-y-auto flex-1 p-3 sm:p-4 space-y-4 custom-scrollbar">
                {filteredItems.length > 0 ? (
                  <div className="space-y-4">
                    {Object.entries(groupedResults).map(([category, items]) => (
                      <div key={category} className="space-y-1.5">
                        <div className="px-3 py-1 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">
                            {category}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
                            {items.length} {items.length === 1 ? "result" : "results"}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {items.map((item) => {
                            const globalIndex = filteredItems.indexOf(item);
                            const isSelected = globalIndex === selectedIndex;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setIsSearchOpen(false)}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`flex items-center justify-between gap-4 px-3.5 py-3 rounded-xl transition-all duration-150 cursor-pointer text-left group/item border ${
                                  isSelected 
                                    ? "bg-[#CD2B34]/10 dark:bg-[#CD2B34]/15 border-[#CD2B34]/40 shadow-sm translate-x-1" 
                                    : "bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border-zinc-200/50 dark:border-zinc-800/50"
                                }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <p className={`text-xs sm:text-sm font-semibold transition-colors ${
                                      isSelected ? "text-[#CD2B34]" : "text-zinc-900 dark:text-zinc-100 group-hover/item:text-[#CD2B34]"
                                    }`}>
                                      {item.title}
                                    </p>
                                  </div>
                                  <p className={`text-[11px] sm:text-xs truncate font-normal ${
                                    isSelected ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-500 dark:text-zinc-400"
                                  }`}>
                                    {item.description}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <Icon 
                                    icon="solar:arrow-right-linear" 
                                    className={`w-4 h-4 transition-all duration-200 ${
                                      isSelected 
                                        ? "translate-x-0.5 text-[#CD2B34] opacity-100 scale-110" 
                                        : "opacity-0 -translate-x-1 group-hover/item:opacity-70 text-zinc-400 dark:text-zinc-500"
                                    }`} 
                                  />
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-14 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-3 text-zinc-400 dark:text-zinc-500">
                      <Icon icon="solar:magnifer-bug-linear" className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">No matching services found</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-xs font-normal">
                      Try searching for &ldquo;PPF&rdquo;, &ldquo;Ceramic&rdquo;, &ldquo;Tinting&rdquo; or &ldquo;Detailing&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Guides Footer */}
              <div className="px-4 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-zinc-400 shrink-0 select-none">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-1 rounded-md bg-zinc-200/90 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center shadow-xs">
                      <Icon icon="solar:sort-vertical-linear" className="w-3.5 h-3.5" />
                    </kbd> 
                    <span className="font-medium text-xs text-zinc-600 dark:text-zinc-400">Navigate</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-1 rounded-md bg-zinc-200/90 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center shadow-xs">
                      <Icon icon="lucide:corner-down-left" className="w-3.5 h-3.5" />
                    </kbd> 
                    <span className="font-medium text-xs text-zinc-600 dark:text-zinc-400">Select</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">AutoGlow Command Center</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
