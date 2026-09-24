import Link from "next/link";
import { getTranslations } from "next-intl/server";

/** Legal links shown on every page, including the QR-code label pages. */
export async function LegalLinks({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "legal" });
  const base = `/${locale}`;

  return (
    <nav aria-label={t("mentions_title")} className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      <Link href={`${base}/mentions-legales`} className="hover:text-white transition-colors">
        {t("mentions_title")}
      </Link>
      <Link href={`${base}/confidentialite`} className="hover:text-white transition-colors">
        {t("privacy_title")}
      </Link>
      <Link href={`${base}/confidentialite#cookies`} className="hover:text-white transition-colors">
        {t("cookies_link")}
      </Link>
    </nav>
  );
}

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const tLegal = await getTranslations({ locale, namespace: "legal" });
  const base = `/${locale}`;

  return (
    <footer
      style={{ backgroundColor: "var(--green-deep)", color: "rgba(255,255,255,0.7)" }}
      className="mt-24 py-12"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div>
          <p className="text-white font-serif text-base mb-1">Château Baysselance</p>
          <p>AOC Graves · Landiras, Gironde</p>
        </div>
        <div className="flex gap-6">
          <Link href={`${base}/vins`} className="hover:text-white transition-colors">
            {t("vins")}
          </Link>
          <Link href={`${base}/contact`} className="hover:text-white transition-colors">
            {t("contact")}
          </Link>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Château Baysselance</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-3 text-xs text-center">
        <LegalLinks locale={locale} />
        <p>{tLegal("health_warning")}</p>
      </div>
    </footer>
  );
}
