import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionIntro({ kicker, title, description, align = "start" }: Props) {
  const wrap =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl";
  return (
    <Reveal className={wrap}>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
        <span className="text-slate-500">//</span> {kicker}
      </p>
      <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-slate-300">{description}</p>
      ) : null}
    </Reveal>
  );
}
