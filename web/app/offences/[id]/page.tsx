import { notFound } from "next/navigation";
import Link from "next/link";
import { getOffenceBySlug, getOffenceSlugs } from "@/lib/offences";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getOffenceSlugs().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const offence = await getOffenceBySlug(id);
  if (!offence) return { title: "Not found | Mandiol" };
  return {
    title: `${offence.title} | Mandiol`,
    description: offence.excerpt,
  };
}

export default async function OffenceDetailPage({ params }: Props) {
  const { id } = await params;
  const offence = await getOffenceBySlug(id);
  if (!offence) notFound();

  return (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-ink-muted">
        <Link href="/" className="hover:text-plum underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/offences" className="hover:text-plum underline">
          Offences
        </Link>
        <span className="mx-2">/</span>
        <span className="text-plum font-medium">{offence.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="font-heading text-3xl text-plum md:text-4xl">
          {offence.title}
        </h1>
        <p className="mt-2 text-sm font-medium text-ink-muted">
          {offence.statute}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {offence.isCrime && (
            <span className="inline-block rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-600">
              This is a crime
            </span>
          )}
          <span className="inline-block rounded-full bg-plum-50 px-3 py-1 text-xs font-medium text-plum">
            Max: {offence.maxSentence}
          </span>
        </div>
      </header>

      {/* Rendered markdown content */}
      <div
        className="offence-content prose prose-sm max-w-none
          prose-headings:font-heading prose-headings:text-plum
          prose-h2:mt-10 prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2
          prose-h3:mt-6 prose-h3:text-lg
          prose-p:text-ink-muted prose-p:leading-relaxed
          prose-li:text-ink-muted
          prose-strong:text-ink
          prose-a:text-rose prose-a:underline
          prose-table:text-sm
          prose-th:bg-plum-50 prose-th:text-plum prose-th:font-medium prose-th:px-3 prose-th:py-2
          prose-td:px-3 prose-td:py-2 prose-td:border-b prose-td:border-border
          prose-hr:border-border"
        dangerouslySetInnerHTML={{ __html: offence.contentHtml }}
      />

      {/* Action buttons */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/offences"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-medium text-plum transition-colors hover:bg-plum-50"
        >
          Back to all offences
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 rounded-card border border-border bg-cream-200 p-4 text-xs text-ink-muted">
        <strong>Disclaimer:</strong> This is information, not legal advice. The
        law described applies to England &amp; Wales. If you need legal advice,
        contact a solicitor or one of the support agencies listed above.
      </div>
    </article>
  );
}
