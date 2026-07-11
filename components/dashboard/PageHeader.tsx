interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>
    </div>
  );
}