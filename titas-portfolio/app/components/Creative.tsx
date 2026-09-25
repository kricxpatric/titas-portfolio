export default function Creative() {
  return (
    <section
      id="creative"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      {/* SECTION INTRO */}
      <div className="mb-20 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            03 / 06
          </p>

          <h2 className="font-[var(--font-syne)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            BEYOND
            <br />
            <span className="text-[var(--crimson)]">THE CODE.</span>
          </h2>
        </div>
      </div>

      {/* CREATIVE WORK */}
      <div className="grid gap-8 md:grid-cols-2">

        {/* PAINTINGS */}
        <div className="group">
          <div className="mb-5 flex items-end justify-between border-b border-[var(--line)] pb-4">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
                01
              </p>

              <h3 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                PAINTINGS
              </h3>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Personal Work
            </span>
          </div>

          <div className="overflow-hidden border border-[var(--line)] bg-[#111]">
                <img
                    src="/images/creative/paintings.jpg"
                    alt="Painting collage"
                    className="block h-auto w-full"
                />
            </div>
        </div>

        {/* PHOTOGRAPHY */}
        <div className="group">
          <div className="mb-5 flex items-end justify-between border-b border-[var(--line)] pb-4">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
                02
              </p>

              <h3 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                PHOTOGRAPHY
              </h3>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Recent Frames
            </span>
          </div>

          <div className="overflow-hidden border border-[var(--line)] bg-[#111]">
                <img
                    src="/images/creative/photography.jpeg"
                    alt="Photography collage"
                    className="block h-auto w-full"
                />
            </div>
        </div>

      </div>
    </section>
  );
}