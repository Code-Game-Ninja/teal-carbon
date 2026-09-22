import Link from "next/link";
import { site, hero } from "@/data/site";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Research", href: "/research" },
      { label: "Projects", href: "/projects" },
      { label: "Impact", href: "/impact" },
      { label: "Map", href: "/map" },
    ],
  },
  {
    title: "Lab",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Publications", href: "/impact" },
      { label: "Partners", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Data use", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

const socials = [
  { label: "X", d: "M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.4 22H2.3l8-9.2L1.5 2h7l4.5 6L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" },
  { label: "GitHub", d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" },
  { label: "LinkedIn", d: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06C20.4 8.54 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21H9V9Z" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ocean-abyss text-on-dark-soft">
      {/* top: brand + columns */}
      <div className="grid gap-12 px-6 pt-24 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-12 md:pt-28">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl text-on-dark">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-on-dark-muted">
            Built for coasts and wetlands, and the carbon they quietly keep.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-on-dark/90 transition-colors hover:text-primary-bright"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="flex flex-col gap-3">
            <p className="eyebrow text-on-dark-muted">{col.title}</p>
            {col.links.map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-on-dark/85 transition-colors hover:text-primary-bright">
                {l.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <p className="px-6 pt-16 font-mono text-xs text-on-dark-muted md:px-12">
        © {new Date().getFullYear()} {site.name}. {site.acknowledgment}
      </p>

      {/* giant image-filled wordmark (ref: Opnest) */}
      <div className="relative mt-10 select-none px-4 md:px-6">
        <span
          aria-hidden
          className="block whitespace-nowrap bg-cover bg-center bg-clip-text text-center font-display font-medium leading-[0.8] tracking-[-0.03em] text-transparent"
          style={{
            fontSize: "clamp(4rem, 22vw, 20rem)",
            backgroundImage: `linear-gradient(rgba(4,20,26,0.15), rgba(4,20,26,0.35)), url(${hero.image})`,
          }}
        >
          tealcarbon
        </span>
      </div>

      {/* floating glass pills */}
      <a
        href={site.external.href}
        data-cursor="Visit"
        className="glass-dark absolute bottom-5 left-5 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-on-dark transition-transform active:scale-[0.97] md:bottom-8 md:left-8"
      >
        ↗ {site.external.label}
      </a>
      <a
        href="#top"
        data-cursor="Top"
        className="glass-dark absolute bottom-5 right-5 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-on-dark transition-transform active:scale-[0.97] md:bottom-8 md:right-8"
      >
        Back to top ↑
      </a>
    </footer>
  );
}
