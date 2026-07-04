import {
  Sparkles,
  Target,
  FileSearch,
  Mic,
} from "lucide-react";


interface SageHeroData {
  name: string;
  atsScore: number;
  latestInterviewScore: number;
  targetRole?: string;
  targetCompany?: string;
}

interface SageHeroProps {
  hero: SageHeroData;
}

export default function SageHero({
  hero,
}: SageHeroProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/15">
          <Sparkles
            className="text-pink-400"
            size={30}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            Sage AI
          </h1>

          <p className="mt-1 text-zinc-400">
            Your Personal AI Career Mentor
          </p>
        </div>

      </div>
      
      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 p-5">

          <FileSearch
            className="mb-3 text-pink-400"
            size={22}
          />

          <p className="text-sm text-zinc-400">
            Resume Score
          </p>

          <p className="mt-1 text-3xl font-bold text-white">
            {hero.atsScore}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 p-5">

          <Mic
            className="mb-3 text-pink-400"
            size={22}
          />

          <p className="text-sm text-zinc-400">
            Interview Score
          </p>

          <p className="mt-1 text-3xl font-bold text-white">
            {hero.latestInterviewScore}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 p-5">

          <Target
            className="mb-3 text-pink-400"
            size={22}
          />

          <p className="text-sm text-zinc-400">
            Target Role
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {hero.targetRole ?? "Not Selected"}
          </p>

        </div>

      </div>

    </section>
  );
}