/**
 * Emergency contacts — hardcoded per CLAUDE.md "Emergency Contacts" section.
 *
 * ⚠️  DO NOT CHANGE any of the numbers below without a content review.
 *     Phone numbers for national helplines are safety-critical; a wrong
 *     digit can route a woman in danger to a dead line.
 *
 * These must remain accessible from within the app even when the main
 * content fails to load (CLAUDE.md §🆘).
 *
 * Numbers are stored as both the raw digits (for `tel:` links) and a
 * human-readable label (for display).
 */

export type EmergencyContact = {
  /** Stable id used in code and tests. */
  id: string;
  /** Display name. */
  name: string;
  /** E.164-ish digits used for `tel:` links (no spaces, no punctuation). */
  dial: string;
  /** Human-readable version shown in the UI. */
  display: string;
  /** Short description surfaced next to the number. */
  description: string;
  /** Is this service staffed 24/7? */
  is24_7: boolean;
  /** Is this a free-to-call number? */
  isFree: boolean;
};

export const EMERGENCY_CONTACTS = {
  police: {
    id: "police",
    name: "Police (emergency)",
    dial: "999",
    display: "999",
    description: "If you are in immediate danger, call 999.",
    is24_7: true,
    isFree: true,
  },
  nonEmergency: {
    id: "nonEmergency",
    name: "Police (non-emergency)",
    dial: "101",
    display: "101",
    description: "For non-urgent police matters.",
    is24_7: true,
    isFree: false,
  },
  nationalDAHelpline: {
    id: "nationalDAHelpline",
    name: "National Domestic Abuse Helpline",
    dial: "08082000247",
    display: "0808 2000 247",
    description: "Free, confidential, 24/7 — run by Refuge.",
    is24_7: true,
    isFree: true,
  },
  rapeCrisis: {
    id: "rapeCrisis",
    name: "Rape Crisis England & Wales",
    dial: "08088029999",
    display: "0808 802 9999",
    description: "Free, 24/7 support for anyone affected by sexual violence.",
    is24_7: true,
    isFree: true,
  },
  revengePornHelpline: {
    id: "revengePornHelpline",
    name: "Revenge Porn Helpline",
    dial: "03456000459",
    display: "0345 6000 459",
    description: "Support for intimate image abuse (NCII).",
    is24_7: false,
    isFree: false,
  },
  victimSupport: {
    id: "victimSupport",
    name: "Victim Support",
    dial: "08081689111",
    display: "0808 168 9111",
    description: "Free, confidential 24/7 support line.",
    is24_7: true,
    isFree: true,
  },
} as const satisfies Record<string, EmergencyContact>;

export type EmergencyContactKey = keyof typeof EMERGENCY_CONTACTS;

/** Ordered list for UI rendering (police first, then national lines). */
export const EMERGENCY_CONTACT_ORDER: readonly EmergencyContactKey[] = [
  "police",
  "nonEmergency",
  "nationalDAHelpline",
  "rapeCrisis",
  "victimSupport",
  "revengePornHelpline",
] as const;

/**
 * Quick Exit target URL. Single tap in the persistent floating button
 * navigates here immediately (SPEC.md §2.1 Quick Exit). User can
 * override this in Privacy Settings but the default is BBC Weather.
 */
export const QUICK_EXIT_URL = "https://www.bbc.co.uk/weather";
