"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

type Labels = {
  name: string;
  email: string;
  message: string;
  send: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
};

const initialState: ContactState = { status: "idle" };

export default function ContactForm({ labels }: { labels: Labels }) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col justify-center py-12">
        <div className="w-8 h-0.5 bg-[var(--gold)] mb-6" />
        <p className="font-serif text-xl text-[var(--green-deep)]">
          Message envoyé — merci !
        </p>
        <p className="mt-3 text-sm text-[var(--stone)]">
          Frédéric vous répondra dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-xs tracking-widest uppercase text-[var(--stone)] mb-2"
        >
          {labels.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={labels.placeholderName}
          required
          className="w-full border-b border-[var(--stone)] bg-transparent py-2 text-sm focus:outline-none focus:border-[var(--green-deep)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs tracking-widest uppercase text-[var(--stone)] mb-2"
        >
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={labels.placeholderEmail}
          required
          className="w-full border-b border-[var(--stone)] bg-transparent py-2 text-sm focus:outline-none focus:border-[var(--green-deep)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest uppercase text-[var(--stone)] mb-2"
        >
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={labels.placeholderMessage}
          rows={5}
          required
          className="w-full border-b border-[var(--stone)] bg-transparent py-2 text-sm focus:outline-none focus:border-[var(--green-deep)] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-8 py-3 text-sm tracking-widest uppercase bg-[var(--green-deep)] text-white hover:bg-[var(--green-mid)] transition-colors disabled:opacity-50"
      >
        {isPending ? "…" : labels.send}
      </button>
    </form>
  );
}
