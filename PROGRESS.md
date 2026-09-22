# Teal Carbon — Progress

Status legend: ☐ todo · ◐ in progress · ☑ done · ⚠ blocked

Last updated: 2026-09-22

## Summary
All phases complete. 19 routes build static/SSG clean; all pages return HTTP 200 (404 works). Next.js 15.5.26 + TS + Tailwind v4 + GSAP/ScrollTrigger + Lenis. Multi-page site: cinematic home + research/projects (with detail pages) + impact + map + about + contact. Online (Unsplash) placeholder imagery + hardcoded `data/`.

Remaining before real launch: swap placeholder copy/data/photos for verified content; wire contact form to a backend; optionally add a CMS.

Defaults applied: topic = Teal Carbon (folder), online image placeholders, stylized SVG map, hardcoded `data/` (no CMS).

## Milestones
| Phase | Scope | Status |
|---|---|---|
| Docs | DESIGN.md, TASK.md, PROGRESS.md | ☑ |
| 0 | Foundation (Next.js, fonts, tokens, data) | ☑ |
| 1 | Motion & primitives (Lenis, GSAP, edges, cursor) | ☑ |
| 2 | Chrome (nav, footer, chapter marker) | ☑ |
| 3 | Home sections (hero → final CTA) | ☑ |
| 4 | Content pages (research/projects/impact/map/about/contact) | ☑ |
| 5 | Polish & QA (responsive, a11y, perf, SEO, build) | ☑ |

## Decisions log
- 2026-09-22 — Stack chosen: Next.js + TS + Tailwind + GSAP/ScrollTrigger + Lenis.
- 2026-09-22 — Design direction: DEEP↔PAPER two-world editorial, organic torn edges, dashed expedition trail, single teal accent. Synthesized from both reference images + blue-carbon-details.txt.
- 2026-09-23 — Nav starts full-width bar, shrinks to centered glass pill on scroll. Hero scroll animation: background image zooms to fill + content scrolls up and fades (ScrollTrigger scrub, no pin). Per-navigation page transitions via `app/template.tsx` + `pageEnter` keyframe. Fixed custom-cursor dark-corner blob (hidden until first move, snaps to pointer, hides on window leave). Added `vercel.json` for preview deploy.
- 2026-09-22 — Redesign pass (refs: Mindloop home + Opnest footer): framed rounded container over dark backdrop; shrink-on-scroll floating glass nav (centered links + social pills); centered glassmorphic hero with social-proof pill + subscribe input; footer with giant image-filled wordmark + link columns + floating glass pills. Added glass/neomorphism utilities. Real interactive map via Leaflet + react-leaflet (CARTO Positron tiles, no token) replacing stylized SVG. Smoother Lenis (lerp 0.075) + blur/scale reveals. EcosystemExperience converted from pinned-sticky to stacked full-bleed panels (sticky is incompatible with the overflow-hidden frame).

## Open decisions (unresolved)
1. Topic scope: Teal only vs Blue+Teal
2. Real content vs placeholders
3. Map: stylized SVG vs Leaflet/Mapbox
4. Single landing page vs full multi-page
5. CMS vs hardcoded data

## Notes / next step
Confirm the 5 open decisions, then start Phase 0.
