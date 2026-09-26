export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      {/* SECTION INTRO */}
      <div className="mb-20 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            06 / 06
          </p>

          <h2 className="font-[var(--font-syne)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            LET&apos;S
            <br />
            <span className="text-[var(--crimson)]">CONNECT.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          Have a project, an idea, or simply want to say hello?
          <br />
          I&apos;d love to hear from you.
        </p>
      </div>

      {/* CONTACT DETAILS */}
      <div className="border-t border-[var(--line)]">
        {/* EMAIL */}
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="group flex flex-col gap-3 border-b border-[var(--line)] py-7 transition-opacity hover:opacity-60 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
              Email
            </p>

            <p className="text-lg md:text-xl">
              titashaldar8@gmail.com
            </p>
          </div>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            ↗
          </span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/kricxpatric"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 border-b border-[var(--line)] py-7 transition-opacity hover:opacity-60 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
              GitHub
            </p>

            <p className="text-lg md:text-xl">
              GitHub.com / kricxpatric
            </p>
          </div>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            ↗
          </span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/titas-haldar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 border-b border-[var(--line)] py-7 transition-opacity hover:opacity-60 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
              LinkedIn
            </p>

            <p className="text-lg md:text-xl">
              linkedin.com/in/titas-haldar
            </p>
          </div>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
            ↗
          </span>
        </a>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-16 flex flex-col gap-3 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <span>Designed &amp; built by Titas Haldar</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}