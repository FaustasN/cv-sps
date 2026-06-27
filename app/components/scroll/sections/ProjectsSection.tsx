"use client";

import React, { useRef } from "react";
import { Github } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import SectionShell from "../../SectionShell";
import { projectsContent } from "../data/content";
import { useProjectsParallax } from "../../scroll/hooks/useProjectsParallax";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useProjectsParallax(sectionRef);

  return (
    <SectionShell
      id="projects"
      sectionRef={sectionRef}
      bg="#DDF7F0"
      className="flex items-center"
    >
      <div>
        <p className="projects-kicker text-xs font-medium uppercase tracking-[0.3em] text-slate-600/50">
          {projectsContent.kicker}
        </p>

        <h2 className="projects-title mt-4 max-w-4xl text-4xl font-semibold text-slate-950 md:text-6xl">
          {projectsContent.title}
        </h2>

        <p className="projects-text mt-6 max-w-3xl text-lg leading-8 text-slate-900/70">
          {projectsContent.text}
        </p>

        <div className="mt-14 grid gap-8">
          {projectsContent.items.map((project, index) => (
            <article
              key={project.title}
              className="project-card grid gap-6 rounded-[32px] border border-white/40 bg-white/75 p-6 shadow-2xl backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-8"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-600/45">
                  Project {index + 1}
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-900/72">
                  {project.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-meta group/meta rounded-[24px] border border-black/5 bg-slate-950 p-6 text-white shadow-inner">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Role
                  </p>
                  <p className="mt-2 text-lg font-medium">{project.role}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Stack
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/80">
                    {project.stack}
                  </p>
                </div>

                <div className="relative mt-8 flex">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    onClick={() =>
                      trackEvent("project_github_click", {
                        project_index: index + 1,
                        project_title: project.title,
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-sm transition duration-200 hover:bg-slate-100 active:scale-[0.99] md:translate-y-2 md:opacity-0 md:group-hover/meta:translate-y-0 md:group-hover/meta:opacity-100"
                  >
                    <Github aria-hidden="true" className="size-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
