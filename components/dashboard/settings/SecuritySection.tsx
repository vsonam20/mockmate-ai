import ChangePasswordForm from "./ChangePasswordForm";

export default function SecuritySection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-2 text-2xl font-bold text-white">
        🔒 Security
      </h2>

      <p className="mb-8 text-zinc-400">
        Update your password to keep your account secure.
      </p>

      <ChangePasswordForm />

    </section>
  );
}