# Anoop Mishra — Construction & Glassworks Portfolio

A multi-page React + TypeScript + React Router + Tailwind + Framer Motion
site, rebuilt from the original single-file HTML/CSS/JS portfolio into a
proper contractor site with a working local AI assistant.

## Run it

```bash
npm install
npm run dev
```
Open http://localhost:5174

## Build for production

```bash
npm run build
```
Output goes to `dist/`. This is a client-side-routed app (real routes like
`/about`, `/services`), so when you deploy it, the host needs a rewrite
rule that serves `index.html` for any path — otherwise refreshing `/about`
directly will 404. Already configured for you:
- **Vercel** — `vercel.json` (rewrites everything to `index.html`)
- **Netlify** — `public/_redirects`
- Other static hosts: add an equivalent "SPA fallback" rule.

## Pages

- **Home** (`/`) — hero, services teaser, flagship projects preview, CTA
- **About** (`/about`) — full bio, career timeline, skills, process
- **Services** (`/services`) — all six services in detail, with a subtle 3D tilt on each card
- **Projects** (`/projects`) — full project grid with category filtering
- **Gallery** (`/gallery`) — a dedicated visual showcase: a video banner (see below) plus every project's photos in a 3D-tilting grid, opens the same lightbox as Projects
- **FAQ** (`/faq`) — an accordion built from the exact same knowledge base that powers the AI assistant
- **Contact** (`/contact`) — direct contact cards + a working contact form
  (opens a pre-filled email — no backend/server needed)
- **404** (any unmatched route) — a styled not-found page instead of a blank screen

## 3D tilt effect

`src/components/TiltCard.tsx` wraps a card in a subtle, cursor-following 3D
tilt using Framer Motion's spring-based motion values — pure CSS 3D
transforms, no Three.js/WebGL needed. Used on Services and Gallery cards.
Wrap any card in `<TiltCard>...</TiltCard>` to add the effect elsewhere.

## Video

`src/components/VideoBanner.tsx` plays a real video the instant one exists
at `public/media/glass-showcase.mp4` (with `public/media/glass-showcase.jpg`
as the poster) — no code changes needed. Until then, it shows an animated,
rotating 3D glass-pane visual instead of a broken video element. See
`public/media/README.md` for where to source real, properly-licensed
footage (your own project footage, or free-commercial-use stock video from
Pexels/Coverr) — deliberately not bundled with random internet video due to
copyright.

## The "Ask about Anoop" AI assistant

A floating chat widget (bottom-right, every page) that answers common
questions using a local knowledge-base matcher — **no API key, no backend,
no cost, works the instant it's deployed anywhere.**

How it works: `src/lib/askAnoop.ts` scores your question against a curated
FAQ list in `src/data.ts` (`faqKnowledgeBase`) using keyword overlap, and
returns the best match above a confidence threshold — or a fallback
pointing to WhatsApp if nothing matches well. It's intentionally simple
and transparent about what it is (the widget header says "quick-answers
assistant," not "AI-powered chatbot") — it's a real, working feature, not
a decoration.

**To add more Q&A pairs:** edit `faqKnowledgeBase` in `src/data.ts` — each
entry needs a `question`, `answer`, and a few `keywords` a real user might
type.

**Want it to use a real LLM instead** (more flexible answers, understands
paraphrasing better)? Swap `findBestAnswer()` in `src/lib/askAnoop.ts` for
an API call to Claude/OpenAI — you'd need a backend proxy so the API key
isn't exposed in the browser (never call an LLM API directly from
client-side code with an embedded key).

## Adding your real project photos

Drop files into `public/projects/` using the exact filenames listed in
`public/projects/README.md`. Each project automatically shows the real
photo once it's there — no code changes needed. Until then, each project
shows a designed architectural-blueprint-style placeholder, never a broken
image icon.

The two flagship case studies (Central Academy, Park Inn by Radisson —
Tedhi Pulia) are pinned at the top of Home and Projects since they're
real, named work — everything else follows below.

**On using real estate/business photos found online:** I deliberately did
not pull photos of the actual Radisson or Central Academy buildings from
the web into this project. A stock photo of a building's exterior isn't
evidence of the glasswork done *inside* it, and using a licensed hotel
brand's photography in someone else's commercial portfolio risks implying
an affiliation that doesn't exist. Use Anoop's own project photos, or if
you want licensed stock photography, source it yourself from Unsplash/
Pexels (both offer free commercial-use licenses) and drop it into
`public/projects/`.

## Structure

```
src/
├── data.ts                — ALL content lives here: experience, skills,
│                             services, process steps, projects, contact,
│                             and the AI assistant's FAQ knowledge base
├── lib/
│   └── askAnoop.ts         — local FAQ-matching engine for the assistant
├── components/
│   ├── Layout.tsx           — navbar + footer + cursor + assistant, wraps every page
│   ├── Navbar.tsx            — route-aware nav with mobile menu
│   ├── Hero.tsx               — animated glass-pane hero (Home only)
│   ├── Timeline.tsx            — career timeline (also exports SectionHeading)
│   ├── Skills.tsx
│   ├── Process.tsx              — the 4-step "how we work" section
│   ├── ProjectVisual.tsx         — real photo if present, else a blueprint-style placeholder
│   ├── ProjectModal.tsx           — image gallery lightbox
│   ├── AskAnoop.tsx                — the floating AI assistant widget
│   ├── CustomCursor.tsx
│   └── iconMap.tsx                  — shared skill/service icon lookup
└── pages/
    ├── Home.tsx
    ├── About.tsx
    ├── Services.tsx
    ├── Projects.tsx    — includes the category filter UI
    └── Contact.tsx      — includes the mailto-based form
```

To edit any text — experience, skills, services, projects, contact info,
or the assistant's FAQ answers — everything lives in `src/data.ts`.
"# Anoop-Mishra" 
