function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-white/10 ${className}`}
    />
  );
}

export default function DashboardLoading() {
  return (
    <main className="space-y-10">

      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Skeleton className="mb-6 h-12 w-12 rounded-xl" />

            <Skeleton className="mb-4 h-8 w-24" />

            <Skeleton className="mb-3 h-4 w-32" />

            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </section>

      {/* Large Cards */}
      <section className="grid gap-6 xl:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <Skeleton className="mb-6 h-7 w-52" />

            <div className="space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-11/12" />
              <Skeleton className="h-5 w-9/12" />
              <Skeleton className="h-5 w-8/12" />
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}