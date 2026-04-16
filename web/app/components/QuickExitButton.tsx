"use client";

/**
 * QuickExitButton — always in the header bar.
 *
 * On the web PWA this navigates immediately to BBC Weather.
 * Single tap — no confirmation dialog.
 */
export default function QuickExitButton() {
  const exitUrl = "https://www.bbc.co.uk/weather";

  function handleExit() {
    window.location.replace(exitUrl);
  }

  return (
    <button
      onClick={handleExit}
      aria-label="Quick exit — leave this site immediately"
      title="Leave this site"
      className="flex h-8 items-center gap-1.5 rounded-full bg-white/15 px-3 text-xs font-medium text-white transition-colors hover:bg-white/25"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      Exit
    </button>
  );
}
