import { useMessages } from "../i18n/context";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function Resume() {
  const { resume, sectionMeta, site } = useMessages();
  const { kicker, title } = sectionMeta.resume;
  return (
    <section
      id="resume"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/40 via-slate-800/28 to-slate-900/35 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <Reveal className="mx-auto max-w-sm text-center md:mx-0" delayMs={0}>
          <div className="card-lift overflow-hidden rounded-2xl border border-slate-600/35 bg-slate-800/50 shadow-2xl shadow-black/25 backdrop-blur-sm">
            <img
              src="/images/vitor_picture.jpg"
              alt=""
              width={400}
              height={480}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="border-t border-slate-600/30 bg-slate-800/40 p-6">
              <p className="font-display text-xl font-semibold text-white">{resume.fullName}</p>
              <p className="mt-1 line-clamp-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-xs font-medium leading-snug text-transparent sm:text-sm">
                {site.tagline}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200"
                  aria-label="Email"
                >
                  <MailIcon />
                </a>
                <a
                  href={site.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="min-w-0" delayMs={100}>
          <SectionIntro kicker={kicker} title={title} description={resume.blurb} />
          <a
            href={site.links.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-ai-primary mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            <DownloadIcon />
            {resume.downloadLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
