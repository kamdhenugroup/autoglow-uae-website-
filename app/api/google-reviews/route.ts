import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const studios = {
  dubai: {
    query: "AutoGlow UAE Gate 3 Plot 1014 22nd Street Al Quoz Dubai",
    mapsUrl: "https://maps.app.goo.gl/jysz6nVVBeTLsmz56",
  },
  "abu-dhabi": {
    query: "AutoGlow Abu Dhabi Al Hail Business Centre Block 1 Unit 4 Musaffah M4",
    mapsUrl: "https://maps.app.goo.gl/MCGKfErJ2KsjaRbr5",
  },
} as const;

type StudioKey = keyof typeof studios;

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export async function POST(request: Request) {
  let location: unknown;
  try {
    ({ location } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof location !== "string" || !(location in studios)) {
    return NextResponse.json({ error: "Unknown studio." }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Google reviews are not configured yet." }, { status: 503 });
  }

  const studio = studios[location as StudioKey];
  try {
    const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.googleMapsUri,places.reviews",
      },
      body: JSON.stringify({
        textQuery: studio.query,
        languageCode: "en",
        regionCode: "AE",
        pageSize: 5,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Google reviews are temporarily unavailable." }, { status: 502 });
    }

    const result = await response.json();
    const place = (result.places ?? []).find((candidate: any) => {
      const name = normalize(candidate.displayName?.text ?? "");
      const address = normalize(candidate.formattedAddress ?? "");
      const matchesArea = location === "dubai"
        ? address.includes("al quoz")
        : address.includes("musaffah") || address.includes("mussafah");
      return name.includes("autoglow") && matchesArea;
    });

    if (!place) {
      return NextResponse.json({ error: "The matching Google listing could not be confirmed." }, { status: 404 });
    }

    return NextResponse.json(
      {
        placeName: place.displayName?.text ?? "AutoGlow",
        address: place.formattedAddress ?? "",
        placeUrl: place.googleMapsUri ?? studio.mapsUrl,
        reviews: (place.reviews ?? []).slice(0, 5).map((review: any) => {
          const photoUri = review.authorAttribution?.photoUri ?? "";
          return {
            rating: review.rating,
            text: review.text?.text ?? review.originalText?.text ?? "",
            relativePublishTimeDescription: review.relativePublishTimeDescription ?? "",
            googleMapsUri: review.googleMapsUri ?? place.googleMapsUri ?? studio.mapsUrl,
            author: {
              name: review.authorAttribution?.displayName ?? "Google reviewer",
              uri: review.authorAttribution?.uri ?? "",
              photoUri: photoUri.startsWith("https://lh3.googleusercontent.com/") ? photoUri : "",
            },
          };
        }),
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch {
    return NextResponse.json({ error: "Google reviews are temporarily unavailable." }, { status: 502 });
  }
}
