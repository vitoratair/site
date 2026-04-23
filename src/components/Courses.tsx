import { useMessages } from "../i18n/context";
import { SectionIntro } from "./SectionIntro";

export function Courses() {
  const { courses, coursesIntro, sectionMeta } = useMessages();
  const { kicker, title } = sectionMeta.courses;
  return (
    <section
      id="courses"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/45 via-slate-800/30 to-slate-900/30 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={coursesIntro} />
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {courses.map((name, i) => (
            <div
              key={name}
              className="card-lift flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-slate-600/35 bg-slate-800/50 px-3 py-8 text-center shadow-md shadow-black/10 backdrop-blur-sm sm:min-h-[160px]"
            >
              <span className="font-mono text-[10px] text-violet-500/45">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display mt-2 text-lg font-medium text-cyan-50 sm:text-xl">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
