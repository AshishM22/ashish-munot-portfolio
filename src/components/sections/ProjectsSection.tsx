import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ProjectCategory, ProjectItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const filters: ProjectCategory[] = ['All', 'Web App', 'Mobile', 'Open Source'];

const projects: ProjectItem[] = [
  {
    title: 'Northstar Analytics',
    description: 'A product analytics dashboard with cohort views, saved reports, and role-based access for growing teams.',
    category: 'Web App',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'WEB APP',
  },
  {
    title: 'Harbor API Gateway',
    description: 'Typed Node.js gateway that unifies auth, rate limits, and audit logs across internal microservices.',
    category: 'Open Source',
    tags: ['Node.js', 'TypeScript', 'AWS'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'OPEN SOURCE',
  },
  {
    title: 'Lumen Field Ops',
    description: 'Mobile-first ops companion for field teams — offline notes, photo capture, and same-day sync to HQ.',
    category: 'Mobile',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'MOBILE',
  },
  {
    title: 'Quilt Commerce',
    description: 'Headless storefront and admin for a specialty retailer, with inventory alerts and Stripe-ready checkout.',
    category: 'Web App',
    tags: ['React', 'PostgreSQL', 'AWS'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'WEB APP',
  },
  {
    title: 'Beacon Status',
    description: 'Public status page and incident CLI used by product teams to communicate outages without extra tools.',
    category: 'Open Source',
    tags: ['TypeScript', 'Node.js', 'AWS'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'OPEN SOURCE',
  },
  {
    title: 'Pocket Ledger',
    description: 'Personal finance PWA with shared households, recurring bills, and a calm weekly review flow.',
    category: 'Mobile',
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
    bannerLabel: 'MOBILE',
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
        <SectionBadge label="FEATURED WORK" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          Projects That Speak for Themselves
        </h2>

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
                    ? 'px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-950 text-white shadow-md transition-all duration-150 active:scale-[0.98]'
                    : 'px-4 py-2.5 rounded-xl text-sm font-semibold bg-white hover:bg-stone-50 text-slate-700 border border-stone-200 shadow-sm transition-all duration-150'
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
              className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col min-w-0"
            >
              <div className="relative rounded-xl bg-gradient-to-br from-slate-100 to-stone-200 h-36 sm:h-40 flex items-center justify-center select-none mb-5 px-4">
                <span className="text-slate-400 font-bold tracking-tight text-center break-words">{project.title}</span>
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white border border-stone-200 text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">
                  {project.bannerLabel}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{project.title}</h3>
              <p className="mt-2 text-base text-slate-600 leading-[1.65]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-stone-100 text-slate-700 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-slate-950 transition-all duration-150"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5 text-emerald-600" />
                  View Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-slate-800 hover:text-slate-950 transition-all duration-150"
                >
                  <Github className="w-4 h-4 mr-1.5 text-emerald-600" />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
