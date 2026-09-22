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

## Open decisions (unresolved)
1. Topic scope: Teal only vs Blue+Teal
2. Real content vs placeholders
3. Map: stylized SVG vs Leaflet/Mapbox
4. Single landing page vs full multi-page
5. CMS vs hardcoded data

## Notes / next step
Confirm the 5 open decisions, then start Phase 0.
