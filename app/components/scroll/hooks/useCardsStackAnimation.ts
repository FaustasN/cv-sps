"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useCardsStackAnimation(
  sectionRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const kicker = section.querySelector(".capabilities-kicker");
      const title = section.querySelector(".cards-title");
      const text = section.querySelector(".capabilities-text");

      const cards = gsap.utils.toArray<HTMLElement>(".feature-card", section);

      const cardRotations = [-3.5, 2.5, -2, 3];

      gsap.set(cards, {
        opacity: 1,
        visibility: "visible",
        transformOrigin: "center center",
        rotate: (i) => cardRotations[i % cardRotations.length],
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.7)",
        color: "#020617",
        borderColor: "rgba(255,255,255,0.4)",
      });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
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
            y: 32,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.15"
        );
      }

      if (text) {
        intro.from(
          text,
          {
            y: 24,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35"
        );
      }

      intro.from(
        cards,
        {
          x: (i) => [-42, -14, 14, 42][i % 4],
          y: 95,
          scale: 0.94,
          rotate: (i) => cardRotations[i % cardRotations.length] * 2.2,
          stagger: {
            each: 0.12,
            from: "start",
          },
          duration: 0.85,
          ease: "power3.out",
          overwrite: "auto",
        },
        "-=0.08"
      );

      const colorLoop = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
        paused: true,
        defaults: {
          ease: "power2.inOut",
        },
      });

      cards.forEach((card, index) => {
        const cardTitle = card.querySelector(".feature-card-title");
        const cardText = card.querySelector(".feature-card-text");

        colorLoop
          .to(card, {
            scale: 1.055,
            y: -10,
            backgroundColor: "#020617",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.2)",
            boxShadow: "0 30px 80px rgba(15, 23, 42, 0.28)",
            duration: 0.55,
          })
          .to(
            cardTitle,
            {
              color: "#ffffff",
              duration: 0.45,
            },
            "<"
          )
          .to(
            cardText,
            {
              color: "rgba(255,255,255,0.72)",
              duration: 0.45,
            },
            "<"
          )
          .to({}, { duration: 0.9 })
          .to(card, {
            scale: 1,
            y: 0,
            backgroundColor: "rgba(255,255,255,0.7)",
            color: "#020617",
            borderColor: "rgba(255,255,255,0.4)",
            boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
            duration: 0.55,
          })
          .to(
            cardTitle,
            {
              color: "#020617",
              duration: 0.45,
            },
            "<"
          )
          .to(
            cardText,
            {
              color: "rgba(15,23,42,0.7)",
              duration: 0.45,
            },
            "<"
          )
          .to({}, { duration: index === cards.length - 1 ? 0.9 : 0.35 });
      });

      intro.eventCallback("onComplete", () => {
        gsap.set(cards, {
          x: 0,
          y: 0,
          opacity: 1,
          visibility: "visible",
          scale: 1,
          rotate: (i) => cardRotations[i % cardRotations.length],
        });

        colorLoop.play(0);
      });

      return () => {
        colorLoop.kill();
        intro.kill();
      };
    },
    { scope: sectionRef }
  );
}
