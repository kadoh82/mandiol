/**
 * Mandiol design tokens — see SPEC.md §4 Design System.
 *
 * These constants are the single source of truth for colours, typography,
 * and spacing used outside Tailwind classes (e.g. StatusBar, navigation
 * themes, native StyleSheet fallbacks). They MUST stay in sync with
 * tailwind.config.js.
 *
 * Do not add new colours here without a design review — the palette is
 * deliberately small so the app feels calm and consistent. Accessibility
 * minimum contrast ratio is 4.5:1 (WCAG AA).
 */

export const colors = {
  /** Primary brand — deep plum. */
  plum: "#4a2637",
  /** Accent — rose. */
  rose: "#c4687a",
  /** Safe / positive — sage (used for green questionnaire outcomes). */
  sage: "#6b8f71",
  /** Alert — high-contrast red for errors and red-band outcomes. */
  alert: "#b83232",
  /** App canvas — warm cream. */
  cream: "#fdf8f5",
  /** High-emphasis text on cream (keeps contrast ≥ 4.5:1). */
  ink: "#1f0f17",
  /** Muted body text. */
  inkMuted: "#5c4752",
  /** Subtle borders and dividers. */
  border: "#e4ccd4",
} as const;

export type ColorToken = keyof typeof colors;

/**
 * Outcome-band colours used by the questionnaire results screen.
 * See SPEC.md §3.2 Questionnaire Module → Results.
 */
export const outcomeBands = {
  green: colors.sage,
  amber: "#c47a32",
  red: colors.alert,
} as const;

export const typography = {
  headingFamily: "CormorantGaramond_600SemiBold",
  headingFamilyRegular: "CormorantGaramond_400Regular",
  bodyFamily: "DMSans_400Regular",
  bodyFamilyMedium: "DMSans_500Medium",
  bodyFamilyBold: "DMSans_700Bold",
  /** Minimum body size — never go below this (SPEC.md §4.2). */
  bodySizeMin: 16,
} as const;

export const spacing = {
  /** Minimum tap target — WCAG 2.1 AA (SPEC.md §4.3). */
  tapMin: 44,
  screenPadding: 20,
} as const;

export const radii = {
  card: 16,
  button: 12,
  pill: 999,
} as const;

/**
 * Quick Exit target time. Must redirect within 200ms per CLAUDE.md
 * Testing Priorities #1. This is a safety-critical budget — do not
 * raise it to accommodate animations.
 */
export const QUICK_EXIT_BUDGET_MS = 200;

/**
 * React Navigation theme derived from the Mandiol palette. Used by the
 * Expo Router ThemeProvider in app/_layout.tsx.
 */
export const navigationTheme = {
  dark: false,
  colors: {
    primary: colors.plum,
    background: colors.cream,
    card: colors.cream,
    text: colors.ink,
    border: colors.border,
    notification: colors.rose,
  },
  fonts: {
    regular: { fontFamily: typography.bodyFamily, fontWeight: "400" as const },
    medium: {
      fontFamily: typography.bodyFamilyMedium,
      fontWeight: "500" as const,
    },
    bold: {
      fontFamily: typography.bodyFamilyBold,
      fontWeight: "700" as const,
    },
    heavy: {
      fontFamily: typography.bodyFamilyBold,
      fontWeight: "700" as const,
    },
  },
} as const;
