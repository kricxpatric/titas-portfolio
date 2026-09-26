"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Creative", href: "#creative" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10">
      <nav className="flex items-center justify-between">
        <a
          href="#top"
          className="font-[var(--font-syne)] text-lg font-bold tracking-[-0.04em]"
        >
          TH<span className="text-[var(--crimson)]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--off-white)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
        >
          <span className="text-xs">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-0 flex min-h-screen w-full flex-col justify-center bg-[var(--black)] px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[var(--line)] py-5 font-[var(--font-syne)] text-4xl"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}