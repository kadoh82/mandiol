import Link from "next/link";
import { getAllOffences } from "@/lib/offences";

export default function HomePage() {
  const offences = getAllOffences();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center">
        <h1 className="font-heading text-4xl text-plum md:text-5xl">
          Know your rights
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
          Clear, plain-English information about sexual offences, domestic abuse,
          and your legal options under English &amp; Welsh law.
        </p>
      </section>

      {/* Offence cards */}
      <section>
        <h2 className="font-heading text-2xl text-plum">
          Offences covered
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {offences.map((o) => (
            <Link
              key={o.slug}
              href={`/offences/${o.slug}`}
              className="group block rounded-card border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-heading text-xl text-plum group-hover:text-rose transition-colors">
                {o.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-ink-muted">
                {o.statute}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted line-clamp-3">
                {o.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency contacts */}
      <section className="rounded-card border border-alert/20 bg-alert-50 p-6">
        <h2 className="font-heading text-xl text-alert">
          Need help now?
        </h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <strong>Emergency:</strong>{" "}
            <a href="tel:999" className="text-alert underline">
              999
            </a>
          </li>
          <li>
            <strong>National Domestic Abuse Helpline:</strong>{" "}
            <a href="tel:08082000247" className="text-alert underline">
              0808 2000 247
            </a>{" "}
            (free, 24/7)
          </li>
          <li>
            <strong>Rape Crisis:</strong>{" "}
            <a href="tel:08088029999" className="text-alert underline">
              0808 802 9999
            </a>{" "}
            (free, 24/7)
          </li>
          <li>
            <strong>Victim Support:</strong>{" "}
            <a href="tel:08081689111" className="text-alert underline">
              0808 168 9111
            </a>{" "}
            (free, 24/7)
          </li>
          <li>
            <strong>Revenge Porn Helpline:</strong>{" "}
            <a href="tel:03456000459" className="text-alert underline">
              0345 6000 459
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
