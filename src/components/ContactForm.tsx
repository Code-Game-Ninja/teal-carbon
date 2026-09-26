"use client";

import { useState } from "react";

type Status = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to an email service / API route
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-xl">
          ✓
        </div>
        <p className="font-bold text-lg text-gray-900 mb-2">Message received</p>
        <p className="text-gray-500">Thanks! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-full border-none bg-gray-100/80 px-5 py-3.5 text-sm font-medium text-gray-900 placeholder:text-gray-500 outline-none transition-all focus:bg-gray-200/80 focus:ring-2 focus:ring-emerald-600/20";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Social / Extra Links (Like in the screenshot) */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="#" className="w-12 h-8 rounded-full bg-gray-100/80 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <span className="text-xs font-bold">in</span>
        </a>
        <a href="#" className="w-12 h-8 rounded-full bg-gray-100/80 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <span className="text-xs font-bold">𝕏</span>
        </a>
        <a href="#" className="w-12 h-8 rounded-full bg-gray-100/80 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <span className="text-xs font-bold">f</span>
        </a>
      </div>
      
      <div className="flex items-center gap-4 mb-2">
        <div className="flex-1 h-px bg-gray-100"></div>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-gray-100"></div>
      </div>

      <input 
        required 
        name="name" 
        placeholder="Full name" 
        className={field} 
      />
      
      <input 
        required 
        type="email" 
        name="email" 
        placeholder="Email address" 
        className={field} 
      />
      
      <div className="relative">
        <textarea 
          required 
          name="message" 
          placeholder="Message" 
          rows={3} 
          className={`${field} rounded-3xl resize-none py-4`} 
        />
      </div>

      <button
        type="submit"
        data-cursor="Send"
        className="mt-2 w-full rounded-full bg-[#3B6654] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-transform active:scale-[0.98] hover:bg-[#2d4d3f]"
      >
        Send
      </button>
    </form>
  );
}
