import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chateau-baysselance.fr";

const paths = [
  "",
  "/vieilles-vignes",
  "/terroirs",
  "/philosophie",
  "/vins",
  "/frederic",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
    }))
  );
}
