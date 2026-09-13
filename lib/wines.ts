export type WineNutrition = {
  energyKj: number;
  energyKcal: number;
  fat: number;
  saturates: number;
  carbohydrates: number;
  sugars: number;
  protein: number;
  salt: number;
};

export type Wine = {
  slug: string;
  /** Prefix used for this wine's keys in the "vins" messages namespace. */
  key: string;
  /** False hides the wine from the catalogue and its detail page (404s), until it's ready to announce. */
  published: boolean;
  /** Exact official label wording (as given for the nutrition declaration), shown verbatim on the technical sheet. */
  label: string | null;
  vintage: number | null;
  nutrition: WineNutrition | null;
  ingredients: { fr: string; en: string } | null;
  allergens: { fr: string; en: string } | null;
};

// Graves Blanc Sec 2025 et Rosé 2025 partagent la même déclaration nutritionnelle.
const graveSecAndRoseNutrition: WineNutrition = {
  energyKj: 324,
  energyKcal: 78,
  fat: 0,
  saturates: 0,
  carbohydrates: 0.2,
  sugars: 0.2,
  protein: 0,
  salt: 0,
};

const graveSecAndRoseIngredients = {
  fr: "Raisins, conservateur : sulfites.",
  en: "Grapes, preservative: sulphites.",
};

const graveSecAndRoseAllergens = {
  fr: "Contient des sulfites.",
  en: "Contains sulphites.",
};

export const wines: Wine[] = [
  {
    slug: "graves-sec",
    key: "graves_sec",
    published: true,
    label: "CHÂTEAU BAYSSELANCE — GRAVES BLANC 2025",
    vintage: 2025,
    nutrition: graveSecAndRoseNutrition,
    ingredients: graveSecAndRoseIngredients,
    allergens: graveSecAndRoseAllergens,
  },
  {
    slug: "graves-moelleux",
    key: "graves_moelleux",
    published: false,
    label: null,
    vintage: null,
    nutrition: null,
    ingredients: null,
    allergens: null,
  },
  {
    slug: "rose",
    key: "rose",
    published: true,
    label: "CHÂTEAU BAYSSELANCE - VIN DE FRANCE ROSÉ 2025",
    vintage: 2025,
    nutrition: graveSecAndRoseNutrition,
    ingredients: graveSecAndRoseIngredients,
    allergens: graveSecAndRoseAllergens,
  },
  {
    slug: "petnat",
    key: "petnat",
    published: false,
    label: null,
    vintage: null,
    nutrition: null,
    ingredients: null,
    allergens: null,
  },
  {
    slug: "appassimento",
    key: "appassimento",
    published: false,
    label: null,
    vintage: null,
    nutrition: null,
    ingredients: null,
    allergens: null,
  },
  {
    slug: "mute",
    key: "mute",
    published: false,
    label: null,
    vintage: null,
    nutrition: null,
    ingredients: null,
    allergens: null,
  },
];

export const publishedWines = wines.filter((wine) => wine.published);

export function getWine(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug);
}
