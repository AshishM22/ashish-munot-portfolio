import { Github, Linkedin } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { submitInquiry } from '../../lib/submitInquiry';
import type { ContactFormState } from '../../types';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SectionBadge } from '../ui/SectionBadge';

const socials = [
  { href: 'https://github.com/AshishM22', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/ashish-munot/', label: 'LinkedIn', icon: Linkedin },
];

const emptyForm: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await submitInquiry(form, honeypot);
      setSubmitted(true);
      setForm(emptyForm);
      setHoneypot('');
    } catch (cause) {
      setSubmitted(false);
      setError(cause instanceof Error ? cause.message : 'Could not send the inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="min-w-0">
            <SectionBadge label="START A CONVERSATION" />
            <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
              If your technology should be quieter and more reliable, write in.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-[1.7] max-w-md">
              Share the business process you want to improve — sales, operations, customers, or internal tools. I will
              reply with whether it is a fit, a suggested approach, and a transparent range. There is no pitch deck and
              no follow-up sequence.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Useful context: company size, current tools, and what “done” means for you.</li>
              <li>Typical response: within one business day.</li>
              <li>Also on LinkedIn if that is easier for your team.</li>
            </ul>
            <div className="mt-8 flex items-center space-x-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white border border-stone-200 hover:border-stone-400 text-slate-700 hover:text-slate-950 shadow-sm transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={onSubmit}
            className="p-4 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-card hover:shadow-card-hover flex flex-col space-y-4 min-w-0 w-full transition-shadow duration-300"
          >
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-700 transition-all duration-150"
                placeholder="Your name"
                disabled={submitting}
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Work email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-700 transition-all duration-150"
                placeholder="you@company.com"
                disabled={submitting}
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Company / role</span>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-700 transition-all duration-150"
                placeholder="Company and what you oversee"
                disabled={submitting}
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">
                What needs to work better
              </span>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-700 transition-all duration-150 resize-y"
                placeholder="Current tools, pain points, and any security or compliance notes."
                disabled={submitting}
              />
            </label>
            <input
              type="text"
              name="botcheck"
              value={honeypot}
              onChange={(event) => setHoneypot(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <PrimaryButton type="submit" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send requirements'}
            </PrimaryButton>
            {error && (
              <p className="text-sm text-red-800 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="text-sm text-slate-700 bg-[#f5efe6] border border-stone-200 rounded-xl px-4 py-3">
                Received. I will read this and respond with a clear next step.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
