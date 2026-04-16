export const metadata = { title: "About | Mandiol" };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl text-plum">About Mandiol</h1>

      <section className="rounded-2xl border border-border bg-white p-5 space-y-3 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">What is Mandiol?</h2>
        <p>
          Mandiol provides clear, plain-English information about sexual
          offences, domestic abuse, coercive control, and image-based abuse
          under English &amp; Welsh law.
        </p>
        <p>
          It is designed for women who have experienced or are experiencing
          Violence Against Women and Girls (VAWG), and for anyone supporting
          them.
        </p>
        <p>
          The app name &quot;Mandiol&quot; is intentionally meaningless — it is
          designed so that nothing on your home screen, in notifications, or in
          the app switcher reveals its true purpose.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 space-y-3 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">Disclaimer</h2>
        <p>
          <strong>This app provides information, not legal advice.</strong>
        </p>
        <p>
          All legal content applies to England &amp; Wales unless explicitly
          stated otherwise. The information is intended to be accurate at the
          time of publication but laws change. For advice specific to your
          situation, contact a solicitor or one of the support agencies listed
          in the app.
        </p>
        <p>
          Mandiol does not replace professional legal advice, counselling, or
          emergency services. If you are in immediate danger, call{" "}
          <a href="tel:999" className="font-medium text-alert underline">
            999
          </a>.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 space-y-3 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">Privacy</h2>
        <ul className="list-inside list-disc space-y-1">
          <li>No analytics or tracking</li>
          <li>No accounts required</li>
          <li>No data sent to any server</li>
          <li>All data stored locally on your device</li>
          <li>Sensitive data encrypted with AES-256</li>
          <li>Questionnaire answers never saved unless you choose to</li>
          <li>Clear all data with a single tap in Settings</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 space-y-3 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">Legal content scope</h2>
        <p>Mandiol covers the following offences under English &amp; Welsh law:</p>
        <ol className="list-inside list-decimal space-y-1">
          <li>Rape — Sexual Offences Act 2003, s.1</li>
          <li>Sexual Assault by Penetration — SOA 2003, s.2</li>
          <li>Sexual Assault — SOA 2003, s.3</li>
          <li>Sexual Harassment — Criminal Justice Act 2023 / Equality Act 2010</li>
          <li>Voyeurism &amp; Upskirting — SOA 2003, s.67 / Voyeurism (Offences) Act 2019</li>
          <li>Controlling &amp; Coercive Behaviour — Serious Crime Act 2015, s.76</li>
          <li>Revenge Porn / NCII — Online Safety Act 2023</li>
          <li>Intimate AI Deepfakes — Online Safety Act 2023 / Criminal Justice Bill 2024</li>
        </ol>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 space-y-3 text-sm text-ink-muted leading-relaxed">
        <h2 className="font-heading text-lg text-plum">
          Accessibility
        </h2>
        <p>
          Mandiol is designed to meet WCAG 2.1 AA standards. All tap targets
          are a minimum of 44&times;44px. Body text is never smaller than 16px.
          Colour contrast meets a minimum ratio of 4.5:1.
        </p>
      </section>
    </div>
  );
}
