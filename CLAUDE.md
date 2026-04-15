# CLAUDE.md — Mandiol Project Instructions

This file is the single source of truth for AI coding agents (Claude Code, Copilot, etc.) working on this project. Read it fully before making any changes.

---

## What This App Is

**Mandiol** is a safety-critical native mobile application for women experiencing Violence Against Women and Girls (VAWG). It covers sexual offences, domestic abuse, coercive control, and image-based abuse under English & Welsh law.

**The users of this app may be in danger.** Every design and engineering decision must prioritise their safety, privacy, and dignity.

**The name "Mandiol" is intentionally meaningless** — it must never identify itself as a domestic abuse or sexual violence app on the home screen, in notifications, or in the app switcher.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native with Expo SDK 52+ |
| Language | TypeScript (strict mode) |
| Routing | Expo Router (file-based, like Next.js) |
| Styling | NativeWind (Tailwind CSS for React Native) |
| State | Zustand for global state, React hooks for local |
| Local DB | expo-sqlite with Drizzle ORM |
| Encryption | expo-crypto + expo-secure-store (AES-256, PIN-derived key via PBKDF2) |
| Biometrics | expo-local-authentication |
| Location | expo-location (foreground + background tasks) |
| SMS | expo-sms + native module for background SOS |
| Content | react-native-markdown-display for legal .md files |
| Video | react-native-youtube-iframe |
| Testing | Jest + React Native Testing Library + Detox (E2E) |
| CI/CD | EAS Build + EAS Submit |
| OTA Updates | EAS Update (content changes without app store review) |

---

## Build & Run Commands

```bash
npx expo start                    # Start dev server
npx expo start --ios              # Open in iOS simulator
npx expo start --android          # Open in Android emulator
npx expo start --tunnel           # Tunnel for testing on physical device
eas build --platform ios --profile preview      # iOS preview build
eas build --platform android --profile preview  # Android preview build
eas update --branch preview       # Push OTA content update
npm test                          # Run unit tests
npm run lint                      # Lint check
```

---

## Project Structure

```
mandiol/
├── CLAUDE.md              ← This file (read by Claude Code at session start)
├── SPEC.md                ← Full product specification (feature reference)
├── app.json               ← Expo configuration
├── tailwind.config.js     ← NativeWind with Mandiol design tokens
├── app/                   ← Expo Router file-based routes
│   ├── _layout.tsx        ← Root layout (AuthGate wrapper + QuickExit)
│   ├── index.tsx           ← Entry point → redirects to auth
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   ├── pin.tsx         ← PIN entry screen (no branding)
│   │   ├── decoy.tsx       ← Decoy app (interactive shopping list)
│   │   └── setup.tsx       ← First-time setup (create PIN, choose icon)
│   ├── (tabs)/
│   │   ├── _layout.tsx     ← Tab navigator
│   │   ├── index.tsx       ← Home dashboard
│   │   ├── offences.tsx    ← Offences list
│   │   ├── evidence.tsx    ← Evidence guidance
│   │   ├── support.tsx     ← Support agency directory
│   │   └── safety.tsx      ← Safety tracker
│   ├── offences/
│   │   └── [id].tsx        ← Individual offence detail (dynamic route)
│   ├── police/
│   │   └── [section].tsx   ← Police process sections
│   ├── civil/
│   │   └── [type].tsx      ← Civil routes (non-mol, occupation, etc.)
│   ├── questionnaire/
│   │   ├── [offenceId].tsx ← Per-offence questionnaire flow
│   │   └── result.tsx      ← Questionnaire result screen
│   ├── diary/
│   │   └── index.tsx       ← Encrypted diary
│   ├── videos/
│   │   └── index.tsx       ← Empowerment video gallery
│   └── settings/
│       └── index.tsx       ← Settings (PIN, icon, exit URL, clear data)
├── components/            ← Reusable UI components
│   ├── QuickExitButton.tsx     ← ALWAYS present on every screen
│   ├── EmergencyBar.tsx        ← Persistent emergency contacts
│   ├── AuthGate.tsx            ← Checks auth state, redirects if locked
│   ├── OffenceCard.tsx
│   ├── AgencyCard.tsx
│   ├── QuestionnaireFlow.tsx
│   ├── EvidenceChecklist.tsx
│   ├── MarkdownContent.tsx     ← Renders .md files with consistent styling
│   └── SafetyBanner.tsx
├── hooks/
│   ├── useAuth.ts              ← PIN validation, decoy detection, biometric
│   ├── useQuickExit.ts         ← Exit logic, browser redirect, cleanup
│   ├── useEncryptedStorage.ts  ← SQLite with AES-256 encryption
│   ├── useLocation.ts          ← Safety tracker GPS + check-in
│   └── useEmergency.ts         ← SOS SMS + trusted contacts
├── stores/
│   ├── authStore.ts            ← Zustand: auth state, lock state
│   ├── settingsStore.ts        ← Zustand: user preferences
│   └── trackerStore.ts         ← Zustand: safety tracker state
├── lib/
│   ├── encryption.ts           ← PBKDF2 key derivation, AES encrypt/decrypt
│   ├── safeExit.ts             ← Browser redirect, recent-apps clearing
│   ├── storage.ts              ← Secure store helpers
│   └── markdown.ts             ← Markdown loading and parsing utilities
├── content/               ← All legal content in markdown
│   ├── offences/
│   │   ├── rape.md
│   │   ├── sexual-assault-s2.md
│   │   ├── sexual-assault-s3.md
│   │   ├── sexual-harassment.md
│   │   ├── voyeurism.md
│   │   ├── coercive-control.md
│   │   ├── revenge-porn.md
│   │   └── deepfakes.md
│   ├── police-process/
│   │   ├── reporting-options.md
│   │   ├── sarc.md
│   │   ├── your-statement.md
│   │   ├── the-suspect.md
│   │   └── court.md
│   └── civil/
│       ├── non-molestation.md
│       ├── occupation-order.md
│       ├── clares-law.md
│       ├── sarahs-law.md
│       └── non-recent.md
├── data/                  ← Structured JSON data
│   ├── supportAgencies.json
│   ├── videos.json
│   ├── questionnaires.json     ← Question schemas per offence
│   └── checklist.json          ← Evidence checklist items
├── constants/
│   ├── theme.ts                ← Colour palette, fonts, spacing
│   └── emergency.ts            ← Hardcoded emergency contact numbers
└── assets/
    ├── icons/                  ← 5 disguise icon variants
    └── splash/                 ← Splash screen assets
```

### File Naming Conventions

- Components: PascalCase (`OffenceCard.tsx`)
- Hooks: camelCase with `use` prefix (`useQuickExit.ts`)
- Stores: camelCase with `Store` suffix (`authStore.ts`)
- Data files: camelCase (`supportAgencies.json`)
- Content files: kebab-case (`coercive-control.md`)
- Route files: follow Expo Router conventions (`[id].tsx` for dynamic)

---

## Design System

### Colours

```typescript
// constants/theme.ts
export const colors = {
  plum: '#4a2637',       // Primary — headers, nav, key UI
  rose: '#c4687a',       // Accent — buttons, links, highlights
  sage: '#6b8f71',       // Safe/positive — green results, success
  alert: '#b83232',      // Alert — red results, urgent actions
  cream: '#fdf8f5',      // Background — main app background
  dark: '#2d2d2d',       // Text — body copy
  grey: '#666666',       // Secondary text
  lightGrey: '#f5f0ed',  // Card backgrounds, dividers
  white: '#ffffff',
};
```

### tailwind.config.js tokens

```javascript
// These MUST be in tailwind.config.js for NativeWind
colors: {
  plum: '#4a2637',
  rose: '#c4687a',
  sage: '#6b8f71',
  alert: '#b83232',
  cream: '#fdf8f5',
  dark: '#2d2d2d',
}
```

### Typography

- **Headings:** Cormorant Garamond (dignified, trustworthy) — load via expo-font
- **Body:** DM Sans (clear, accessible) — load via expo-font
- **Minimum body size:** 16px (never smaller)
- **Minimum contrast ratio:** 4.5:1 (WCAG AA)

### Accessibility Requirements

- WCAG 2.1 AA minimum
- VoiceOver (iOS) and TalkBack (Android) support
- All tap targets minimum 44x44px
- Large text mode support (use rem/relative units)
- Reduced motion support (check `useReducedMotion`)
- Never auto-play audio or video

---

## Core Principles

### 1. Safety Over Features

- Never compromise the Quick Exit function for any reason
- The QuickExitButton component MUST appear on every screen — no exceptions
- Double-lock authentication must always work, even on slow devices
- Location tracking must fail gracefully — never silently drop SOS alerts
- If in doubt between UX convenience and safety, always choose safety

### 2. Privacy by Default

- No analytics without explicit opt-in
- No external API calls that log user behaviour
- All sensitive data (questionnaire answers, diary entries) stored encrypted locally
- No screenshots in app switcher (use `FLAG_SECURE` on Android, privacy flag on iOS)
- No notification content previews on lock screen
- Clear all data option must be accessible and immediate
- No account required for any functionality

### 3. Plain English Always

- All UI copy must be readable by someone with a Grade 6 reading level
- Avoid legal jargon in user-facing screens — legal detail belongs in expandable sections
- Test every piece of copy with: **"Would a frightened woman at 2am understand this?"**

### 4. Trauma-Informed Design

- Never use "victim" in headers, buttons, or navigation — prefer "you may have experienced..."
- Never show a progress bar on questionnaires that makes the user feel judged
- Always provide a way to exit a section without completing it
- Results should never feel like a verdict — they are a starting point
- Never use red for non-urgent UI elements
- Questionnaire outcomes use: Green (reassuring), Amber (gentle concern), Red (clear concern) — never "pass/fail"

### 5. Accuracy of Legal Content

- All legal content scoped to England & Wales unless explicitly flagged
- Always cite statute and section number (e.g. "Sexual Offences Act 2003, s.3")
- Flag when laws are recently changed or under review
- Never invent case law — use only verified real cases
- Every legal content page must include a disclaimer: "This is information, not legal advice"

---

## Three-State Authentication

This is the most critical architectural feature. Get it right.

```
State 1: LOCKED
  App icon shows: "Daily Planner" (or user-selected disguise)
  Splash shows: generic icon (calendar, notepad)
  Action: User taps → PIN screen appears (no app name visible)

State 2: DECOY
  Triggered by: wrong PIN entry
  Shows: fake shopping list / recipe app (interactive, editable)
  Decoy content persists between sessions (stored unencrypted, separate from Mandiol data)
  No indication that a real app exists beneath — ZERO visual hints

State 3: UNLOCKED
  Triggered by: correct PIN (4–6 digits)
  Optional: biometric (Face ID / fingerprint) as second factor
  Full Mandiol app loads
```

### Implementation Rules

- PIN stored as a salted PBKDF2 hash in expo-secure-store — never store the raw PIN
- Decoy PIN is a separate hash — app checks both on entry
- All Mandiol data encrypted with key derived from real PIN
- Biometric key stored in secure store during session only, wiped on app close
- No failed-attempt counter shown to user — wrong PIN always loads decoy silently
- Emergency gesture (5-tap on decoy logo) → triggers quick exit as escape hatch

---

## Quick Exit

Must execute in under 300ms. This is non-negotiable.

```
User taps QuickExitButton (or volume up+down combo)
  → Immediately open device browser to exit URL (default: BBC Weather)
  → Simultaneously: clear app from recent apps list
  → Reset navigation stack to PIN screen
  → All happens asynchronously — user sees browser within 300ms
```

### QuickExitButton Rules

- Present on EVERY screen inside the authenticated app
- Positioned: bottom-right corner, small, subtle but findable
- Single tap only — no confirmation dialog
- Works offline (opens browser regardless of internet)
- Exit URL configurable by user in settings (default: https://www.bbc.co.uk/weather)

---

## Emergency Contacts

These are hardcoded and must NEVER change without explicit review. They must always be accessible, even when other content fails to load.

```typescript
// constants/emergency.ts
export const EMERGENCY_CONTACTS = {
  police: '999',
  nonEmergency: '101',
  nationalDAHelpline: '08082000247',    // 24/7, free
  rapeCrisis: '08088029999',            // 24/7, free
  revengePornHelpline: '03456000459',
  victimSupport: '08081689111',         // 24/7
} as const;
```

The EmergencyBar component renders these as tappable call buttons and must be accessible from the Home screen at all times.

---

## Content Rules

### Legal Content

- All legal content lives in `content/` as markdown files — NEVER hardcode in components
- Components render content via the `MarkdownContent` component
- Each offence markdown file follows the structure in SPEC.md Section 3.1
- Content is bundled into the app binary at build time
- Content updates pushed via EAS Update (no app store review required)

### Data

- All structured data lives in `data/` as JSON — NEVER embed in components
- Support agencies: `data/supportAgencies.json` (filterable by offence, region, type)
- Videos: `data/videos.json` (categorised YouTube embed IDs)
- Questionnaires: `data/questionnaires.json` (questions, options, scoring per offence)

### Content Review Checklist

Before any legal content goes live:

- [ ] Statute cited correctly with section number
- [ ] Content applies to England & Wales (flag if Scotland/NI differs)
- [ ] Reviewed for plain-English readability
- [ ] Does not constitute legal advice (disclaimer present)
- [ ] Support agency details checked for current accuracy
- [ ] Case law examples are real and verifiable

---

## Component Rules

### Every component must:

- Be a TypeScript functional component with explicit prop types
- Use NativeWind for styling (Tailwind classes via `className`)
- Meet the 44x44px minimum tap target for interactive elements
- Support dark mode via the design token system (if implemented)
- Handle loading states gracefully (skeleton, not spinner where possible)
- Handle error states with a user-friendly message and retry option

### Never:

- Use `StyleSheet.create()` unless NativeWind genuinely cannot express the style
- Use inline styles for anything other than dynamic computed values
- Use `any` as a TypeScript type
- Import from relative paths more than 2 levels deep — use path aliases (`@/components/`, `@/hooks/`, etc.)
- Use `console.log` in production code — use a proper logging utility
- Store sensitive data in AsyncStorage — always use expo-secure-store or encrypted SQLite

---

## Storage Rules

| Data Type | Where to Store | Encrypted |
|-----------|---------------|-----------|
| PIN hash | expo-secure-store (device keychain) | Hardware-encrypted |
| Biometric session key | expo-secure-store | Hardware-encrypted |
| Decoy content (shopping list) | AsyncStorage | No (must look normal) |
| Diary entries | expo-sqlite | Yes (AES-256, PIN-derived key) |
| Checklist state | expo-sqlite | Yes |
| Questionnaire results (if saved) | expo-sqlite | Yes |
| Settings & preferences | expo-sqlite | Yes |
| Trusted contacts | expo-secure-store | Hardware-encrypted |
| Journey history | expo-sqlite | Yes (deletable) |

### Critical Rule

Questionnaire responses are NEVER persisted beyond the session unless the user explicitly taps "Save this result." Default: responses held in Zustand memory state only and discarded on navigation away.

---

## Testing Priorities

In order of criticality:

1. **Quick Exit** — must redirect within 300ms on all devices
2. **PIN/biometric auth** — must not lock user out, must not reveal real app on wrong PIN
3. **Decoy realism** — decoy must be interactive and show no trace of Mandiol
4. **Questionnaire paths** — all paths must lead to a result with support resources
5. **Evidence checklist** — all items render, state persists correctly
6. **Video embeds** — degrade gracefully (show tappable link if embed fails)
7. **Emergency contacts** — always render, always callable
8. **Location tracker SOS** — must send SMS even with poor signal
9. **Accessibility** — VoiceOver/TalkBack pass on all screens

---

## Never Do

- Never A/B test safety-critical features
- Never add tracking pixels, Facebook SDK, or advertising SDKs
- Never store questionnaire answers in any server or log
- Never auto-play audio or video without user interaction
- Never show notification previews that reveal the app's real purpose
- Never use "victim" or "survivor" as a label — let the user define themselves
- Never reproduce full song lyrics, poems, or copyrighted text
- Never add a feature that requires internet if it could leave a user stranded offline
- Never log failed PIN attempts externally
- Never reveal the existence of a second layer behind the decoy
- Never make an API call that could be traced to identify the user or the app's purpose
- Never use bright red for non-emergency UI (red = alert/emergency only)

---

## Offences Covered

Reference SPEC.md Section 3.1 for full detail. Content in `content/offences/`.

1. **Rape** — Sexual Offences Act 2003, s.1
2. **Sexual Assault by Penetration** — SOA 2003, s.2
3. **Sexual Assault** — SOA 2003, s.3
4. **Sexual Harassment** — Criminal Justice Act 2023 + Equality Act 2010
5. **Voyeurism** — SOA 2003, s.67 + Voyeurism (Offences) Act 2019
6. **Controlling & Coercive Behaviour** — Serious Crime Act 2015, s.76
7. **Revenge Porn / NCII** — Online Safety Act 2023
8. **Intimate Deepfakes** — Online Safety Act 2023 + Criminal Justice Bill 2024

---

## Content Update Schedule

Legal content should be reviewed:

- After any UK parliamentary session (new legislation)
- When ONS crime statistics are updated (annual)
- When any listed support agency changes phone number or ceases operation
- After any significant case law (Court of Appeal / Supreme Court decisions)

---

## A Note to Developers

The women who will use this app may be in the most frightening moments of their lives. The quality of your code, the speed of the exit button, the clarity of a single sentence — these things matter enormously. Please build with that in mind.
