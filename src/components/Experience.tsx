import { useMessages } from "../i18n/context";
import { SectionIntro } from "./SectionIntro";

export function Experience() {
  const { sectionMeta, timeline } = useMessages();
  const { kicker, title } = sectionMeta.experience;
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-800/40 bg-slate-950/25 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <SectionIntro kicker={kicker} title={title} />
        <div className="mt-16 rounded-3xl border border-slate-600/30 bg-slate-800/30 px-5 py-10 shadow-lg shadow-black/20 backdrop-blur-sm sm:px-10 sm:py-12">
          <ol className="relative ml-2 space-y-14 border-l border-violet-400/30 pl-9 sm:ml-3 sm:pl-10">
            {timeline.map((entry, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[38px] top-1.5 size-[18px] rounded-full border-2 border-cyan-400 bg-slate-900 shadow-[0_0_14px_rgba(34,211,238,0.4),0_0_20px_rgba(167,139,250,0.2)] sm:-left-[42px]"
                  aria-hidden
                />
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-400/90">
                  {entry.date}
                </p>
                <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">
                  <span className="font-semibold">{entry.role}</span>
                  {entry.org ? (
                    <>
                      {" "}
                      <span className="text-slate-500">·</span>{" "}
                      <span className="font-normal text-slate-500">{entry.org}</span>
                    </>
                  ) : null}
                </h3>
                <div className="mt-4 space-y-3 text-slate-300 leading-relaxed">
                  {entry.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {entry.link ? (
                  <p className="mt-4">
                    <a
                      href={entry.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-violet-400 underline-offset-4 hover:text-cyan-300 hover:underline"
                    >
                      {entry.link.label}
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
