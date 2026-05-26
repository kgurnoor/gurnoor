# CLAUDE.md — gurnoor.net (v2, brand new project)

This is the single source of truth for Claude Code on this project.
Read this file in full before touching any code.

---

## What This Project Is

A brand-new personal portfolio and blog for **Gurnoor Kaur**, an aspiring
Software Development Engineer. Built from scratch.

Two core jobs:
1. **Portfolio / interactive resume** — hero, skills, projects, achievements
2. **Blog** — MDX-powered posts, published regularly

Live domain: **gurnoor.net** (connected via Vercel once the project is ready)
Repo: brand new, starts empty except for this file.

---

## Tech Stack

| Layer            | Choice                                      |
|------------------|---------------------------------------------|
| Framework        | Next.js 15 (App Router, TypeScript)         |
| Styling          | Tailwind CSS v4                             |
| 3D / Canvas      | Three.js (hero scene)                       |
| Blog content     | MDX via `next-mdx-remote` + `gray-matter`   |
| Syntax highlight | `sugar-high`                                |
| Fonts            | Geist Sans + Geist Mono (`geist` package)   |
| Analytics        | `@vercel/analytics` + `@vercel/speed-insights` |
| Package manager  | **pnpm** — never use npm or yarn            |
| Deployment       | Vercel, auto-deploy on push to `main`       |

### Bootstrap command
```bash
pnpm create next-app@latest . --typescript --tailwind --app --src-dir=no --import-alias="@/*"
pnpm add three @types/three next-mdx-remote gray-matter sugar-high geist @vercel/analytics @vercel/speed-insights
```

---

## Project Structure (target)

```
gurnoor-portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, custom cursor, analytics
│   ├── page.tsx              # Home: hero + about panel + projects + contact
│   ├── blog/
│   │   ├── page.tsx          # Blog index: card grid
│   │   └── [slug]/
│   │       └── page.tsx      # Individual MDX post
│   ├── projects/
│   │   └── page.tsx          # Full projects page
│   ├── achievements/
│   │   └── page.tsx          # Achievements / timeline page
│   └── globals.css           # CSS custom properties, keyframes, base styles
├── components/
│   ├── HeroCanvas.tsx        # 'use client' — Three.js canvas (hero scene)
│   ├── CustomCursor.tsx      # 'use client' — custom cursor follower
│   ├── Nav.tsx               # Sticky top nav with frosted glass
│   ├── BlogCard.tsx          # Card used in blog index grid
│   ├── ProjectCard.tsx       # Card used in projects section/page
│   ├── AppearingText.tsx     # 'use client' — scroll-reveal text animation
│   ├── ScrollProgress.tsx    # 'use client' — reading progress bar
│   └── mdx.tsx               # MDX component overrides
├── lib/
│   ├── posts.ts              # Read + parse MDX posts from /content/blog
│   └── projects.ts           # Static project data (typed)
├── content/
│   └── blog/
│       └── *.mdx             # Blog post source files
├── public/
│   └── projects/             # Project screenshot images (.webp preferred)
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

---

## Visual Design — Inspiration & Direction

**Inspiration site:** david-hckh.com (see screenshot)

### Colour Palette (adapt from inspiration)
```css
:root {
  --bg:          #f0ebe3;   /* warm cream — main background */
  --bg-section:  #e8e1d8;   /* slightly darker cream for alternate sections */
  --fg:          #1a1714;   /* near-black warm text */
  --fg-muted:    #6b6560;   /* muted warm grey for secondary text */
  --accent:      #5b4cdb;   /* electric indigo — Gurnoor's accent (adjust if desired) */
  --accent-alt:  #c084fc;   /* soft purple — secondary accent / glow */
  --border:      rgba(26,23,20,0.12);
  --card-bg:     #ffffff;
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   24px;
}
```
> The inspiration site uses a warm off-white (not dark mode). Gurnoor's site
> should follow the same warm-cream aesthetic — it reads as sophisticated and
> calm, not sterile. Do NOT make this a dark site unless Gurnoor explicitly
> asks for a theme toggle.

### Typography
- **Headings:** Geist Sans, bold/black weight, large scale (hero h1 ≥ 72px desktop)
- **Body:** Geist Sans, regular, comfortable line-height (~1.6)
- **Code:** Geist Mono
- **Accent labels / banners:** small uppercase or pill-style tags in accent color

### Layout Principles
- 12-column grid using CSS Grid (`display: grid; grid-template-columns: repeat(12, 1fr)`)
- Max content width: 1280px, centered
- Generous padding: `clamp(1.5rem, 5vw, 5rem)` on sides
- Sections separated by breathing room, not hard dividers

---

## Page-by-Page Spec

### `/` — Home page (single scrolling page)

**Section 1 — Hero**
- Full-viewport height
- LEFT: Large bold name "Gurnoor Kaur" with an accent pill/banner saying
  "SDE in the making" or similar tagline. Below: 1-line bio.
  CTA buttons: "View Projects" (scroll) + "Read Blog" (link).
- RIGHT: Three.js canvas — a cozy animated scene. Suggested: floating
  geometric shapes (icosahedron + torus) with soft lighting and slow rotation,
  or particle field. Keep it subtle, not distracting.
- On mobile: canvas stacks below the text at reduced height.

**Section 2 — About (sticky scroll panel, inspired by david-hckh.com)**
- As the user scrolls through this section, a sticky left panel reveals
  info in sequence using `IntersectionObserver`:
  - Panel A: Name + location card (Jalandhar, Punjab, India)
  - Panel B: Short bio description card
  - Panel C: Skills card (list of tech: Python, JavaScript, Next.js, React,
    Deep Learning, AWS, etc.)
  - Panel D: A scroll progress bar / percentage counter (0–100%)
- Right side is just scroll height (spacer) that drives the sticky animation.
- Implement with pure CSS `position: sticky` + JS `IntersectionObserver`.
  No scroll-jacking, no heavy libraries.

**Section 3 — Selected Projects**
- Section header: small accent label "Selected" + big heading "Projects"
- 2-column card grid on desktop, 1-column on mobile
- Each card (`ProjectCard`): project screenshot image, title, one-line
  description, tech badge(s), arrow button on hover
- Cards scale from 0.85 to 1.0 on enter-viewport (CSS keyframe, not JS)
- Image has a subtle parallax (image slightly larger than card, shifts on
  scroll — pure CSS `object-position` or small JS offset)
- Last card is a CTA: "Have an idea? Let's build it →" with a `+` icon
  (links to email)
- "Notch" corner decorations (SVG quarter-circle cutouts) at section
  top and bottom edges, matching the inspiration site

**Section 4 — Contact**
- Big bold heading "Let's connect!" 
- Row of icon buttons: Email, GitHub, LinkedIn
- Keep it clean, centred

**Footer**
- Back-to-top arrow button (rounded, bordered)
- Copyright "© 2025 Gurnoor Kaur"
- Social icon links row

### `/blog` — Blog index
- Page heading + subtitle
- Card grid: 2 columns desktop / 1 mobile
- Each `BlogCard`: date tag, title, summary text, "Read →" arrow
- Cards have a subtle gradient border that glows on hover
- Sorted newest-first

### `/blog/[slug]` — Blog post
- Full-width MDX content, max-width ~720px, centred
- Scroll progress bar at top of page
- Reading time estimate in header
- Back link to `/blog`
- MDX components: styled `<code>`, `<pre>`, `<blockquote>`, `<h2>`, `<h3>`

### `/projects` — Full projects page
- Same card grid as the home section but includes all projects
- Can include a simple filter bar for tech tags (optional enhancement)

### `/achievements` — Achievements / timeline
- Vertical timeline layout
- Each entry: date, title, short description
- Subtle connecting line between entries
- Entries fade in on scroll

---

## Components Reference

### `HeroCanvas.tsx`
```tsx
'use client'
// Mount a Three.js scene to a <canvas> ref
// Scene: soft ambient + directional lights
//        1–2 floating meshes (IcosahedronGeometry, TorusGeometry)
//        slow auto-rotation on both axes
//        OrbitControls disabled — purely decorative
// Resize handler: update camera aspect + renderer size on window resize
// Cleanup: dispose renderer on unmount
// Style: width 100%, height 100%, position absolute, pointer-events none
```

### `CustomCursor.tsx`
```tsx
'use client'
// Track mouse position with mousemove, lerp to it with requestAnimationFrame
// Render a small circle div that follows the cursor with lag
// Scale up on hover over interactive elements (a, button, [data-cursor])
// Hide on mobile (pointer: coarse media query)
// Use CSS transform: translate() — never top/left for perf
```

### `AppearingText.tsx`
```tsx
'use client'
// Wraps any text node
// On mount: IntersectionObserver watches the element
// When visible: add class that triggers clip-path or opacity+translateY animation
// Stagger multiple children with CSS animation-delay
// CSS: clip-path: inset(0 100% 0 0) → inset(0 0% 0 0) over 0.6s ease-out
```

---

## Blog Content (MDX)

### Frontmatter schema — DO NOT change this
```mdx
---
title: 'Post Title Here'
publishedAt: '2025-06-30'
summary: 'One or two sentence description for the card and meta tags.'
tags: ['deep-learning', 'aws', 'update']   # optional
---
```

### `lib/posts.ts` responsibilities
- Read all `.mdx` files from `content/blog/`
- Parse frontmatter with `gray-matter`
- Return typed array sorted by `publishedAt` descending
- Export `getAllPosts()` and `getPostBySlug(slug: string)`

### Post type
```ts
export type Post = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  tags?: string[]
  content: string   // raw MDX string, passed to next-mdx-remote
}
```

---

## Coding Conventions

- **TypeScript strict mode** — `"strict": true` in tsconfig. No `any`.
- **Server Components by default.** Add `'use client'` only for:
  Three.js canvas, custom cursor, IntersectionObserver hooks, scroll listeners.
- **Tailwind for all styling.** No inline `style={{}}` unless it's a
  truly dynamic value (e.g. canvas dimensions, JS-driven transforms).
- **CSS custom properties** in `globals.css` for the colour palette above —
  reference them in Tailwind via `var(--accent)` etc.
- **One component per file,** PascalCase filename matches export name.
- **No default exports from `lib/`** — named exports only.
- **Images:** always use `next/image`. Store project screenshots in
  `public/projects/`. Use `.webp` format, provide `alt` text.
- **No Framer Motion, GSAP, or any animation library.** All animation via:
  CSS `@keyframes`, `transition`, `IntersectionObserver` class toggling,
  and Three.js for the canvas only.
- **Accessibility:** all interactive elements need `aria-label` if they
  lack visible text. Maintain a logical heading hierarchy (h1 → h2 → h3).
- **Performance:** Lighthouse score ≥ 85 on home page. Lazy-load images below
  the fold. Keep Three.js bundle impact minimal (import only what you use).

---

## Notch Corner Decorations

The inspiration site uses SVG quarter-circle "notches" to create rounded
transitions between sections of differing background colours. Implement
as a reusable `<Notch>` component:

```tsx
// components/Notch.tsx
// Props: side ('left' | 'right'), color (CSS var or hex)
// Renders the SVG: <path d="M0 256H256C114.616 256 0 141.385 0 0V256Z" />
// Sized via CSS, absolutely positioned at section edges
// Used at top and bottom of the Projects and Contact sections
```

---

## Owner Info (use when generating copy)

| Field     | Value                                        |
|-----------|----------------------------------------------|
| Name      | Gurnoor Kaur                                 |
| Location  | Jalandhar, Punjab, India                     |
| Email     | gurnoorkaur0349@gmail.com                    |
| GitHub    | https://github.com/kgurnoor                  |
| LinkedIn  | https://www.linkedin.com/in/gurnoor-kaur     |
| Domain    | gurnoor.net                                  |
| Tagline   | Aspiring Software Development Engineer       |
| Mission   | Documenting the learning journey · Inspiring women in CS |

---

## Development Commands

```bash
pnpm install          # install deps
pnpm dev              # dev server → http://localhost:3000
pnpm build            # production build (run before every push)
pnpm start            # serve production build locally
pnpm lint             # ESLint check
```

---

## Deployment

- Vercel project connected to this repo, domain `gurnoor.net`
- Every push to `main` auto-deploys
- `pnpm-lock.yaml` must always be committed
- No `.env.local` in version control
- Set any env vars in the Vercel dashboard

---

## Pre-Push Checklist

- [ ] `pnpm build` exits with zero errors
- [ ] No TypeScript errors (`pnpm tsc --noEmit`)
- [ ] Home page loads and Three.js canvas renders
- [ ] All blog post slugs resolve correctly (`/blog/[slug]`)
- [ ] `/projects` and `/achievements` pages render
- [ ] Custom cursor appears on desktop, hidden on mobile
- [ ] No `console.error` in browser DevTools
- [ ] Lighthouse Performance ≥ 85 (Chrome DevTools → Lighthouse tab)
- [ ] Site is readable and navigable with keyboard only
