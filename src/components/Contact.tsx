import type { FormEvent } from "react";
import { useState } from "react";
import { useMessages } from "../i18n/context";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function Contact() {
  const { contact, contactForm, sectionMeta, site } = useMessages();
  const formEmail = import.meta.env.VITE_CONTACT_EMAIL || site.email;
  const formAction = `https://formsubmit.co/${encodeURIComponent(formEmail)}`;
  const ajaxUrl = `https://formsubmit.co/ajax/${encodeURIComponent(formEmail)}`;

  const nextUrl =
    typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}#contact` : "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setShowSuccess(false);
    setShowError(false);
    setIsSubmitting(true);

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    try {
      const res = await fetch(ajaxUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: contactForm.subject,
          _captcha: "false",
        }),
      });

      if (!res.ok) {
        setShowError(true);
        return;
      }

      form.reset();
      setShowSuccess(true);
    } catch {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

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
      <Reveal className="relative mx-auto mt-14 max-w-xl" delayMs={120}>
        <form
          action={formAction}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-500/35 bg-slate-800/65 p-6 shadow-xl shadow-black/25 backdrop-blur-md ring-1 ring-violet-400/15 sm:p-8"
        >
          <input type="hidden" name="_subject" value={contactForm.subject} />
          <input type="hidden" name="_captcha" value="false" />
          {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}

          {showSuccess ? (
            <p
              className="rounded-xl border border-emerald-500/35 bg-emerald-950/40 px-4 py-3 text-center text-sm text-emerald-100"
              role="status"
              aria-live="polite"
            >
              {contactForm.success}
            </p>
          ) : null}
          {showError ? (
            <p
              className="rounded-xl border border-rose-500/35 bg-rose-950/40 px-4 py-3 text-center text-sm text-rose-100"
              role="alert"
              aria-live="assertive"
            >
              {contactForm.error}
            </p>
          ) : null}

          <div>
            <label htmlFor="name" className="mb-2 block text-left text-sm font-medium text-slate-300">
              {contactForm.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={isSubmitting}
              placeholder={contactForm.namePlaceholder}
              onChange={() => {
                setShowSuccess(false);
                setShowError(false);
              }}
              className="w-full rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
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
              disabled={isSubmitting}
              placeholder={contactForm.emailPlaceholder}
              onChange={() => {
                setShowSuccess(false);
                setShowError(false);
              }}
              className="w-full rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
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
              disabled={isSubmitting}
              placeholder={contactForm.messagePlaceholder}
              onChange={() => {
                setShowSuccess(false);
                setShowError(false);
              }}
              className="w-full resize-y rounded-xl border border-slate-600/50 bg-slate-900/40 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/25 focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>
          <p className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="btn-ai-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-75 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="size-4 shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-white"
                    aria-hidden
                  />
                  <span>{contactForm.submitting}</span>
                </>
              ) : (
                contactForm.submit
              )}
            </button>
          </p>
        </form>
      </Reveal>
    </section>
  );
}
