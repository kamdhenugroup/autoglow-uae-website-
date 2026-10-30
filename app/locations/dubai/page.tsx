import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Car Detailing & Paint Protection in Al Quoz, Dubai | AutoGlow",
  description:
    "Visit AutoGlow Dubai HQ in Al Quoz Industrial 2 for PPF, coating, tinting, detailing and repair services. Get the address, call the studio or open directions.",
  alternates: { canonical: "https://autoglow.ae/locations/dubai" },
};

export default function DubaiStudioPage() {
  return (
    <LocationPage
      studio={{
        title: "Car protection and detailing in Al Quoz, Dubai",
        area: "Dubai · Al Quoz Industrial 2",
        address: "Gate No. 3, Plot No. 1014, 22nd Street, Al Quoz Industrial 2, Dubai, UAE",
        phone: "+971 50 467 0081",
        phoneHref: "tel:+971504670081",
        mapUrl: "https://maps.app.goo.gl/jysz6nVVBeTLsmz56",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.4580407507!2d55.253061998384524!3d25.141521400000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6908d6b071d9%3A0x670999a6b8b21745!2sAutoglow%20UAE!5e1!3m2!1sen!2sin!4v1784717084391!5m2!1sen!2sin",
        intro: "The Dubai HQ is in Al Quoz Industrial 2. Use the Google Maps pin for turn-by-turn directions to Gate 3, then call the studio if you need help finding the entrance or arranging a visit.",
        routeNote: "The address is listed as Gate No. 3, Plot 1014, 22nd Street. Open the map pin for the route and final approach.",
        locationSlug: "dubai",
      }}
    />
  );
}
