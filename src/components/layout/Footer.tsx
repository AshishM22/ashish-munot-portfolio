import type { LucideIcon } from 'lucide-react';
import { Code2, Github, Linkedin } from 'lucide-react';

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

const socials: SocialLink[] = [
  { href: 'https://github.com/AshishM22', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/ashish-munot/', label: 'LinkedIn', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-[#faf7f2] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#hero" className="flex items-center space-x-2 select-none">
            <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="font-bold text-slate-950">Ashish Munot</span>
          </a>

          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} Ashish Munot. End-to-end technology for business.
          </p>

          <div className="flex items-center space-x-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 rounded-xl bg-white border border-stone-200 hover:border-stone-400 text-slate-700 hover:text-slate-950 shadow-sm transition-all duration-150"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
