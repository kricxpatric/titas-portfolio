import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full border-t border-[var(--line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* SECTION LABEL */}
        <div className="mb-16 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
            02 / About
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Beyond the Code
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          {/* LEFT — INTRO */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Hello, I'm Titas.
            </p>

            <h2 className="max-w-4xl font-[var(--font-syne)] text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              More than
              <br />
              <span className="text-[var(--crimson)]">just code.</span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I'm a CSE student, engineer and UI/UX enthusiast who enjoys
              building digital experiences that feel as good as they look.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              But technology is only one side of me. I love painting, 
              reimagining the world through what I draw, 
              and capturing the little moments that make life memorable.
            </p>

            {/* SMALL IDENTITY ROW */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--line)] pt-6">
              <span className="text-[10px] uppercase tracking-[0.2em]">
                Engineer
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em]">
                UI / UX
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em]">
                Creator
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em]">
                Visual Storyteller
              </span>
            </div>
          </div>

          {/* RIGHT — PORTRAIT */}
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-[82%] aspect-[3/4] overflow-hidden rounded-[28px]">
                <Image
                    src="/images/profile.png" alt="Titas Haldar" fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/5" />
            </div>

            <div className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
                <span>Personal Archive</span>
                <span>02 / 04</span>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}