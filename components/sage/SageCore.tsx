"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SageCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.003;

    meshRef.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.03
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.05, 128, 128]} />

      <meshPhysicalMaterial
      color="#ff6bb5"
      emissive="#ff2d78"
      emissiveIntensity={0.35}
      roughness={0.22}
      metalness={0.12}
      clearcoat={1}
      clearcoatRoughness={0.08}
      transmission={0.82}
      thickness={0.8}
      ior={1.35}
      />
    </mesh>
  );
}