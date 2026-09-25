import Image from "next/image";

export default function AaheliPage() {
  return (
    <main className="min-h-screen bg-[var(--black)] text-[var(--off-white)]">
      {/* HEADER */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            01 / 04
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Food · Brand · Web
          </span>
        </div>

        <h1 className="max-w-6xl font-[var(--font-syne)] text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.8] tracking-[-0.07em]">
          AAHELI&apos;R
          <br />
          <span className="text-[var(--crimson)]">AAHAR</span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <p className="max-w-xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            A digital experience for a homemade food business, bringing the
            warmth of a home kitchen into a modern web experience.
          </p>

          <div className="grid grid-cols-2 gap-6 text-[10px] uppercase tracking-[0.18em]">
            <div>
              <p className="mb-2 text-[var(--muted)]">Role</p>
              <p>UI/UX · Development</p>
            </div>

            <div>
              <p className="mb-2 text-[var(--muted)]">Stack</p>
              <p>HTML · CSS · JavaScript · Flask</p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden border border-[var(--line)]">
          <Image
            src="/projects/aaheli.jpg"
            alt="Aaheli'r Aahar website"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              01 — Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-[var(--font-syne)] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Turning a homemade food business into a digital experience.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Aaheli&apos;R Aahar is a homemade food delivery business based
              around the idea of authentic, home-style food. The website was
              created to give the business a clear digital identity while
              making its menus, ordering information and offerings easy to
              explore.
            </p>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              02 — The Challenge
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-[var(--font-syne)] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Make a small food business feel professional without losing its
              personal character.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
              The experience needed to communicate menus, timings, contact
              details and special offerings clearly while still feeling warm,
              approachable and rooted in the identity of a homemade kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              03 — My Role
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-[var(--font-syne)] text-2xl font-bold">
                UI / UX
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Visual direction, layout, typography, responsive design and
                overall user experience.
              </p>
            </div>

            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-[var(--font-syne)] text-2xl font-bold">
                Development
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Frontend implementation, backend functionality and connecting
                the different parts of the experience.
              </p>
            </div>

            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-[var(--font-syne)] text-2xl font-bold">
                Content
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Organising menus, offerings, contact information and special
                menus into a clear structure.
              </p>
            </div>

            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-[var(--font-syne)] text-2xl font-bold">
                Deployment
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Preparing and deploying the website for real-world use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-[var(--line)] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              Next project
            </p>

            <h2 className="font-[var(--font-syne)] text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              HOSTEL MANAGEMENT
            </h2>
          </div>

          <span className="text-4xl text-[var(--crimson)]">↗</span>
        </div>
      </section>
    </main>
  );
}