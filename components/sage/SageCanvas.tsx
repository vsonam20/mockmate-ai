"use client";

import { Canvas } from "@react-three/fiber";
import SageScene from "./SageScene";

export default function SageCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 50,
      }}
      gl={{ alpha: true }}
      style={{
        background: "transparent",
      }}
    >
      <SageScene />
    </Canvas>
  );
}