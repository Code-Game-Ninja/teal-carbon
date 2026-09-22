---
version: alpha
name: Teal-Carbon-design-analysis
description: A cinematic scientific-editorial interface for a coastal & wetland carbon research lab. Full-bleed ocean/mangrove photography melts through organic torn/watercolor edges into warm cream reading bands. Oversized serif display headlines (Fraunces / Cormorant) sit against a clean geometric sans body (Manrope), a single teal accent carries every interaction, and a winding dashed "expedition trail" threads the reader through numbered research chapters. The mood is luxury-documentary + laboratory precision — never SaaS. Two visual worlds alternate: DEEP (dark ocean-teal cinematic) and PAPER (warm cream editorial), stitched by hand-cut organic edges rather than hard section lines.

colors:
  # Accent — the single interactive signal
  primary: "#1E6E63"          # Teal Carbon — CTAs, links, active states, trail line
  primary-bright: "#2C8F80"   # hover/focus lift on dark
  primary-deep: "#134E46"     # pressed
  on-primary: "#F5F3ED"

  # DEEP world (dark cinematic)
  ocean-abyss: "#061217"      # deepest bg, footer, nav-solid
  ocean-deep: "#071B22"       # primary dark canvas
  ocean-teal: "#0D3038"       # dark surface / cards on dark
  ocean-teal-2: "#123F48"     # raised dark surface
  overlay-scrim: "#04141A"    # image overlay base (used 30–60% alpha)

  # PAPER world (warm editorial)
  cream: "#F5F3ED"            # primary light canvas
  paper: "#EFEBE0"            # textured paper band (vintage)
  paper-warm: "#E7E0D2"       # deeper sand band
  mist: "#DCE9E5"             # cool tinted panel

  # Text
  ink: "#0E1E22"             # headlines/body on light
  ink-soft: "#37474A"        # body on light
  ink-muted: "#6B7B7B"       # captions/meta on light
  on-dark: "#F5F3ED"         # body on dark
  on-dark-soft: "#B8C8BD"    # sage — secondary on dark
  on-dark-muted: "#7E9088"   # meta on dark

  # Ecosystem coding (map + data)
  eco-mangrove: "#2C8F80"
  eco-seagrass: "#5FA88C"
  eco-saltmarsh: "#B7A46A"
  eco-peatland: "#8A6F4B"

  # Lines & structure
  hairline-dark: "#1C3A40"
  hairline-light: "#D8D2C4"
  trail-line: "#B7A46A"      # dashed expedition trail (vintage gold-sand)

typography:
  hero-display:
    fontFamily: "Fraunces, 'Cormorant Garamond', Georgia, serif"
    fontSize: clamp(3.5rem, 9vw, 10rem)
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.03em
  display-lg:
    fontFamily: "Fraunces, 'Cormorant Garamond', Georgia, serif"
    fontSize: clamp(2.5rem, 6vw, 5.5rem)
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: -0.02em
  display-md:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: clamp(2rem, 4vw, 3.25rem)
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  serif-lead:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: clamp(1.5rem, 2.4vw, 2rem)
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.3
  eyebrow:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.22em
    textTransform: uppercase
  data-numeral:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: clamp(3rem, 7vw, 7rem)
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.02em
  lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: clamp(1.125rem, 1.6vw, 1.375rem)
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  mono-meta:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.04em

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 14px
  lg: 22px
  pill: 9999px
  organic: "torn/watercolor SVG mask — not a CSS radius"

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 56px
  xxl: 96px
  section: 160px
  section-sm: 96px

motion:
  ease-editorial: "cubic-bezier(0.22, 1, 0.36, 1)"   # smooth deceleration, default reveal
  ease-out-soft: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  dur-fast: 240ms
  dur-base: 600ms
  dur-slow: 1000ms
  dur-cinematic: 1600ms
  lenis-lerp: 0.09        # smooth scroll inertia
  parallax-range: "6–14% of element height"
  stagger: 90ms          # child reveal stagger

components:
  nav-transparent:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    notes: "over hero; logo left, links right, blends into imagery"
  nav-solid:
    backgroundColor: "{colors.ocean-abyss}"
    textColor: "{colors.on-dark}"
    backdropFilter: "saturate(160%) blur(14px) — at 88% alpha"
    notes: "after scroll past hero; slides down"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
    active: "transform: scale(0.97)"
  button-ghost-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    border: "1px solid {colors.on-dark-soft}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  link-underline:
    textColor: "{colors.primary}"
    notes: "animated underline wipe left→right on hover"
  chapter-marker:
    typography: "{typography.mono-meta}"
    textColor: "{colors.ink-muted}"
    notes: "01 / 05 style; sits top-left of each chapter"
  research-trail-card:
    backgroundColor: "{colors.cream}"
    imageEdge: "{rounded.organic}"
    notes: "alternates left/right along dashed trail; large editorial block, NOT a bootstrap card"
  data-figure:
    numeral: "{typography.data-numeral}"
    label: "{typography.eyebrow}"
    notes: "animated count-up on viewport enter"
  map-node:
    fill: "ecosystem color token"
    notes: "pulsing dot on stylized SVG map; click reveals side panel"
  map-panel:
    backgroundColor: "{colors.ocean-teal}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  image-full-bleed:
    edge: "{rounded.organic}"
    overlay: "{colors.overlay-scrim} 30–60% + subtle bottom gradient for text legibility"
  custom-cursor:
    notes: "small dot; grows to labeled pill (VIEW / EXPLORE / DRAG) over interactive media; disabled on touch"
  footer:
    backgroundColor: "{colors.ocean-abyss}"
    textColor: "{colors.on-dark-soft}"
---

## 1. Visual Theme & Atmosphere

Teal Carbon is a **luxury-documentary research site** — the feeling of a printed science expedition journal crossed with a cinematic nature film. It is built from two alternating worlds:

- **DEEP** — dark ocean-teal cinematic bands. Full-bleed aerial coast, underwater seagrass, mangrove canopy, core-sampling photography. White serif type floats over a scrim.
- **PAPER** — warm cream / vintage-paper editorial bands. Long-form reading, data figures, the research trail. Ink-dark serif headlines, sans body.

The two worlds are **never divided by a straight line**. They are stitched with **organic torn / watercolor SVG edges** (the signature from the coastal reference) so photography appears to bleed and dissolve into paper — as if water met sand. Every structural transition earns an organic edge or a watercolor bloom, never a flat rectangle.

The reader is guided by a **dashed "expedition trail"** (vintage gold-sand line, from the trekking reference) that winds down through numbered research chapters, connecting alternating photo blocks left and right. This turns the page from a stack of sections into a journey.

**Key characteristics**
- Photography and the map ARE the UI; chrome recedes.
- One serif display face doing the heavy emotional lifting; one sans for clarity.
- Single teal accent — every "click me" is teal, nothing else competes.
- Organic torn edges + watercolor blooms as the section grammar.
- Numbered chapters (`01 / 05`) and a physical dashed trail for narrative wayfinding.
- Oversized numerals for data, animated on scroll.
- Restraint: generous whitespace on paper, deep negative space on dark.

## 2. Color Palette & Roles

### Accent
- **Teal Carbon** (`{colors.primary}` #1E6E63) — the ONLY interactive color. CTAs, links, active nav item, the dashed trail highlight, map hover. `-bright` for hover lift on dark, `-deep` for pressed.

### DEEP world
- **Ocean Deep** (`{colors.ocean-deep}` #071B22) — primary dark canvas for cinematic bands.
- **Ocean Abyss** (`{colors.ocean-abyss}` #061217) — nav-solid + footer, the true floor.
- **Ocean Teal / Teal-2** — dark surfaces and raised cards on dark (map panel, quote cards).
- **Overlay Scrim** — image darkening base, applied 30–60% alpha so serif type stays legible.

### PAPER world
- **Cream** (`{colors.cream}` #F5F3ED) — primary reading canvas.
- **Paper / Paper-warm** — vintage textured bands (apply a subtle grain/noise texture at ~4% opacity).
- **Mist** (#DCE9E5) — cool tinted panel to break two warm bands.

### Text — light surfaces
Ink #0E1E22 (headlines) → Ink-soft #37474A (body) → Ink-muted #6B7B7B (caption/meta).

### Text — dark surfaces
On-dark #F5F3ED (headlines/body) → On-dark-soft / Sage #B8C8BD (secondary) → On-dark-muted #7E9088 (meta).

### Ecosystem coding
Mangrove / Seagrass / Saltmarsh / Peatland each own a token — used consistently on the map, in legends, and on data figures so a color always means the same ecosystem.

### Gradients
No decorative UI gradients. The only gradients allowed are (a) the image legibility scrim (transparent → `overlay-scrim`) and (b) watercolor blooms rendered as soft radial washes of `mist` / `primary` at very low alpha. Atmosphere comes from photography, not CSS color.

## 3. Typography Rules

### Families
- **Display**: `Fraunces` (variable serif; optical size + soft/wonky axes give it a warm scientific-journal character). Fallback `Cormorant Garamond`, then Georgia.
- **Serif lead / pull-quote**: `Cormorant Garamond` italic — editorial breathing room.
- **Body / UI**: `Manrope` (geometric, quiet, excellent at small sizes).
- **Meta / coordinates / tags**: `IBM Plex Mono` — signals "data / laboratory."

### Hierarchy
See the `typography` tokens above. Ladder: `hero-display` (clamp → 10rem) → `display-lg` → `display-md` → `serif-lead` → `lead` → `body` → `body-sm` → `caption` → `mono-meta`. Data uses `data-numeral` (light-weight serif at huge size).

### Principles
- **Stacked oversized headlines.** Break display copy across lines deliberately (`THE / COAST / IS / ALIVE`). Line-height 0.9, negative tracking. This is the premium editorial signal.
- **Serif for emotion, sans for information.** Headlines, pull-quotes, and numerals are serif; everything you actually read for facts is Manrope.
- **Eyebrows are mono/sans uppercase** with wide 0.22em tracking — they act as chapter signposts above serif headlines.
- **Body at 17px / 1.7 line-height** on paper for a genuine reading pace.
- **Numerals are light (300).** Big, thin serif numbers feel scientific and expensive.
- Weight 500 avoided in display; ladder is 300 / 400 / 600.

## 4. Component Stylings

- **Navigation** — `nav-transparent` over the hero (logo left, minimal links right, teal active dot). After scrolling past the hero it swaps to `nav-solid` (ocean-abyss + backdrop blur) sliding down. Mobile collapses to a full-screen dark overlay menu with staggered serif link reveal.
- **Buttons** — `button-primary` (teal pill) is the single loud action. `button-ghost-dark` (hairline pill) for secondary over imagery. Active = `scale(0.97)`. No shadows.
- **Links** — teal with a left→right underline wipe on hover.
- **Chapter marker** — mono `01 / 05` top-left of each chapter; the current chapter number can pin/scrub as you scroll.
- **Research-trail card** — the hero interaction pattern: large editorial blocks alternating left/right down the page, joined by the dashed trail. Image carries an organic torn edge; title in `display-md`, mono index, one line of copy, teal "Explore →". NOT a rounded shadow card.
- **Data figure** — huge serif numeral + eyebrow label + one-line source in mono. Count-up animates when it enters the viewport.
- **Interactive map** — stylized SVG coastline (illustrated, like the reference regional map — NOT map tiles). Ecosystem-colored pulsing `map-node`s; click opens a `map-panel` (ocean-teal) with site name, ecosystem, hectares, tCO₂e. Optional Leaflet only if real geodata is required later.
- **Full-bleed image** — organic edge + scrim; supports parallax and clip-path reveal.
- **Custom cursor** — dot that expands into a labeled pill (VIEW / EXPLORE / DRAG) over media; auto-disabled on touch / reduced-motion.
- **Footer** — ocean-abyss, sage text, oversized serif closing statement, minimal columns, acknowledgment line.

## 5. Layout Principles

- **Base unit 4px**; structural rhythm on the `spacing` scale. Section padding `{spacing.section}` (160px desktop) → `{spacing.section-sm}` (96px) on tablet → 64px on phone.
- **Content widths**: reading text max ~68ch (~720px); editorial blocks up to 1100px; cinematic bands and the map go full-bleed.
- **Grid**: 12-col with generous gutters; but compose asymmetrically — offset images, hang eyebrows into the margin, let numerals overflow.
- **Whitespace is the pedestal.** On paper, at least `{spacing.xl}` of air above every serif headline. On dark, even more negative space.
- **Alternation is the divider.** DEEP ↔ PAPER swaps, joined by organic edges, replace visible section rules.

## 6. Depth & Elevation

Near-flat system. No decorative card shadows.
- Depth comes from **surface world change** (DEEP ↔ PAPER) and **organic edge overlaps** (paper visually tucks under a torn image edge).
- `nav-solid` and `map-panel` use **backdrop blur**, not drop shadows.
- One permitted soft shadow: floating action pills (`Visit lab` / map controls) over imagery — `0 10px 40px rgba(4,20,26,0.28)` — to lift them off busy photography, echoing the reference's floating "Visit site" button.
- Watercolor blooms sit *behind* content as atmosphere, never as a container.

## 7. Do's and Don'ts

**Do**
- Stitch every DEEP↔PAPER transition with an organic torn / watercolor edge.
- Keep teal as the sole interactive color.
- Set headlines in serif, stacked, oversized, tight leading.
- Thread the dashed expedition trail through the research/projects chapters.
- Animate data numerals on scroll; keep them thin serif.
- Add subtle paper grain to PAPER bands and a scrim to DEEP imagery.
- Respect `prefers-reduced-motion` — swap parallax/count-up for instant states.

**Don't**
- Don't use hard rectangular section dividers between worlds.
- Don't introduce a second accent or neon gradients.
- Don't use rounded drop-shadow "bootstrap" cards for research/projects.
- Don't set body in serif or numerals in bold.
- Don't clutter the map with real tile chrome unless geodata demands it.
- Don't let motion block content or run without reduced-motion fallbacks.

## 8. Responsive Behavior (all devices)

| Name | Width | Key changes |
|---|---|---|
| Small phone | ≤ 380px | Hero display → clamp floor (~3.5rem), single column, trail becomes a straight left-rail dashed line, map switches to a vertical list of node cards, custom cursor off |
| Phone | 381–639px | Single column; section padding 64px; nav → full-screen overlay menu; images full-bleed with organic edge kept |
| Tablet portrait | 640–1023px | Two-column data figures; trail cards stack but keep alternating image/text order; parallax range halved |
| Laptop | 1024–1279px | Full alternating trail layout; section padding 96–120px; custom cursor on |
| Desktop | 1280–1679px | Full experience; 160px section padding; parallax + pinned chapter marker |
| Wide | ≥ 1680px | Content locks ~1440px, cinematic bands stay full-bleed, margins absorb width |

- **Touch targets** ≥ 44×44px; teal pills sit ~48px tall on mobile.
- **Motion**: Lenis smooth scroll on pointer devices; disabled/eased for touch + reduced-motion. All reveals have a no-JS / reduced-motion visible fallback.
- **Images**: `next/image` with responsive `sizes`; art-direct hero to a taller crop on phones; eager-load only the above-fold hero.

## 9. Agent Prompt Guide

**Palette quick ref** — accent `#1E6E63`; dark canvas `#071B22`; floor `#061217`; cream `#F5F3ED`; paper `#EFEBE0`; ink `#0E1E22`; sage `#B8C8BD`; trail `#B7A46A`.

**Fonts** — Fraunces (display serif), Cormorant Garamond (italic lead), Manrope (body), IBM Plex Mono (meta).

**Ready prompt** — "Build a [section] for the Teal Carbon research lab. Alternate DEEP (ocean #071B22, white serif over scrimmed full-bleed photo) and PAPER (cream #F5F3ED, ink serif + Manrope body) worlds, stitched by an organic torn/watercolor SVG edge. Oversized stacked Fraunces headline, mono eyebrow, single teal (#1E6E63) CTA. If it's the research/projects chapter, thread the dashed gold-sand expedition trail linking left/right editorial blocks. Data uses thin serif numerals that count up on scroll. Smooth Lenis scroll + GSAP ScrollTrigger reveals, all with reduced-motion fallbacks. No hard dividers, no second accent, no shadowed bootstrap cards."
