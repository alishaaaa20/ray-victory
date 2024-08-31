"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar({
  color = "#fda403",
  height = "3px",
}: {
  color?: string;
  height?: string;
}) {
  return (
    <AppProgressBar
      height={height}
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
