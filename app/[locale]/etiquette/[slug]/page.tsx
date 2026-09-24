import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getWine, publishedWines } from "@/lib/wines";
import WineSheet from "@/components/WineSheet";
import { LegalLinks } from "@/components/Footer";

export function generateStaticParams() {
  return publishedWines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWine(slug);
  if (!wine || !wine.published) return {};

  return {
    title: wine.label ?? wine.key,
    // Page destinée exclusivement à un accès par QR code sur la bouteille,
    // pas à être indexée ni découverte via la navigation du site.
    robots: { index: false, follow: false },
  };
}

export default async function WineLabelPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const wine = getWine(slug);
  if (!wine || !wine.published) {
    notFound();
  }

  const tLegal = await getTranslations("legal");

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <p className="font-serif text-lg text-[var(--green-deep)] mb-8">
          Château Baysselance
        </p>
        <div className="w-8 h-0.5 bg-[var(--gold)] mb-6" />

        <WineSheet wine={wine} locale={locale} />
      </main>

      <footer
        style={{ backgroundColor: "var(--green-deep)", color: "rgba(255,255,255,0.7)" }}
        className="py-6 px-6 text-center text-xs space-y-3"
      >
        <p>AOC Graves · Landiras, Gironde</p>
        <LegalLinks locale={locale} />
        <p>{tLegal("health_warning")}</p>
      </footer>
    </div>
  );
}
