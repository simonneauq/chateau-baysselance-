import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Château Baysselance — AOC Graves, Landiras",
    template: "%s — Château Baysselance",
  },
  description:
    "Domaine viticole en AOC Graves à Landiras. Vieilles vignes, travail au cheval, certification biologique en cours. Graves blanc sec, moelleux, pétillant naturel.",
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

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
