import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Château Baysselance — domaine viticole en AOC Graves à Landiras, Gironde.",
  openGraph: {
    title: "Contact — Château Baysselance",
    images: [{ url: "/photo_10.jpg", width: 1200, height: 800 }],
  },
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end">
        <Image
          src="/photo_10.jpg"
          alt="Coucher de soleil sur les vignes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <h1 className="font-serif text-4xl md:text-5xl text-white">{t("title")}</h1>
          <p className="text-white/70 mt-2">{t("subtitle")}</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <div className="w-8 h-0.5 bg-[var(--gold)] mb-8" />
          <h2 className="font-serif text-2xl text-[var(--green-deep)] mb-6">
            Château Baysselance
          </h2>
          <div className="space-y-3 text-sm text-[var(--charcoal)]">
            <p>
              <span className="text-[var(--stone)] uppercase text-xs tracking-widest block mb-1">
                {t("appellation")}
              </span>
              AOC Graves
            </p>
            <p>
              <span className="text-[var(--stone)] uppercase text-xs tracking-widest block mb-1">
                {t("address_label")}
              </span>
              {t("address")}
            </p>
          </div>

          <div className="mt-12 relative h-64 overflow-hidden">
            <Image
              src="/photo_16.jpg"
              alt="Château Baysselance — Landiras"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Form — client component */}
        <ContactForm
          labels={{
            name: t("form_name"),
            email: t("form_email"),
            message: t("form_message"),
            send: t("form_send"),
            placeholderName: t("form_placeholder_name"),
            placeholderEmail: t("form_placeholder_email"),
            placeholderMessage: t("form_placeholder_message"),
          }}
        />
      </section>
    </div>
  );
}
