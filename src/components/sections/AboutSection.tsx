import { Building2, IndianRupee, MapPin, ShieldCheck } from 'lucide-react';
import { SectionBadge } from '../ui/SectionBadge';

const facts = [
  { icon: MapPin, label: 'Based in', value: 'India · works globally' },
  { icon: Building2, label: 'Built for', value: 'SMB & enterprise teams' },
  { icon: ShieldCheck, label: 'Standard', value: 'Security in every build' },
  { icon: IndianRupee, label: 'Commercials', value: 'Clear, affordable scope' },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white/60 backdrop-blur-sm border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="min-w-0">
            <SectionBadge label="THE PRACTICE" />
            <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
              You run the business. I run the technology behind it.
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-[1.7]">
              I’m Ashish Munot. I work with owners and operations leaders who are tired of stitching together a website
              vendor, a freelancer, a hosting panel, and a “we’ll add security later” promise.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-[1.7]">
              Engagements cover the full path: understanding the workflow, building the software, putting it on secure
              cloud infrastructure, and staying available after launch. React, Node.js, TypeScript, PostgreSQL, and AWS
              are the tools — the outcome is a system your team can trust on a Monday morning.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-[1.7]">
              Pricing is scoped up front. There is no theatre, no mystery hours, and no pressure to buy a package you do
              not need.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#faf7f2] via-white to-emerald-50/40 border border-stone-200/80 shadow-card flex flex-col min-w-0">
            <p className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-5">
              Working principles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl bg-white/90 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-emerald-200/60 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-700" />
                    <span className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase">
                      {label}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight break-words">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
