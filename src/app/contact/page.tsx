import type { Metadata } from "next";
import { contact, finalCta } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Teal Carbon Lab",
  description: "Get in touch about collaboration, data, media or restoration partnerships.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow={contact.eyebrow} title={contact.headline} lead={contact.blurb} image={finalCta.image} />

      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-8">
            <div>
              <p className="eyebrow mb-2 text-ink-muted">Email</p>
              <a href={`mailto:${contact.email}`} className="text-lg text-primary">{contact.email}</a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-ink-muted">Visit</p>
              <p className="text-lg text-ink">{contact.address}</p>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
