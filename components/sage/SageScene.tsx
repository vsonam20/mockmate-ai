"use client";

import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import AmbientLights from "./AmbientLights";
import SageCore from "./SageCore";
import EnergyRings from "./EnergyRings";
import FloatingNodes from "./FloatingNodes";
import OrbitParticles from "./OrbitParticles";


export default function SageScene() {
  return (
    <>
      <AmbientLights />

      <SageCore />

      <EnergyRings />

      <FloatingNodes />

      <OrbitParticles />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />

    </>
  );
}