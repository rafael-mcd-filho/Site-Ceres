"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

type ResponsiveDetailsProps = {
  children: ReactNode;
  className: string;
  groupName: string;
  mobileDefaultOpen?: boolean;
};

export function ResponsiveDetails({
  children,
  className,
  groupName,
  mobileDefaultOpen = false,
}: ResponsiveDetailsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const syncExpandedState = () => {
      const details = detailsRef.current;
      if (!details) return;

      if (desktopQuery.matches) {
        details.removeAttribute("name");
        details.open = true;
      } else {
        details.setAttribute("name", groupName);
        details.open = mobileDefaultOpen;
      }
    };

    syncExpandedState();
    desktopQuery.addEventListener("change", syncExpandedState);
    return () => desktopQuery.removeEventListener("change", syncExpandedState);
  }, [groupName, mobileDefaultOpen]);

  const keepExpandedOnDesktop = (event: MouseEvent<HTMLDetailsElement>) => {
    const target = event.target as Element;
    if (
      target.closest("summary") &&
      window.matchMedia("(min-width: 761px)").matches
    ) {
      event.preventDefault();
    }
  };

  return (
    <details
      ref={detailsRef}
      className={className}
      name={groupName}
      open={mobileDefaultOpen}
      onClick={keepExpandedOnDesktop}
    >
      {children}
    </details>
  );
}
