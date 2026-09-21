import { ArrowRight } from 'lucide-react';
import type { PrimaryButtonProps } from '../../types';

export function PrimaryButton({
  children,
  href,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}: PrimaryButtonProps) {
  const classes = `group relative px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:from-emerald-950 hover:via-slate-900 hover:to-slate-950 text-white font-semibold text-[15px] tracking-[-0.01em] transition-all duration-300 shadow-md shadow-slate-900/20 hover:shadow-glow-sm hover:scale-[1.02] inline-flex items-center justify-center space-x-2 active:scale-[0.98] min-h-11 disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100 overflow-hidden ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-200" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
