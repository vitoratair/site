import { useMessages } from "../i18n/context";
import { SectionIntro } from "./SectionIntro";

export function Projects() {
  const { projects, projectsSectionIntro, sectionMeta } = useMessages();
  const { kicker, title } = sectionMeta.projects;
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/35 via-slate-900/25 to-slate-900/35 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={projectsSectionIntro} />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li
              key={p.title}
              className="card-lift flex flex-col rounded-2xl border border-slate-600/35 bg-slate-800/45 p-6 shadow-md shadow-black/10 backdrop-blur-sm"
            >
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-violet-500/20 bg-violet-500/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-violet-200/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link ? (
                <p className="mt-4">
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    {p.link.label} →
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
