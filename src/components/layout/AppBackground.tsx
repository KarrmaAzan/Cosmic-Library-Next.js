"use client";

import dynamic from "next/dynamic";

const StarsBackground = dynamic(
  () => import("../../components/three/StarsBackground"),
  { ssr: false }
);

export default function AppBackground() {
  return <StarsBackground />;
}