import Link from "next/link";
import { getAllOffences } from "@/lib/offences";

export const metadata = {
  title: "Offences | Mandiol",
  description:
    "Information about sexual offences, domestic abuse, and image-based abuse under English & Welsh law.",
};

export default function OffencesListPage() {
  const offences = getAllOffences();

  return (
    <div>
      <h1 className="font-heading text-3xl text-plum md:text-4xl">
        Offences covered
      </h1>
      <p className="mt-3 text-ink-muted">
        Select an offence to read clear, plain-English information about the
        law, what police need to prove, and where to get support.
      </p>

      <ol className="mt-8 space-y-4">
        {offences.map((o) => (
          <li key={o.slug}>
            <Link
              href={`/offences/${o.slug}`}
              className="group flex items-start gap-4 rounded-card border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-50 font-heading text-sm text-plum">
                {o.order}
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-xl text-plum group-hover:text-rose transition-colors">
                  {o.title}
                </h2>
                <p className="mt-0.5 text-xs font-medium text-ink-muted">
                  {o.statute}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">
                  {o.excerpt}
                </p>
                <p className="mt-2 text-xs text-rose font-medium">
                  Maximum sentence: {o.maxSentence}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
