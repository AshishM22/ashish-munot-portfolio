import type { LucideIcon } from 'lucide-react';

export interface IconBadgeProps {
  icon: LucideIcon;
}

export function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4 shadow-sm select-none">
      <Icon className="w-6 h-6" />
    </div>
  );
}
