"use client";

import { useState, useEffect } from "react";
import { nav, site } from "@/data/site";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Convert our site nav to what NavItems expects
  const navItems = nav.map((n) => ({ name: n.label, link: n.href }));

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50 w-full pt-4 px-4">
      {/* Desktop Navigation */}
      <NavBody className="rounded-full max-w-[1700px] mx-auto border-none shadow-xl">
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4 ml-auto pr-2">
          <NavbarButton 
            href={site.external.href} 
            variant="primary" 
            className="!bg-primary !text-on-primary border-none text-sm font-semibold hover:scale-95 transition-transform"
          >
            {site.external.label}
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="glass-dark rounded-3xl mx-auto w-full !bg-ocean-abyss/80 backdrop-blur-xl border-none shadow-xl mt-4">
        <MobileNavHeader className="flex justify-between items-center px-4 w-full">
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-ocean-deep border-none text-on-dark w-full px-6 py-6"
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-on-dark hover:text-primary-bright text-xl font-display py-2 transition-colors"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-6">
            <NavbarButton
              href={site.external.href}
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full !bg-primary !text-on-primary"
            >
              {site.external.label}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
