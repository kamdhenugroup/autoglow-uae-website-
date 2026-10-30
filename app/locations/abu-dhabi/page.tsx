import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Car Detailing & Paint Protection in Musaffah, Abu Dhabi | AutoGlow",
  description:
    "Visit AutoGlow Abu Dhabi in Musaffah M4 for PPF, coating, tinting, detailing and repair services. Get the address, call the studio or open directions.",
  alternates: { canonical: "https://autoglow.ae/locations/abu-dhabi" },
};

export default function AbuDhabiStudioPage() {
  return (
    <LocationPage
      studio={{
        title: "Car protection and detailing in Musaffah, Abu Dhabi",
        area: "Abu Dhabi · Musaffah M4",
        address: "Al Hail Business Centre, Motors, Block 1, Unit 4, Musaffah M4, Abu Dhabi, UAE",
        phone: "+971 50 632 1408",
        phoneHref: "tel:+971506321408",
        mapUrl: "https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.388994637587!2d54.514753382800265!3d24.36620530880771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e417875433bef%3A0x9967c984a32e9ae6!2sAutoGlow%20Abu%20Dhabi!5e1!3m2!1sen!2sin!4v1784717136602!5m2!1sen!2sin",
        intro: "The Abu Dhabi studio is in Musaffah M4 at Al Hail Business Centre. Open the Google Maps pin for directions to Block 1, Unit 4, and call the studio if you need help with access or an appointment.",
        routeNote: "The studio is listed at Al Hail Business Centre, Motors, Block 1, Unit 4. Open the map pin for the route and final approach.",
        locationSlug: "abu-dhabi",
      }}
    />
  );
}
