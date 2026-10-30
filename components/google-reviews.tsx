import { Icon } from "@iconify/react";

export function GoogleReviews({ mapsUrl }: { mapsUrl: string }) {
  return (
    <div className="mt-7 border-t border-border/70 pt-6">
      <p className="mb-4 text-sm leading-relaxed text-foreground/60">
        Open this studio’s Google listing to read the latest reviews, ratings and author details.
      </p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
      >
        <Icon icon="solar:chat-round-like-bold-duotone" className="h-4 w-4" aria-hidden="true" />
        Read Google reviews
        <Icon icon="solar:arrow-up-right-linear" className="h-4 w-4" aria-hidden="true" />
      </a>
      <p className="mt-3 text-xs leading-relaxed text-foreground/45">
        Reviews open on Google Maps, where you can see the original feedback and context.
      </p>
    </div>
  );
}
