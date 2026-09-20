import { Star } from 'lucide-react';
import type { TestimonialItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const testimonials: TestimonialItem[] = [
  {
    quote:
      'Ashish treats product work like a craft. He asked the hard questions early, then delivered a React and Node stack we could actually maintain.',
    name: 'Priya Raman',
    title: 'Head of Product, Northwind Labs',
  },
  {
    quote:
      'We needed someone who could own the UI and the database. He did both, stayed calm under deadline, and left the codebase cleaner than he found it.',
    name: 'Marcus Hale',
    title: 'Founder, Cedar & Co.',
  },
  {
    quote:
      'Clear communication, honest estimates, and production-ready TypeScript. I would hire Ashish again for any ambitious full-stack brief.',
    name: 'Elena Voss',
    title: 'Engineering Manager, Independent Studio',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="KIND WORDS" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          What collaborators say after we ship.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col min-w-0"
            >
              <div className="flex space-x-1 mb-4 select-none">
                {['s1', 's2', 's3', 's4', 's5'].map((starId) => (
                  <Star key={starId} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-base text-slate-600 leading-[1.65] italic">“{item.quote}”</p>
              <div className="mt-6 pt-4 border-t border-stone-200">
                <p className="text-lg font-bold text-slate-900 tracking-tight">{item.name}</p>
                <p className="text-[11px] font-mono font-bold tracking-wider text-slate-600 uppercase mt-1">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
