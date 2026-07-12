export default function PreferenceSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        ⚙️ Preferences
      </h2>

      <div className="space-y-6">

        <div>
          <label className="mb-2 block text-zinc-400">
            Theme
          </label>

          <select
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-black/20
              px-4
              py-3
              text-white
            "
          >
            <option>Dark</option>
            <option>Light (Coming Soon)</option>
          </select>
        </div>

      </div>

    </section>
  );
}