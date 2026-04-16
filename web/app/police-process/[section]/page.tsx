import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentPage } from "@/lib/markdown";

type Props = { params: Promise<{ section: string }> };

const validSections: Record<string, string> = {
  "reporting-options": "Reporting options",
  sarc: "Sexual Assault Referral Centre (SARC)",
  "your-statement": "Your statement",
  "the-suspect": "The suspect",
  court: "Going to court",
};

export function generateStaticParams() {
  return Object.keys(validSections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props) {
  const { section } = await params;
  const title = validSections[section] || "Police Process";
  return { title: `${title} | Mandiol` };
}

export default async function PoliceProcessSection({ params }: Props) {
  const { section } = await params;
  if (!validSections[section]) notFound();

  const page = await getContentPage("police-process", section);

  return (
    <div className="space-y-5">
      <nav className="text-xs text-ink-muted">
        <Link href="/police-process" className="underline hover:text-plum">
          Police process
        </Link>
        <span className="mx-1.5">/</span>
        <span className="font-medium text-plum">
          {validSections[section]}
        </span>
      </nav>

      <h1 className="font-heading text-2xl text-plum">
        {validSections[section]}
      </h1>

      {page ? (
        <div
          className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-plum prose-p:text-ink-muted prose-a:text-rose"
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-border bg-white p-8 text-center">
          <p className="text-sm font-medium text-plum">Coming soon</p>
          <p className="mt-1 text-xs text-ink-muted">
            This section is being written with input from legal advisors and
            will be available in a future update.
          </p>
        </div>
      )}

      <Link
        href="/police-process"
        className="inline-flex min-h-[44px] items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-plum hover:bg-plum-50"
      >
        Back to police process
      </Link>
    </div>
  );
}
