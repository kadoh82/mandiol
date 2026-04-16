import Link from "next/link";

export const metadata = { title: "Evidence | Mandiol" };

const sections = [
  {
    slug: "digital-evidence",
    title: "Digital evidence",
    description: "Screenshots, WhatsApp exports, social media, emails & voicemails",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "physical-evidence",
    title: "Physical evidence",
    description: "Clothing, injuries, objects & witness information",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "forensic-windows",
    title: "Forensic time windows",
    description: "How long forensic evidence can be collected after an assault",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "checklist",
    title: "Evidence checklist",
    description: "Interactive checklist to track what evidence you have",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "diary",
    title: "Diary",
    description: "Record events and feelings — encrypted on your device only",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function EvidencePage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-heading text-2xl text-plum">Evidence</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Preserving evidence early gives you more options later — whether you
          report to police now, later, or never. This section explains what
          counts as evidence and how to protect it.
        </p>
      </div>

      <div className="rounded-2xl border border-alert/20 bg-alert-50 p-4 text-xs text-alert-700">
        <strong>Important:</strong> Do not delete messages, photos, or any
        digital evidence — even if it is distressing. It may be crucial later.
      </div>

      <div className="space-y-3">
        {sections.map((s) => (
          <Link
            key={s.slug}
            href={`/evidence/${s.slug}`}
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 transition-colors hover:bg-plum-50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage">
              {s.icon}
            </span>
            <div>
              <h2 className="text-sm font-bold text-plum">{s.title}</h2>
              <p className="mt-0.5 text-xs text-ink-muted">{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
