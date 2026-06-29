type Props = {
  name: string;
};

export default function CompanyCard({ name }: Props) {
  return (
    <div
      className="
      min-w-[180px]
      h-24
      rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:bg-pink-500/10
      hover:border-pink-500/40
      hover:scale-105
      "
    >
      <span className="text-xl font-semibold text-zinc-300 hover:text-white">
        {name}
      </span>
    </div>
  );
}