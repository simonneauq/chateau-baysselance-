import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localeDetection: false,
  // The locale always comes from the URL prefix, so the NEXT_LOCALE cookie would
  // never be read: disable it rather than set a cookie for nothing.
  localeCookie: false,
});
