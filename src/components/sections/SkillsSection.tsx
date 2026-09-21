import {
  Boxes,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Server,
  TerminalSquare,
  Wind,
} from 'lucide-react';
import { useState } from 'react';
import type { SkillCategory, SkillItem } from '../../types';
import { IconBadge } from '../ui/IconBadge';
import { SectionBadge } from '../ui/SectionBadge';

const categories: SkillCategory[] = ['Frontend', 'Backend', 'Tools & DevOps', 'Languages'];

const skills: Record<SkillCategory, SkillItem[]> = {
  Frontend: [
    { name: 'React', level: 92, barClass: 'w-[92%]', icon: Layers },
    { name: 'TypeScript', level: 90, barClass: 'w-[90%]', icon: FileCode2 },
    { name: 'Tailwind CSS', level: 88, barClass: 'w-[88%]', icon: Wind },
    { name: 'Vite', level: 84, barClass: 'w-[84%]', icon: Boxes },
    { name: 'Component design', level: 82, barClass: 'w-[82%]', icon: Globe },
    { name: 'Accessibility', level: 78, barClass: 'w-[78%]', icon: Code2 },
    { name: 'State design', level: 80, barClass: 'w-[80%]', icon: Layers },
    { name: 'Responsive UI', level: 90, barClass: 'w-[90%]', icon: Globe },
  ],
  Backend: [
    { name: 'Node.js', level: 90, barClass: 'w-[90%]', icon: Server },
    { name: 'REST APIs', level: 88, barClass: 'w-[88%]', icon: Globe },
    { name: 'PostgreSQL', level: 86, barClass: 'w-[86%]', icon: Database },
    { name: 'Auth & sessions', level: 80, barClass: 'w-[80%]', icon: Code2 },
    { name: 'Caching', level: 74, barClass: 'w-[74%]', icon: Boxes },
    { name: 'Background jobs', level: 72, barClass: 'w-[72%]', icon: TerminalSquare },
    { name: 'API design', level: 85, barClass: 'w-[85%]', icon: Server },
    { name: 'Testing', level: 76, barClass: 'w-[76%]', icon: FileCode2 },
  ],
  'Tools & DevOps': [
    { name: 'AWS', level: 80, barClass: 'w-[80%]', icon: Cloud },
    { name: 'Docker', level: 78, barClass: 'w-[78%]', icon: Container },
    { name: 'Git', level: 90, barClass: 'w-[90%]', icon: GitBranch },
    { name: 'CI pipelines', level: 75, barClass: 'w-[75%]', icon: Boxes },
    { name: 'Linux', level: 72, barClass: 'w-[72%]', icon: TerminalSquare },
    { name: 'Observability', level: 70, barClass: 'w-[70%]', icon: Cloud },
    { name: 'Vite tooling', level: 82, barClass: 'w-[82%]', icon: Boxes },
    { name: 'Code review', level: 86, barClass: 'w-[86%]', icon: GitBranch },
  ],
  Languages: [
    { name: 'TypeScript', level: 92, barClass: 'w-[92%]', icon: FileCode2 },
    { name: 'JavaScript', level: 90, barClass: 'w-[90%]', icon: FileCode2 },
    { name: 'SQL', level: 84, barClass: 'w-[84%]', icon: Database },
    { name: 'Python', level: 70, barClass: 'w-[70%]', icon: Code2 },
    { name: 'HTML', level: 88, barClass: 'w-[88%]', icon: Globe },
    { name: 'CSS', level: 86, barClass: 'w-[86%]', icon: Wind },
    { name: 'Bash', level: 68, barClass: 'w-[68%]', icon: TerminalSquare },
    { name: 'JSON / YAML', level: 82, barClass: 'w-[82%]', icon: FileCode2 },
  ],
};

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>('Frontend');

  return (
    <section id="skills" className="bg-[#faf7f2] border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="PLATFORM" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] max-w-2xl break-words">
          Proven tools behind secure, affordable systems.
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-2xl leading-[1.65]">
          The stack is chosen to last: widely supported, easy to host, and straightforward for your team to inherit.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={
                  isActive
                    ? 'px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-950 text-white shadow-md transition-all duration-150 active:scale-[0.98]'
                    : 'px-4 py-2.5 rounded-xl text-sm font-semibold bg-white hover:bg-stone-50 text-slate-700 border border-stone-200 shadow-sm transition-all duration-150'
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills[active].map((skill) => (
            <div
              key={skill.name}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-emerald-200 transition-all duration-200 flex flex-col min-w-0"
            >
              <IconBadge icon={skill.icon} />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight break-words">{skill.name}</h3>
              <div className="mt-4 h-1.5 w-full rounded-full bg-stone-100 overflow-hidden">
                <div className={`h-full rounded-full bg-emerald-500 ${skill.barClass}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
