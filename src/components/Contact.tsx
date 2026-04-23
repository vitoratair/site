import { useMessages } from "../i18n/context";
import { SectionIntro } from "./SectionIntro";

export function Contact() {
  const { contact, contactForm, sectionMeta, site } = useMessages();
  const formEmail = import.meta.env.VITE_CONTACT_EMAIL || site.email;
  const formAction = `https://formsubmit.co/${encodeURIComponent(formEmail)}`;

  const nextUrl =
    typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}#contact` : "";

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden border-t border-slate-800/80 px-4 py-28 sm:px-6"
    >
      <img
        src="/images/contact-bg.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-30"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-900/82 via-slate-900/78 to-violet-900/35"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl">
        <SectionIntro
          kicker={sectionMeta.contact.kicker}
          title={contact.title}
          description={contact.intro}
          align="center"
        />
      </div>
      <form
        action={formAction}
        method="POST"
        className="relative mx-auto mt-14 max-w-xl space-y-5 rounded-2xl border border-slate-500/35 bg-slate-800/65 p-6 shadow-xl shadow-black/25 backdrop-blur-md ring-1 ring-violet-400/15 sm:p-8"
      >
        <input type="hidden" name="_subject" value={contactForm.subject} />
        <input type="hidden" name="_captcha" value="false" />
        {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}
        <div>
          <label htmlFor="name" className="mb-2 block text-left text-sm font-medium text-slate-300">
            {contactForm.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={contactForm.namePlaceholder}
            className="w-full rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-left text-sm font-medium text-slate-300">
            {contactForm.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={contactForm.emailPlaceholder}
            className="w-full rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-left text-sm font-medium text-slate-300">
            {contactForm.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder={contactForm.messagePlaceholder}
            className="w-full resize-y rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>
        <p className="text-center">
          <button
            type="submit"
            className="btn-ai-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white sm:w-auto"
          >
            {contactForm.submit}
          </button>
        </p>
      </form>
    </section>
  );
}
