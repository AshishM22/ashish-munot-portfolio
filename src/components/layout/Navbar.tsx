import { Code2, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { NavLinkItem } from '../../types';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';

const links: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
    <nav className="sticky top-0 z-50 w-full max-w-[100vw] bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#hero" className="flex min-w-0 items-center space-x-2 sm:space-x-3 select-none">
            <div className="w-9 h-9 shrink-0 rounded-xl bg-slate-950 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="font-bold text-slate-950 tracking-tight truncate">Ashish M</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          </a>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <SecondaryButton href="/Ashish_M_CV.txt" download className="px-5 py-2.5 text-sm">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </SecondaryButton>
            <PrimaryButton href="#contact" className="px-5 py-2.5 text-sm">
              Hire Me
            </PrimaryButton>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
            className="lg:hidden p-2.5 min-h-11 min-w-11 rounded-xl bg-white border border-stone-200 text-slate-800 shadow-sm transition-all duration-150 active:scale-[0.98] flex items-center justify-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone-200/80 bg-[#fcfbf9] max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-1">
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
            <div className="pt-3 flex flex-col space-y-2">
              <SecondaryButton href="/Ashish_M_CV.txt" download className="w-full">
                Download CV
              </SecondaryButton>
              <PrimaryButton href="#contact" onClick={() => setOpen(false)} className="w-full">
                Hire Me
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
