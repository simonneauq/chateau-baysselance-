import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre Philosophie",
  description:
    "Travail au cheval, enherbement, décoctions de plantes, certification biologique en cours. Une viticulture respectueuse du vivant au Château Baysselance.",
  openGraph: {
    title: "Notre Philosophie — Château Baysselance",
    images: [{ url: "/photo_8.jpg", width: 1200, height: 800 }],
  },
};

export default function PhilosophiePage() {
  const t = useTranslations("philosophie");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src="/photo_8.jpg"
          alt="Cheval de trait au travail dans les vignes"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <h1 className="font-serif text-4xl md:text-6xl text-white">{t("title")}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <p className="font-serif italic text-xl text-[var(--green-deep)] leading-relaxed">
          {t("intro")}
        </p>
      </section>

      {/* Sol */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl text-[var(--green-deep)] mb-5">
            {t("sol_title")}
          </h2>
          <p className="leading-relaxed text-[var(--charcoal)]">{t("sol_text")}</p>
        </div>
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/photo_6.jpg"
            alt="Enherbement naturel entre les rangs de vignes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Cheval — full bleed */}
      <section className="relative h-80 md:h-[500px]">
        <Image
          src="/photo_9.jpg"
          alt="Deux chevaux de trait dans les vignes"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h2 className="font-serif text-3xl md:text-5xl text-white max-w-lg">
              {t("cheval_title")}
            </h2>
            <p className="text-white/80 mt-4 max-w-lg leading-relaxed">
              {t("cheval_text")}
            </p>
          </div>
        </div>
      </section>

      {/* Maladies + Bio */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-[var(--fog)] p-8">
          <div className="w-8 h-0.5 bg-[var(--green-mid)] mb-6" />
          <h2 className="font-serif text-2xl text-[var(--green-deep)] mb-4">
            {t("maladies_title")}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--charcoal)]">
            {t("maladies_text")}
          </p>
        </div>
        <div className="bg-[var(--green-deep)] p-8 text-white">
          <div className="w-8 h-0.5 bg-[var(--gold)] mb-6" />
          <h2 className="font-serif text-2xl text-[var(--gold-light)] mb-4">
            {t("bio_title")}
          </h2>
          <p className="text-sm leading-relaxed text-white/80">{t("bio_text")}</p>
        </div>
      </section>

      {/* Photo horses */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { src: "/photo_2.jpg", alt: "Cheval de trait labourant sous le rang au printemps" },
          { src: "/photo_4.jpg", alt: "Cheval de trait dans les vignes en été" },
          { src: "/photo_12.jpg", alt: "Portrait d'un cheval de trait en harnais dans les vignes" },
        ].map(({ src, alt }) => (
          <div key={src} className="relative h-72 overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
