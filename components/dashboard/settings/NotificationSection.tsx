export default function NotificationSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        🔔 Notifications
      </h2>

      <div className="space-y-5">

        <label className="flex items-center justify-between">
          <span className="text-white">
            Email Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-pink-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-white">
            Interview Reminders
          </span>

          <input
            type="checkbox"
            defaultChecked
            className="h-5 w-5 accent-pink-500"
          />
        </label>

      </div>

    </section>
  );
}