import Link from "next/link";

export const metadata = { title: "More | Mandiol" };

const sections = [
  { heading: "Legal information", items: [
    { label: "Offences explained", href: "/offences", desc: "8 offences in plain English" },
    { label: "Police process", href: "/police-process", desc: "What happens when you report" },
    { label: "Civil protection", href: "/civil", desc: "Orders, injunctions & compensation" },
    { label: "Clare's Law & Sarah's Law", href: "/clares-law", desc: "Right to Ask, Right to Know" },
    { label: "Non-recent offences", href: "/non-recent", desc: "Historical offences & time limits" },
  ]},
  { heading: "Tools", items: [
    { label: "Am I affected?", href: "/questionnaire", desc: "Confidential questionnaires" },
    { label: "Evidence guidance", href: "/evidence", desc: "Preserve and protect evidence" },
  ]},
  { heading: "Support", items: [
    { label: "Find support", href: "/support", desc: "Helplines, agencies & services" },
    { label: "Empowerment videos", href: "/videos", desc: "Curated video resources" },
  ]},
  { heading: "App", items: [
    { label: "Settings", href: "/settings", desc: "PIN, icon, exit URL, clear data" },
    { label: "About & disclaimers", href: "/about", desc: "Legal notices and credits" },
  ]},
];

export default function MorePage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl text-plum">More</h1>

      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-muted">
            {s.heading}
          </h2>
          <div className="space-y-1">
            {s.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:bg-plum-50"
              >
                <div>
                  <p className="text-sm font-medium text-plum">{item.label}</p>
                  <p className="text-[11px] text-ink-muted">{item.desc}</p>
                </div>
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-ink-muted">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
