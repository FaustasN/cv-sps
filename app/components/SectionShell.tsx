import React from "react";
import clsx from "clsx";

type SectionShellProps = {
  children: React.ReactNode;
  sectionRef?: React.RefObject<HTMLElement | null>;
  id?: string;
  bg: string;
  className?: string;
  contentClassName?: string;
};

export default function SectionShell({
  children,
  sectionRef,
  id,
  bg,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      data-bg={bg}
      className={clsx(
        "scene min-h-screen w-full px-6 py-24 md:px-10",
        className
      )}
    >
      <div className={clsx("mx-auto max-w-7xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
}