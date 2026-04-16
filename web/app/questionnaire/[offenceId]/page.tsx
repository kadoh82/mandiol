import { notFound } from "next/navigation";
import Link from "next/link";
import { getOffenceSlugs } from "@/lib/offences";

type Props = { params: Promise<{ offenceId: string }> };

const titles: Record<string, string> = {
  general: "Am I in an unhealthy relationship?",
  rape: "Rape",
  "sexual-assault-s2": "Sexual Assault by Penetration",
  "sexual-assault-s3": "Sexual Assault",
  "sexual-harassment": "Sexual Harassment",
  voyeurism: "Voyeurism & Upskirting",
  "coercive-control": "Controlling & Coercive Behaviour",
  "revenge-porn": "Revenge Porn / NCII",
  deepfakes: "Intimate AI Deepfakes",
};

export function generateStaticParams() {
  const slugs = getOffenceSlugs();
  return [...slugs, "general"].map((offenceId) => ({ offenceId }));
}

export async function generateMetadata({ params }: Props) {
  const { offenceId } = await params;
  const title = titles[offenceId] || offenceId;
  return { title: `${title} Questionnaire | Mandiol` };
}

export default async function QuestionnaireFlow({ params }: Props) {
  const { offenceId } = await params;
  if (!titles[offenceId]) notFound();

  return (
    <div className="space-y-5">
      <nav className="text-xs text-ink-muted">
        <Link href="/questionnaire" className="underline hover:text-plum">
          Questionnaires
        </Link>
        <span className="mx-1.5">/</span>
        <span className="font-medium text-plum">{titles[offenceId]}</span>
      </nav>

      <h1 className="font-heading text-2xl text-plum">
        {titles[offenceId]}
      </h1>

      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-4 text-xs text-sage-700">
        <p>
          <strong>This is not a test.</strong> There are no right or wrong
          answers. This questionnaire helps you reflect on your experiences and
          guides you toward relevant information and support.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-dashed border-border bg-white p-8 text-center space-y-3">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-plum-50">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-plum">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-sm font-medium text-plum">Coming soon</p>
        <p className="text-xs text-ink-muted">
          This questionnaire is being developed with input from specialist
          support workers and legal advisors. It will guide you through 8–12
          questions and provide tailored information and support resources.
        </p>
        <p className="text-xs text-ink-muted">
          Your answers will never be stored or sent anywhere unless you
          explicitly choose to save your result.
        </p>
      </div>

      <Link
        href="/questionnaire"
        className="inline-flex min-h-[44px] items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-plum hover:bg-plum-50"
      >
        Back to questionnaires
      </Link>
    </div>
  );
}
