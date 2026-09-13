"use client";

import dynamic from "next/dynamic";

/** Toast CSS/JS off the critical path — load after hydration. */
export const AppToaster = dynamic(
  () =>
    import("@/components/providers/AppToasterImpl").then((m) => m.AppToasterImpl),
  { ssr: false },
);
