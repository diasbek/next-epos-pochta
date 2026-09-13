"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Renders children only from `min-width` up — avoids downloading desktop-only assets on mobile. */
export function MediaMinWidth({
  minWidthPx,
  children,
  fallback = null,
}: {
  minWidthPx: number;
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidthPx}px)`);
    const sync = () => setMatch(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [minWidthPx]);

  if (!match) return fallback;
  return children;
}
