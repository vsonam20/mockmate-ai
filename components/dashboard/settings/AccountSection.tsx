import EditNameForm from "./EditNameForm";

interface Props {
  fullName: string;
  email: string;
}

export default function AccountSection({
  fullName,
  email,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        👤 Account
      </h2>

      <EditNameForm
        fullName={fullName}
        email={email}
      />

    </section>
  );
}