"use client";

import { Float } from "@react-three/drei";

export default function OrbitParticles() {
  const particles = Array.from({ length: 18 });

  return (
    <>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const radius = 2.1 + Math.random() * 0.5;

        return (
          <Float
            key={i}
            speed={1 + Math.random() * 3}
            rotationIntensity={2}
            floatIntensity={2}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 2,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.03, 16, 16]} />

              <meshBasicMaterial
                color={i % 2 === 0 ? "#ff5ca8" : "#ffffff"}
              />
            </mesh>
          </Float>
        );
      })}
    </>
  );
}