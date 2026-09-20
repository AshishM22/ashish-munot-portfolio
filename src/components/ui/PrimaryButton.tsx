import { ArrowRight } from 'lucide-react';
import type { PrimaryButtonProps } from '../../types';

export function PrimaryButton({
  children,
  href,
  type = 'button',
  onClick,
  className = '',
}: PrimaryButtonProps) {
  const classes = `px-6 sm:px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-[15px] tracking-[-0.01em] transition-all duration-150 shadow-sm hover:shadow inline-flex items-center justify-center space-x-2 active:scale-[0.98] min-h-11 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 text-emerald-400" />
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 text-emerald-400" />
    </button>
  );
}
