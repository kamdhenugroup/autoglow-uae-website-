"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function YouTubeFacade({
  videoId,
  title,
  sizes,
}: {
  videoId: string;
  title: string;
  sizes: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block h-full w-full overflow-hidden bg-black text-left"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={`Video preview: ${title}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
      <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
        <Icon icon="solar:play-bold" className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="sr-only">Click to load the YouTube player</span>
    </button>
  );
}
