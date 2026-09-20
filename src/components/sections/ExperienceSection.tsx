import { CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const roles: ExperienceItem[] = [
  {
    company: 'Northwind Labs',
    role: 'Senior Full-Stack Developer',
    dates: '2023 — Present',
    achievements: [
      'Led a React + TypeScript rewrite of the customer portal, cutting p95 load time by 42%.',
      'Designed PostgreSQL schemas and Node.js APIs used by 10+ internal product surfaces.',
      'Set up AWS environments, CI, and observability so deploys became a weekly habit, not a fire drill.',
    ],
  },
  {
    company: 'Cedar & Co.',
    role: 'Full-Stack Developer',
    dates: '2021 — 2023',
    achievements: [
      'Shipped billing, onboarding, and admin tools used by a 30-person operations team.',
      'Introduced typed API contracts between React clients and Node services.',
      'Mentored two junior engineers through code review and pairing on production incidents.',
    ],
  },
  {
    company: 'Independent / Studio work',
    role: 'Software Engineer',
    dates: '2019 — 2021',
    achievements: [
      'Built MVPs for early-stage founders across dashboards, marketplaces, and internal tools.',
      'Owned delivery end to end: design QA, implementation, PostgreSQL, and AWS hosting.',
      'Established a reusable starter for auth, logging, and CI that shortened new-project setup.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="EXPERIENCE" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          A decade of shipping, condensed into five focused years.
        </h2>

        <div className="mt-10 sm:mt-12 ml-2 sm:ml-3 border-l-2 border-emerald-500 space-y-6 sm:space-y-8">
          {roles.map((role) => (
            <div key={role.company} className="relative pl-5 sm:pl-8 min-w-0">
              <span className="absolute -left-[7px] top-6 sm:top-7 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#faf7f2]" />
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight break-words">{role.company}</h3>
                    <p className="text-base text-slate-600">{role.role}</p>
                  </div>
                  <p className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase shrink-0">
                    {role.dates}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {role.achievements.map((item) => (
                    <li key={item} className="flex items-start text-sm sm:text-base text-slate-600 leading-[1.65]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 mr-2 shrink-0" />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
