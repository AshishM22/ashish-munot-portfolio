import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ProjectCategory, ProjectItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const filters: ProjectCategory[] = ['All', 'Customer systems', 'Operations', 'Platforms'];

const projects: ProjectItem[] = [
  {
    title: 'Client analytics portal',
    description:
      'A private reporting portal so leadership can see sales and operations without waiting on a weekly spreadsheet.',
    category: 'Customer systems',
    tags: ['React', 'PostgreSQL', 'Access control'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'CUSTOMER',
    result: 'Faster reporting',
    accent: 'from-slate-800 via-emerald-900 to-slate-950',
  },
  {
    title: 'API & identity layer',
    description:
      'A single, documented gateway for logins, rate limits, and audit trails across internal business applications.',
    category: 'Platforms',
    tags: ['Node.js', 'AWS', 'Security'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'PLATFORM',
    result: 'One access model',
    accent: 'from-slate-900 to-slate-800',
  },
  {
    title: 'Field operations app',
    description:
      'Mobile-first tools for staff in the field: notes, photos, and same-day sync back to the office.',
    category: 'Operations',
    tags: ['React', 'Node.js', 'Offline-ready'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'OPERATIONS',
    result: 'Office + field',
    accent: 'from-stone-800 via-amber-900 to-slate-950',
  },
  {
    title: 'Retail commerce stack',
    description:
      'Storefront, inventory alerts, and checkout for a specialty retailer — hosted and monitored, not left on a shared PC.',
    category: 'Customer systems',
    tags: ['React', 'Payments', 'AWS'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'COMMERCE',
    result: 'Orders in one place',
    accent: 'from-emerald-950 via-teal-900 to-slate-900',
  },
  {
    title: 'Status & incident desk',
    description:
      'A public status page and internal process so customers are told the truth when something is down.',
    category: 'Platforms',
    tags: ['TypeScript', 'AWS', 'Ops'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'RELIABILITY',
    result: 'Clear communication',
    accent: 'from-slate-800 to-cyan-950',
  },
  {
    title: 'Shared finance workspace',
    description:
      'Household and small-office ledgers with roles, recurring bills, and a simple weekly review — data stays private.',
    category: 'Operations',
    tags: ['React', 'PostgreSQL', 'Roles'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com/AshishM22',
    bannerLabel: 'FINANCE',
    result: 'Controlled access',
    accent: 'from-emerald-900 to-stone-900',
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="bg-white border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="SELECTED WORK" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          Systems built for how companies actually operate.
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-2xl leading-[1.65]">
          These are representative builds — portals, operations tools, and platforms — not template landing pages.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => {
            const isActive = item === filter;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={
                  isActive
                    ? 'px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-slate-950 to-slate-800 text-white shadow-md shadow-slate-900/20 transition-all duration-200'
                    : 'px-4 py-2.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-slate-700 border border-stone-200 shadow-sm hover:border-emerald-200 hover:text-emerald-900 transition-all duration-200'
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <article
              key={project.title}
              className="group surface-card p-4 sm:p-5 flex flex-col min-w-0"
            >
              <div
                className={`relative rounded-xl bg-gradient-to-br ${project.accent} h-36 sm:h-40 flex items-end justify-between select-none mb-5 px-4 py-4 overflow-hidden`}
              >
                <div className="relative">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                    {project.bannerLabel}
                  </span>
                  <p className="mt-3 text-white font-bold tracking-tight">{project.title}</p>
                </div>
                <span className="relative px-2 py-1 rounded-md bg-white/95 text-slate-900 text-[11px] font-semibold">
                  {project.result}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{project.title}</h3>
              <p className="mt-2 text-base text-slate-600 leading-[1.65]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-stone-100 text-slate-700 text-[11px] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                className="mt-auto pt-5 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-emerald-800 transition-all duration-150"
              >
                Ask about a similar system
                <ArrowUpRight className="w-4 h-4 ml-1 text-emerald-700" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
