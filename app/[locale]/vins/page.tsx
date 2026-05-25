import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Les Vins",
  description:
    "AOC Graves blanc sec et moelleux botrytisé, pétillant naturel IGP Atlantique, rosé de gastronomie, appassimento et vin muté. La gamme du Château Baysselance.",
  openGraph: {
    title: "Les Vins — Château Baysselance",
    images: [{ url: "/photo_17.jpg", width: 1200, height: 800 }],
  },
};

export default function VinsPage() {
  const t = useTranslations("vins");

  const wines = [
    {
      title: t("graves_sec_title"),
      text: t("graves_sec_text"),
      origin: t("graves_sec_origin"),
      color: "white",
      tag: "AOC Graves",
    },
    {
      title: t("graves_moelleux_title"),
      text: t("graves_moelleux_text"),
      origin: t("graves_moelleux_origin"),
      color: "gold",
      tag: "AOC Graves",
    },
    {
      title: t("rose_title"),
      text: t("rose_text"),
      origin: t("rose_origin"),
      color: "rose",
      tag: "Vin de France",
    },
    {
      title: t("petnat_title"),
      text: t("petnat_text"),
      origin: t("petnat_origin"),
      color: "green",
      tag: "IGP Atlantique",
    },
    {
      title: t("appassimento_title"),
      text: t("appassimento_text"),
      origin: t("appassimento_origin"),
      color: "amber",
      tag: "Vin de France",
    },
    {
      title: t("mute_title"),
      text: t("mute_text"),
      origin: t("mute_origin"),
      color: "brown",
      tag: "Vin de France",
    },
  ];

  const colorMap: Record<string, string> = {
    white: "var(--fog)",
    gold: "#f5edd6",
    rose: "#fce8e4",
    green: "#e4ede8",
    amber: "#faebd7",
    brown: "#ede3da",
  };

  const accentMap: Record<string, string> = {
    white: "var(--green-mid)",
    gold: "var(--gold)",
    rose: "#c0736a",
    green: "var(--green-mid)",
    amber: "#b07d3a",
    brown: "var(--earth)",
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end">
        <Image
          src="/photo_17.jpg"
          alt="Raisins blancs sémillon à maturité"
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

      {/* Wines grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wines.map((wine) => (
          <div
            key={wine.title}
            className="p-8 flex flex-col"
            style={{ backgroundColor: colorMap[wine.color] }}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: accentMap[wine.color] }}
              />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: accentMap[wine.color] }}
              >
                {wine.tag}
              </span>
            </div>
            <h2
              className="font-serif text-xl mb-3"
              style={{ color: "var(--green-deep)" }}
            >
              {wine.title}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--charcoal)] flex-1">
              {wine.text}
            </p>
            <p className="mt-5 text-xs text-[var(--stone)]">
              {t("origin_label")} <span className="font-medium">{wine.origin}</span>
            </p>
          </div>
        ))}
      </section>

      {/* Pressoir photo + boutique CTA */}
      <section className="relative overflow-hidden">
        <div className="relative h-64">
          <Image
            src="/photo_21.jpg"
            alt="Vendange manuelle au Château Baysselance"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="bg-[var(--green-deep)] py-12 text-center">
          <p className="font-serif italic text-[var(--gold-light)] text-xl">
            {t("boutique_soon")}
          </p>
        </div>
      </section>
    </div>
  );
}
