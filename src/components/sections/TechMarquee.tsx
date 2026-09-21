import {
  Cloud,
  CreditCard,
  Database,
  Headphones,
  LayoutDashboard,
  Link2,
  Lock,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MarqueeItem {
  label: string;
  icon: LucideIcon;
}

const items: MarqueeItem[] = [
  { label: 'Business systems', icon: Workflow },
  { label: 'Secure cloud', icon: Cloud },
  { label: 'Internal tools', icon: LayoutDashboard },
  { label: 'Customer portals', icon: Lock },
  { label: 'Payments & billing', icon: CreditCard },
  { label: 'Data & reporting', icon: Database },
  { label: 'Access control', icon: ShieldCheck },
  { label: 'Backups & recovery', icon: Cloud },
  { label: 'Integrations', icon: Link2 },
  { label: 'Ongoing support', icon: Headphones },
];

interface MarqueeRowProps {
  reverse?: boolean;
}

function MarqueeRow({ reverse = false }: MarqueeRowProps) {
  const loop = [...items, ...items, ...items];

  return (
    <div
      className={`flex w-max will-change-transform ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      } group-hover:[animation-play-state:paused]`}
    >
      {loop.map((item, index) => {
        const Icon = item.icon;
        return (
          <span
            key={`${item.label}-${index}`}
            className="flex items-center gap-2.5 px-5 py-1.5 mx-1.5 rounded-full border border-white/10 bg-white/5 text-stone-200"
          >
            <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-[13px] font-semibold tracking-wide whitespace-nowrap">{item.label}</span>
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <section
      className="group relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-emerald-500/20 py-5 select-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-slate-950 to-transparent" />
      <div className="flex flex-col gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
