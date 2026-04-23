import { useMessages } from "../i18n/context";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function Services() {
  const { sectionMeta, services, servicesSectionIntro } = useMessages();
  const { kicker, title } = sectionMeta.services;
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-slate-800/40 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={servicesSectionIntro} />
        <ul className="mt-16 grid list-none gap-6 p-0 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.title} className="min-h-0">
              <Reveal className="h-full" delayMs={i * 75}>
                <div className="card-lift h-full rounded-2xl border border-slate-600/35 bg-slate-800/40 p-6 shadow-md shadow-black/15 backdrop-blur-sm sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.summary}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-600/25 pt-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan-400/70" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
