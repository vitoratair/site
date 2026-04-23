import { useMessages } from "../i18n/context";
import type { Messages } from "../locales/pt";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

type ExpRole = Messages["experience"]["roles"][number];

function RoleTimeline({ roles, keyPrefix }: { roles: ExpRole[]; keyPrefix: string }) {
  return (
    <ol className="space-y-8 border-l border-slate-600/50 pl-6">
      {roles.map((role, i) => (
        <li key={`${keyPrefix}-${i}`} className="relative">
          <span
            className="absolute -left-[calc(0.25rem+1px)] top-1.5 size-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-cyan-400/90 ring-4 ring-slate-900/80"
            aria-hidden
          />
          <p className="text-sm text-slate-400">
            {role.tenure}
            <span className="text-slate-600"> · </span>
            {role.location}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-white">{role.company}</h3>
          <p className="mt-0.5 text-sm text-slate-500">{role.title}</p>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-300 marker:text-slate-600">
            {role.lines.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
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
