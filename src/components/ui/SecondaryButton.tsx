import type { SecondaryButtonProps } from '../../types';

export function SecondaryButton({
  children,
  href = '#',
  onClick,
  className = '',
  download,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      onClick={onClick}
      className={`px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-semibold text-[15px] tracking-[-0.01em] transition-all duration-150 shadow-sm hover:border-stone-400 inline-flex items-center justify-center min-h-11 ${className}`}
    >
      {children}
    </a>
  );
}
