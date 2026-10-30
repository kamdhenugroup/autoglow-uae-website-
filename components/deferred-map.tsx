"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type DeferredMapProps = {
  title: string;
  address: string;
  src: string;
  directionsUrl: string;
  heightClassName?: string;
};

export function DeferredMap({
  title,
  address,
  src,
  directionsUrl,
  heightClassName = "h-[400px]",
}: DeferredMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        title={title}
        src={src}
        className={`w-full border-0 ${heightClassName} grayscale contrast-125 dark:invert dark:hue-rotate-180`}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className={`relative flex w-full items-center justify-center overflow-hidden bg-zinc-950 p-6 text-center ${heightClassName}`}>
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(32deg,transparent_46%,#52525b_47%,#52525b_49%,transparent_50%),linear-gradient(145deg,transparent_35%,#3f3f46_36%,#3f3f46_38%,transparent_39%),linear-gradient(90deg,transparent_48%,#27272a_49%,#27272a_51%,transparent_52%)] [background-size:180px_140px,220px_180px,90px_100%]" />
      <div className="relative z-10 flex max-w-md flex-col items-center">
        <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <Icon icon="solar:map-point-bold-duotone" className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Location preview</p>
        <h3 className="mt-2 font-display text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{address}</p>
        <p className="mt-2 text-xs text-zinc-400">Load the map when you’re ready to view the location in Google Maps.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Load interactive map
            <Icon icon="solar:map-arrow-right-bold-duotone" className="h-4 w-4" aria-hidden="true" />
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/50"
          >
            Directions
            <Icon icon="solar:arrow-up-right-linear" className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
