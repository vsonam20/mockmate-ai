"use client";

import { Float } from "@react-three/drei";

export default function FloatingNodes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[2.3, 1.2, 0]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshBasicMaterial color="#ff7ac2" />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={3} floatIntensity={4}>
        <mesh position={[-2.2, -1, 0]}>
          <sphereGeometry args={[0.06, 32, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={5}>
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshBasicMaterial color="#ff4fa3" />
        </mesh>
      </Float>

      <Float speed={4} rotationIntensity={4} floatIntensity={2}>
        <mesh position={[0, -2.2, 0]}>
          <sphereGeometry args={[0.07, 32, 32]} />
          <meshBasicMaterial color="#ffb6d9" />
        </mesh>
      </Float>
    </>
  );
}