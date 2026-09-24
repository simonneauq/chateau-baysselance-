import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalPage, { ToFill } from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("mentions_title"),
    alternates: {
      languages: { fr: "/fr/mentions-legales", en: "/en/mentions-legales" },
    },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const fr = locale === "fr";

  return (
    <LegalPage title={t("mentions_title")} updated={t("updated")}>
      {fr ? (
        <>
          <section>
            <h2>Éditeur du site</h2>
            <p>
              Le site chateaubaysselance.fr est édité par <strong>Frédéric Baysselance</strong>,
              exploitant agricole en nom propre (entreprise individuelle), exerçant sous le nom
              commercial « Château Baysselance ».
            </p>
            <ul>
              <li>
                Adresse : <ToFill>À COMPLÉTER : adresse postale complète</ToFill>, 33720
                Landiras, France
              </li>
              <li>
                SIRET : <ToFill>À COMPLÉTER</ToFill>
              </li>
              <li>
                N° de TVA intracommunautaire : <ToFill>À COMPLÉTER, ou supprimer cette ligne si non assujetti</ToFill>
              </li>
              <li>
                Email : <ToFill>À COMPLÉTER : adresse email de contact</ToFill>
              </li>
              <li>
                Téléphone : <ToFill>À COMPLÉTER</ToFill>
              </li>
            </ul>
            <p>
              Vous pouvez aussi écrire via le{" "}
              <Link href="/fr/contact">formulaire de contact</Link>.
            </p>
          </section>

          <section>
            <h2>Directeur de la publication</h2>
            <p>Frédéric Baysselance.</p>
          </section>

          <section>
            <h2>Hébergeur</h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              Téléphone : <ToFill>À VÉRIFIER : téléphone de Vercel</ToFill>
              <br />
              Site : <a href="https://vercel.com">vercel.com</a>
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des textes et photographies de ce site est la propriété de Frédéric
              Baysselance <ToFill>À VÉRIFIER : nom du ou des photographes le cas échéant</ToFill>.
              Toute reproduction, même partielle, est interdite sans autorisation écrite
              préalable.
            </p>
          </section>

          <section>
            <h2>Vente d&apos;alcool</h2>
            <p>
              La vente de boissons alcooliques est interdite aux mineurs de moins de 18 ans (article
              L. 3342-1 du Code de la santé publique). {t("health_warning")}
            </p>
          </section>

          <section>
            <h2>Données personnelles</h2>
            <p>
              Le traitement de vos données est décrit dans la{" "}
              <Link href="/fr/confidentialite">politique de confidentialité</Link>.
            </p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2>Publisher</h2>
            <p>
              The website chateaubaysselance.fr is published by <strong>Frédéric Baysselance</strong>,
              farmer operating as a sole proprietorship (entreprise individuelle), under the trade
              name “Château Baysselance”.
            </p>
            <ul>
              <li>
                Address: <ToFill>TO BE COMPLETED: full postal address</ToFill>, 33720 Landiras,
                France
              </li>
              <li>
                SIRET: <ToFill>TO BE COMPLETED</ToFill>
              </li>
              <li>
                EU VAT number: <ToFill>TO BE COMPLETED, or remove this line if not VAT-registered</ToFill>
              </li>
              <li>
                Email: <ToFill>TO BE COMPLETED: contact email address</ToFill>
              </li>
              <li>
                Phone: <ToFill>TO BE COMPLETED</ToFill>
              </li>
            </ul>
            <p>
              You can also write to us using the <Link href="/en/contact">contact form</Link>.
            </p>
          </section>

          <section>
            <h2>Publication director</h2>
            <p>Frédéric Baysselance.</p>
          </section>

          <section>
            <h2>Hosting provider</h2>
            <p>
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, United States
              <br />
              Phone: <ToFill>TO BE CHECKED: Vercel phone number</ToFill>
              <br />
              Website: <a href="https://vercel.com">vercel.com</a>
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              All texts and photographs on this website are the property of Frédéric Baysselance{" "}
              <ToFill>TO BE CHECKED: photographer name(s), if any</ToFill>. Any reproduction, even
              partial, is prohibited without prior written permission.
            </p>
          </section>

          <section>
            <h2>Sale of alcohol</h2>
            <p>
              The sale of alcoholic beverages to persons under 18 is prohibited (French Public
              Health Code, article L. 3342-1). {t("health_warning")}
            </p>
          </section>

          <section>
            <h2>Personal data</h2>
            <p>
              How we process your data is described in our{" "}
              <Link href="/en/confidentialite">privacy policy</Link>.
            </p>
          </section>
        </>
      )}
    </LegalPage>
  );
}
