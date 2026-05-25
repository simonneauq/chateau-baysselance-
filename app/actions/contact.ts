"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Tous les champs sont obligatoires." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Adresse email invalide." };
  }

  // TODO: connecter un service d'envoi d'email (ex. Resend, Nodemailer)
  // Exemple avec Resend :
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "contact@chateau-baysselance.fr",
  //     to: "frederic@chateau-baysselance.fr",
  //     subject: `Message de ${name}`,
  //     text: `De : ${name} <${email}>\n\n${message}`,
  //   });

  console.log("[Contact]", { name, email, message });

  return { status: "success" };
}
