import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getWine, publishedWines } from "@/lib/wines";
import WineSheet from "@/components/WineSheet";

export function generateStaticParams() {
  return publishedWines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const wine = getWine(slug);
  if (!wine || !wine.published) return {};

  const t = await getTranslations({ locale, namespace: "vins" });
  const title = t(`${wine.key}_title`);

  return {
    title,
    alternates: {
      languages: {
        fr: `/fr/vins/${slug}`,
        en: `/en/vins/${slug}`,
      },
    },
  };
}

export default async function WineDetailPage({
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

  const t = await getTranslations("vins");

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href={`/${locale}/vins`}
          className="text-xs tracking-widest uppercase text-[var(--gold)] hover:opacity-70 transition-opacity"
        >
          ← {t("back_to_wines")}
        </Link>

        <div className="w-8 h-0.5 bg-[var(--gold)] my-6" />

        <WineSheet wine={wine} locale={locale} />
      </div>
    </div>
  );
}
