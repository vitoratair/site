import { useMessages } from "../i18n/context";
import type { Messages } from "../locales/pt";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

type ExpRole = Messages["experience"]["roles"][number];

function RoleTimeline({ roles, keyPrefix }: { roles: ExpRole[]; keyPrefix: string }) {
  const last = roles.length - 1;
  return (
    <ol className="space-y-10">
      {roles.map((role, i) => (
        <li key={`${keyPrefix}-${i}`} className="flex items-stretch gap-3.5 sm:gap-4">
          <div className="flex w-3 shrink-0 flex-col items-center sm:w-3.5">
            <span
              className="mt-[0.35rem] size-2 shrink-0 rounded-full bg-cyan-400/90 ring-[0_0_0_3px] ring-slate-900/90 sm:mt-[0.4rem]"
              aria-hidden
            />
            {i < last ? (
              <div
                className="mx-auto mt-2.5 w-px flex-1 min-h-[1.5rem] bg-gradient-to-b from-slate-500/50 to-slate-600/25"
                aria-hidden
              />
            ) : null}
          </div>
          <div className="min-w-0 flex-1 pb-0.5">
            <p className="text-pretty text-sm leading-snug text-slate-400 sm:leading-normal">
              {role.tenure}
              <span className="text-slate-600"> · </span>
              {role.location}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">{role.company}</h3>
            <p className="mt-1 text-sm text-slate-500">{role.title}</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-300 marker:text-slate-600">
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
