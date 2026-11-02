import type { Metadata } from "next";
import Script from "next/script";
import { fraunces, cormorant, manrope, plexMono } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL("https://tealcarbon.example"),
  title: {
    default: "Teal Carbon Lab — Coastal & wetland carbon science",
    template: "%s",
  },
  description:
    "A research lab measuring and restoring carbon in mangroves, saltmarshes, seagrass and wetlands.",
  openGraph: {
    title: "Teal Carbon Lab",
    description:
      "Measuring and restoring carbon in mangroves, saltmarshes, seagrass and wetlands.",
    type: "website",
    siteName: "Teal Carbon Lab",
  },
  twitter: { card: "summary_large_image", title: "Teal Carbon Lab" },
  verification: {
    other: {
      "shravani-site-verification": "shr_376c557841d88cfde5c3bfcfaba8332020479253ebaa7a00",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fraunces.variable, cormorant.variable, manrope.variable, plexMono.variable, "font-sans", geist.variable)}
    >
      <body className="bg-cream antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <CustomCursor />
        <Nav />
        <SmoothScroll>
          <div id="main">{children}</div>
          <Footer />
        </SmoothScroll>
        <Script
          src="https://shravani.xyz/widget/widget.js?id=38dd4575-7a3d-4e13-8cec-e6cb388fd905"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
