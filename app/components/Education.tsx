export default function Education() {
  const education = [
    {
      number: "01",
      period: "2024 — PRESENT",
      degree: "B.TECH — COMPUTER SCIENCE & ENGINEERING",
      institution: "MAKAUT UNIVERSITY",
      college: "Techno Main Salt Lake, Kolkata",
      detail: "Currently pursuing my undergraduate degree in Computer Science & Engineering.",
    },
    {
      number: "02",
      period: "2021 — 2024",
      degree: "DIPLOMA — COMPUTER SCIENCE & TECHNOLOGY",
      institution: "WBSCTE - WEST BENGAL STATE COUNCIL OF TECHNICAL EDUCATION",
      college: "Womens Polytechnic Chandernagore, Hooghly",
      detail: "Completed Diploma in Computer Science & Technology.",
    },
    {
      number: "03",
      period: "2021",
      degree: "SECONDARY EDUCATION",
      institution: "WBBSE - WEST BENGAL BOARD OF SECONDARY EDUCATION",
      college: "Singur Golap Mohini Mallick Girls' High School, Hooghly",
      detail: "Completed secondary education.",
    },
  ];

  return (
    <section
      id="education"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      {/* SECTION INTRO */}
      <div className="mb-20 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            05 / 06
          </p>

          <h2 className="font-[var(--font-syne)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            THE
            <br />
            <span className="text-[var(--crimson)]">JOURNEY.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          The academic path that shaped my foundation in technology,
          problem-solving and engineering.
        </p>
      </div>

      {/* EDUCATION TIMELINE */}
      <div className="border-t border-[var(--line)]">
        {education.map((item) => (
          <div
            key={item.number}
            className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[0.15fr_0.3fr_1fr] md:items-start md:py-14"
          >
            {/* NUMBER */}
            <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
              {item.number}
            </p>

            {/* PERIOD */}
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              {item.period}
            </p>

            {/* DETAILS */}
            <div>
              <h3 className="mb-4 max-w-3xl font-[var(--font-syne)] text-2xl font-bold leading-tight tracking-[-0.04em] md:text-4xl">
                {item.degree}
              </h3>

              <p className="mb-2 text-sm uppercase tracking-[0.12em]">
                {item.institution}
              </p>

              {item.college && (
                <p className="mb-5 text-sm text-[var(--muted)]">
                  {item.college}
                </p>
              )}

              <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}