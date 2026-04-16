import Link from "next/link";

export const metadata = { title: "Non-Recent Offences | Mandiol" };

export default function NonRecentPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl text-plum">Non-recent offences</h1>

      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <div className="rounded-2xl bg-sage-50 border border-sage-200 p-4">
          <p className="font-bold text-sage-600">
            There is no time limit for reporting sexual offences or domestic
            abuse to the police.
          </p>
        </div>

        <p>
          &quot;Non-recent&quot; (sometimes called &quot;historical&quot;) offences are crimes that
          happened months, years, or even decades ago. You can report at any
          time. Many people report years later — this is normal and your report
          will be taken seriously.
        </p>

        <section className="rounded-2xl border border-border bg-white p-5 space-y-3">
          <h2 className="font-heading text-lg text-plum">
            Key things to know
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>No time limit</strong> — sexual offences and serious
              violence can be reported and prosecuted at any time
            </li>
            <li>
              <strong>The law at the time applies</strong> — if what happened
              was a crime when it happened, it can still be prosecuted under
              the law as it was then
            </li>
            <li>
              <strong>Corroboration helps but isn&apos;t required</strong> — you
              don&apos;t need physical evidence to report. Your testimony is
              evidence.
            </li>
            <li>
              <strong>Operation Hydrant</strong> — a national police
              coordination hub for non-recent child sexual abuse investigations
            </li>
            <li>
              <strong>CICA claims</strong> — there is usually a 2-year time
              limit for compensation claims, but exceptions can be made for
              sexual violence and childhood abuse
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 space-y-3">
          <h2 className="font-heading text-lg text-plum">
            Why people report later
          </h2>
          <p>
            There are many valid reasons why someone might not report
            immediately. These are some of the most common:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Fear of not being believed</li>
            <li>Shame or self-blame (these feelings are normal but unfounded)</li>
            <li>The perpetrator was a family member or partner</li>
            <li>Not recognising what happened as a crime at the time</li>
            <li>Being a child when it happened</li>
            <li>Threats from the perpetrator</li>
            <li>Not knowing help was available</li>
          </ul>
          <p className="font-medium text-plum">
            Whatever the reason, your experience is valid and you deserve
            support.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 space-y-3">
          <h2 className="font-heading text-lg text-plum">
            Support for non-recent offences
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Rape Crisis:</strong>{" "}
              <a href="tel:08088029999" className="text-rose underline">
                0808 802 9999
              </a>{" "}
              (free, 24/7)
            </li>
            <li>
              <strong>NAPAC</strong> (National Association for People Abused in
              Childhood):{" "}
              <a href="tel:08088010331" className="text-rose underline">
                0808 801 0331
              </a>
            </li>
            <li>
              <strong>Victim Support:</strong>{" "}
              <a href="tel:08081689111" className="text-rose underline">
                0808 168 9111
              </a>{" "}
              (free, 24/7)
            </li>
          </ul>
        </section>
      </div>

      <div className="rounded-2xl border border-border bg-cream-200 p-4 text-xs text-ink-muted">
        <strong>Disclaimer:</strong> This is information, not legal advice. The
        law described applies to England &amp; Wales.
      </div>

      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-plum hover:bg-plum-50"
      >
        Back to home
      </Link>
    </div>
  );
}
