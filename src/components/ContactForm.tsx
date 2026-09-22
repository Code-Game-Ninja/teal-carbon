"use client";

import { useState } from "react";

type Status = "idle" | "sent";

/**
 * Placeholder contact form — no backend wired yet.
 * Validates required fields client-side and shows a success state.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to an email service / API route
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-hairline-light bg-cream p-10">
        <p className="eyebrow mb-3 text-primary">Message received</p>
        <p className="text-lg text-ink">Thanks — we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-hairline-light bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-xs text-ink-muted">Name</span>
          <input required name="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-xs text-ink-muted">Email</span>
          <input required type="email" name="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block font-mono text-xs text-ink-muted">Subject</span>
        <input name="subject" className={field} />
      </label>
      <label className="block">
        <span className="mb-2 block font-mono text-xs text-ink-muted">Message</span>
        <textarea required name="message" rows={5} className={field} />
      </label>
      <button
        type="submit"
        data-cursor="Send"
        className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97]"
      >
        Send message →
      </button>
    </form>
  );
}
