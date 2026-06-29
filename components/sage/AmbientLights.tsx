"use client";

export default function AmbientLights() {
  return (
    <>
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
      />

      <pointLight
        position={[0, 0, 4]}
        intensity={3}
        color="#ff5ca8"
      />

      <pointLight
        position={[3, 2, 3]}
        intensity={1.4}
        color="#ffffff"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={1}
        color="#9d4edd"
      />
    </>
  );
}