export default function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "DEVELOPMENT",
      skills: [
        "C",
        "Python",
        "Java",
        "JavaScript",
        "React",
        "Next.js",
        "Django",
        "HTML / CSS",
      ],
    },
    {
      number: "02",
      title: "DESIGN",
      skills: [
        "UI / UX",
        "Figma",
        "Visual Design",
        "Responsive Design",
        "Creative Direction",
      ],
    },
    {
      number: "03",
      title: "CLOUD & TOOLS",
      skills: [
        "AWS",
        "Firebase",
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "VS Code",
      ],
    },
    {
      number: "04",
      title: "INTERESTS",
      skills: [
        "Artificial Intelligence",
        "Cybersecurity",
        "Creative Technology",
        "Photography",
        "Digital Art",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      {/* SECTION INTRO */}
      <div className="mb-20 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            04 / 06
          </p>

          <h2 className="font-[var(--font-syne)] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.82] tracking-[-0.07em]">
            WHAT I
            <br />
            <span className="text-[var(--crimson)]">WORK WITH.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          A mix of engineering, design and creative tools that I use to turn
          ideas into digital experiences.
        </p>
      </div>

      {/* SKILL GROUPS */}
      <div className="grid border-t border-[var(--line)] md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.number}
            className="border-b border-[var(--line)] py-10 md:px-8 md:py-12"
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
                {group.number}
              </p>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Skills
              </span>
            </div>

            <h3 className="mb-8 font-[var(--font-syne)] text-2xl font-bold tracking-[-0.04em] md:text-3xl">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--crimson)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}