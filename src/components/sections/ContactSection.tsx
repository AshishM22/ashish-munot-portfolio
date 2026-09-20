import { Github, Linkedin } from 'lucide-react';
import { useState, type FormEvent } from 'react';
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
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <section id="contact" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="min-w-0">
            <SectionBadge label="GET IN TOUCH" />
            <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
              Let’s build the next thing together.
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-[1.65] max-w-md">
              Tell me about the product, the timeline, and the stack. I typically reply within one business day with a
              clear yes, a few questions, or a better-fit referral.
            </p>
            <div className="mt-8 flex items-center space-x-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white border border-stone-200 hover:border-stone-400 text-slate-700 hover:text-slate-950 shadow-sm transition-all duration-150"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col space-y-4 min-w-0 w-full"
          >
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-500 transition-all duration-150"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-500 transition-all duration-150"
                placeholder="you@company.com"
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Subject</span>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-500 transition-all duration-150"
                placeholder="What should we talk about?"
              />
            </label>
            <label className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full min-w-0 px-4 py-3 rounded-xl bg-[#fcfbf9] border border-stone-200 text-slate-950 outline-none focus:border-emerald-500 transition-all duration-150 resize-y"
                placeholder="Role, timeline, and a little context."
              />
            </label>
            <PrimaryButton type="submit" className="w-full sm:w-auto">Send Message</PrimaryButton>
            {submitted && (
              <p className="text-sm text-emerald-700 bg-emerald-100 border border-emerald-200 rounded-xl px-4 py-3">
                Thanks — I’ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
