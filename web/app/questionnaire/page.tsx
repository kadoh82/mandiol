import Link from "next/link";
import { getAllOffences } from "@/lib/offences";

export const metadata = { title: "Questionnaires | Mandiol" };

export default function QuestionnairePage() {
  const offences = getAllOffences();

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-heading text-2xl text-plum">Am I affected?</h1>
        <p className="mt-2 text-sm text-ink-muted">
          These short, confidential questionnaires help you understand whether
          what you&apos;re experiencing might be a criminal offence. Your
          answers are never stored or sent anywhere.
        </p>
      </div>

      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-4 text-xs text-sage-700">
        <strong>Privacy:</strong> Answers stay on your device only. Nothing is
        saved unless you choose to save your result.
      </div>

      {/* General questionnaire */}
      <Link
        href="/questionnaire/general"
        className="block rounded-2xl border-2 border-rose bg-white p-4 transition-colors hover:bg-rose-50"
      >
        <h2 className="text-sm font-bold text-rose">
          Am I in an unhealthy relationship?
        </h2>
        <p className="mt-1 text-xs text-ink-muted">
          A general questionnaire covering controlling behaviour, coercion,
          and signs of abuse.
        </p>
      </Link>

      <h2 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
        By offence type
      </h2>

      <div className="space-y-2">
        {offences.map((o) => (
          <Link
            key={o.slug}
            href={`/questionnaire/${o.slug}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-white p-4 transition-colors hover:bg-plum-50"
          >
            <div>
              <h3 className="text-sm font-bold text-plum">{o.title}</h3>
              <p className="mt-0.5 text-[11px] text-ink-muted">{o.statute}</p>
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
