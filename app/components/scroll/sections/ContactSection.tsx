"use client";

import React, { useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import SectionShell from "../../SectionShell";
import { contactContent } from "../data/content";
import { useContactFocusAnimation } from "../hooks/useContactFocusAnimation";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useContactFocusAnimation(sectionRef);

  return (
    <SectionShell
      id="contact"
      sectionRef={sectionRef}
      bg="#97deaa"
      className="flex items-center"
      contentClassName="max-w-4xl text-center"
    >
      <div>
        <p className="contact-kicker text-xs font-medium uppercase tracking-[0.3em] text-slate-700/60">
          {contactContent.kicker}
        </p>

        <h2 className="contact-title mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-6xl">
          {contactContent.title}
        </h2>

        <p className="contact-text mt-6 text-lg leading-8 text-slate-900/70 md:text-xl">
          {contactContent.text}
        </p>

        <div className="mt-10">
          <a
            href={contactContent.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("start_conversation_click", { location: "contact" })
            }
            className="contact-cta rounded-full bg-slate-950 px-8 py-4 text-sm font-medium text-white"
          >
            {contactContent.cta}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
