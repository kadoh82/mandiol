import Link from "next/link";

export const metadata = { title: "Civil Protection | Mandiol" };

const routes = [
  {
    slug: "non-molestation",
    title: "Non-molestation order",
    description: "A court order to stop someone harassing, threatening or being violent toward you",
  },
  {
    slug: "occupation-order",
    title: "Occupation order",
    description: "A court order deciding who can live in or enter the family home",
  },
  {
    slug: "dvpo",
    title: "Domestic Violence Protection Order (DVPO)",
    description: "Emergency police-initiated protection lasting up to 28 days",
  },
  {
    slug: "restraining-order",
    title: "Restraining order",
    description: "A court order made after a criminal case to protect you from the offender",
  },
  {
    slug: "cica",
    title: "Criminal Injuries Compensation (CICA)",
    description: "Financial compensation for victims of violent crime",
  },
  {
    slug: "image-removal",
    title: "Image removal & injunctions",
    description: "Emergency court orders to remove intimate images from the internet",
  },
];

export default function CivilPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-heading text-2xl text-plum">Civil protection</h1>
        <p className="mt-2 text-sm text-ink-muted">
          You don't have to go through the criminal justice system to get
          protection. Civil orders and compensation routes are available even if
          you choose not to report to the police.
        </p>
      </div>

      <div className="space-y-3">
        {routes.map((r) => (
          <Link
            key={r.slug}
            href={`/civil/${r.slug}`}
            className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-4 transition-colors hover:bg-plum-50"
          >
            <div>
              <h2 className="text-sm font-bold text-plum">{r.title}</h2>
              <p className="mt-0.5 text-xs text-ink-muted">{r.description}</p>
            </div>
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-ink-muted">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
