import '@/components/patch-insertion-effect';
import { PatchInsertionEffect } from '@/components/patch-insertion-effect';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { PageTransition } from '@/components/page-transition';
import { TopProgressBar } from '@/components/top-progress-bar';
import { GrainTexture } from '@/components/ui/grain-texture';
import { EntryLoader } from '@/components/ui/entry-loader';
import { SoundEffects } from '@/components/sound-effects';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://autoglow.ae'),
  title: {
    default: 'AutoGlow | Premium Paint Protection Film, Ceramic Coating & Detailing UAE',
    template: '%s | AutoGlow Car Care Dubai & Abu Dhabi',
  },
  description: 'Precision auto detailing, XPEL Paint Protection Film (PPF), Permagard ceramic coatings, GlanzPro nanocoatings, vinyl wrapping, and window tinting in Dubai & Abu Dhabi.',
  keywords: [
    'AutoGlow',
    'Paint Protection Film Dubai',
    'PPF Dubai',
    'XPEL Dubai',
    'Permagard Ceramic Coating',
    'GlanzPro Nanocoating',
    'Car Detailing Dubai',
    'Ceramic Coating Abu Dhabi',
    'Car Tinting Dubai',
    'Vinyl Wrap UAE',
    'Paint Correction Dubai',
    'Luxury Auto Care UAE'
  ],
  authors: [{ name: 'AutoGlow Car Care' }],
  creator: 'AutoGlow Car Care',
  publisher: 'AutoGlow Car Care',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://res.cloudinary.com/dnf24p24f/image/upload/e_negate/v1781864421/Auto_Glow_Logo.png',
        media: '(prefers-color-scheme: light)',
      }
    ],
    shortcut: [
      {
        url: 'https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://res.cloudinary.com/dnf24p24f/image/upload/e_negate/v1781864421/Auto_Glow_Logo.png',
        media: '(prefers-color-scheme: light)',
      }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://autoglow.ae',
    siteName: 'AutoGlow Car Care',
    title: 'AutoGlow | Premium Paint Protection Film & Detailing UAE',
    description: 'Precision auto detailing, XPEL PPF, Permagard ceramic coatings, and GlanzPro surface protection in Dubai & Abu Dhabi.',
    images: [
      {
        url: 'https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png',
        width: 1200,
        height: 630,
        alt: 'AutoGlow Premium Surface Protection UAE',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoGlow | Premium Paint Protection & Detailing UAE',
    description: 'XPEL PPF, Permagard Ceramic Coatings, GlanzPro Nanotechnology & Luxury Detailing in Dubai & Abu Dhabi.',
    images: ['https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  'name': 'AutoGlow Car Care Expert',
  'image': 'https://res.cloudinary.com/dnf24p24f/image/upload/v1781864421/Auto_Glow_Logo.png',
  'url': 'https://autoglow.ae',
  'email': 'info@autoglow.ae',
  'telephone': '+971506321408',
  'priceRange': '$$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Gate No.3 - Plot No. 1014 22nd St, Al Qouz Industrial Second',
    'addressLocality': 'Dubai',
    'addressRegion': 'Dubai',
    'addressCountry': 'AE'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 25.1275,
    'longitude': 55.2281
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'opens': '08:00',
    'closes': '20:00'
  },
  'sameAs': [
    'https://www.instagram.com/autoglowcarcare/',
    'https://www.instagram.com/glanzpro.film/'
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5M4ZMJNZJR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5M4ZMJNZJR');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y03ngen2k4");
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-200" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <SoundEffects />
            <PatchInsertionEffect />
            <EntryLoader />
            <GrainTexture />
            <TopProgressBar />
            <SmoothScroll>
              <Header />
              <PageTransition>
                <main className="min-h-screen pt-20">
                  {children}
                </main>
              </PageTransition>
              <Footer />
              <WhatsAppButton />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

