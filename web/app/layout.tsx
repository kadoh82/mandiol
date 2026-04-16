import type { Metadata, Viewport } from "next";
import "./globals.css";
import QuickExitButton from "./components/QuickExitButton";

export const metadata: Metadata = {
  title: "Mandiol",
  description:
    "Clear, accessible information about your rights under English & Welsh law.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mandiol",
  },
};

export const viewport: Viewport = {
  themeColor: "#4a2637",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream font-body text-ink min-h-screen antialiased">
        <header className="bg-plum text-white">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
            <a
              href="/"
              className="font-heading text-2xl tracking-wide text-white no-underline"
            >
              Mandiol
            </a>
            <a
              href="/offences"
              className="text-sm font-medium text-cream-200 transition-colors hover:text-white"
            >
              Know your rights
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-5 py-8">{children}</main>

        <footer className="border-t border-border bg-cream-200 mt-16">
          <div className="mx-auto max-w-3xl px-5 py-6 text-sm text-ink-muted">
            <p>
              This is information, not legal advice. All content applies to
              England &amp; Wales.
            </p>
            <p className="mt-2">
              If you are in immediate danger, call{" "}
              <a href="tel:999" className="font-medium text-alert underline">
                999
              </a>
            </p>
          </div>
        </footer>

        <QuickExitButton />
      </body>
    </html>
  );
}
