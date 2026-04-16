import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="font-heading text-3xl text-plum">Page not found</h1>
      <p className="mt-3 text-ink-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-plum px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-plum-600"
      >
        Go home
      </Link>
    </div>
  );
}
