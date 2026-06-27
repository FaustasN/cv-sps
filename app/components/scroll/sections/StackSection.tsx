"use client";

import React, { useRef } from "react";
import SectionShell from "../../SectionShell";
import { stackContent } from "../data/content";
import { useStackReveal } from "../hooks/useStackReveal";

export default function StackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useStackReveal(sectionRef);

  return (
    <SectionShell
      sectionRef={sectionRef}
      bg="#DDF7F0"
      className="flex items-center"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-700/55">
          {stackContent.kicker}
        </p>

        <h2 className="stack-title mt-4 max-w-4xl text-4xl font-semibold text-slate-950 md:text-6xl">
          {stackContent.title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-900/70">
          {stackContent.text}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stackContent.groups.map((group) => (
            <article
              key={group.title}
              className="stack-group rounded-[28px] border border-white/50 bg-white/75 p-8 shadow-xl backdrop-blur"
            >
              <h3 className="text-2xl font-semibold text-slate-950">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-lg text-slate-900/65">
          My stack is practical: I choose tools based on fit, clarity, and implementation value.
        </p>
      </div>
    </SectionShell>
  );
}