"use client";

import React, { useRef } from "react";
import SectionShell from "../../SectionShell";
import { capabilitiesContent } from "../data/content";
import { useCardsStackAnimation } from "../hooks/useCardsStackAnimation";

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useCardsStackAnimation(sectionRef);

  return (
    <SectionShell
      id="capabilities"
      sectionRef={sectionRef}
      bg="#dbeafe"
      className="flex items-center"
    >
      <div>
        <p className="capabilities-kicker text-xs font-medium uppercase tracking-[0.3em] text-slate-700/60">
          {capabilitiesContent.kicker}
        </p>

        <h2 className="cards-title mt-4 max-w-5xl text-4xl font-semibold leading-[1.02] text-slate-950 md:text-6xl">
          {capabilitiesContent.title}
        </h2>

        <p className="capabilities-text mt-6 max-w-2xl text-lg leading-8 text-slate-900/70">
          {capabilitiesContent.text}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilitiesContent.items.map((item) => (
            <article
              key={item.title}
              className="feature-card rounded-[28px] border border-white/40 bg-white/70 p-8 text-slate-950 shadow-xl backdrop-blur"
            >
              <h3 className="feature-card-title text-2xl font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="feature-card-text mt-4 text-base leading-7 text-slate-900/70">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell> 
  );
}