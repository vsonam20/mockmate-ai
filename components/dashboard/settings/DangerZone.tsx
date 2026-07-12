export default function DangerZone() {
  return (
    <section className="rounded-3xl border border-red-500/30 bg-red-500/5 p-8">

      <h2 className="mb-6 text-2xl font-bold text-red-400">
        ⚠️ Danger Zone
      </h2>

      <p className="mb-6 text-zinc-400">
        Permanently delete your MockMate AI account and all associated data.
      </p>

      <button
        className="
          rounded-2xl
          border
          border-red-500
          px-6
          py-3
          font-semibold
          text-red-400
          transition
          hover:bg-red-500/10
        "
      >
        Delete Account
      </button>

    </section>
  );
}