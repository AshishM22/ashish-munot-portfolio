import { Sparkles } from 'lucide-react';
import type { SectionBadgeProps } from '../../types';

export function SectionBadge({ label, icon: Icon = Sparkles }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-slate-700 mb-4 shadow-sm select-none">
      <Icon className="w-3.5 h-3.5 text-amber-600" />
      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-700">{label}</span>
    </div>
  );
}
