interface SectionTitleProps {
  title: string;
  description: string;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}