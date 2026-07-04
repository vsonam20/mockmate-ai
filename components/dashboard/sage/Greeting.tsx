interface GreetingProps {
  name: string;
}

export default function Greeting({
  name,
}: GreetingProps) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="space-y-2">
      <h1 className="text-4xl font-bold text-white">
        {greeting},{" "}
        <span className="text-pink-400">
          {name}
        </span>{" "}
        👋
      </h1>

      <p className="text-lg text-zinc-400">
        I'm Sage. Ready to continue your AI/ML
        journey today?
      </p>
    </section>
  );
}