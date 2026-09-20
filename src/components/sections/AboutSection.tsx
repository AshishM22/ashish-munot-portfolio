import { Briefcase, Clock, MapPin, Sparkles } from 'lucide-react';
import { SectionBadge } from '../ui/SectionBadge';

const facts = [
  { icon: MapPin, label: 'Location', value: 'Remote · IST' },
  { icon: Clock, label: 'Availability', value: 'Open to work' },
  { icon: Briefcase, label: 'Role type', value: 'Full-Stack / Product' },
  { icon: Sparkles, label: 'Open to', value: 'Contract & full-time' },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="min-w-0">
            <SectionBadge label="ABOUT ME" />
            <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
              Engineer, builder, and partner for ambitious product teams.
            </h2>
            <p className="mt-6 text-base text-slate-600 leading-[1.65]">
              I’m Ashish M, a full-stack developer who enjoys turning messy product ideas into calm, well-structured
              software. I work across the stack — React and TypeScript on the client, Node.js and PostgreSQL on the
              server, and AWS when it’s time to ship and scale.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-[1.65]">
              Over the last five years I’ve helped startups and product teams ship dashboards, APIs, and internal tools
              that stay maintainable after the first launch. I care as much about readable code and honest estimates as I
              do about visual polish.
            </p>
            <p className="mt-4 text-base text-slate-600 leading-[1.65]">
              When I’m not shipping, I’m usually refining DX, writing small utilities, or exploring how to make complex
              systems feel simple for the people who use them.
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col min-w-0">
            <p className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase mb-5">Key facts</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl bg-[#f5efe6] border border-stone-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-600" />
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
