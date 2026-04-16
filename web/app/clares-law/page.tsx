import Link from "next/link";

export const metadata = { title: "Clare\u2019s Law & Sarah\u2019s Law | Mandiol" };

export default function ClaresLawPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl text-plum">
        Clare&apos;s Law &amp; Sarah&apos;s Law
      </h1>

      {/* Clare's Law */}
      <section className="rounded-2xl border border-border bg-white p-5 space-y-3">
        <h2 className="font-heading text-xl text-plum">
          Clare&apos;s Law — Domestic Violence Disclosure Scheme
        </h2>

        <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
          <p>
            Clare&apos;s Law is named after Clare Wood, who was murdered by her
            ex-partner in 2009. He had a long history of violence against women
            that Clare did not know about. The scheme gives you the right to ask
            the police about a partner&apos;s history of domestic abuse.
          </p>

          <div className="rounded-xl bg-plum-50 p-4">
            <h3 className="text-sm font-bold text-plum">Right to Ask</h3>
            <p className="mt-1">
              You can ask the police to check whether your current or
              ex-partner has a history of abusive behaviour. If records show a
              risk, the police will consider sharing that information with you
              to help keep you safe.
            </p>
          </div>

          <div className="rounded-xl bg-plum-50 p-4">
            <h3 className="text-sm font-bold text-plum">Right to Know</h3>
            <p className="mt-1">
              If police receive intelligence that your partner may pose a risk
              to you, they can proactively disclose information to you — even
              if you haven&apos;t asked. This might come from arrest records,
              intelligence reports, or concern from agencies.
            </p>
          </div>

          <div className="rounded-xl bg-sage-50 p-4">
            <h3 className="text-sm font-bold text-sage">How to apply</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>Contact your local police on 101</li>
              <li>Ask to make a &quot;Clare&apos;s Law disclosure request&quot;</li>
              <li>You&apos;ll meet with an officer who will take your details</li>
              <li>Police check records and make a decision within 35 days</li>
              <li>If disclosure is made, you&apos;ll be told in person and in confidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sarah's Law */}
      <section className="rounded-2xl border border-border bg-white p-5 space-y-3">
        <h2 className="font-heading text-xl text-plum">
          Sarah&apos;s Law — Child Sex Offender Disclosure Scheme
        </h2>

        <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
          <p>
            Sarah&apos;s Law is named after Sarah Payne, who was murdered by a
            convicted sex offender in 2000. It allows anyone to ask the police
            to check if someone who has contact with a child has a record of
            child sexual offences.
          </p>

          <div className="rounded-xl bg-plum-50 p-4">
            <h3 className="text-sm font-bold text-plum">Who can ask?</h3>
            <p className="mt-1">
              Any adult can ask — parents, carers, grandparents, or anyone
              concerned about the welfare of a specific child. You need to be
              asking about a specific person&apos;s access to a specific child.
            </p>
          </div>

          <div className="rounded-xl bg-sage-50 p-4">
            <h3 className="text-sm font-bold text-sage">How it works</h3>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>Contact your local police on 101</li>
              <li>Ask to make a &quot;child sex offender disclosure request&quot;</li>
              <li>Police will assess the risk and check records</li>
              <li>If a risk is identified, information is disclosed to help protect the child</li>
              <li>All disclosures are confidential — sharing them could be a criminal offence</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-border bg-cream-200 p-4 text-xs text-ink-muted">
        <strong>Disclaimer:</strong> This is information, not legal advice.
        Contact your local police on 101 to make a disclosure request.
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
