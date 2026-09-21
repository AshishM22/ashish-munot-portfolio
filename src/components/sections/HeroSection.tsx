import { Lock, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { SectionBadge } from '../ui/SectionBadge';

const codeLines = [
  { prefix: '01', text: 'Discover business workflows', color: 'text-stone-400' },
  { prefix: '02', text: 'Design systems, access, and data', color: 'text-emerald-300' },
  { prefix: '03', text: 'Build web, APIs, and cloud', color: 'text-emerald-400 font-medium' },
  { prefix: '04', text: 'Harden security and backups', color: 'text-emerald-300' },
  { prefix: '05', text: 'Launch, train, and support', color: 'text-stone-300' },
];

const stats = [
  { value: 'One partner', label: 'From idea to operations' },
  { value: 'Secure', label: 'Access, data, and cloud' },
  { value: 'Clear cost', label: 'No surprise retainers' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-stone-200/60 py-16 sm:py-20 lg:py-28 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#d6d0c4_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none select-none" />
      <div className="absolute -top-20 right-0 w-[min(600px,95vw)] h-[420px] rounded-full bg-gradient-to-br from-amber-200/50 to-orange-100/30 blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-32 -left-20 w-[min(500px,90vw)] h-[360px] rounded-full bg-gradient-to-tr from-emerald-200/60 to-teal-100/40 blur-[90px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0 animate-fade-up">
            <SectionBadge label="SMB & ENTERPRISE TECHNOLOGY" icon={Sparkles} />
            <h1 className="text-[30px] sm:text-[42px] lg:text-[52px] font-extrabold tracking-[-0.035em] text-slate-950 leading-[1.1] break-words">
              End-to-end technology for your business —{' '}
              <span className="text-gradient">without the IT stress</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-[1.75] max-w-xl">
              Most companies do not need another brochure website. They need systems that take orders, manage people,
              protect data, and stay online — at a cost that makes sense. I own that stack from first conversation to
              production and support.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Workflow, title: 'End to end', text: 'Design, build, host, train, maintain.' },
                { icon: ShieldCheck, title: 'Security first', text: 'Access control, encryption, backups.' },
                { icon: Lock, title: 'You stay in charge', text: 'Clear scope. You keep the keys.' },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="surface-card p-4 group"
                >
                  <div className="icon-tile w-10 h-10 mb-3 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-slate-900 tracking-tight">{title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <PrimaryButton href="#contact" className="w-full sm:w-auto">
                Discuss your requirements
              </PrimaryButton>
              <SecondaryButton href="#services" className="w-full sm:w-auto">
                See how delivery works
              </SecondaryButton>
            </div>

            <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-slate-500 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative select-none min-w-0 animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 via-transparent to-amber-300/20 rounded-3xl blur-2xl animate-glow-pulse pointer-events-none" />
            <div className="relative animate-float-slow">
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-emerald-400/60 via-slate-700 to-amber-400/40 shadow-glow overflow-hidden">
                <div className="rounded-2xl bg-slate-950 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03] min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase truncate">
                      Delivery model
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Secure by default
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-slate-950 to-slate-900">
                    {codeLines.map((line) => (
                      <div key={line.text} className="flex items-start gap-3">
                        <span className="font-mono text-[11px] text-emerald-600/80 mt-0.5">{line.prefix}</span>
                        <p className={`${line.color} text-sm sm:text-[15px] leading-snug`}>{line.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 sm:px-6 py-4 border-t border-white/10 bg-gradient-to-r from-emerald-950/40 to-slate-950">
                    <p className="text-[12px] text-stone-300 leading-relaxed">
                      One accountable partner. No juggling a designer, a developer, a host, and a security vendor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
