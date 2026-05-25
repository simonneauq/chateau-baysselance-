import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const base = `/${locale}`;

  return (
    <footer
      style={{ backgroundColor: "var(--green-deep)", color: "rgba(255,255,255,0.5)" }}
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
    </footer>
  );
}
