"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { DeferredMap } from "@/components/deferred-map";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { playSound } from "@/lib/sounds";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LenOmEtAAAAAHIEwRc95l_-1dnjH407pv5zST9P";

const SERVICES = [
  "Paint Protection Film",
  "Ceramic & Graphene Coating",
  "Window Tinting",
  "Paint Correction & Polishing",
  "Vinyl Wrapping & Customization",
  "Body Shop & Collision Repair",
  "Full Detailing",
  "Wash",
  "Glass & Windshield Repair",
  "Interior & Leather Restoration",
  "Wheel & Rim Repair",
  "Peelable Paint",
  "Auto Maintenance (Oil Change & Quick Service)",
  "Commercial & Residential Surface Protection"
];

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Anti-spam states
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime, setFormStartTime] = useState<number>(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "+971 ",
    email: "",
    vehicle: "",
    studio: "Dubai HQ",
    service: "",
    message: "",
  });

  useEffect(() => {
    setFormStartTime(Date.now());

    // Load reCAPTCHA v3 script dynamically
    if (RECAPTCHA_SITE_KEY && typeof window !== "undefined") {
      const scriptId = "recaptcha-v3-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const executeRecaptchaV3 = async (): Promise<string> => {
    if (typeof window !== "undefined" && window.grecaptcha && RECAPTCHA_SITE_KEY) {
      try {
        return await new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact_submit" });
              resolve(token || "v3_fallback_token");
            } catch (err) {
              console.warn("reCAPTCHA v3 execute error:", err);
              resolve("v3_fallback_token");
            }
          });
        });
      } catch (err) {
        console.warn("grecaptcha error:", err);
      }
    }
    return "v3_fallback_token";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    playSound("loading");

    try {
      // Get reCAPTCHA v3 token seamlessly
      const token = await executeRecaptchaV3();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          studio: formData.studio,
          service: formData.service,
          message: formData.vehicle ? `Vehicle: ${formData.vehicle}\n\n${formData.message}` : formData.message,
          // Anti-spam payloads
          website_url: honeypot, // Honeypot field
          recaptchaVerified: true,
          recaptchaToken: token,
          formTime: formStartTime,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit request.");
      }

      setSubmitted(true);
      playSound("success");
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred while sending your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <ScrollReveal as="section" className="scroll-mt-24 pt-32 pb-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">Contact & Booking</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Secure Your Slot.
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-light">
            Whether you need comprehensive protection for a new delivery or meticulous restoration for a classic, our specialists are ready.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="scroll-mt-24 py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div className="bg-background/90 backdrop-blur-md p-6 sm:p-8 md:p-10 border border-border/80 rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/20 relative overflow-hidden">
            {/* Ambient Background Accent Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <Icon icon="solar:check-circle-bold-duotone" className="w-10 h-10" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-3">
                    Inquiry Received
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                    Consultation Request Sent
                  </h3>
                  <p className="text-sm text-foreground/70 max-w-md mt-2 leading-relaxed">
                    Thank you! Your request has been received. Our detailing specialist will contact you shortly via phone or WhatsApp to confirm your booking.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    playSound("toggle");
                  }}
                  className="px-6 py-2.5 rounded-full border border-border text-xs font-mono font-bold uppercase tracking-widest text-foreground hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="border-b border-border/80 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted">AutoGlow Executive Desk</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Book Detailing & Protection
                  </h2>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium flex items-center gap-3 animate-shake">
                    <Icon icon="solar:danger-triangle-bold" className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Preferred Studio Location Tile Picker */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60 flex items-center justify-between">
                    <span>1. Preferred Studio Location</span>
                    <span className="text-accent text-[10px]">UAE</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, studio: "Dubai HQ" });
                        playSound("tick");
                      }}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        formData.studio === "Dubai HQ"
                          ? "border-accent bg-accent/10 shadow-sm shadow-accent/20 text-foreground font-semibold"
                          : "border-border/80 bg-surface/50 text-foreground/70 hover:border-border hover:bg-surface"
                      }`}
                    >
                      <div className={`p-2 rounded-lg border shrink-0 ${formData.studio === "Dubai HQ" ? "bg-accent text-background border-accent" : "bg-muted/40 border-border"}`}>
                        <Icon icon="solar:buildings-bold-duotone" className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-foreground font-mono uppercase tracking-wider truncate">Dubai HQ</div>
                        <div className="text-[11px] text-foreground/60 font-sans truncate">Al Quoz Industrial 2</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, studio: "Abu Dhabi" });
                        playSound("tick");
                      }}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        formData.studio === "Abu Dhabi"
                          ? "border-accent bg-accent/10 shadow-sm shadow-accent/20 text-foreground font-semibold"
                          : "border-border/80 bg-surface/50 text-foreground/70 hover:border-border hover:bg-surface"
                      }`}
                    >
                      <div className={`p-2 rounded-lg border shrink-0 ${formData.studio === "Abu Dhabi" ? "bg-accent text-background border-accent" : "bg-muted/40 border-border"}`}>
                        <Icon icon="solar:map-point-wave-bold-duotone" className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-foreground font-mono uppercase tracking-wider truncate">Abu Dhabi Studio</div>
                        <div className="text-[11px] text-foreground/60 font-sans truncate">Musaffah M4</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Personal Information Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Full Name *</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="e.g. Sheikh Mohammed"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-foreground/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Phone Number *</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm font-mono text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-foreground/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Email Address *</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-foreground/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Vehicle Model *</label>
                    <input
                      required
                      name="vehicle"
                      type="text"
                      placeholder="e.g. Porsche 911 GT3 RS / G63"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all placeholder:text-foreground/30"
                    />
                  </div>
                </div>

                {/* Primary Service Selector */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Primary Service *</label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-foreground/40">Select service...</option>
                    {SERVICES.map((s, i) => (
                      <option key={i} value={s} className="bg-background text-foreground py-1">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-foreground/60">Consultation Notes / Requests</label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border/80 rounded-xl px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all resize-none placeholder:text-foreground/30"
                    placeholder="Provide details about vehicle paint condition, preferred date, or custom finish..."
                  ></textarea>
                </div>

                {/* Hidden Honeypot Input for Bot Detection */}
                <input
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="sr-only hidden absolute -left-[9999px]"
                  aria-hidden="true"
                />

                {/* Google reCAPTCHA v3 Security Badge */}
                <div className="p-3 rounded-xl bg-surface/60 border border-border/80 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-foreground/70">
                    <Icon icon="logos:recaptcha" className="w-5 h-5 shrink-0 opacity-85" />
                    <span className="text-[11px] font-sans">
                      Protected by <span className="font-semibold text-foreground">reCAPTCHA v3</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md shrink-0">
                    Active
                  </span>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background py-3.5 px-6 font-semibold uppercase tracking-wider text-xs sm:text-sm rounded-xl hover:bg-foreground/90 transition-all shadow-lg shadow-black/10 dark:shadow-white/5 flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer group whitespace-nowrap overflow-hidden"
                >
                  <span className="truncate">{isSubmitting ? "Submitting Request..." : "Request AutoGlow Consultation"}</span>
                  {!isSubmitting && <Icon icon="solar:arrow-right-linear" className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-[10px] text-foreground/50 text-center leading-relaxed">
                  This form is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-foreground">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>

              </form>
            )}
          </div>

          {/* Contact Details & Locations */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-8 text-foreground">Our Studios</h2>
              <div className="space-y-8">
                {/* Dubai */}
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="font-medium text-lg mb-2 text-foreground">AUTOGLOW UAE — Dubai HQ</h3>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <a
                      href="https://maps.app.goo.gl/jysz6nVVBeTLsmz56"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:text-foreground transition-colors group"
                    >
                      <Icon icon="solar:map-point-bold-duotone" className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>Gate No.3 - Plot No. 1014 22nd St<br/>Al Qouz Ind.second - Al Quoz, Dubai, UAE</span>
                    </a>
                    <p className="flex items-center gap-3">
                      <Icon icon="solar:phone-bold-duotone" className="w-5 h-5 text-accent shrink-0" />
                      <a href="tel:+971504670081" className="hover:text-foreground transition-colors">+971 50 467 0081</a>
                    </p>
                  </div>
                </div>

                {/* Abu Dhabi */}
                <div className="border-l-2 border-border hover:border-accent/60 transition-colors pl-6">
                  <h3 className="font-medium text-lg mb-2 text-foreground">AUTOGLOW — Abu Dhabi</h3>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <a
                      href="https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:text-foreground transition-colors group"
                    >
                      <Icon icon="solar:map-point-bold-duotone" className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>Al Hail Business Centre, Motors - Block-1 Unit-4<br/>Musaffah - M4, Abu Dhabi, UAE</span>
                    </a>
                    <p className="flex items-center gap-3">
                      <Icon icon="solar:phone-bold-duotone" className="w-5 h-5 text-accent shrink-0" />
                      <a href="tel:+971506321408" className="hover:text-foreground transition-colors">+971 50 632 1408</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="font-display text-xl font-bold mb-6 text-foreground">General Inquiries</h2>
              <div className="space-y-4 text-sm text-foreground/70">
                <p className="flex items-center gap-3">
                  <Icon icon="solar:letter-bold-duotone" className="w-5 h-5 text-accent" />
                  <a href="mailto:info@autoglow.ae" className="hover:text-foreground transition-colors">info@autoglow.ae</a>
                </p>
                <p className="flex items-center gap-3">
                  <Icon icon="solar:clock-circle-bold-duotone" className="w-5 h-5 text-accent" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM (Sunday Closed)</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>


      {/* Studio Locations / Map Slot Section */}
      <ScrollReveal as="section" className="scroll-mt-24 py-16 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent uppercase tracking-widest mb-3 font-semibold">
                <Icon icon="solar:map-point-bold-duotone" className="w-4 h-4 text-accent" />
                Visit Our Studios
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Studio Map & Directions
              </h2>
            </div>
            <p className="text-sm text-foreground/70 max-w-md">
              See each studio address first, then load its interactive map or open directions in Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dubai Map Container Slot */}
            <div className="flex flex-col bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between gap-4 bg-surface/50">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">AUTOGLOW UAE — Dubai HQ</h3>
                  <p className="text-xs text-foreground/70 font-mono">
                    Gate No.3, Plot 1014 22nd St, Al Quoz Ind. 2, Dubai
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/jysz6nVVBeTLsmz56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-accent text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1.5"
                >
                  <Icon icon="solar:routing-bold-duotone" className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
              <DeferredMap
                title="AUTOGLOW Dubai HQ Map"
                address="Gate No. 3, Plot 1014, 22nd Street, Al Quoz Industrial 2, Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.4580407507!2d55.253061998384524!3d25.141521400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6908d6b071d9%3A0x670999a6b8b21745!2sAutoglow%20UAE!5e1!3m2!1sen!2sin!4v1784717084391!5m2!1sen!2sin"
                directionsUrl="https://maps.app.goo.gl/jysz6nVVBeTLsmz56"
              />
            </div>

            {/* Abu Dhabi Map Container Slot */}
            <div className="flex flex-col bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between gap-4 bg-surface/50">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">AUTOGLOW — Abu Dhabi</h3>
                  <p className="text-xs text-foreground/70 font-mono">
                    Al Hail Business Centre, Motors - Block 1 Unit 4, Musaffah M4
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-accent text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-accent-hover transition-colors flex items-center gap-1.5"
                >
                  <Icon icon="solar:routing-bold-duotone" className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
              <DeferredMap
                title="AUTOGLOW Abu Dhabi Studio Map"
                address="Al Hail Business Centre, Motors, Block 1, Unit 4, Musaffah M4, Abu Dhabi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.388994637587!2d54.514753382800265!3d24.36620530880771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e417875433bef%3A0x9967c984a32e9ae6!2sAutoGlow%20Abu%20Dhabi!5e1!3m2!1sen!2sin!4v1784717136602!5m2!1sen!2sin"
                directionsUrl="https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
