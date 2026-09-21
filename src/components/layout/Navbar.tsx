import { Code2, Download, Menu, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { NavLinkItem } from '../../types';
import { SecondaryButton } from '../ui/SecondaryButton';

const links: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Approach', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 w-full max-w-[100vw] nav-glass transition-all">
      <div className="flex h-16 items-center justify-between gap-3">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2 sm:gap-3 pl-4 sm:pl-6 lg:pl-8 shrink-0 select-none"
        >
          <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-slate-950 to-slate-800 flex items-center justify-center shadow-md shadow-slate-900/25 ring-1 ring-white/10">
            <Code2 className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="min-w-0">
            <span className="block font-bold text-slate-950 tracking-tight leading-tight truncate">Ashish Munot</span>
            <span className="hidden sm:block text-[10px] font-medium text-slate-500 tracking-wide">
              Technology partner
            </span>
          </span>
        </a>

        <div className="hidden lg:flex flex-1 items-center justify-center space-x-6 xl:space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-slate-600 hover:text-emerald-800 transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 pr-4 sm:pr-6 lg:pr-8 shrink-0">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Security-first delivery
          </span>
          <a
            href="/Ashish_Munot_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-slate-800 bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 hover:text-emerald-900 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            CV
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden mr-4 sm:mr-6 p-2.5 min-h-11 min-w-11 rounded-xl bg-white border border-stone-200 text-slate-800 shadow-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone-200/80 bg-[#fcfbf9] max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 flex flex-col space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-950 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <SecondaryButton href="/Ashish_Munot_Resume.pdf" download className="w-full text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </SecondaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
