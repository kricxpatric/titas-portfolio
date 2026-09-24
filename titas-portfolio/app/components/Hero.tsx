"use client";

import { useEffect, useState } from "react";

const identities = ["ENGINEER", "DESIGNER", "CREATOR"];

export default function Hero() {
  const [activeIdentity, setActiveIdentity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdentity((current) => (current + 1) % identities.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32"
    >
      {/* Top information */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            01 / 04
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            CSE / UI·UX / Creative Technology
          </p>
        </div>

        <div className="hidden text-right text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] md:block">
          <p>West Bengal</p>
          <p className="mt-1">India</p>
        </div>
      </div>

      {/* Main identity */}
      <div className="relative mt-16">
        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Hello, I&apos;m
        </p>

        <h1 className="font-[var(--font-syne)] text-[clamp(4.2rem,15vw,14rem)] font-bold leading-[0.74] tracking-[-0.085em]">
          TITAS
          <br />
          <span className="text-[var(--crimson)]">HALDAR</span>
        </h1>

        {/* Identity */}
        <div className="mt-10 flex flex-col gap-2 md:absolute md:bottom-1 md:right-0 md:mt-0 md:items-end">
          <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Currently
          </p>

          <div
            key={identities[activeIdentity]}
            className="identity-fade font-[var(--font-syne)] text-2xl font-bold uppercase tracking-[-0.04em] md:text-4xl"
          >
            {identities[activeIdentity]}
          </div>

          <div className="flex gap-2">
            {identities.map((identity, index) => (
              <span
                key={identity}
                className={`h-[2px] w-8 transition-all duration-500 ${
                  index === activeIdentity
                    ? "bg-[var(--crimson)]"
                    : "bg-[var(--line)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="mt-16 flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="max-w-xl font-[var(--font-manrope)] text-sm leading-7 text-[var(--muted)] md:text-base">
            Somewhere between code, design and the things worth remembering.
          </p>

          <div className="mt-5 h-px w-16 bg-[var(--crimson)]" />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Scroll to explore
          </span>

          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--line)] p-1">
            <span className="h-2 w-px animate-bounce bg-[var(--crimson)]" />
          </span>
        </div>
      </div>
    </section>
  );
}