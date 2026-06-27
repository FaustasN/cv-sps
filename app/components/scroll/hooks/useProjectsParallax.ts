"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useProjectsParallax(
  sectionRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const kicker = section.querySelector(".projects-kicker");
      const title = section.querySelector(".projects-title");
      const text = section.querySelector(".projects-text");
      const cards = section.querySelectorAll<HTMLElement>(".project-card");

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      if (kicker) {
        intro.from(kicker, {
          y: 18,
          opacity: 0,
          duration: 0.45,
        });
      }

      if (title) {
        intro.from(
          title,
          {
            y: 28,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.12"
        );
      }

      if (text) {
        intro.from(
          text,
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.3"
        );
      }

      cards.forEach((card) => {
        const meta = card.querySelector<HTMLElement>(".project-meta");

        gsap.fromTo(
          card,
          {
            y: 120,
            opacity: 0,
            scale: 0.985,
            clipPath: "inset(18% 0% 0% 0% round 32px)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 32px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: 0.8,
            },
          }
        );

        if (meta) {
          gsap.fromTo(
            meta,
            {
              y: 28,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 76%",
                end: "top 58%",
                scrub: 0.8,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );
}