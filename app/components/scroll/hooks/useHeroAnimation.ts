"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useHeroAnimation(
  sectionRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const kicker = section.querySelector(".hero-kicker");
      const titlePart1 = section.querySelector(".hero-title-part-1");
      const titlePart2 = section.querySelector(".hero-title-part-2");
      const titlePart2Glow = section.querySelector(".hero-title-part-2-glow");
      const text = section.querySelector(".hero-text");
      const actions = section.querySelector(".hero-actions");

      const card1 = section.querySelector(".hero-highlight-card-1");
      const card2 = section.querySelector(".hero-highlight-card-2");
      const card3 = section.querySelector(".hero-highlight-card-3");

      gsap.set(
        [kicker, titlePart1, titlePart2, text, actions, card1, card2, card3],
        { willChange: "transform, opacity" }
      );

      if (titlePart2Glow) {
        gsap.set(titlePart2Glow, {
          color: "#0f172a",
          textShadow: "0 0 0 rgba(250,204,21,0)",
        });
      }

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (titlePart1) {
        intro.from(titlePart1, {
          y: 56,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (titlePart2) {
        intro.from(
          titlePart2,
          {
            y: 36,
            opacity: 0,
            duration: 0.55,
            ease: "power4.out",
          },
          "+=0.1"
        );
      }

      if (text) {
        intro.from(
          text,
          {
            y: 28,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.08"
        );
      }

      if (card1) {
        intro.from(
          card1,
          {
            y: 40,
            x: -20,
            opacity: 0,
            rotate: -4,
            duration: 0.65,
          },
          "-=0.02"
        );
      }

      if (card2) {
        intro.from(
          card2,
          {
            y: 46,
            x: 20,
            opacity: 0,
            rotate: 4,
            duration: 0.65,
          },
          "-=0.35"
        );
      }

      if (card3) {
        intro.from(
          card3,
          {
            y: 42,
            x: -10,
            opacity: 0,
            rotate: -3,
            duration: 0.65,
          },
          "-=0.3"
        );
      }

      if (kicker || actions) {
        intro.from(
          [kicker, actions].filter(Boolean),
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0,
          },
          "-=0.08"
        );
      }

      if (titlePart2Glow) {
        intro.to(
          titlePart2Glow,
          {
            keyframes: [
              {
                color: "#facc15",
                textShadow: "0 0 0 rgba(250,204,21,0)",
                duration: 0.08,
                ease: "power1.out",
              },
              {
                color: "#fde047",
                textShadow: "0 0 10px rgba(250,204,21,0.45)",
                duration: 0.06,
                ease: "power1.out",
              },
              {
                color: "#eab308",
                textShadow: "0 0 4px rgba(250,204,21,0.2)",
                duration: 0.05,
                ease: "power1.out",
              },
              {
                color: "#fde047",
                textShadow: "0 0 14px rgba(250,204,21,0.55)",
                duration: 0.08,
                ease: "power1.out",
              },
              {
                color: "#facc15",
                textShadow: "0 0 8px rgba(250,204,21,0.28)",
                duration: 0.12,
                ease: "power2.out",
              },
            ],
          },
          "+=0.03"
        );
      }

      if (card1) {
        gsap.to(card1, {
          yPercent: -3.5,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (card2) {
        gsap.to(card2, {
          yPercent: 3,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (card3) {
        gsap.to(card3, {
          yPercent: -2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (card1) {
        scrollTl.to(
          card1,
          {
            y: -40,
            x: 10,
            ease: "none",
          },
          0
        );
      }

      if (card2) {
        scrollTl.to(
          card2,
          {
            y: -70,
            x: -12,
            ease: "none",
          },
          0
        );
      }

      if (card3) {
        scrollTl.to(
          card3,
          {
            y: -55,
            x: 8,
            ease: "none",
          },
          0
        );
      }
    },
    { scope: sectionRef }
  );
}
