import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "AutoGlow Studios in Dubai & Abu Dhabi",
  description:
    "Find AutoGlow's car protection and detailing studios in Dubai Al Quoz and Abu Dhabi Musaffah M4. See addresses, phone numbers and directions.",
  alternates: { canonical: "https://autoglow.ae/locations" },
};

const studios = [
  {
    title: "AutoGlow Dubai HQ",
    area: "Al Quoz Industrial 2",
    address: "Gate No. 3, Plot 1014, 22nd Street, Al Quoz, Dubai",
    phone: "+971 50 467 0081",
    href: "/locations/dubai",
    map: "https://maps.app.goo.gl/jysz6nVVBeTLsmz56",
  },
  {
    title: "AutoGlow Abu Dhabi Studio",
    area: "Musaffah M4",
    address: "Al Hail Business Centre, Motors, Block 1, Unit 4, Musaffah M4, Abu Dhabi",
    phone: "+971 50 632 1408",
    href: "/locations/abu-dhabi",
    map: "https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5",
  },
];

export default function LocationsPage() {
  return (
    <main className="px-4 pb-20 pt-28 text-foreground sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent">AutoGlow UAE</p>
        <h1 className="mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">Visit an AutoGlow studio</h1>
        <p className="mb-12 max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">
          AutoGlow serves customers from two UAE studios: Al Quoz Industrial 2 in Dubai and Musaffah M4 in Abu Dhabi. Choose a location for its address, services, contact details and directions.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {studios.map((studio) => (
            <article key={studio.href} className="rounded-2xl border border-border bg-surface p-7 sm:p-8">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{studio.area}</p>
              <h2 className="mb-3 font-display text-2xl font-bold">{studio.title}</h2>
              <p className="text-sm leading-relaxed text-foreground/65">{studio.address}</p>
              <a href={`tel:${studio.phone.replaceAll(" ", "")}`} className="mt-3 inline-flex text-sm font-medium text-foreground/75 underline decoration-border underline-offset-4">{studio.phone}</a>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={studio.href} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
                  Studio details <Icon icon="solar:arrow-right-linear" className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={studio.map} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent">
                  Directions <Icon icon="solar:routing-bold-duotone" className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-foreground/55">Both studios share the same service menu and public hours: Monday to Saturday, 9:00 AM–7:00 PM. The combined project gallery is available on the <Link href="/gallery" className="text-accent underline underline-offset-4">AutoGlow gallery</Link>.</p>
      </div>
    </main>
  );
}
