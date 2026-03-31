"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Box } from "@mui/material";

export default function StarsBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={250}
          depth={80}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />
      </Canvas>
    </Box>
  );
}