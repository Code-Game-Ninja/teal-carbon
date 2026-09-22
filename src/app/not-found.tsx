import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ocean-deep px-6 text-center text-on-dark">
      <p className="eyebrow mb-6 text-on-dark-soft">404</p>
      <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.03em]">
        Off the map.
      </h1>
      <p className="mt-6 max-w-md font-serif-lead text-xl text-on-dark-soft">
        This shoreline doesn&apos;t exist — let&apos;s get you back to solid ground.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97]"
      >
        Return home →
      </Link>
    </main>
  );
}
