import { resume, site } from "../data/content";
import { SectionIntro } from "./SectionIntro";

export function Resume() {
  return (
    <section
      id="resume"
      className="scroll-mt-20 border-t border-slate-600/25 bg-gradient-to-b from-slate-800/40 via-slate-800/28 to-slate-900/35 px-4 py-28 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div className="mx-auto max-w-sm text-center md:mx-0">
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
              <p className="mt-1 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-sm font-medium text-transparent">
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
                  href={site.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
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
        </div>
        <div>
          <SectionIntro kicker="CV" title="Complete resume" description={resume.blurb} />
          <a
            href={site.links.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-ai-primary mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            <DownloadIcon />
            Download
          </a>
        </div>
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

function FacebookIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
