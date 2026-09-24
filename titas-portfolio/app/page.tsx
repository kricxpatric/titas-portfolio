export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <div className="flex min-h-[80vh] flex-col justify-between">
        <p className="font-[var(--font-manrope)] text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
          CSE / UI·UX / Creative Technology
        </p>

        <div>
          <h1 className="font-[var(--font-syne)] text-[clamp(4rem,14vw,13rem)] font-bold leading-[0.78] tracking-[-0.07em]">
            TITAS
            <br />
            <span className="text-[var(--crimson)]">HALDAR</span>
          </h1>
        </div>

        <div className="flex items-end justify-between gap-8">
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Engineer, designer and creator exploring the space between
            technology, visual experiences and the things that make us feel.
          </p>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:block">
            Kolkata · India
          </span>
        </div>
      </div>
    </main>
  );
}