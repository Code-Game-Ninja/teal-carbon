# Teal Carbon — Build Tasks

Research lab site. Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + GSAP/ScrollTrigger + Lenis**. Design contract: [DESIGN.md](DESIGN.md). References: `image.png` (cinematic coast + organic torn edge + stylized map), `image copy.png` (vintage paper + serif display + dashed expedition trail), `blue-carbon-details.txt` (narrative + IA).

Two visual worlds: **DEEP** (dark ocean-teal cinematic) ↔ **PAPER** (warm cream editorial), stitched by organic torn/watercolor SVG edges.

---

## Phase 0 — Foundation
- [ ] `create-next-app` (TS, App Router, Tailwind, ESLint, `src/`, `@/*` alias)
- [ ] Fonts via `next/font`: Fraunces, Cormorant Garamond, Manrope, IBM Plex Mono
- [ ] Tailwind theme: map all DESIGN.md tokens (colors, spacing, radius, easing, font families)
- [ ] Global CSS: base type ramp, paper grain utility, scrim gradient utility, reduced-motion resets
- [ ] Folder structure: `components/`, `sections/`, `lib/`, `data/`, `public/media/`
- [ ] `data/` seed files: ecosystems, research areas, projects, stats, map nodes (placeholder until real content)

## Phase 1 — Motion & primitives
- [ ] Lenis smooth-scroll provider (lerp 0.09; off for touch + `prefers-reduced-motion`)
- [ ] GSAP + ScrollTrigger setup + `useGsap`/`useReveal` hooks
- [ ] `<Reveal>` (fade+translate, stagger) with reduced-motion fallback
- [ ] `<Parallax>` wrapper
- [ ] `<CountUp>` numeral (viewport-triggered)
- [ ] `<OrganicEdge>` — reusable torn/watercolor SVG mask (top/bottom variants)
- [ ] `<WatercolorBloom>` atmospheric background blob
- [ ] Custom cursor (dot → labeled pill; disabled on touch/reduced-motion)

## Phase 2 — Chrome
- [ ] `<Nav>` — transparent over hero → solid (blur) after scroll; teal active state
- [ ] Mobile full-screen overlay menu (staggered serif link reveal)
- [ ] `<Footer>` — ocean-abyss, oversized serif closing line, columns, acknowledgment
- [ ] `<ChapterMarker>` `01 / 05` mono index (optionally pinned)

## Phase 3 — Home sections (in scroll order)
- [ ] **Hero** — full-bleed cinematic coast, scrim, stacked serif headline, scroll cue, `01 / 05`, organic edge into paper
- [ ] **Intro / Why** — PAPER, eyebrow + serif statement + lead
- [ ] **Ecosystem experience** — pinned/scroll-swapped panels: Mangrove / Seagrass / Saltmarsh / Peatland (image changes per panel)
- [ ] **Data** — DEEP, thin serif numerals count-up (hectares, tCO₂e/yr, sites) with mono source line
- [ ] **Interactive map** — stylized SVG coastline, ecosystem-colored pulsing nodes, click → side panel
- [ ] **Research** — hover-swaps imagery over numbered research areas (01 Blue, 02 Teal, 03 Restoration, 04 Climate Adaptation)
- [ ] **Projects trail** — dashed expedition trail linking alternating left/right editorial blocks
- [ ] **Final CTA** — full-bleed video/image, closing serif statement, teal CTA to lab

## Phase 4 — Content pages (per IA in details)
- [ ] `/research` + `/research/[slug]`
- [ ] `/projects` + `/projects/[slug]`
- [ ] `/impact` (stats, ecosystems, outcomes)
- [ ] `/map` (full interactive)
- [ ] `/about` (mission, researchers, partners, publications)
- [ ] `/contact`

## Phase 5 — Polish & QA
- [ ] Responsive pass: 380 / 640 / 1024 / 1280 / 1680 (trail → left-rail on phone; map → node list on phone)
- [ ] Accessibility: focus states, semantic landmarks, alt text, contrast on scrimmed imagery, keyboard map nav
- [ ] `prefers-reduced-motion` verified on every animated element
- [ ] Perf: `next/image` + responsive `sizes`, lazy below-fold, font preload, Lighthouse pass
- [ ] SEO: metadata, Open Graph, sitemap
- [ ] `npm run build` clean

---

## Open decisions (confirm before/most flexible during build)
1. **Topic scope** — Teal Carbon only, or Blue + Teal? (folder says Teal-Carbon)
2. **Content** — real copy/data/photos available, or placeholders throughout?
3. **Map** — stylized SVG illustration (matches reference) vs real Leaflet/Mapbox geodata
4. **Scale** — single scrolling landing page first, or full multi-page from the start
5. **CMS** — hardcoded `data/` files, or Sanity/Strapi for researchers to edit
