# Mandiol — VAWG Support App

> **Mandiol** is a safety-first mobile/web application providing women with clear, plain-English guidance, support and empowerment around Violence Against Women and Girls (VAWG).

---

## 🌸 About Mandiol

Mandiol is designed to be a trusted companion for women who may be experiencing — or have experienced — sexual violence, domestic abuse, coercive control, or image-based abuse. The name *Mandiol* is intentionally inconspicuous — it does not identify itself as a domestic abuse or sexual violence app on the home screen.

**Core principles:**
- Safety first — always
- Plain English — no legal jargon
- Empowerment — not victimhood
- Privacy — double-lock access, quick exit, no cloud data by default

---

## 🔐 Security Features

- **Double-lock access** — PIN + biometric, or PIN + decoy screen
- **Inconspicuous home icon** — looks like a calendar or notes app
- **False front** — entering the wrong PIN shows a decoy (e.g. shopping list)
- **Quick Exit button** — instantly navigates to a weather app or news site
- **Incognito-first** — no browser history, no data stored externally by default

---

## 📱 Features

### Offences & Legal Guidance
- Rape (Sexual Offences Act 2003, s.1)
- Sexual Assault by Penetration (s.2)
- Sexual Assault (s.3)
- Sexual Harassment (Criminal Justice Act 2023)
- Voyeurism & Upskirting (Voyeurism (Offences) Act 2019)
- Controlling & Coercive Behaviour (Serious Crime Act 2015)
- Revenge Porn / Non-Consensual Intimate Images (Online Safety Act 2023)
- Intimate Deepfakes (Criminal Justice Bill 2024)

Each offence includes:
- Plain-English explanation
- Points to prove
- Signs you may be a victim
- What to do right now

### Am I a Victim? Questionnaire
- Separate questionnaires per offence type
- Scored results with tailored signposting
- Completely confidential — nothing stored

### Evidence Guidance
- Digital evidence (screenshots, WhatsApp export, CCTV timing)
- Physical evidence (SARC attendance, clothing, injuries)
- Forensic windows per offence type
- "What NOT to do" guidance

### Police Investigation Process
- Telling vs Reporting (information only, no arrest)
- Self-referral to SARC (no police involvement)
- Forensic medical examination at SARC
- Written statement vs ABE video interview
- SARC process and forensic window explained
- Intimate samples from suspects (within 72 hours)
- Arrest vs voluntary interview
- Disposals: bail (with/without conditions), RUI, remand
- Charging and CPS decision

### Court Process
- ABE video interview as evidence in chief
- Special measures (screen, video link, supporter)
- Cross-examination protections
- Victim Personal Statement
- UK conviction rates (current)
- Empowerment messaging: "If you don't report, they will do it again"

### Civil Routes
- Non-Molestation Orders
- Occupation Orders
- DVPOs (Domestic Violence Protection Orders)
- Restraining Orders
- Civil injunctions (online image abuse)
- CICA compensation claims

### Clare's Law & Disclosure Schemes
- Right to Ask (Clare's Law)
- Right to Know
- Sarah's Law (Child Sex Offender Disclosure Scheme)
- Domestic Violence Disclosure Scheme

### Non-Recent Offences
- Why it's never too late to report
- How police investigate historic cases
- Real case law examples of successful prosecutions
- Statute of limitations (there is none for serious sexual offences)

### Safety Tracker
- Live location sharing (similar to Life360)
- Safe walk/run mode with check-in timer
- Emergency contact alert
- "I've arrived safely" confirmation
- Works offline with SMS fallback

### Support Agencies
- National and regional, filterable by offence type
- ISVAs, SARCs, SARSAS, Rape Crisis, Women's Aid, Refuge
- LGBT+ specific services (Galop)
- Legal help (Rights of Women, Citizens Advice)
- Online image abuse (Revenge Porn Helpline, StopNCII)

### Empowerment Vlogs
- Curated YouTube content
- Tea & Consent video
- Survivor stories
- Legal explainers
- Empowerment content

---

## 🏗️ Tech Stack (Recommended)

| Layer | Technology |
|-------|-----------|
| Frontend | React Native (iOS + Android) OR React (PWA) |
| Styling | Tailwind CSS / NativeWind |
| Auth/Lock | Expo SecureStore + biometrics |
| Location | Expo Location + Background Tasks |
| Storage | AsyncStorage (local, encrypted) |
| Backend (optional) | Supabase or Firebase |
| Hosting | Vercel (web) / App Store + Play Store |

---

## 📁 Project Structure

```
mandiol/
├── README.md
├── CLAUDE.md                    ← AI assistant instructions
├── SPEC.md                      ← Full product specification
├── CONTENT.md                   ← All legal content & copy
├── docs/
│   ├── OFFENCES.md              ← Detailed offence breakdowns
│   ├── POLICE_PROCESS.md        ← Full investigation process
│   ├── CIVIL_ROUTES.md          ← Civil law options
│   ├── EVIDENCE_GUIDE.md        ← Evidence preservation
│   ├── CLARES_LAW.md            ← Disclosure schemes
│   ├── NON_RECENT.md            ← Historic offences & case law
│   └── SUPPORT_AGENCIES.md     ← Full directory of services
├── src/
│   ├── components/              ← Reusable UI components
│   ├── pages/                   ← App screens/pages
│   ├── hooks/                   ← Custom React hooks
│   ├── data/                    ← Static data (agencies, videos etc)
│   ├── assets/                  ← Icons, images
│   └── utils/                   ← Helper functions
└── public/                      ← Static assets (web)
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mandiol.git
cd mandiol

# Install dependencies (once React app is scaffolded)
npm install

# Run development server
npm run dev
```

---

## ⚠️ Content Disclaimer

All legal information in this app is for guidance only and reflects the law in England & Wales unless otherwise stated. It is not legal advice. Laws change — content should be reviewed periodically by a qualified solicitor. For Scotland and Northern Ireland, separate legal frameworks apply and are noted where relevant.

---

## 🤝 Contributing

This project is open to contributions from developers, legal professionals, ISVA practitioners, and VAWG specialists. Please read CONTRIBUTING.md before submitting a pull request.

---

## 📄 Licence

MIT Licence — see LICENSE file.

---

## 💜 Credits

Built with care for every woman who deserved to be believed.
