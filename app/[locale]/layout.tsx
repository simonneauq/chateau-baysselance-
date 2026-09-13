import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import AgeGate from "@/components/AgeGate";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chateaubaysselance.fr";

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
    <html lang={locale}>
      <body>
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
