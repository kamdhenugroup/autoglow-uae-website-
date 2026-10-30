"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function InstagramFacade({
  shortcode,
  title,
  thumbnailSrc,
  sizes,
}: {
  shortcode: string;
  title: string;
  thumbnailSrc: string;
  sizes: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.instagram.com/reel/${shortcode}/embed/captioned/`}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0 bg-black"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      aria-label={`Load Instagram Reel: ${title}`}
      className="group relative block h-full w-full overflow-hidden bg-black text-left"
    >
      <Image
        src={thumbnailSrc}
        alt={`Instagram Reel preview: ${title}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />
      <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white shadow-lg transition-transform group-hover:scale-105">
        <Icon icon="solar:play-bold" className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white">
        <Icon icon="skill-icons:instagram" className="h-3.5 w-3.5" aria-hidden="true" />
        Instagram Reel
      </span>
      <span className="sr-only">Click to load the Instagram Reel</span>
    </button>
  );
}
