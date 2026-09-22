import type { Metadata } from "next";
import { fraunces, cormorant, manrope, plexMono } from "@/lib/fonts";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${manrope.variable} ${plexMono.variable}`}
    >
      <body className="bg-ocean-abyss">
        <a href="#main" className="skip-link">Skip to content</a>
        <CustomCursor />
        <Nav />
        <SmoothScroll>
          {/* framed rounded container over dark backdrop (ref: Mindloop / Opnest) */}
          <div className="frame">
            <div id="main">{children}</div>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
