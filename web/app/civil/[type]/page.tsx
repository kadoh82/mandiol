import { notFound } from "next/navigation";
import Link from "next/link";
import { getContentPage } from "@/lib/markdown";

type Props = { params: Promise<{ type: string }> };

const validTypes: Record<string, { title: string; summary: string }> = {
  "non-molestation": {
    title: "Non-molestation order",
    summary: "A non-molestation order is a court order under Part IV of the Family Law Act 1996. It prohibits a named person from molesting (harassing, threatening, intimidating, or being violent toward) you or your children. Breach is a criminal offence carrying up to 5 years in prison.",
  },
  "occupation-order": {
    title: "Occupation order",
    summary: "An occupation order decides who can live in or enter the family home. It can exclude an abusive partner from the property, even if they own or rent it. Applications are made under the Family Law Act 1996.",
  },
  dvpo: {
    title: "Domestic Violence Protection Order (DVPO)",
    summary: "A DVPO is an emergency order that police can apply for on your behalf without you having to go to court yourself. It lasts up to 28 days and can ban the perpetrator from contacting you or returning to your home.",
  },
  "restraining-order": {
    title: "Restraining order",
    summary: "A restraining order can be made by a criminal court after a conviction — or even after an acquittal — to protect you from the defendant. Breach is a criminal offence. These are made under the Protection from Harassment Act 1997.",
  },
  cica: {
    title: "Criminal Injuries Compensation (CICA)",
    summary: "The Criminal Injuries Compensation Authority provides financial compensation to victims of violent crime in England and Wales. You can apply even if the offender was never caught or convicted. There is a 2-year time limit from the date of the incident (with exceptions).",
  },
  "image-removal": {
    title: "Image removal & injunctions",
    summary: "If intimate images of you are being shared online, you can seek an emergency court injunction to have them removed. You can also report to the Revenge Porn Helpline (0345 6000 459) who work directly with platforms to take images down.",
  },
};

export function generateStaticParams() {
  return Object.keys(validTypes).map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props) {
  const { type } = await params;
  const info = validTypes[type];
  return { title: info ? `${info.title} | Mandiol` : "Not Found" };
}

export default async function CivilTypePage({ params }: Props) {
  const { type } = await params;
  const info = validTypes[type];
  if (!info) notFound();

  const page = await getContentPage("civil", type);

  return (
    <div className="space-y-5">
      <nav className="text-xs text-ink-muted">
        <Link href="/civil" className="underline hover:text-plum">
          Civil protection
        </Link>
        <span className="mx-1.5">/</span>
        <span className="font-medium text-plum">{info.title}</span>
      </nav>

      <h1 className="font-heading text-2xl text-plum">{info.title}</h1>

      {page ? (
        <div
          className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-plum prose-p:text-ink-muted prose-a:text-rose"
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      ) : (
        <>
          <p className="text-sm leading-relaxed text-ink-muted">{info.summary}</p>
          <div className="rounded-2xl border-2 border-dashed border-border bg-white p-6 text-center">
            <p className="text-sm font-medium text-plum">
              Full content coming soon
            </p>
            <p className="mt-1 text-xs text-ink-muted">
              Detailed guidance for this route is being reviewed by legal
              advisors and will appear here in a future update.
            </p>
          </div>
        </>
      )}

      <Link
        href="/civil"
        className="inline-flex min-h-[44px] items-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-plum hover:bg-plum-50"
      >
        Back to civil protection
      </Link>
    </div>
  );
}
