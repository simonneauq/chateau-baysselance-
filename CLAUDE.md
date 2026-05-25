# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Requires Node 20+ (activate with nvm)
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && nvm use 20

npm run dev      # Dev server → http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

The project root directory name contains capital letters/underscores — `create-next-app` cannot be run directly in it. If re-scaffolding is ever needed, init in `/tmp` and copy files across.

## Architecture

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next-intl v4 (FR/EN)

**Routing:** All pages live under `app/[locale]/`. The `proxy.ts` file (replaces deprecated `middleware.ts`) handles locale detection and redirection via next-intl. Default locale is `fr`; also supports `en`.

**i18n:** Translation strings are in `messages/fr.json` and `messages/en.json`. Keys map 1-to-1. New pages require entries in both files. Server components use `useTranslations()` from `next-intl`.

**Pages:**
- `/[locale]` — Homepage with hero + 4 section cards + chevreuil divider
- `/[locale]/vieilles-vignes` — Old vines heritage
- `/[locale]/terroirs` — 4 parcelles (Bardejats, Les Claux, Artigues) + limestone bedrock
- `/[locale]/philosophie` — Eco farming, horse work, organic certification
- `/[locale]/vins` — 6 wines (AOC Graves sec/moelleux, rosé, pétillant naturel, appassimento, muté)
- `/[locale]/frederic` — Frédéric Baysselance bio + quote
- `/[locale]/contact` — Address + contact form

**Components:** `Navbar.tsx` (client component — handles mobile menu + locale switcher) and `Footer.tsx` (server component).

**Photos:** 22 JPEG photos in `public/photo_1.jpg` → `photo_22.jpg`. Key assignments:
- `photo_1` — sunset vineyard spring (homepage hero)
- `photo_7` — horses team (philosophie card on homepage)
- `photo_8` — black horse face (philosophie page hero)
- `photo_10` — golden winter sunset (vieilles-vignes hero, contact hero)
- `photo_13` — autumn mist valley (terroirs card + strip)
- `photo_15` — Frédéric in cellar with press (frederic page hero)
- `photo_16` — mist + church tower (terroirs hero)
- `photo_17` — white grapes close-up (vins hero)
- `photo_22` — deer in vineyard (homepage divider)

**Design tokens** (CSS variables in `globals.css`):
- `--cream` #faf7f2 — page background
- `--gold` #c9a355 — primary accent
- `--green-deep` #1e3528 — navbar, dark sections
- `--green-mid` #2d5a3d — hover states
- `--fog` #f0ece4 — card backgrounds
- `--earth` #6b4c35 — secondary accent
- `--stone` #8a8070 — muted text

**Fonts:** Playfair Display (serif, headings) + Inter (sans-serif, body) loaded from Google Fonts in `globals.css`.

## Boutique en ligne

The shop is not yet built. Placeholder text exists in `messages/*.json` under `vins.boutique_soon`. When building it, create `app/[locale]/boutique/` and add nav entries in `Navbar.tsx`. Stripe is the recommended payment provider.
