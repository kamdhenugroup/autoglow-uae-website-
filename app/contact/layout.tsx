import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AutoGlow | Book a Consultation in Dubai or Abu Dhabi",
  description: "Get in touch with AutoGlow. Book a premium detailing, PPF, or window tinting consultation at our Dubai or Abu Dhabi branches.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
