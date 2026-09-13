"use client";

import { useEffect, useState } from "react";

type Labels = {
  title: string;
  question: string;
  yes: string;
  no: string;
  deniedTitle: string;
  deniedText: string;
  legalNotice: string;
};

const STORAGE_KEY = "age_verified";

export default function AgeGate({ labels }: { labels: Labels }) {
  const [status, setStatus] = useState<"checking" | "gate" | "denied" | "verified">(
    "checking"
  );

  useEffect(() => {
    // localStorage only exists client-side; deferring the check to an effect keeps
    // the server-rendered output (null) and the first client render in sync.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(stored === "true" ? "verified" : "gate");
  }, []);

  useEffect(() => {
    const isBlocking = status === "gate" || status === "denied";
    document.body.style.overflow = isBlocking ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  if (status === "checking" || status === "verified") {
    return null;
  }

  const handleConfirm = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setStatus("verified");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--green-deep)] px-6"
    >
      <div className="max-w-md w-full text-center">
        <div className="w-10 h-0.5 bg-[var(--gold)] mx-auto mb-6" />

        {status === "denied" ? (
          <>
            <h2 className="font-serif text-2xl text-white mb-4">{labels.deniedTitle}</h2>
            <p className="text-white/70">{labels.deniedText}</p>
          </>
        ) : (
          <>
            <h2 className="font-serif text-2xl text-white mb-4">{labels.title}</h2>
            <p className="text-white/70 mb-8 leading-relaxed">{labels.question}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConfirm}
                className="px-8 py-3 text-sm tracking-widest uppercase bg-[var(--gold)] text-[var(--green-deep)] hover:opacity-90 transition-opacity"
              >
                {labels.yes}
              </button>
              <button
                onClick={() => setStatus("denied")}
                className="px-8 py-3 text-sm tracking-widest uppercase border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-colors"
              >
                {labels.no}
              </button>
            </div>
            <p className="text-white/40 text-xs mt-8 leading-relaxed">
              {labels.legalNotice}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
