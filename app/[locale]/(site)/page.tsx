import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tAlt = await getTranslations("alt");

  const cards = [
    {
      img: "/photo_5.jpg",
      title: t("section1_title"),
      text: t("section1_text"),
      href: `/${locale}/vieilles-vignes`,
    },
    {
      img: "/photo_13.jpg",
      title: t("section2_title"),
      text: t("section2_text"),
      href: `/${locale}/terroirs`,
    },
    {
      img: "/photo_7.jpg",
      title: t("section3_title"),
      text: t("section3_text"),
      href: `/${locale}/philosophie`,
    },
    {
      img: "/photo_20.jpg",
      title: t("section4_title"),
      text: t("section4_text"),
      href: `/${locale}/vins`,
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[380px] max-h-[540px] flex items-end">
        <Image
          src="/photo_1.jpg"
          alt={tAlt("home_hero")}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light max-w-xl mb-6">
            {t("hero_tagline")}
          </p>
        </div>
      </section>

      {/* ── 4 cards ── */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="group block overflow-hidden">
            <div className="relative h-32 md:h-44 overflow-hidden">
              <Image
                src={card.img}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-4 bg-[var(--fog)]">
              <h2 className="font-serif text-base md:text-lg mb-1 text-[var(--green-deep)] leading-snug">
                {card.title}
              </h2>
              <p className="hidden md:block text-xs leading-relaxed text-[var(--stone)]">
                {card.text}
              </p>
              <p className="mt-2 text-xs tracking-widest uppercase text-[var(--gold-text)] group-hover:opacity-70 transition-opacity">
                {t("read_more")}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* ── Chevreuil divider ── */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/photo_22.jpg"
          alt={tAlt("deer")}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>
    </>
  );
}
