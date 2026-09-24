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
    title: t("privacy_title"),
    alternates: {
      languages: { fr: "/fr/confidentialite", en: "/en/confidentialite" },
    },
  };
}

export default async function ConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const fr = locale === "fr";

  return (
    <LegalPage title={t("privacy_title")} updated={t("updated")}>
      {fr ? (
        <>
          <section>
            <h2>Qui est responsable de vos données ?</h2>
            <p>
              Frédéric Baysselance, exploitant agricole (Château Baysselance),{" "}
              <ToFill>À COMPLÉTER : adresse postale</ToFill>, 33720 Landiras. Contact pour toute
              question sur vos données : <ToFill>À COMPLÉTER : adresse email</ToFill>.
            </p>
            <p>
              Ce site ne comporte ni compte utilisateur, ni newsletter, ni outil de mesure
              d&apos;audience, ni publicité. Seuls les deux traitements ci-dessous existent.
            </p>
          </section>

          <section>
            <h2>1. Formulaire de contact</h2>
            <ul>
              <li>
                <strong>Données :</strong> nom, adresse email, contenu du message.
              </li>
              <li>
                <strong>Finalité :</strong> répondre à votre demande. Vos données ne sont utilisées
                à aucune autre fin (pas de prospection, pas de newsletter).
              </li>
              <li>
                <strong>Base légale :</strong> intérêt légitime à répondre aux personnes qui nous
                écrivent (article 6.1.f du RGPD).
              </li>
              <li>
                <strong>Durée de conservation :</strong> le temps de l&apos;échange, puis 3 ans
                maximum après le dernier contact, avant suppression.
              </li>
              <li>
                <strong>Destinataires :</strong> Frédéric Baysselance uniquement. Pour acheminer le
                message, interviennent techniquement : Vercel Inc. (hébergement du site), Resend
                (service d&apos;envoi d&apos;emails, États-Unis) et Yahoo (messagerie de réception).
                Aucun n&apos;utilise vos données pour son propre compte.
              </li>
              <li>
                <strong>Transfert hors Union européenne :</strong> oui, vers les États-Unis
                (Vercel, Resend, Yahoo). Ces transferts sont encadrés par le Data Privacy Framework
                UE–États-Unis et/ou les clauses contractuelles types de la Commission européenne{" "}
                <ToFill>À VÉRIFIER pour chaque prestataire</ToFill>.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Journaux techniques de l&apos;hébergeur</h2>
            <ul>
              <li>
                <strong>Données :</strong> adresse IP, date et heure, page demandée, type de
                navigateur, enregistrées automatiquement à chaque visite.
              </li>
              <li>
                <strong>Finalité :</strong> faire fonctionner le site et assurer sa sécurité
                (détection d&apos;abus, diagnostic d&apos;erreurs).
              </li>
              <li>
                <strong>Base légale :</strong> intérêt légitime (article 6.1.f du RGPD).
              </li>
              <li>
                <strong>Durée de conservation :</strong> durée fixée par Vercel selon
                l&apos;offre souscrite <ToFill>À VÉRIFIER : de quelques heures à 30 jours</ToFill>.
              </li>
              <li>
                <strong>Destinataires :</strong> Vercel Inc., hébergeur ; transfert vers les
                États-Unis encadré comme indiqué ci-dessus.
              </li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2>Cookies et traceurs</h2>
            <p>
              Ce site ne dépose <strong>aucun cookie publicitaire ni de mesure d&apos;audience</strong>
              , et ne charge aucun contenu depuis un service tiers : les polices de caractères
              sont hébergées sur le site lui-même. C&apos;est pourquoi aucun bandeau de
              consentement ne vous est présenté.
            </p>
            <p>Seul l&apos;élément suivant, strictement nécessaire, est enregistré dans votre navigateur :</p>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Émetteur</th>
                  <th>Finalité</th>
                  <th>Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>age_verified (stockage local)</td>
                  <td>Château Baysselance</td>
                  <td>
                    Mémoriser que vous avez déclaré être majeur, pour ne pas vous reposer la
                    question à chaque visite. Aucune donnée n&apos;est transmise.
                  </td>
                  <td>Jusqu&apos;à ce que vous vidiez les données de votre navigateur</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              d&apos;opposition, de limitation du traitement et de portabilité de vos données. Pour
              les exercer, écrivez à <ToFill>À COMPLÉTER : adresse email</ToFill> ou via le{" "}
              <Link href="/fr/contact">formulaire de contact</Link>. Une réponse vous sera apportée
              dans un délai d&apos;un mois.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
              réclamation à la CNIL : 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
              <a href="https://www.cnil.fr">www.cnil.fr</a>.
            </p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2>Who is responsible for your data?</h2>
            <p>
              Frédéric Baysselance, farmer (Château Baysselance),{" "}
              <ToFill>TO BE COMPLETED: postal address</ToFill>, 33720 Landiras, France. Contact
              for any question about your data: <ToFill>TO BE COMPLETED: email address</ToFill>.
            </p>
            <p>
              This website has no user accounts, no newsletter, no audience measurement and no
              advertising. Only the two processing operations below exist.
            </p>
          </section>

          <section>
            <h2>1. Contact form</h2>
            <ul>
              <li>
                <strong>Data:</strong> name, email address, message content.
              </li>
              <li>
                <strong>Purpose:</strong> replying to your request. Your data is used for nothing
                else (no marketing, no newsletter).
              </li>
              <li>
                <strong>Legal basis:</strong> legitimate interest in replying to people who write
                to us (GDPR article 6(1)(f)).
              </li>
              <li>
                <strong>Retention:</strong> for the duration of the exchange, then at most 3 years
                after the last contact, after which it is deleted.
              </li>
              <li>
                <strong>Recipients:</strong> Frédéric Baysselance only. The following providers
                technically carry the message: Vercel Inc. (website hosting), Resend (email
                delivery service, United States) and Yahoo (receiving mailbox). None of them uses
                your data for its own purposes.
              </li>
              <li>
                <strong>Transfers outside the EU:</strong> yes, to the United States (Vercel,
                Resend, Yahoo), covered by the EU–US Data Privacy Framework and/or the European
                Commission&apos;s standard contractual clauses{" "}
                <ToFill>TO BE CHECKED for each provider</ToFill>.
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Hosting provider logs</h2>
            <ul>
              <li>
                <strong>Data:</strong> IP address, date and time, requested page, browser type,
                recorded automatically on every visit.
              </li>
              <li>
                <strong>Purpose:</strong> operating the website and keeping it secure (abuse
                detection, error diagnosis).
              </li>
              <li>
                <strong>Legal basis:</strong> legitimate interest (GDPR article 6(1)(f)).
              </li>
              <li>
                <strong>Retention:</strong> as set by Vercel depending on the plan{" "}
                <ToFill>TO BE CHECKED: from a few hours to 30 days</ToFill>.
              </li>
              <li>
                <strong>Recipients:</strong> Vercel Inc., hosting provider; transfer to the United
                States covered as described above.
              </li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2>Cookies and trackers</h2>
            <p>
              This website sets <strong>no advertising or analytics cookies</strong> and loads no
              content from third-party services: fonts are hosted on the website itself. This is
              why no consent banner is shown.
            </p>
            <p>Only the following strictly necessary item is stored in your browser:</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Issuer</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>age_verified (local storage)</td>
                  <td>Château Baysselance</td>
                  <td>
                    Remembers that you stated you are of legal drinking age, so the question is not
                    asked on every visit. No data is sent anywhere.
                  </td>
                  <td>Until you clear your browser data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              You have the right to access, rectify and erase your data, to object to and restrict
              its processing, and to data portability. To exercise these rights, write to{" "}
              <ToFill>TO BE COMPLETED: email address</ToFill> or use the{" "}
              <Link href="/en/contact">contact form</Link>. We will reply within one month.
            </p>
            <p>
              If you believe your rights have not been respected, you may lodge a complaint with
              the French data protection authority (CNIL): 3 place de Fontenoy, TSA 80715, 75334
              Paris Cedex 07, France — <a href="https://www.cnil.fr">www.cnil.fr</a>.
            </p>
          </section>
        </>
      )}
    </LegalPage>
  );
}
