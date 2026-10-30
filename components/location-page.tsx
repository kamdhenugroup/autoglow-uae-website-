import Link from "next/link";
import { Icon } from "@iconify/react";
import { DeferredMap } from "@/components/deferred-map";

type Studio = {
  title: string;
  area: string;
  address: string;
  phone: string;
  phoneHref: string;
  mapUrl: string;
  mapEmbedUrl: string;
  intro: string;
  routeNote: string;
  locationSlug: "dubai" | "abu-dhabi";
};

const services = [
  ["Paint Protection Film", "/services/paint-protection-film"],
  ["Ceramic Coating", "/services/ceramic-coating"],
  ["Window Tinting", "/services/window-tinting"],
  ["Vinyl Wrapping", "/services/vinyl-wrapping"],
  ["Paint Correction", "/services/paint-correction"],
  ["Full Detailing", "/services/full-detailing"],
  ["Interior Restoration", "/services/interior-restoration"],
  ["Peelable Paint", "/services/peelable-paint"],
  ["Wheel Repair", "/services/wheel-repair"],
  ["Glass Repair", "/services/glass-repair"],
  ["Body Shop", "/services/body-shop"],
  ["Auto Maintenance", "/services/auto-maintenance"],
  ["Wash", "/services/wash"],
  ["Commercial & Residential", "/services/commercial-residential"],
] as const;

export function LocationPage({ studio }: { studio: Studio }) {
  return (
    <main className="px-4 pb-20 pt-28 text-foreground sm:px-6">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
          <Icon icon="solar:alt-arrow-right-linear" className="h-3.5 w-3.5" aria-hidden="true" />
          <Link href="/locations" className="transition-colors hover:text-foreground">Studios</Link>
          <Icon icon="solar:alt-arrow-right-linear" className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-foreground">{studio.area}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent">AutoGlow studio · {studio.area}</p>
            <h1 className="mb-5 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">{studio.title}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/65 sm:text-lg">{studio.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={studio.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
                Get directions
                <Icon icon="solar:routing-bold-duotone" className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={studio.phoneHref} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent">
                Call {studio.phone}
                <Icon icon="solar:phone-calling-bold-duotone" className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <section className="overflow-hidden rounded-2xl border border-border bg-surface" aria-label={`${studio.area} location map`}>
            <DeferredMap
              title={`AutoGlow ${studio.area} map`}
              address={studio.address}
              src={studio.mapEmbedUrl}
              directionsUrl={studio.mapUrl}
              heightClassName="h-[360px] sm:h-[430px]"
            />
          </section>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <section className="rounded-2xl border border-border bg-surface p-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">Find the studio</p>
            <h2 className="mb-2 font-display text-xl font-bold">{studio.area}</h2>
            <p className="text-sm leading-relaxed text-foreground/65">{studio.address}</p>
            <p className="mt-4 text-xs leading-relaxed text-foreground/45">{studio.routeNote}</p>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">Services at both studios</p>
            <h2 className="mb-2 font-display text-xl font-bold">Choose a service</h2>
            <p className="mb-4 text-sm leading-relaxed text-foreground/65">The same AutoGlow services are available at the Dubai and Abu Dhabi studios. Contact the team to arrange the right service and appointment for your vehicle.</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-xs leading-relaxed text-foreground/70 underline decoration-border underline-offset-4 transition hover:text-accent">{label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-accent">Local information</p>
            <h2 className="mb-2 font-display text-xl font-bold">Address and contact</h2>
            <p className="mb-4 text-sm leading-relaxed text-foreground/65">For the most accurate route, use the Google Maps pin. Call the studio if you need access or appointment details before travelling.</p>
            <Link href={`/reviews#${studio.locationSlug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline underline-offset-4">
              Reviews for this studio <Icon icon="solar:arrow-right-linear" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-accent">AutoGlow work</p>
              <h2 className="font-display text-2xl font-bold">Browse the combined gallery</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/60">The gallery shows work from AutoGlow across both studios. Photos are kept together and are not attributed to an individual branch.</p>
            </div>
            <Link href="/gallery" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent">
              View gallery <Icon icon="solar:gallery-wide-bold-duotone" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
