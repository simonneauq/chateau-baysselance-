/** Shared layout for the legal pages (mentions légales, confidentialité). */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-8">
      <article className="max-w-3xl mx-auto px-6 text-[var(--charcoal)] leading-relaxed">
        <h1 className="font-serif text-4xl text-[var(--green-deep)]">{title}</h1>
        <p className="mt-3 text-sm text-[var(--stone)]">{updated}</p>
        <div className="w-8 h-0.5 bg-[var(--gold)] my-8" />
        <div className="space-y-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[var(--green-deep)] [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-[var(--green-deep)] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:underline [&_a]:underline-offset-2 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-medium [&_th]:border-b [&_th]:border-[var(--stone)]/40 [&_th]:py-2 [&_th]:pr-4 [&_td]:align-top [&_td]:border-b [&_td]:border-[var(--stone)]/20 [&_td]:py-2 [&_td]:pr-4">
          {children}
        </div>
      </article>
    </div>
  );
}

/** Highlights information the site owner still has to fill in before going live. */
export function ToFill({ children }: { children: React.ReactNode }) {
  return <mark className="bg-[var(--gold-light)]/60 px-1">[{children}]</mark>;
}
