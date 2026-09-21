import { Sparkles } from 'lucide-react';
import type { SectionBadgeProps } from '../../types';

export function SectionBadge({ label, icon: Icon = Sparkles }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white via-emerald-50/80 to-amber-50/60 border border-emerald-200/50 text-slate-700 mb-5 shadow-sm select-none">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-sm">
        <Icon className="w-3 h-3 text-white" />
      </span>
      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-800">{label}</span>
    </div>
  );
}
