export default function DashboardBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:
            linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Pink Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-pink-600/15
          blur-[160px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-rose-500/10
          blur-[140px]
        "
      />
    </>
  );
}