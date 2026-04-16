import type { Metadata, Viewport } from "next";
import "./globals.css";
import QuickExitButton from "./components/QuickExitButton";
import EmergencyBar from "./components/EmergencyBar";
import BottomNav from "./components/BottomNav";

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
        {/* Desktop: center the app in an app-like preview frame */}
        <div className="mx-auto min-h-screen w-full max-w-md bg-cream shadow-2xl md:my-4 md:min-h-0 md:rounded-2xl md:border md:border-border md:overflow-hidden">
          {/* Emergency contacts bar — always visible */}
          <EmergencyBar />

          {/* App header */}
          <header className="bg-plum text-white">
            <div className="flex items-center justify-between px-4 py-3">
              <a
                href="/"
                className="font-heading text-xl tracking-wide text-white no-underline"
              >
                Mandiol
              </a>
              <QuickExitButton />
            </div>
          </header>

          {/* Page content — padded for bottom nav */}
          <main className="px-4 py-5 pb-safe">{children}</main>

          {/* Footer disclaimer */}
          <footer className="border-t border-border bg-cream-200 px-4 py-4 pb-20 text-xs text-ink-muted">
            <p>
              This is information, not legal advice. All content applies to
              England &amp; Wales.
            </p>
          </footer>

          {/* Bottom tab navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
