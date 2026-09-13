import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terroirs",
  description:
    "Quatre parcelles, quatre sols : Bardejats, Les Claux, Artigues. Un socle calcaire commun qui donne fraîcheur et minéralité aux vins du Château Baysselance.",
  alternates: {
    languages: { fr: "/fr/terroirs", en: "/en/terroirs" },
  },
  openGraph: {
    title: "Terroirs — Château Baysselance",
    images: [{ url: "/photo_14.jpg", width: 1200, height: 800 }],
  },
};

export default async function TerroirsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terroirs");

  const parcelles = [
    {
      title: t("bardejats_title"),
      text: t("bardejats_text"),
      accent: "var(--gold)",
    },
    {
      title: t("claux_title"),
      text: t("claux_text"),
      accent: "var(--green-mid)",
    },
    {
      title: t("artigues_title"),
      text: t("artigues_text"),
      accent: "var(--earth)",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      {/* TODO: remplacer par une photo de coupe de sol ou de parcelle (juin) */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/photo_14.jpg"
          alt="Vallée viticole dans la brume matinale"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <h1 className="font-serif text-4xl md:text-6xl text-white">{t("title")}</h1>
          <p className="text-white/70 text-lg mt-2">{t("subtitle")}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <p className="font-serif italic text-xl text-[var(--green-deep)] leading-relaxed">
          {t("intro")}
        </p>
      </section>

      {/* Parcelles */}
      <section className="max-w-7xl mx-auto px-6 pb-14 grid md:grid-cols-3 gap-8">
        {parcelles.map((p) => (
          <div key={p.title} className="bg-[var(--fog)] p-8">
            <div
              className="w-8 h-0.5 mb-6"
              style={{ backgroundColor: p.accent }}
            />
            <h2 className="font-serif text-2xl text-[var(--green-deep)] mb-4">
              {p.title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--charcoal)]">{p.text}</p>
          </div>
        ))}
      </section>

      {/* Calcaire section */}
      <section className="bg-[var(--green-deep)] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl mb-6 text-[var(--gold-light)]">
            {t("calcaire_title")}
          </h2>
          <p className="leading-relaxed text-white/80">{t("calcaire_text")}</p>
        </div>
      </section>

      {/* Photo strip */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/photo_13.jpg"
          alt="Vignes avec brume matinale en automne"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </section>
    </div>
  );
}
