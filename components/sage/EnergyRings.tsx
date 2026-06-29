"use client";

import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function EnergyRings() {
  const ring1 = useRef<Group>(null!);
  const ring2 = useRef<Group>(null!);
  const ring3 = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Inner Ring
    ring1.current.rotation.y = t * 0.45;
    ring1.current.rotation.x = Math.sin(t * 0.6) * 0.2;

    // Middle Ring
    ring2.current.rotation.x = -t * 0.30;
    ring2.current.rotation.z = t * 0.22;

    // Outer Ring
    ring3.current.rotation.z = t * 0.18;
    ring3.current.rotation.y = Math.cos(t * 0.45) * 0.35;
  });

  return (
    <>
      {/* Inner Ring */}
      <group ref={ring1}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.012, 32, 256]} />
          <meshBasicMaterial
            color="#ff5ca8"
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Middle Ring */}
      <group ref={ring2}>
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[1.82, 0.009, 32, 256]} />
          <meshBasicMaterial
            color="#ff9ac8"
            transparent
            opacity={0.55}
          />
        </mesh>
      </group>

      {/* Outer Ring */}
      <group ref={ring3}>
        <mesh rotation={[Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.05, 0.006, 32, 256]} />
          <meshBasicMaterial
            color="#ff2f7d"
            transparent
            opacity={0.32}
          />
        </mesh>
      </group>
    </>
  );
}