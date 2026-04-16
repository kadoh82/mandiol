import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: Promise<{ section: string }> };

const sections: Record<string, { title: string; content: React.ReactNode }> = {
  "digital-evidence": {
    title: "Digital evidence",
    content: (
      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">Screenshots</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Screenshot messages, posts, and profiles <strong>before</strong> blocking or deleting</li>
          <li>Include the date, time, and sender/account name in the screenshot</li>
          <li>On iPhone: press Side Button + Volume Up simultaneously</li>
          <li>On Android: press Power + Volume Down simultaneously</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">WhatsApp</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Open the chat &gt; tap the contact name &gt; Export Chat</li>
          <li>Choose &quot;Include Media&quot; to save photos and videos</li>
          <li>Save the export to a secure location (email to yourself or cloud)</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">Emails</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Forward threatening or abusive emails to a separate, secure email account</li>
          <li>Do not delete the originals</li>
          <li>Email headers contain metadata that can verify authenticity</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">Social media</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Screenshot posts, messages, and the account profile page</li>
          <li>Note the URL of any post or profile</li>
          <li>Report to the platform but <strong>do not delete your evidence first</strong></li>
          <li>Most platforms allow you to download your data — do this before any account changes</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">Voicemails</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Do not delete voicemails — they are admissible evidence</li>
          <li>Record the date, time, and caller number</li>
          <li>If possible, save or forward the voicemail to a secure location</li>
        </ul>
      </div>
    ),
  },
  "physical-evidence": {
    title: "Physical evidence",
    content: (
      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">After a sexual assault</h2>
        <ul className="list-inside list-disc space-y-1">
          <li><strong>If possible, do not wash, shower, or change clothes</strong> — forensic evidence can be collected from your body and clothing</li>
          <li>If you must change, put clothing in a paper bag (not plastic — plastic degrades DNA)</li>
          <li>A SARC (Sexual Assault Referral Centre) can collect evidence even days later</li>
          <li>You do not need to report to police to visit a SARC</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">Injuries</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Photograph injuries as soon as possible — include something for scale</li>
          <li>Photograph again over the following days as bruises develop</li>
          <li>Visit your GP or A&amp;E — medical records are strong evidence</li>
          <li>Ask your doctor to note the injuries in your medical records</li>
        </ul>

        <h2 className="font-heading text-lg text-plum">Other physical evidence</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Damaged property, torn clothing, broken objects</li>
          <li>Letters, notes, or cards from the perpetrator</li>
          <li>Receipts, bank statements showing financial control</li>
          <li>Witness details — names and contact information of anyone who saw or heard something</li>
        </ul>
      </div>
    ),
  },
  "forensic-windows": {
    title: "Forensic time windows",
    content: (
      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <p>
          Forensic evidence can often be collected longer than people think.
          These are general guidelines — a SARC can advise on your specific
          situation.
        </p>

        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-plum-50">
              <tr>
                <th className="px-3 py-2 font-medium text-plum">Evidence type</th>
                <th className="px-3 py-2 font-medium text-plum">Time window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-3 py-2">DNA (body swabs)</td><td className="px-3 py-2">Up to 7 days</td></tr>
              <tr><td className="px-3 py-2">DNA (clothing)</td><td className="px-3 py-2">Months or longer</td></tr>
              <tr><td className="px-3 py-2">DNA (bedding)</td><td className="px-3 py-2">Weeks (if unwashed)</td></tr>
              <tr><td className="px-3 py-2">Bruising visible</td><td className="px-3 py-2">1–14 days</td></tr>
              <tr><td className="px-3 py-2">Internal injuries</td><td className="px-3 py-2">Best within 72 hours</td></tr>
              <tr><td className="px-3 py-2">Toxicology (drink spiking)</td><td className="px-3 py-2">12–72 hours</td></tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-sage-200 bg-sage-50 p-4 text-xs text-sage-700">
          <strong>Even after these windows:</strong> Your testimony is evidence.
          You can report at any time regardless of whether physical evidence
          remains.
        </div>
      </div>
    ),
  },
  checklist: {
    title: "Evidence checklist",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-ink-muted">
          Use this checklist to track what evidence you have gathered. In the
          native app, this will be interactive and saved securely on your
          device.
        </p>

        <div className="rounded-2xl border-2 border-dashed border-border bg-white p-6 text-center space-y-3">
          <p className="text-sm font-medium text-plum">Interactive checklist coming soon</p>
          <p className="text-xs text-ink-muted">
            The native app will include an encrypted, interactive evidence
            checklist that saves your progress locally. This web preview shows
            the structure.
          </p>
        </div>

        <div className="space-y-2">
          {[
            "Screenshots of messages or posts",
            "WhatsApp/text message exports",
            "Photos of injuries (with dates)",
            "Medical records or GP visit notes",
            "Police reference number",
            "Diary entries with dates and details",
            "Witness names and contact details",
            "Financial records (bank statements, receipts)",
            "Clothing preserved in paper bags",
            "SARC forensic examination completed",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3"
            >
              <div className="h-5 w-5 shrink-0 rounded border-2 border-border" />
              <span className="text-sm text-ink-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  diary: {
    title: "Diary",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-ink-muted leading-relaxed">
          Keeping a diary of events can be powerful evidence and can also help
          you process what is happening. In the native app, diary entries will
          be encrypted with your PIN so only you can read them.
        </p>

        <div className="rounded-2xl border-2 border-dashed border-border bg-white p-8 text-center space-y-3">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-plum-50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-plum">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm font-medium text-plum">Encrypted diary coming soon</p>
          <p className="text-xs text-ink-muted">
            The native app will include an encrypted diary where you can record
            events, feelings, and details. Entries are encrypted with AES-256
            using your PIN as part of the key.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-4 space-y-2">
          <h3 className="text-sm font-bold text-plum">Tips for keeping a diary</h3>
          <ul className="list-inside list-disc space-y-1 text-xs text-ink-muted">
            <li>Record the date, time, and what happened as soon as possible</li>
            <li>Include who was present and any witnesses</li>
            <li>Note how you felt — emotional impact is relevant</li>
            <li>Record any injuries, threats, or controlling behaviour</li>
            <li>Keep it factual — write what happened, not interpretations</li>
            <li>Store it securely — use this app or a location your partner cannot access</li>
          </ul>
        </div>
      </div>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const s = sections[section];
  return { title: s ? `${s.title} | Mandiol` : "Not Found" };
}

export default async function EvidenceSection({ params }: Props) {
  const { section } = await params;
  const s = sections[section];
  if (!s) notFound();

  return (
    <div className="space-y-5">
      <nav className="text-xs text-ink-muted">
        <Link href="/evidence" className="underline hover:text-plum">
          Evidence
        </Link>
        <span className="mx-1.5">/</span>
        <span className="font-medium text-plum">{s.title}</span>
      </nav>

      <h1 className="font-heading text-2xl text-plum">{s.title}</h1>

      {s.content}

      <Link
        href="/evidence"
        className="inline-flex min-h-[44px] items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-plum hover:bg-plum-50"
      >
        Back to evidence
      </Link>
    </div>
  );
}
