"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Review = {
  rating?: number;
  text: string;
  relativePublishTimeDescription: string;
  googleMapsUri: string;
  author: {
    name: string;
    uri: string;
    photoUri: string;
  };
};

type ReviewResponse = {
  placeName: string;
  address: string;
  placeUrl: string;
  reviews: Review[];
  error?: string;
};

export function GoogleReviews({ location, mapsUrl }: { location: "dubai" | "abu-dhabi"; mapsUrl: string }) {
  const [data, setData] = useState<ReviewResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadReviews() {
    if (loading || data) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/google-reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location }),
      });
      const result = (await response.json()) as ReviewResponse;
      if (!response.ok) throw new Error(result.error || "Google reviews are temporarily unavailable.");
      setData(result);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Google reviews are temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-7 border-t border-border/70 pt-6">
      <button
        type="button"
        onClick={loadReviews}
        disabled={loading}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-accent/40 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent disabled:cursor-wait disabled:opacity-60"
      >
        <Icon icon="solar:chat-round-like-bold-duotone" className="h-4 w-4" aria-hidden="true" />
        {loading ? "Loading Google reviews…" : data ? "Google reviews loaded" : "Show Google reviews"}
      </button>
      <a
        href={data?.placeUrl || mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent underline underline-offset-4"
      >
        View listing on Google Maps
        <Icon icon="solar:arrow-up-right-linear" className="h-4 w-4" aria-hidden="true" />
      </a>

      {error && <p className="mt-4 text-sm text-foreground/60" role="status">{error} Use the Google Maps link to read the current reviews.</p>}

      {data && (
        <div className="mt-6 space-y-4" aria-live="polite">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Reviews on <span className="text-accent">Google Maps</span></p>
            <a href={data.placeUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent underline underline-offset-4">
              See all reviews
            </a>
          </div>
          {data.reviews.length === 0 ? (
            <p className="rounded-xl border border-border bg-background/60 p-4 text-sm text-foreground/60">
              No review text is currently available from Google for this listing. Open the Google Maps listing to see its latest details.
            </p>
          ) : (
            data.reviews.map((review, index) => (
              <article key={`${review.author.name}-${index}`} className="rounded-xl border border-border bg-background/60 p-5">
                <div className="mb-3 flex items-center gap-3">
                  {review.author.photoUri && (
                    <Image
                      src={review.author.photoUri}
                      alt=""
                      width={36}
                      height={36}
                      unoptimized
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  )}
                  <div className="min-w-0">
                    {review.author.uri ? (
                      <a href={review.author.uri} target="_blank" rel="noopener noreferrer" className="truncate text-sm font-semibold underline decoration-border underline-offset-4">
                        {review.author.name}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-semibold">{review.author.name}</p>
                    )}
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-foreground/55">
                      <span role="img" aria-label={`${review.rating ?? 0} out of 5 stars`} className="text-amber-500">
                        {"★".repeat(Math.max(0, Math.min(5, Math.round(review.rating ?? 0))))}
                      </span>
                      {review.relativePublishTimeDescription && <span>{review.relativePublishTimeDescription}</span>}
                    </div>
                  </div>
                  <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-foreground/40">Google Maps</span>
                </div>
                {review.text && <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/75">{review.text}</p>}
                <a href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs text-accent underline underline-offset-4">
                  View original review on Google Maps
                </a>
              </article>
            ))
          )}
          <p className="text-xs leading-relaxed text-foreground/45">
            Google selects up to five reviews for this view. The Google Maps link opens the original listing and review context.
          </p>
        </div>
      )}
    </div>
  );
}
