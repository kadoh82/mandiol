import Link from "next/link";

export const metadata = { title: "Police Process | Mandiol" };

const sections = [
  {
    slug: "reporting-options",
    title: "Reporting options",
    description: "Your choices: 999, 101, online, or third-party reporting",
  },
  {
    slug: "sarc",
    title: "Sexual Assault Referral Centre (SARC)",
    description: "What happens at a SARC — forensic examination and support",
  },
  {
    slug: "your-statement",
    title: "Your statement",
    description: "Giving a statement to police — what to expect and your rights",
  },
  {
    slug: "the-suspect",
    title: "The suspect",
    description: "Arrest, bail, charging decisions and the CPS",
  },
  {
    slug: "court",
    title: "Going to court",
    description: "The court process, special measures, and giving evidence",
  },
];

export default function PoliceProcessPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-heading text-2xl text-plum">Police process</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Step-by-step guide to what happens if you decide to report to the
          police. You can read each section in any order.
        </p>
      </div>

      <ol className="space-y-3">
        {sections.map((s, i) => (
          <li key={s.slug}>
            <Link
              href={`/police-process/${s.slug}`}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 transition-colors hover:bg-plum-50"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-plum text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="text-sm font-bold text-plum">{s.title}</h2>
                <p className="mt-0.5 text-xs text-ink-muted">{s.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
