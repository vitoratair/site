import { useMessages } from "../i18n/context";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function About() {
  const { about, sectionMeta } = useMessages();
  const { kicker, title } = sectionMeta.about;
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/50 via-slate-800/35 to-slate-900/25 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={about.intro} />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {about.columns.map((col, i) => (
            <Reveal key={col.title} className="min-h-0" delayMs={i * 90}>
              <article className="card-lift h-full rounded-2xl border border-slate-600/35 bg-slate-800/45 p-6 shadow-md shadow-black/10 backdrop-blur-sm">
                <h3 className="font-display text-xl font-medium text-cyan-100">{col.title}</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">{col.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
