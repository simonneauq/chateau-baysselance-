import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Frédéric Baysselance",
  description:
    "Frédéric Baysselance, vigneron à Landiras. Un projet né en 2024, des vieilles vignes reprises avec soin, un travail au cheval et une démarche de certification biologique.",
  alternates: {
    languages: { fr: "/fr/frederic", en: "/en/frederic" },
  },
  openGraph: {
    title: "Frédéric Baysselance — Vigneron",
    images: [{ url: "/photo_15.jpg", width: 1200, height: 800 }],
  },
};

export default async function FredericPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("frederic");
  const tAlt = await getTranslations("alt");

  return (
    <div className="pt-20">
      {/* Hero portrait */}
      <section className="relative h-[65vh] min-h-[450px] flex items-end">
        <Image
          src="/photo_15.jpg"
          alt={tAlt("frederic_cellar")}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <h1 className="font-serif text-4xl md:text-6xl text-white">{t("title")}</h1>
          <p className="text-[var(--gold)] tracking-widest uppercase text-sm mt-2">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-7 text-[var(--charcoal)] leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        {/* Quote */}
        <blockquote className="my-12 border-l-2 border-[var(--gold)] pl-8">
          <p className="font-serif italic text-xl md:text-2xl text-[var(--green-deep)]">
            {t("quote")}
          </p>
        </blockquote>

        <div className="space-y-7 text-[var(--charcoal)] leading-relaxed">
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
        </div>
      </section>

      {/* Photos */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { src: "/photo_21.jpg", alt: tAlt("harvest") },
          { src: "/photo_20.jpg", alt: tAlt("press") },
          { src: "/photo_7.jpg", alt: tAlt("horses_winter") },
          { src: "/photo_22.jpg", alt: tAlt("deer_estate") },
        ].map(({ src, alt }) => (
          <div key={src} className="relative h-56 overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
