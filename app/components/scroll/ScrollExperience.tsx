"use client";

import React, { useEffect, useRef } from "react";
import BackgroundLayer from "./BackgroundLayer";
import { useGlobalBackground } from "./hooks/useGlobalBackground";

export default function ScrollExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGlobalBackground(rootRef, bgRef);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-x-hidden">
      <BackgroundLayer bgRef={bgRef} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
