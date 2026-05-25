import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");

  const cards = [
    {
      img: "/photo_5.jpg",
      title: t("section1_title"),
      text: t("section1_text"),
      href: "vieilles-vignes",
    },
    {
      img: "/photo_13.jpg",
      title: t("section2_title"),
      text: t("section2_text"),
      href: "terroirs",
    },
    {
      img: "/photo_7.jpg",
      title: t("section3_title"),
      text: t("section3_text"),
      href: "philosophie",
    },
    {
      img: "/photo_20.jpg",
      title: t("section4_title"),
      text: t("section4_text"),
      href: "vins",
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <Image
          src="/photo_1.jpg"
          alt="Vignes du Château Baysselance au coucher du soleil"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="text-sm tracking-[0.3em] uppercase mb-3 font-light text-[var(--gold)]">
            {t("hero_subtitle")}
          </p>
          <h1 className="text-5xl md:text-7xl text-white font-serif mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mb-10">
            {t("hero_tagline")}
          </p>
          <a
            href="#sections"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--green-deep)] transition-all duration-300"
          >
            {t("discover")} ↓
          </a>
        </div>
      </section>

      {/* ── 4 cards ── */}
      <section
        id="sections"
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="group block overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6 bg-[var(--fog)]">
              <h2 className="font-serif text-xl mb-2 text-[var(--green-deep)]">
                {card.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--stone)]">{card.text}</p>
              <p className="mt-3 text-xs tracking-widest uppercase text-[var(--gold)] group-hover:opacity-70 transition-opacity">
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
          alt="Chevreuil dans les vignes"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>
    </>
  );
}
