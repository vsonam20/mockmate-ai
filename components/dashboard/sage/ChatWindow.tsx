interface ChatWindowProps {
  children: React.ReactNode;
}

export default function ChatWindow({
  children,
}: ChatWindowProps) {
  return (
    <section className="space-y-6">
      {children}
    </section>
  );
}