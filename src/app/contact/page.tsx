import type { Metadata } from "next";
import { contact } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact — Teal Carbon Lab",
  description: "Get in touch about collaboration, data, media or restoration partnerships.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 bg-zinc-900/60 pt-24 pb-12">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <Image 
          src="/gallery/image101.jpeg" 
          alt="Background" 
          fill 
          className="object-cover object-center blur-2xl scale-110 opacity-70" 
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl rounded-[2rem] bg-white p-3 sm:p-4 shadow-2xl flex flex-col md:flex-row gap-4 mt-8 md:mt-0">
        
        {/* LEFT COLUMN: FORM */}
        <div className="w-full md:w-[45%] flex flex-col justify-center px-6 py-12 md:px-12 md:py-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="font-display text-xl font-bold tracking-tight text-emerald-800 mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block"></span>
              teal carbon lab
            </h2>
            <h1 className="font-display text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Start your<br />collaboration
            </h1>
          </div>
          
          <ContactForm />

          <p className="mt-8 text-center text-sm font-semibold text-gray-500">
            Already a partner? <a href={`mailto:${contact.email}`} className="text-gray-900 hover:underline">Email us</a>
          </p>
        </div>

        {/* RIGHT COLUMN: IMAGE & GLASS TAGS */}
        <div className="relative w-full md:w-[55%] h-[400px] md:h-auto rounded-[1.5rem] overflow-hidden">
          <Image 
            src="/gallery/image101.jpeg" 
            alt="Field work"
            fill
            className="object-cover object-center"
          />

          {/* Glassmorphic Tags overlay */}
          <div className="absolute top-1/4 left-1/4">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] ml-6"></div>
            <div className="h-16 w-px bg-gradient-to-b from-white/80 to-transparent ml-[27px] mb-2"></div>
            <div className="flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white text-sm shadow-xl border border-white/20">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-xs">💧</span>
              <div>
                <p className="text-[10px] text-white/80 font-medium uppercase tracking-wider">Sambhar Lake</p>
                <p className="font-bold">Rajasthan, India</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-12">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-white text-sm shadow-xl border border-white/20">
                <div>
                  <p className="text-[10px] text-white/80 font-medium uppercase tracking-wider text-right">Potential</p>
                  <p className="font-bold text-right">51,700 ha</p>
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-xs">🌱</span>
              </div>
              <div className="h-20 w-px bg-gradient-to-t from-white/80 to-transparent mt-2 mr-2"></div>
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] mr-2"></div>
            </div>
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-gray-900 shadow-2xl">
              Wetlands Research
            </div>
            <div className="h-10 w-px bg-gradient-to-t from-white/80 to-transparent mt-2"></div>
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>

        </div>
      </div>
    </main>
  );
}
