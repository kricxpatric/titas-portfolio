"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "../data/projects";

export default function Work() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="work"
      className="border-t border-[var(--line)] px-6 py-24 md:px-10 md:py-36"
    >
      {/* SECTION INTRO */}
      <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
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

      {/* WORK GRID */}
      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        {/* PROJECT LIST */}
        <div className="border-t border-[var(--line)]">
          {projects.map((project) => (
            <article
              key={project.number}
              onMouseEnter={() => setActiveProject(project)}
              className="group border-b border-[var(--line)] py-8 transition-all duration-500 md:py-10"
            >
              <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-center">
                {/* NUMBER */}
                <span className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
                  {project.number}
                </span>

                {/* TITLE + CATEGORY */}
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    {project.category}
                  </p>

                  <h3 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--crimson)] md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                {/* ARROW */}
                <span className="text-xl text-[var(--muted)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--crimson)]">
                  ↗
                </span>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6 max-w-2xl md:ml-[70px]">
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
                    {/* MOBILE IMAGE */}
            <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[#111] lg:hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="100vw"
                />
            <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4">
                <span className="bg-black px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white">
                    {project.title}
                </span>
                </div>
            </div>
            </article>
          ))}
        </div>

        {/* DESKTOP PROJECT PREVIEW */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[#111]">
              <Image
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover transition-all duration-700 ease-out"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* project information */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/60">
                  {activeProject.category}
                </p>

                <h3 className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.04em] text-white">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* preview caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Selected project
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                {activeProject.number} / 04
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}