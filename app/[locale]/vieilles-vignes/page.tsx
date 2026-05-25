import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vieilles Vignes",
  description:
    "Le patrimoine des vieilles vignes du Château Baysselance : sélection massale, enracinement profond, rendements naturellement maîtrisés. AOC Graves, Landiras.",
  openGraph: {
    title: "Vieilles Vignes — Château Baysselance",
    images: [{ url: "/photo_10.jpg", width: 1200, height: 800 }],
  },
};

export default function VieuillesVignesPage() {
  const t = useTranslations("vignes");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/photo_10.jpg"
          alt="Vignes au coucher du soleil en hiver"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <h1 className="font-serif text-4xl md:text-6xl text-white">{t("title")}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-serif italic text-xl md:text-2xl text-[var(--green-deep)] leading-relaxed mb-10">
          {t("intro")}
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-[var(--charcoal)]">
            <p className="leading-relaxed">{t("p1")}</p>
            <p className="leading-relaxed">{t("p2")}</p>
          </div>
          <div className="space-y-4">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/photo_3.jpg"
                alt="Givre sur les sarments de vigne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/photo_6.jpg"
                alt="Fleurs entre les rangs de vieilles vignes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second image strip */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src="/photo_19.jpg"
          alt="Grappes de raisins noirs sur vieille vigne"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
      </section>
    </div>
  );
}
