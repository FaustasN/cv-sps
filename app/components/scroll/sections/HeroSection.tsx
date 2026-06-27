"use client";

import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import SectionShell from "../../SectionShell";
import { heroContent } from "../data/content";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useHeroAnimation(sectionRef);

  return (
    <SectionShell
      id="home"
      sectionRef={sectionRef}
      bg="#f8fafc"
      className="flex items-center"
      contentClassName="grid grid-cols-1 items-center gap-12 md:min-h-screen md:grid-cols-2"
    >
      <div>
        <p className="hero-kicker text-xs font-medium uppercase tracking-[0.3em] text-black/45">
          {heroContent.kicker}
        </p>

        <h1 className="hero-title mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] text-slate-950 md:text-7xl">
          <span className="hero-title-part-1 block">{heroContent.title1}</span>
          <span className="hero-title-part-2 block">
            <span className="hero-title-part-2-glow inline-block">
                     {heroContent.title2}
               </span>
             </span>
        </h1>

        <p className="hero-text mt-6 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
          {heroContent.text}
        </p>

        <div className="hero-actions mt-10 flex flex-wrap gap-4">
          <a
            href={heroContent.cvHref}
            download={heroContent.cvDownloadName}
            onClick={() => trackEvent("cv_button_click", { location: "hero" })}
            className="hero-btn-primary rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white"
          >
            {heroContent.primaryCta}
          </a>
          <a
            href="#contact"
            onClick={() => trackEvent("contact_me_click", { location: "hero" })}
            className="hero-btn-secondary rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-slate-950"
          >
            {heroContent.secondaryCta}
          </a>
        </div>
      </div>

      <div className="hero-highlights relative hidden min-h-[520px] md:block">
        <div className="hero-highlight-card hero-highlight-card-1 absolute left-6 top-10 w-56 rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-black/40">
            01
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">
            {heroContent.highlights[0]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-black/60">
            Ideas shaped into clear product direction.
          </p>
        </div>

        <div className="hero-highlight-card hero-highlight-card-2 absolute right-8 top-36 w-64 rounded-[28px] border border-black/10 bg-slate-950 p-6 text-white shadow-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-white/40">
            02
          </p>
          <h3 className="mt-4 text-2xl font-semibold">
            {heroContent.highlights[1]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Built with structure that can grow.
          </p>
        </div>

        <div className="hero-highlight-card hero-highlight-card-3 absolute bottom-12 left-20 w-60 rounded-[28px] border border-black/10 bg-white p-6 shadow-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-black/40">
            03
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">
            {heroContent.highlights[2]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-black/65">
            Visual clarity with strong hierarchy.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
