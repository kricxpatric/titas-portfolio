import { projects } from "../data/projects";

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            02 / 04
          </p>

          <h2 className="font-[var(--font-syne)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            SELECTED
            <br />
            <span className="text-[var(--crimson)]">WORK</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
          A collection of things I&apos;ve built, designed and brought to
          life.
        </p>
      </div>

      <div className="border-t border-[var(--line)]">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group border-b border-[var(--line)] py-8 transition-all duration-500 hover:px-4 md:py-10"
          >
            <div className="grid gap-5 md:grid-cols-[80px_1fr_auto] md:items-center">
              <span className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
                {project.number}
              </span>

              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  {project.category}
                </p>

                <h3 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--crimson)] md:text-5xl">
                  {project.title}
                </h3>
              </div>

              <span className="hidden text-2xl text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[var(--crimson)] md:block">
                ↗
              </span>
            </div>

            <div className="mt-6 max-w-2xl pl-0 md:ml-20">
              <p className="text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}