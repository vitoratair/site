import { useMessages } from "../i18n/context";
import type { Messages } from "../locales/pt";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

type ExpRole = Messages["experience"]["roles"][number];

function RoleTimeline({ roles, keyPrefix }: { roles: ExpRole[]; keyPrefix: string }) {
  return (
    <ol className="space-y-10">
      {roles.map((role, i) => (
        <li key={`${keyPrefix}-${i}`} className="border-l border-slate-600/50 pl-4 sm:pl-5">
          <div className="grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-3.5">
            <span
              className="col-start-1 row-start-1 size-2 self-center rounded-full bg-cyan-400/90 ring-4 ring-slate-900/80"
              aria-hidden
            />
            <p className="col-start-2 row-start-1 min-w-0 text-sm leading-snug text-slate-400 sm:leading-normal">
              {role.tenure}
              <span className="text-slate-600"> · </span>
              {role.location}
            </p>
            <h3 className="col-start-2 row-start-2 mt-3 font-display text-lg font-semibold leading-snug text-white">
              {role.company}
            </h3>
            <p className="col-start-2 row-start-3 mt-1 text-sm text-slate-500">{role.title}</p>
            <ul className="col-start-2 row-start-4 mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-300 marker:text-slate-600">
              {role.lines.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  const { experience, sectionMeta } = useMessages();
  const { kicker, title } = sectionMeta.experience;
  const roles = experience.roles;
  const splitAt = Math.ceil(roles.length / 2);
  const rolesLeft = roles.slice(0, splitAt);
  const rolesRight = roles.slice(splitAt);

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/40 via-slate-800/28 to-slate-900/35 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro kicker={kicker} title={title} description={experience.blurb} />
        <Reveal className="mt-12 min-w-0" delayMs={80}>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <RoleTimeline roles={rolesLeft} keyPrefix="exp-l" />
            <RoleTimeline roles={rolesRight} keyPrefix="exp-r" />
          </div>
          <p className="mt-12 border-t border-slate-600/30 pt-8">
            <a
              href={experience.pdfHref}
              download
              className="text-sm text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-cyan-300 hover:decoration-cyan-500/50"
            >
              {experience.pdfLinkLabel}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
