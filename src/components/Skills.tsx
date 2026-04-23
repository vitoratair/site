import { useMessages } from "../i18n/context";
import { SectionIntro } from "./SectionIntro";

export function Skills() {
  const { sectionMeta, skills, skillsIntro } = useMessages();
  const { kicker, title } = sectionMeta.skills;
  return (
    <section id="skills" className="scroll-mt-20 border-t border-slate-800/40 px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={skillsIntro} />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {skills.map((s, i) => (
            <li
              key={s.title}
              className="card-lift group relative overflow-hidden rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/70 to-slate-900/85 p-6 shadow-md shadow-black/15 backdrop-blur-sm sm:p-7"
            >
              <span className="absolute right-5 top-5 font-mono text-[10px] font-medium text-violet-500/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="absolute -right-10 -top-10 size-36 rounded-full bg-violet-500/10 blur-2xl transition duration-500 group-hover:bg-cyan-400/10"
                aria-hidden
              />
              <h3 className="relative font-display text-xl font-medium text-white">{s.title}</h3>
              <p className="relative mt-4 text-slate-300 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
