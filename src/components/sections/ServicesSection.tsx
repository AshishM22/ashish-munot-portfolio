import {
  Cloud,
  Database,
  Headphones,
  LayoutDashboard,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { ServiceItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const services: ServiceItem[] = [
  {
    icon: LayoutDashboard,
    title: 'Customer websites & portals',
    description:
      'Public sites, client logins, and booking or order flows — built as real software, not a disposable template.',
  },
  {
    icon: Workflow,
    title: 'Internal business systems',
    description:
      'Operations, inventory, HR, field work, and finance tools that match how your team already works.',
  },
  {
    icon: Database,
    title: 'Data, billing & integrations',
    description:
      'Connect payments, CRMs, WhatsApp, accounting, and reports so information does not live in five spreadsheets.',
  },
  {
    icon: Cloud,
    title: 'Cloud, hosting & uptime',
    description:
      'Reliable AWS environments, domains, SSL, monitoring, and deployments that do not depend on one laptop.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & access control',
    description:
      'Roles, encrypted traffic, backups, and least-privilege access so customer and company data stay protected.',
  },
  {
    icon: Headphones,
    title: 'Support after launch',
    description:
      'Fixes, small changes, and a named person who already knows your system — without an enterprise retainer.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="WHAT YOU GET" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] max-w-3xl break-words">
          A complete technology function — not a one-page website.
        </h2>
        <p className="mt-4 text-base text-slate-600 leading-[1.7] max-w-2xl">
          Small businesses and growing enterprises often need the same things as large companies: secure systems,
          reliable hosting, and someone accountable. They should not need a 20-person IT department or a luxury agency
          bill to get them.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group surface-card p-5 sm:p-6 flex flex-col min-w-0"
            >
              <div className="icon-tile w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h3>
              <p className="mt-2 text-base text-slate-600 leading-[1.65]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200/40 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/20 p-5 sm:p-7 shadow-card">
          <p className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-4">
            How security is handled
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Access', text: 'Role-based logins. Staff see only what they need.' },
              { title: 'Transport', text: 'HTTPS everywhere. Secrets stay off the client.' },
              { title: 'Data', text: 'Backups and recovery plans before go-live.' },
              { title: 'Ownership', text: 'Accounts and source stay in your name.' },
            ].map((item) => (
              <div key={item.title} className="min-w-0">
                <p className="font-bold text-slate-900 tracking-tight">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
