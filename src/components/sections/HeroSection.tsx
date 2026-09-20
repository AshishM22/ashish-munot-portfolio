import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { SectionBadge } from '../ui/SectionBadge';

const codeLines = [
  { prefix: '$', text: 'whoami', color: 'text-emerald-300' },
  { prefix: '›', text: 'Ashish M — Full-Stack Developer', color: 'text-emerald-400' },
  { prefix: '$', text: 'stack --show', color: 'text-emerald-300' },
  { prefix: '›', text: 'React · Node.js · TypeScript', color: 'text-emerald-400' },
  { prefix: '›', text: 'PostgreSQL · AWS · Vite', color: 'text-emerald-400' },
  { prefix: '$', text: 'status', color: 'text-emerald-300' },
  { prefix: '›', text: 'Available for new opportunities', color: 'text-emerald-400' },
];

const stats = [
  { value: '5+', label: 'Years Exp' },
  { value: '30+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#e5e0d8_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none select-none" />
      <div className="absolute top-0 right-1/4 w-[min(550px,90vw)] h-[380px] rounded-full bg-amber-200/35 blur-[80px] sm:blur-[120px] pointer-events-none select-none" />
      <div className="absolute top-20 left-1/4 w-[min(550px,90vw)] h-[380px] rounded-full bg-orange-200/30 blur-[80px] sm:blur-[120px] pointer-events-none select-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <SectionBadge label="FULL-STACK DEVELOPER" />
            <h1 className="text-[30px] sm:text-[40px] lg:text-[52px] font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12] break-words">
              Building Products that{' '}
              <span className="relative inline">
                <span className="relative z-10 text-emerald-700">Scale and Matter</span>
                <svg
                  className="absolute -bottom-1 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-emerald-500/40 pointer-events-none"
                  viewBox="0 0 250 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M3 9C60 2 180 2 247 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-base text-slate-600 leading-[1.65] max-w-xl">
              I design and ship reliable web products with React, Node.js, TypeScript, PostgreSQL, and AWS — from
              polished interfaces to production APIs that stay fast under load.
            </p>
            <p className="mt-3 text-base text-slate-600 leading-[1.65] max-w-xl">
              Currently open to product teams who care about craft, clarity, and shipping things that people actually use.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <PrimaryButton href="#projects" className="w-full sm:w-auto">
                View My Work
              </PrimaryButton>
              <SecondaryButton href="/Ashish_M_CV.txt" download className="w-full sm:w-auto">
                Download CV
              </SecondaryButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="pl-3 sm:pl-4 border-l-2 border-emerald-500 min-w-0">
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="select-none min-w-0">
            <div className="p-1 rounded-2xl bg-slate-950 shadow-md overflow-hidden">
              <div className="flex items-center space-x-2 px-3 sm:px-4 py-3 border-b border-white/10 min-w-0">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/80" />
                <span className="ml-2 sm:ml-3 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase truncate">
                  ashish@portfolio — zsh
                </span>
              </div>
              <div className="p-4 sm:p-5 font-mono text-[13px] sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
                {codeLines.map((line, index) => (
                  <p key={`${line.text}-${index}`} className={`${line.color} break-words`}>
                    <span className="text-slate-500 mr-2">{line.prefix}</span>
                    {line.text}
                    {index === codeLines.length - 1 && (
                      <span className="inline-block w-2 h-4 ml-1 align-middle bg-emerald-400 animate-pulse" />
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
