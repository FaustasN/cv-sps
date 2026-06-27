"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useGlobalBackground(
  rootRef: RefObject<HTMLDivElement | null>,
  bgRef: RefObject<HTMLDivElement | null>
) {
  useGSAP(
    () => {
      const root = rootRef.current;
      const bg = bgRef.current;

      if (!root || !bg) return;

      const sections = Array.from(root.querySelectorAll<HTMLElement>(".scene"));

      if (!sections.length) return;

      const setBackgroundColor = (color: string) => {
        gsap.to(bg, {
          backgroundColor: color,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      sections.forEach((section, index) => {
        const currentColor = section.dataset.bg;
        if (!currentColor) return;

        if (index === 0) {
          gsap.set(bg, { backgroundColor: currentColor });
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setBackgroundColor(currentColor),
          onEnterBack: () => setBackgroundColor(currentColor),
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: rootRef }
  );
}