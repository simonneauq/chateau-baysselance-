"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const base = `/${locale}`;
  const otherLocale = locale === "fr" ? "en" : "fr";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const links = [
    { href: `${base}/vieilles-vignes`, label: t("vignes") },
    { href: `${base}/terroirs`, label: t("terroirs") },
    { href: `${base}/philosophie`, label: t("philosophie") },
    { href: `${base}/vins`, label: t("vins") },
    { href: `${base}/frederic`, label: t("frederic") },
    { href: `${base}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{ backgroundColor: "var(--green-deep)" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={base}
          className="text-white font-serif text-lg tracking-wide hover:opacity-80 transition-opacity"
        >
          Château Baysselance
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm tracking-wide transition-colors ${
                isActive(l.href)
                  ? "text-[var(--gold)] active"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={otherPath}
            className="ml-2 text-xs border border-white/30 text-white/70 hover:text-white hover:border-white/60 px-3 py-1 rounded transition-all"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4">
          <Link
            href={otherPath}
            className="text-xs border border-white/30 text-white/70 px-2 py-1 rounded"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "var(--green-deep)" }} className="lg:hidden border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide ${
                  isActive(l.href) ? "text-[var(--gold)]" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
