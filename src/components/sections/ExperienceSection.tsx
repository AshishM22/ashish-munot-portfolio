import { CheckCircle2 } from 'lucide-react';
import type { ExperienceItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const roles: ExperienceItem[] = [
  {
    company: 'Northwind Labs',
    role: 'Senior Full-Stack Developer',
    dates: '2023 — Present',
    achievements: [
      'Rebuilt the customer portal so staff and clients could work in one secure place, with materially faster load times.',
      'Designed the data and APIs that now sit under multiple internal business applications.',
      'Moved hosting and monitoring to AWS so releases stopped depending on a single machine.',
    ],
  },
  {
    company: 'Cedar & Co.',
    role: 'Full-Stack Developer',
    dates: '2021 — 2023',
    achievements: [
      'Delivered billing, onboarding, and admin tools used daily by a 30-person operations team.',
      'Put a single, typed contract between customer-facing software and internal services.',
      'Raised the standard of review so production issues were handled without panic.',
    ],
  },
  {
    company: 'Independent / Studio work',
    role: 'Software Engineer',
    dates: '2019 — 2021',
    achievements: [
      'Took early-stage companies from process-on-paper to working dashboards, marketplaces, and internal tools.',
      'Owned design review, implementation, database, and AWS hosting as one engagement.',
      'Left a repeatable baseline for auth, logging, and releases so the next change was cheaper.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="DELIVERY HISTORY" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          Systems delivered with the same standard: own it, secure it, hand it over cleanly.
        </h2>

        <div className="mt-10 sm:mt-12 ml-2 sm:ml-3 border-l-2 border-emerald-500 space-y-6 sm:space-y-8">
          {roles.map((role) => (
            <div key={role.company} className="relative pl-5 sm:pl-8 min-w-0">
              <span className="absolute -left-[7px] top-6 sm:top-7 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-[#faf7f2]" />
              <div className="surface-card p-4 sm:p-6 flex flex-col min-w-0">
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
