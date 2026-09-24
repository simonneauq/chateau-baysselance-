import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import AgeGate from "@/components/AgeGate";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chateaubaysselance.fr";

// next/font self-hosts the font files at build time: visitors' browsers never
// contact Google (no IP address transferred to a third party).
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Structured data describing the estate, for search engines and AI agents.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Winery",
  name: "Château Baysselance",
  url: SITE_URL,
  image: `${SITE_URL}/photo_1.jpg`,
  description:
    "Domaine viticole en AOC Graves à Landiras (Gironde) : vieilles vignes, travail du sol au cheval, démarche de certification biologique engagée en 2026.",
  founder: { "@type": "Person", name: "Frédéric Baysselance" },
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    postalCode: "33720",
    addressLocality: "Landiras",
    addressRegion: "Gironde",
    addressCountry: "FR",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Château Baysselance — AOC Graves, Landiras",
    template: "%s — Château Baysselance",
  },
  description:
    "Domaine viticole en AOC Graves à Landiras. Vieilles vignes, travail au cheval, certification biologique en cours. Graves blanc sec, moelleux, pétillant naturel.",
  alternates: {
    languages: { fr: "/fr", en: "/en" },
  },
  openGraph: {
    title: "Château Baysselance",
    description:
      "Vieilles vignes, travail au cheval, AOC Graves. Domaine à Landiras, Gironde.",
    siteName: "Château Baysselance",
    images: [
      {
        url: "/photo_1.jpg",
        width: 1200,
        height: 800,
        alt: "Vignes du Château Baysselance au coucher du soleil",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Château Baysselance — AOC Graves",
    description: "Vieilles vignes, travail au cheval, AOC Graves. Landiras, Gironde.",
    images: ["/photo_1.jpg"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const tAgeGate = await getTranslations({ locale, namespace: "age_gate" });

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <AgeGate
            labels={{
              title: tAgeGate("title"),
              question: tAgeGate("question"),
              yes: tAgeGate("yes"),
              no: tAgeGate("no"),
              deniedTitle: tAgeGate("denied_title"),
              deniedText: tAgeGate("denied_text"),
              legalNotice: tAgeGate("legal_notice"),
            }}
          />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
