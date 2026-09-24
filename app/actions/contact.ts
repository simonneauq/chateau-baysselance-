"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  errorCode?: "required" | "invalid_email" | "server";
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!name || !email || !message) {
    return { status: "error", errorCode: "required" };
  }

  if (!emailRegex.test(email)) {
    return { status: "error", errorCode: "invalid_email" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // The recipient lives only in the environment (never in the code) so the
  // address is not exposed to spam harvesters if the repository is published.
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn(
      "[Contact] RESEND_API_KEY non configurée — message journalisé uniquement."
    );
    console.log("[Contact]", { name, email, message });
    return { status: "success" };
  }

  if (!to) {
    console.error("[Contact] CONTACT_TO_EMAIL non configurée — message non envoyé.");
    return { status: "error", errorCode: "server" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message de ${name} — Château Baysselance`,
      text: `De : ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[Contact] Échec d'envoi Resend:", error);
      return { status: "error", errorCode: "server" };
    }
  } catch (error) {
    console.error("[Contact] Échec d'envoi:", error);
    return { status: "error", errorCode: "server" };
  }

  return { status: "success" };
}
