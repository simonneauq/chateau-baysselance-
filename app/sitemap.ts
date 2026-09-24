import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { publishedWines } from "@/lib/wines";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chateaubaysselance.fr";

const paths = [
  "",
  "/vieilles-vignes",
  "/terroirs",
  "/philosophie",
  "/vins",
  "/frederic",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  ...publishedWines.map((wine) => `/vins/${wine.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
    }))
  );
}
