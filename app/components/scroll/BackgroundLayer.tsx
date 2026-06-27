"use client";

import React, { RefObject } from "react";

export default function BackgroundLayer({
  bgRef,
}: {
  bgRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={bgRef}
      className="pointer-events-none fixed inset-0 -z-10 bg-[#f8fafc]"
    />
  );
}