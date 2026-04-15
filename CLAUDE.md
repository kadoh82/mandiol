# CLAUDE.md — AI Assistant Instructions for Mandiol

This file tells AI coding assistants (Claude, Copilot, etc.) how to work on this project effectively and responsibly.

---

## 🎯 What This App Is

**Mandiol** is a safety-critical support application for women experiencing Violence Against Women and Girls (VAWG). It covers sexual offences, domestic abuse, coercive control, and image-based abuse.

**The users of this app may be in danger.** Every design and engineering decision must prioritise their safety, privacy, and dignity.

---

## 🧠 Core Principles for Development

### 1. Safety Over Features
- Never compromise the Quick Exit function for any reason
- Double-lock authentication must always work, even on slow devices
- Location tracking must fail gracefully — never silently drop SOS alerts
- If in doubt between UX convenience and safety, always choose safety

### 2. Privacy by Default
- No analytics without explicit opt-in
- No external API calls that log user behaviour
- All sensitive data (questionnaire answers, diary entries) stored encrypted locally
- No screenshots in app switcher (use privacy flag on iOS/Android)
- Clear all data option must be accessible and immediate

### 3. Plain English Always
- All UI copy must be readable by someone with a Grade 6 reading level
- Avoid legal jargon in user-facing screens — legal detail belongs in expandable sections
- Test copy with: "Would a frightened woman at 2am understand this?"

### 4. Trauma-Informed Design
- Never use words like "victim" in headers or buttons — prefer "you may have experienced..."
- Never show a progress bar on questionnaires that makes the user feel judged
- Always provide a way to exit a section without completing it
- Results should never feel like a verdict — they are a starting point

### 5. Accuracy of Legal Content
- All legal content is scoped to England & Wales unless flagged otherwise
- Always cite the statute and section number (e.g. "Sexual Offences Act 2003, s.3")
- Flag when laws are recently changed or under review
- Never invent case law — use only verified real cases

---

## 📁 File Structure Conventions

```
src/
  components/     — Reusable UI: buttons, cards, modals, safety banner
  pages/          — Full screens: Home, Offences, Questionnaire, etc.
  hooks/          — useAuth, useLocation, useEmergency, useStorage
  data/           — JSON files: agencies.json, videos.json, offences.json
  utils/          — encryption.js, formatting.js, safeExit.js
docs/             — All legal content in markdown
```

- Component files: PascalCase (`OffenceCard.jsx`)
- Hook files: camelCase with `use` prefix (`useQuickExit.js`)
- Data files: camelCase (`supportAgencies.json`)
- Never hard-code legal content in JSX — it belongs in `docs/` or `data/`

---

## 🔐 Authentication Rules

The app has three authentication states:

1. **Locked** — shows inconspicuous splash (e.g. "Daily Planner")
2. **Decoy** — wrong PIN entered → shows fake notes/shopping list screen
3. **Unlocked** — real app, full functionality

```
CORRECT PIN → real app
WRONG PIN (1 attempt) → show decoy screen, no indication of real app
EMERGENCY GESTURE (e.g. 5-tap logo) → immediate safe exit to browser weather page
```

Never log failed PIN attempts externally. Never reveal the existence of a second layer.

---

## 📍 Location Tracking Rules

The safety tracker must:
- Request location permission only when user activates tracker (not on launch)
- Allow user to set: check-in interval, trusted contacts, SOS message text
- Send SOS via SMS (not just push notification — user may have no internet)
- Stop tracking immediately when user taps "I'm safe"
- Never share location with any third party or server unless user explicitly enables cloud backup

---

## 🧪 Testing Priorities

1. Quick Exit — must redirect within 200ms on all devices
2. PIN/biometric authentication — must not lock user out
3. Questionnaire — all paths lead to a result and support resources
4. Evidence checklist — all items render correctly
5. Video embeds — must degrade gracefully (show link if embed fails)
6. Location tracker — SOS must send even with poor signal

---

## 🚫 Never Do

- Never A/B test safety-critical features
- Never add tracking pixels, Facebook SDK, or advertising SDKs
- Never store questionnaire answers in server logs
- Never auto-play audio without user interaction
- Never show notification previews that reveal the app name on the lock screen
- Never use "victim" or "survivor" as a label — let the user define themselves
- Never reproduce full song lyrics, poems, or copyrighted text inline
- Never add a feature that requires internet if it could leave a user stranded offline

---

## ✅ Content Review Checklist

Before any legal content goes live:
- [ ] Statute cited correctly with section number
- [ ] Content applies to England & Wales (flag if Scotland/NI differs)
- [ ] Reviewed for plain-English readability
- [ ] Does not constitute legal advice (disclaimer present)
- [ ] Support agency details checked for current accuracy (phone numbers change)
- [ ] Case law examples are real and verifiable

---

## 🆘 Emergency Contacts (hardcoded, never change without review)

```javascript
const EMERGENCY_CONTACTS = {
  police: '999',
  nonEmergency: '101',
  nationalDAHelpline: '08082000247',   // 24/7 free
  rapeCrisis: '08088029999',           // 24/7 free
  revengePornHelpline: '03456000459',
  victimsupport: '08081689111',        // 24/7
};
```

These must always be accessible from within the app, even when the main content fails to load.

---

## 🗓️ Content Update Schedule

Legal content should be reviewed:
- After any UK parliamentary session (new legislation)
- When ONS crime statistics are updated (annual)
- When any listed support agency changes phone number or ceases operation
- After any significant case law (Court of Appeal / Supreme Court decisions)

---

## 💜 A Note to Developers

The women who will use this app may be in the most frightening moments of their lives. The quality of your code, the speed of the exit button, the clarity of a single sentence — these things matter enormously. Please build with that in mind.
