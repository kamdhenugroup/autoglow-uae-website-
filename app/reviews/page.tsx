import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ReviewsPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Icon icon="solar:alt-arrow-right-linear" className="w-3.5 h-3.5" />
          <span className="text-foreground">Reviews</span>
        </nav>
      </div>

      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono uppercase tracking-wider text-muted">
          Client Feedback
        </span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
        Client Reviews & Testimonials
      </h1>

      <div className="max-w-md w-full border border-border p-8 bg-surface rounded-2xl text-center">
        <Icon icon="solar:stars-minimalistic-bold-duotone" className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="font-display text-lg font-bold mb-2">Verified Reviews Coming Soon</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          Read feedback and experiences from supercar owners across Dubai and Abu Dhabi.
        </p>
      </div>
    </div>
  );
}

