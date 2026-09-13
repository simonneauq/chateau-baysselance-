import { getTranslations } from "next-intl/server";
import type { Wine } from "@/lib/wines";

export default async function WineSheet({
  wine,
  locale,
}: {
  wine: Wine;
  locale: string;
}) {
  const t = await getTranslations("vins");
  const numberFormat = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US");
  const ingredients = wine.ingredients?.[locale === "fr" ? "fr" : "en"];
  const allergens = wine.allergens?.[locale === "fr" ? "fr" : "en"];

  return (
    <>
      <h1
        className={`font-serif text-3xl md:text-4xl text-[var(--green-deep)] ${
          wine.label ? "mb-6" : "mb-2"
        }`}
      >
        {wine.label ?? t(`${wine.key}_title`)}
      </h1>
      {!wine.label && wine.vintage && (
        <p className="text-sm text-[var(--stone)] uppercase tracking-widest mb-6">
          {t("vintage_label")} {wine.vintage}
        </p>
      )}

      <p className="leading-relaxed text-[var(--charcoal)] mb-4">{t(`${wine.key}_text`)}</p>
      <p className="text-sm text-[var(--stone)] mb-12">
        {t("origin_label")} <span className="font-medium">{t(`${wine.key}_origin`)}</span>
      </p>

      <h2 className="font-serif text-xl text-[var(--green-deep)] mb-4">
        {t("technical_sheet")}
      </h2>

      {wine.nutrition ? (
        <div className="bg-[var(--fog)] p-6 md:p-8">
          <p className="text-xs uppercase tracking-widest text-[var(--stone)] mb-4">
            {t("nutrition_title")} — {t("per_100ml")}
          </p>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[var(--charcoal)] mb-8">
            <div className="flex justify-between col-span-2 border-b border-[var(--stone)]/20 pb-2">
              <dt>{t("energy")}</dt>
              <dd>
                {numberFormat.format(wine.nutrition.energyKj)} kJ /{" "}
                {numberFormat.format(wine.nutrition.energyKcal)} kcal
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("fat")}</dt>
              <dd>{numberFormat.format(wine.nutrition.fat)} g</dd>
            </div>
            <div className="flex justify-between text-[var(--stone)] pl-4">
              <dt>{t("saturates")}</dt>
              <dd>{numberFormat.format(wine.nutrition.saturates)} g</dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("carbohydrates")}</dt>
              <dd>{numberFormat.format(wine.nutrition.carbohydrates)} g</dd>
            </div>
            <div className="flex justify-between text-[var(--stone)] pl-4">
              <dt>{t("sugars")}</dt>
              <dd>{numberFormat.format(wine.nutrition.sugars)} g</dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("protein")}</dt>
              <dd>{numberFormat.format(wine.nutrition.protein)} g</dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("salt")}</dt>
              <dd>{numberFormat.format(wine.nutrition.salt)} g</dd>
            </div>
          </dl>

          {ingredients && (
            <div className="mb-4">
              <p className="text-xs uppercase tracking-widest text-[var(--stone)] mb-1">
                {t("ingredients_title")}
              </p>
              <p className="text-sm text-[var(--charcoal)]">{ingredients}</p>
            </div>
          )}

          {allergens && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--stone)] mb-1">
                {t("allergens_title")}
              </p>
              <p className="text-sm text-[var(--charcoal)]">{allergens}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-[var(--stone)] italic">{t("sheet_not_available")}</p>
      )}
    </>
  );
}
