"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useContactFocusAnimation(
  sectionRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const kicker = section.querySelector(".contact-kicker");
      const title = section.querySelector(".contact-title");
      const text = section.querySelector(".contact-text");
      const cta = section.querySelector(".contact-cta");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
        defaults: {
          ease: "power2.out",
        },
      });

      if (kicker) {
        tl.from(kicker, {
          y: 20,
          opacity: 0,
          duration: 0.45,
        });
      }

      if (title) {
        tl.from(
          title,
          {
            y: 32,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.12"
        );
      }

      if (text) {
        tl.from(
          text,
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.32"
        );
      }

      if (cta) {
        tl.from(
          cta,
          {
            y: 18,
            opacity: 0,
            scale: 0.96,
            duration: 0.5,
          },
          "-=0.25"
        );

        gsap.to(cta, {
          y: -4,
          repeat: -1,
          yoyo: true,
          duration: 1.6,
          ease: "sine.inOut",
        });
      }
    },
    { scope: sectionRef }
  );
}