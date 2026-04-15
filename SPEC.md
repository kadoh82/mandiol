# Mandiol — Product Specification Blueprint

**Version:** 1.0  
**Status:** Pre-development  
**Owner:** [Your name / organisation]  
**Last updated:** 2026

---

## 1. Product Vision

### 1.1 Mission Statement
Mandiol empowers women affected by Violence Against Women and Girls (VAWG) with clear, accessible, legally accurate information — and the tools to stay safe, preserve evidence, understand their rights, and access support — all within a discreet, privacy-first application.

### 1.2 Target Users
- **Primary:** Women aged 16–60 who have experienced or are experiencing sexual violence, domestic abuse, coercive control, or image-based abuse
- **Secondary:** Friends, family, or professionals supporting a woman who may be a victim
- **Tertiary:** ISVAs, SARC staff, police, and voluntary sector workers who may recommend the app

### 1.3 Problem Statement
Women experiencing VAWG face multiple barriers:
- Complex legal language they cannot access
- Fear of police involvement before they are ready
- Uncertainty about whether what happened was a crime
- Lack of awareness of civil protection routes
- Evidence lost because they didn't know how to preserve it
- Isolation and shame preventing help-seeking
- Fear that their abuser will find the app on their phone

### 1.4 Mandiol solves this by:
- Providing plain-English legal guidance at any time of day or night
- Offering a confidential "Am I a victim?" questionnaire
- Explaining evidence preservation step-by-step
- Walking through the police process in accessible language
- Offering a "tell not report" pathway
- Being invisible — disguised as a different type of app

---

## 2. Security & Privacy Architecture

### 2.1 Access Control

#### Three-State Authentication Model
```
State 1: LOCKED
  - App icon shows: "Daily Planner" (or other inconspicuous name)
  - Splash shows: generic icon (calendar, notepad)
  - Action: User taps → PIN screen appears (no app name shown)

State 2: DECOY
  - Triggered by: wrong PIN entry
  - Shows: fake notes app / shopping list / recipe app
  - No indication that a real app exists beneath
  - Decoy content is editable so it looks personal

State 3: UNLOCKED
  - Triggered by: correct PIN (4–6 digits)
  - Optional: biometric (Face ID / fingerprint) as second factor
  - Full Mandiol app loads
```

#### Quick Exit
- Persistent floating button in bottom corner (low-profile design)
- Single tap → immediately navigates to external URL (BBC Weather by default, user-configurable)
- Clears app from recent apps list (iOS/Android background task)
- Keyboard shortcut option: volume up + volume down simultaneously
- Must execute in under 300ms

#### Privacy Settings
- [ ] Disable screenshot capability within app
- [ ] Disable app preview in recent apps (show blank/logo only)
- [ ] Option: clear all local data with single confirmed tap
- [ ] Option: disable notifications (to prevent lock screen leakage)
- [ ] Option: custom app icon (user selects from 5 inconspicuous designs)

### 2.2 Data Storage
- All user data stored locally, encrypted at rest (AES-256)
- No account required for basic use
- Optional cloud backup: user must explicitly enable, with clear warning
- Questionnaire responses: never persisted beyond session unless user saves
- Diary entries: encrypted with user's PIN as part of key derivation

---

## 3. Feature Specifications

### 3.1 Offences Module

#### Offences Covered
1. Rape — SOA 2003, s.1
2. Sexual Assault by Penetration — SOA 2003, s.2
3. Sexual Assault — SOA 2003, s.3
4. Sexual Harassment — Public (Criminal Justice Act 2023) + Workplace (Equality Act 2010)
5. Voyeurism — SOA 2003, s.67 + Voyeurism (Offences) Act 2019 (upskirting)
6. Controlling & Coercive Behaviour — Serious Crime Act 2015, s.76
7. Revenge Porn / NCII — Online Safety Act 2023
8. Intimate Deepfakes — Online Safety Act 2023 + Criminal Justice Bill 2024

#### Per-Offence Content Structure
Each offence page must include:
- **What is it?** (plain English, 3–4 sentences max)
- **Is this a crime?** (yes/no statement with confidence)
- **The law says...** (statute + section, one sentence)
- **To prove this, police need to show:** (numbered points to prove)
- **Signs this may be happening to you** (bullet list, second person)
- **What to do right now** (3–5 actionable steps)
- **Maximum sentence** (one line)
- **Common myths — the truth** (2–3 myth/truth pairs)
- **Expandable:** Full legal detail for those who want it
- **Button:** "Take the questionnaire for this offence"
- **Button:** "Find support for this"

### 3.2 Questionnaire Module

#### Structure
- Separate questionnaire available per offence category
- Also: general "Am I in an unhealthy relationship?" questionnaire
- 8–12 questions per questionnaire
- Response options: multiple choice (never / sometimes / often / always) OR yes/no/not sure
- No right or wrong answers framing
- Progress indicator (subtle — not a test-style progress bar)
- Can exit at any point without penalty

#### Results
Three outcome bands:
1. **Green** — responses don't suggest current concerns (with "if things change..." messaging)
2. **Amber** — some concerning patterns, gentle signposting
3. **Red** — responses suggest possible criminal offence/abuse

All outcomes include:
- Validation ("Your feelings are valid. It can be hard to know what's normal.")
- Relevant support agencies for that offence type
- Links to Evidence section and Police Process section
- Option to save result securely in app (encrypted)

### 3.3 Evidence Module

#### Sections
1. **Digital Evidence**
   - Screenshot guidance with step-by-step for iOS and Android
   - WhatsApp export (with media, without media)
   - Email forwarding and headers
   - Social media (screenshots + report + download)
   - Voicemails (do not delete)
   - GPS/location metadata in photos
   - Tracking apps / stalkerware (what NOT to do on your device)

2. **Physical Evidence**
   - SARC attendance (do not wash, do not change)
   - Clothing preservation (paper bag, not plastic)
   - Injury photography (scale, date, time)
   - Medical records (GP, A&E)

3. **Forensic Windows** (per offence)
   - Rape/Sexual Assault: up to 7 days (ideally within 72 hours)
   - Physical violence: injuries photograph within 48 hours for best evidence
   - Digital evidence: CCTV overwritten typically within 28–31 days
   - Intimate samples from suspect: within 72 hours of offence

4. **Diary/Record Tool**
   - In-app encrypted diary
   - Date-stamped entries
   - Exportable as PDF for solicitor/police
   - "What to include" prompts

5. **Evidence Checklist**
   - Interactive checklist user can tick off
   - Saves state locally

### 3.4 Police Process Module

#### Sections (tabbed or stepped)

**Tab 1: Reporting Options**
- 999 (emergency)
- 101 (non-emergency)
- Online reporting
- In person at station
- Via an ISVA or SARC
- **"Telling Not Reporting"** — explained fully:
  - You can give information to police to go on record
  - This builds "bad character" evidence on the offender
  - Police will NOT arrest without your knowledge and consent
  - This is completely valid and useful

**Tab 2: The SARC**
- What a SARC is
- Self-referral — no police needed
- What happens at a forensic medical examination
- Who is present (SARC nurse / doctor, your choice of supporter)
- What samples are taken (internal, external, clothing)
- Swabs kept — for how long (varies by SARC, typically 7 years)
- Forensic window explained per offence
- Intimate samples from suspect (if arrested within 72 hours)
- Finding your local SARC

**Tab 3: Your Statement**
- Written statement (MG11) — what it is
- ABE Video Interview (Achieving Best Evidence)
  - What it is (recorded interview in comfortable room)
  - The room setup (sofas, not interview rooms)
  - Who is present: detective interviewer (specialist trained), intermediary if needed, supporter
  - Who can attend with you: ISVA, appropriate adult, supporter of your choice
  - This recording is used as evidence-in-chief at court
  - You will still be cross-examined (via video link with special measures)
- Your rights during interview
  - Breaks at any time
  - Interpreter if needed
  - Same-sex officer right
  - Read back / review before signing

**Tab 4: The Suspect**
- Stranger rape definition (and why police response differs)
  - A stranger rape: perpetrator unknown to victim, or first meeting
  - Police may arrest immediately due to risk to public
  - Forensic urgency higher
- Arrest vs Voluntary Interview
  - Voluntary: suspect attends voluntarily, can bring solicitor, no obligation to attend
  - Arrest: police have reasonable grounds, suspect taken to station, held up to 24 hours (extendable)
  - Caution explained ("You do not have to say anything...")
- Disposals after interview:
  - **Bail with conditions** — conditions can include no contact, exclusion zones, surrender passport
  - **Bail without conditions** — released, must return on set date
  - **Released Under Investigation (RUI)** — no bail date, no conditions, investigation continues
  - **Remanded into custody** — kept in custody (high risk cases, prior convictions, flight risk)
- CPS charging decision
  - Two-stage test: sufficient evidence + public interest
  - Victims' Right to Review if no charge

**Tab 5: Court**
- Plea and trial process overview
- ABE video shown as evidence-in-chief (you don't re-tell in open court)
- Special measures:
  - Screen in courtroom
  - Video link from separate room
  - Supporter present
  - Public excluded
  - Pre-recorded cross-examination (Section 28 — available for sexual offences)
- Cross-examination restrictions (sexual history — only with leave of court)
- Victim Personal Statement
- Conviction rates (current UK stats — update annually):
  - Rape: approx. 68% conviction rate of cases that reach trial (CPS 2023/24)
  - Note: reporting and charge rates remain low — campaigning messaging
- **Empowerment section:** "If you don't report, they will do it again"
  - Statistics on repeat offending
  - Every report — even "telling not reporting" — makes a difference
  - You are believed. You matter.

### 3.5 Civil Routes Module

| Order | Legislation | What it does | How fast | Who applies |
|-------|------------|--------------|----------|-------------|
| Non-Molestation Order | Family Law Act 1996 | Stops abuse, harassment, contact | 24 hours (ex parte) | You (with solicitor) |
| Occupation Order | Family Law Act 1996 | Removes abuser from home | 24 hours (ex parte) | You (with solicitor) |
| DVPO | Crime & Security Act 2010 | Police-applied, 28 days breathing space | 48 hours | Police |
| Restraining Order | Protection from Harassment Act 1997 | After conviction or acquittal | Court | CPS / Prosecution |
| Civil Injunction | Harassment Act 1997 | For harassment (2+ incidents) | Days–weeks | You (via solicitor) |
| CICA Claim | CICA Scheme | Financial compensation | Months | You directly |
| Image Removal Injunction | Online Safety Act 2023 | Platform must remove | Hours–days | You (via solicitor) |

Each order page includes:
- What it is (plain English)
- Who can apply
- Cost / Legal Aid availability
- What happens if it's breached
- How to apply (step-by-step)
- Template letter / application form link where available

### 3.6 Clare's Law & Disclosure Schemes

**Clare's Law (Domestic Violence Disclosure Scheme)**
- Right to Ask — you can ask police if a partner has a history of abuse
- Right to Know — police can proactively disclose if they believe you're at risk
- How to make a Clare's Law application
- What police can and cannot tell you
- History: Clare Wood, 2009 — how this law came about
- Available across England, Wales, Scotland (since 2015), Northern Ireland (since 2022)

**Sarah's Law (Child Sex Offender Disclosure Scheme)**
- Right to ask if someone has access to children has convictions
- How it differs from Clare's Law
- Application process

**Domestic Violence Disclosure Scheme** — link to national portal

### 3.7 Non-Recent Offences

**Key Messages:**
- There is NO time limit for reporting rape or serious sexual offences in England & Wales
- It is never too late
- Historic reports are taken seriously — Operation Yewtree as an example of scale

**Challenges addressed:**
- "It was so long ago, they won't believe me"
- "There's no physical evidence now"
- "I didn't report at the time — that looks suspicious"
- "The suspect is elderly / well-respected / dead"

**Case Law Examples (real, verifiable):**
- R v Barker (2010) — Court of Appeal on delay in reporting
- Stuart Hall (2013) — convicted on historic offences, victims encouraged others
- Rolf Harris (2014) — historic sexual assault, multiple victims
- Operation Hydrant — national coordination of historic child sex abuse
- Jimmy Savile (post-mortem) — changed landscape of historic reporting

**Section content:**
- "Why people don't report at the time" — normalising delay
- How police investigate historic cases (phone records, diaries, witness memory)
- The power of corroboration in historic cases
- How to report a non-recent offence
- How an ISVA can support you through this

### 3.8 Safety Tracker

**Core Feature: Safe Walk/Run**
```
User activates → selects duration OR destination → names trusted contacts
  ↓
App tracks location every 30 seconds (background)
  ↓
Check-in prompts at user-set intervals (e.g. every 10 mins)
  ↓
If no check-in response within 2 mins → WARNING sent to trusted contacts
  ↓
If no response within 5 mins → EMERGENCY message sent with last known location
  ↓
User presses "I'm Safe" → tracking stops, contacts notified
```

**SOS Mode**
- Triple tap volume button → sends SOS SMS with GPS coordinates
- Works with no internet (SMS fallback)
- Message pre-composed by user

**Features:**
- Set trusted contacts (name + phone number, stored locally)
- Customise check-in interval
- Customise SOS message
- Live location sharing link (opt-in, time-limited)
- Journey history (local, encrypted, deletable)

### 3.9 Support Agencies Directory

**Data structure (agencies.json):**
```json
{
  "id": "rape-crisis-ew",
  "name": "Rape Crisis England & Wales",
  "type": ["ISVA", "Sexual Violence", "National"],
  "phone": "0808 802 9999",
  "hours": "24/7",
  "website": "rapecrisis.org.uk",
  "chat": true,
  "regions": ["national"],
  "offences": ["rape", "sexual-assault", "historic"],
  "description": "Specialist support for women and girls who have experienced sexual violence at any time in their life."
}
```

**Filters:** Offence type / Region / Service type (ISVA / SARC / Legal / Domestic) / 24/7 only

### 3.10 Empowerment Vlogs

**Structure:**
- Curated YouTube embed gallery
- Categories: Consent, Legal Rights, Survivor Stories, Self-Care, Empowerment
- User can save favourites locally
- Submit a vlog suggestion form (moderated)

**Confirmed videos:**
- Tea & Consent — https://youtu.be/pZwvrxVavnQ
- Women's Aid — Coercive Control
- Rape Crisis — Reporting to Police
- ISVA role explanation
- Non-Molestation Orders
- Revenge Porn rights

---

## 4. Design System

### 4.1 Brand
- **Name:** Mandiol
- **Tagline:** "You are not alone. You have rights."
- **Tone:** Warm, clear, empowering — never clinical or frightening
- **Colour palette:**
  - Primary: Deep plum `#4a2637`
  - Accent: Rose `#c4687a`
  - Safe/positive: Sage `#6b8f71`
  - Alert: `#b83232`
  - Background: Warm cream `#fdf8f5`

### 4.2 Typography
- Headings: Cormorant Garamond (dignified, trustworthy)
- Body: DM Sans (clear, accessible)
- Minimum body size: 16px / 1rem
- Minimum contrast ratio: 4.5:1 (WCAG AA)

### 4.3 Accessibility
- WCAG 2.1 AA minimum
- VoiceOver / TalkBack support
- Large text mode support
- Reduced motion support
- All tap targets minimum 44x44px

---

## 5. Content Management

### 5.1 Legal Content Review
All legal content must be reviewed by a qualified solicitor with VAWG specialism before publication. Suggested reviewers:
- Rights of Women (rightsofwomen.org.uk)
- Imkaan
- Garden Court Chambers

### 5.2 Update Triggers
- New legislation (monitor: legislation.gov.uk, theyworkforyou.com)
- CPS conviction statistics (published annually)
- Support agency contact changes
- Significant new case law

---

## 6. Roadmap

### Phase 1 — MVP (months 1–3)
- [ ] Security layer (double lock, quick exit, decoy)
- [ ] Offences module (all 8 offences)
- [ ] Plain-English questionnaire
- [ ] Evidence guidance
- [ ] Police process basics
- [ ] Support agencies directory
- [ ] Emergency contacts (always accessible)

### Phase 2 — Enhanced (months 4–6)
- [ ] Safety tracker (basic check-in)
- [ ] ABE/court process detail
- [ ] Civil routes module
- [ ] Clare's Law section
- [ ] Video gallery
- [ ] Encrypted diary

### Phase 3 — Full Product (months 7–12)
- [ ] Live location sharing (Safety Tracker full)
- [ ] Non-recent offences module
- [ ] Empowerment vlogs curation
- [ ] ISVA/professional version (separate mode)
- [ ] Multilingual support (Polish, Urdu, Punjabi, Romanian priority)
- [ ] iOS + Android app store submission

---

## 7. Legal & Ethical Considerations

- Content is information, not legal advice (disclaimer on every legal page)
- Scope: England & Wales (Scotland and NI flagged where different)
- GDPR: no personal data processed without consent; privacy policy required
- Safeguarding: if user discloses a child is at risk, signpost to NSPCC/police
- Accessibility: must meet WCAG 2.1 AA
- Age: suitable for 16+, some content flagged as 18+
- App store: may require content warnings on submission

---

## 8. Success Metrics

- Number of active users (anonymised count only)
- Evidence module engagement (most-used sections)
- Questionnaire completion rate
- Support agency link clicks
- Quick exit usage (safety metric — high use = app being used safely)
- User-reported: did app help them take action? (optional in-app feedback)
