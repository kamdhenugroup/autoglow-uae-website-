import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { GoogleReviews } from "@/components/google-reviews";

export const metadata: Metadata = {
  title: "Google Reviews for AutoGlow Dubai & Abu Dhabi",
  description:
    "Read customer feedback for AutoGlow's Dubai Al Quoz and Abu Dhabi Musaffah studios on Google Maps.",
  alternates: {
    canonical: "https://autoglow.ae/reviews",
  },
};

const studios = [
  {
    name: "AutoGlow UAE — Dubai",
    area: "Al Quoz Industrial 2",
    address: "Gate No. 3, Plot 1014, 22nd Street, Al Quoz, Dubai",
    mapsUrl: "https://www.google.com/maps/place/Autoglow+UAE/@25.1415575,55.2577922,17z/data=!4m8!3m7!1s0x3e5f6908d6b071d9:0x670999a6b8b21745!8m2!3d25.1415575!4d55.2577922!9m1!1b1!16s%2Fg%2F11ldswknkz?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    location: "dubai" as const,
    detailsUrl: "/locations/dubai",
  },
  {
    name: "AutoGlow — Abu Dhabi",
    area: "Musaffah M4",
    address: "Al Hail Business Centre, Motors, Block 1, Unit 4, Musaffah M4, Abu Dhabi",
    mapsUrl: "https://www.google.com/maps/place/AutoGlow+Abu+Dhabi/@24.3662005,54.5196243,17z/data=!4m8!3m7!1s0x3e5e417875433bef:0x9967c984a32e9ae6!8m2!3d24.3662005!4d54.5196243!9m1!1b1!16s%2Fg%2F11xrgy9s1n?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    location: "abu-dhabi" as const,
    detailsUrl: "/locations/abu-dhabi",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-[70vh] px-4 py-20 text-foreground sm:px-6">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-10 flex items-center gap-2 text-xs font-mono text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <Icon icon="solar:alt-arrow-right-linear" className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-foreground">Reviews</span>
        </nav>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-accent">
          <Icon icon="solar:chat-round-like-bold-duotone" className="h-4 w-4" aria-hidden="true" />
          Customer feedback
        </div>

        <h1 className="mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Reviews from our Dubai and Abu Dhabi studios
        </h1>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
          Read customer feedback for each studio from its Google Maps listing. Reviews open on Google, where you can see the original author and full context.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {studios.map((studio) => (
            <section key={studio.name} id={studio.location} className="flex flex-col rounded-2xl border border-border bg-surface p-7 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-mono uppercase tracking-widest text-accent">{studio.area}</p>
                  <h2 className="font-display text-2xl font-bold">{studio.name}</h2>
                </div>
                <Icon icon="logos:google-maps" className="h-8 w-8 shrink-0" aria-label="Google Maps" />
              </div>
              <p className="mb-7 flex-1 text-sm leading-relaxed text-foreground/65">{studio.address}</p>
              <Link href={studio.detailsUrl} className="mb-1 text-sm font-medium text-accent underline underline-offset-4">Studio details and services</Link>
              <GoogleReviews location={studio.location} mapsUrl={studio.mapsUrl} />
            </section>
          ))}
        </div>

        <p className="mt-7 text-xs leading-relaxed text-foreground/45">
          Review content and author attribution are provided by Google Maps. Use the link on each review to open its original source.
        </p>
      </div>
    </main>
  );
}
