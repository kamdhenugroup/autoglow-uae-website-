"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface GalleryItem {
  id: string;
  type: "video" | "photo";
  title: string;
  tag: string;
  category: "ppf" | "supercar" | "suv";
  src?: string; // Image URL for photos
}

const GALLERY_DATA: GalleryItem[] = [
  // High-Res Showcase Photos
  {
    id: "img-ferrari",
    type: "photo",
    title: "Ferrari 812 Superfast – High-Gloss XPEL PPF",
    tag: "Ferrari / XPEL PPF",
    category: "supercar",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143172/FERRARI.jpg",
  },
  {
    id: "img-dual-ferrari",
    type: "photo",
    title: "Dual Ferrari Collection – XPEL Stealth & Matte Finish",
    tag: "Exotic Duo / Stealth",
    category: "supercar",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143172/DUEL%20FERRARI.jpg",
  },
  {
    id: "img-silver-ferrari",
    type: "photo",
    title: "Silver Ferrari – Paint Protection & Ceramic Coating",
    tag: "Ferrari / Ceramic",
    category: "supercar",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143171/SILVER%20FERRARI.jpg",
  },
  {
    id: "img-grey-supercar",
    type: "photo",
    title: "Grey Satin Metallic – Full Body XPEL Protection",
    tag: "Satin Grey / PPF",
    category: "supercar",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143172/GREY.jpg",
  },
  {
    id: "img-audi",
    type: "photo",
    title: "Audi RS Performance – Paint Restoration & Glass Coating",
    tag: "Audi RS / Restoration",
    category: "supercar",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143171/AUDI.jpg",
  },
  {
    id: "img-nissan",
    type: "photo",
    title: "Nissan Patrol SUV – Ultimate Desert & Paint Care",
    tag: "Nissan Patrol / PPF",
    category: "suv",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143171/NISSAN.jpg",
  },
  {
    id: "img-truck1",
    type: "photo",
    title: "Heavy Duty Off-Road Truck – Rugged Shield Wrap",
    tag: "Truck Protection",
    category: "suv",
    src: "https://res.cloudinary.com/dnf24p24f/image/upload/v1785143172/TRUCK1.jpg",
  },

  // YouTube Shorts Videos
  {
    id: "yXBPetb-138",
    type: "video",
    title: "Autoglow End of Year Sale (XPEL Matte PPF)",
    tag: "XPEL Matte PPF",
    category: "ppf",
  },
  {
    id: "zrd_zIodUt4",
    type: "video",
    title: "Ferrari 812 Superfast with XPEL Stealth PPF",
    tag: "Ferrari 812 / XPEL Stealth",
    category: "supercar",
  },
  {
    id: "1hjlqbaKaL4",
    type: "video",
    title: "JETOUR T2 (Rugged Performance & Modern Luxury)",
    tag: "JETOUR T2 / Luxury",
    category: "suv",
  },
  {
    id: "c-mipmTGunw",
    type: "video",
    title: "Jetour at AutoGlow UAE (Premium Car Care & XPEL PPF)",
    tag: "AutoGlow UAE / XPEL",
    category: "ppf",
  },
  {
    id: "RiXMkE3jF-A",
    type: "video",
    title: "Nissan Patrol Protected with Premium XPEL PPF",
    tag: "Nissan Patrol / PPF",
    category: "suv",
  },
  {
    id: "xW-jwk85MdM",
    type: "video",
    title: "This SUV Just Got Next-Level Protection",
    tag: "SUV Protection",
    category: "suv",
  },
  {
    id: "L8FhNv_n14Q",
    type: "video",
    title: "Ready to Conquer Every Trail (Jeep Wrangler Rubicon)",
    tag: "Jeep Rubicon",
    category: "suv",
  },
  {
    id: "NPX2ojytBeE",
    type: "video",
    title: "Turn Heads in Baby Blue (BMW M3)",
    tag: "BMW M3",
    category: "supercar",
  },
  {
    id: "MqfHZsMIpNI",
    type: "video",
    title: "Tough Never Looked This Smooth (Dodge Ram)",
    tag: "Dodge Ram",
    category: "suv",
  },
  {
    id: "FyVAi-KUTGY",
    type: "video",
    title: "Ultimate Protection, Flawless Shine (Nissan Patrol)",
    tag: "Nissan Patrol / Shine",
    category: "ppf",
  },
];

export default function GalleryPage() {
  const [mediaType, setMediaType] = useState<"all" | "photo" | "video">("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "ppf" | "supercar" | "suv">("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    const matchesType = mediaType === "all" || item.type === mediaType;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesType && matchesCategory;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb & Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Icon icon="solar:alt-arrow-right-linear" className="w-3.5 h-3.5" />
          <span className="text-foreground">Gallery</span>
        </nav>

        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface border border-border text-xs font-mono uppercase tracking-wider text-muted mb-4">
          <Icon icon="solar:gallery-wide-bold-duotone" className="w-4 h-4 text-amber-500" />
          AutoGlow Visual Portfolio
        </span>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Vehicle Gallery & Build Highlights
        </h1>
        <p className="text-foreground/70 max-w-2xl text-base sm:text-lg leading-relaxed">
          Browse our high-resolution transformations and video shorts featuring XPEL PPF wraps, Ceramic Coatings, and luxury restorations in Dubai.
        </p>

        {/* Media Type Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface border border-border rounded-2xl">
          {[
            { key: "all", label: "All Works (17)", icon: "solar:widget-bold-duotone" },
            { key: "photo", label: "Photos (7)", icon: "solar:camera-bold-duotone" },
            { key: "video", label: "YouTube Shorts (10)", icon: "logos:youtube-icon" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setMediaType(tab.key as any)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                mediaType === tab.key
                  ? "bg-foreground text-background shadow-sm"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Icon icon={tab.icon} className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {[
            { key: "all", label: "All Categories" },
            { key: "ppf", label: "XPEL PPF & Care" },
            { key: "supercar", label: "Supercars & Sports" },
            { key: "suv", label: "SUVs & Heavy Duty" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategoryFilter(cat.key as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                categoryFilter === cat.key
                  ? "bg-amber-500/10 border border-amber-500/40 text-amber-500"
                  : "bg-surface/60 border border-border/80 text-muted hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all shadow-sm hover:shadow-md"
          >
            {/* Card Content: Photo or Video */}
            {item.type === "photo" ? (
              <div
                onClick={() => setActiveItem(item)}
                className="relative w-full aspect-[4/3] bg-black/90 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono">
                    <Icon icon="solar:full-screen-bold" className="w-3.5 h-3.5" />
                    View Fullscreen Photo
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                    Photo
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[9/16] bg-black/90 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${item.id}?rel=0&modestbranding=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            )}

            {/* Item Info Footer */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                {item.type === "video" ? (
                  <a
                    href={`https://www.youtube.com/shorts/${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-red-500 transition-colors"
                  >
                    <Icon icon="logos:youtube-icon" className="w-3.5 h-3.5" />
                    Watch Shorts
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-500 hover:underline"
                  >
                    <Icon icon="solar:gallery-wide-bold" className="w-3.5 h-3.5" />
                    View Photo
                  </button>
                )}

                <button
                  onClick={() => setActiveItem(item)}
                  className="p-1.5 rounded-lg hover:bg-surface border border-transparent hover:border-border text-muted hover:text-foreground transition-all"
                  title="Expand Media"
                >
                  <Icon icon="solar:full-screen-bold" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram & Social Media Banner Section */}
      <div className="mt-16 bg-gradient-to-br from-surface via-surface to-amber-500/5 border border-border rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-pink-500/20 border border-amber-500/30 flex items-center justify-center mb-6 shadow-sm">
            <Icon icon="skill-icons:instagram" className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Looking for more daily build photos & stories?
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We regularly post live workshop updates, close-ups of XPEL PPF edges, ceramic coating hydrophobic tests, and supercar rollouts on Instagram!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/autoglow.uae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 hover:opacity-95 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Icon icon="skill-icons:instagram" className="w-5 h-5" />
              Follow @autoglow.uae on Instagram
              <Icon icon="solar:export-linear" className="w-4 h-4" />
            </a>

            <a
              href="https://www.youtube.com/@AutoGlow-carcare/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:border-foreground/40 text-foreground font-medium text-sm transition-all shadow-sm"
            >
              <Icon icon="logos:youtube-icon" className="w-5 h-5" />
              AutoGlow YouTube Shorts
              <Icon icon="solar:export-linear" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Expanded Modal Player / Lightbox */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          {/* Backdrop Click Handler */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveItem(null)}
            aria-label="Close modal background"
          />

          {/* Screen-friendly Floating Top Close Button */}
          <button
            onClick={() => setActiveItem(null)}
            className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm shadow-lg transition-transform active:scale-95"
          >
            <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
            <span>Close (Esc)</span>
          </button>

          {/* Modal Content Box */}
          <div className="relative z-10 w-full max-w-xl sm:max-w-2xl max-h-[85vh] bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-3.5 border-b border-border flex items-center justify-between bg-surface/90">
              <span className="text-xs font-mono text-muted uppercase font-semibold">
                {activeItem.tag}
              </span>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1 rounded-full hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
                title="Close Modal"
              >
                <Icon icon="solar:close-circle-bold" className="w-6 h-6" />
              </button>
            </div>

            {/* Media Content */}
            {activeItem.type === "photo" ? (
              <div className="relative w-full bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[9/16] max-w-[360px] mx-auto bg-black max-h-[60vh] flex-1 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeItem.id}?autoplay=1&rel=0`}
                  title={activeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            )}

            <div className="p-4 bg-surface text-center">
              <h3 className="font-semibold text-sm mb-1">{activeItem.title}</h3>
              {activeItem.type === "video" ? (
                <a
                  href={`https://www.youtube.com/shorts/${activeItem.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:underline font-medium"
                >
                  Open on YouTube
                  <Icon icon="solar:export-linear" className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href="https://www.instagram.com/autoglow.uae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:underline font-medium"
                >
                  See more photos on Instagram
                  <Icon icon="solar:export-linear" className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
