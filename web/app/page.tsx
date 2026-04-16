import Link from "next/link";

const modules = [
  {
    title: "Know your rights",
    description: "8 offences explained in plain English",
    href: "/offences",
    color: "bg-plum",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Am I affected?",
    description: "Confidential questionnaires",
    href: "/questionnaire",
    color: "bg-rose",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Evidence",
    description: "Preserve and protect your evidence",
    href: "/evidence",
    color: "bg-sage",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Police process",
    description: "What happens if you report",
    href: "/police-process",
    color: "bg-plum-400",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Civil protection",
    description: "Orders, injunctions & CICA",
    href: "/civil",
    color: "bg-plum-300",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Find support",
    description: "Helplines, agencies & services",
    href: "/support",
    color: "bg-rose-500",
    textColor: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="text-center">
        <h1 className="font-heading text-3xl text-plum">
          You are not alone
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          Clear, plain-English information about your rights and where to get
          help — all private, all on your device.
        </p>
      </section>

      {/* Module cards grid */}
      <section className="grid grid-cols-2 gap-3">
        {modules.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className={`group flex flex-col items-start gap-2 rounded-2xl ${m.color} p-4 ${m.textColor} shadow-sm transition-transform active:scale-[0.97]`}
          >
            {m.icon}
            <div>
              <h2 className="text-sm font-bold leading-tight">{m.title}</h2>
              <p className="mt-0.5 text-[11px] leading-snug opacity-80">
                {m.description}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Quick links */}
      <section className="space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
          Also in Mandiol
        </h2>
        {[
          { label: "Clare's Law & Sarah's Law", href: "/clares-law" },
          { label: "Non-recent offences", href: "/non-recent" },
          { label: "Empowerment videos", href: "/videos" },
          { label: "Settings", href: "/settings" },
          { label: "About & disclaimers", href: "/about" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-plum transition-colors hover:bg-plum-50"
          >
            {link.label}
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ink-muted">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </section>
    </div>
  );
}
