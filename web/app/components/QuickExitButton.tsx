"use client";

/**
 * QuickExitButton — persistent on every page.
 *
 * On the web PWA this navigates immediately to BBC Weather (the default
 * safe exit URL). On the native app the equivalent component also clears
 * the app from recents and resets the nav stack.
 *
 * Positioned bottom-right, subtle but always findable.
 * Single tap — no confirmation dialog.
 */
export default function QuickExitButton() {
  const exitUrl = "https://www.bbc.co.uk/weather";

  function handleExit() {
    // Replace current history entry so the back button won't return here.
    window.location.replace(exitUrl);
  }

  return (
    <button
      onClick={handleExit}
      aria-label="Quick exit — leave this site immediately"
      title="Leave this site"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-plum/80 text-white shadow-lg backdrop-blur transition-colors hover:bg-plum focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
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
    </button>
  );
}
