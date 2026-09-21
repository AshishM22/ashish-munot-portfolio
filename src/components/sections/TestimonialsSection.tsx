import { Quote } from 'lucide-react';
import type { TestimonialItem } from '../../types';
import { SectionBadge } from '../ui/SectionBadge';

const testimonials: TestimonialItem[] = [
  {
    quote:
      'We did not want a pretty homepage. We needed a system our staff could log into every day. Ashish delivered the portal, hosting, and access roles as one piece of work.',
    name: 'Priya Raman',
    title: 'Operations lead, Northwind Labs',
    initials: 'PR',
  },
  {
    quote:
      'Cost was predictable and security was not an afterthought. Backups, SSL, and who can see what were decided before go-live — not after a scare.',
    name: 'Marcus Hale',
    title: 'Owner, Cedar & Co.',
    initials: 'MH',
  },
  {
    quote:
      'One person who understood the business process, the software, and the cloud. We were not coordinating three vendors for a mid-size company.',
    name: 'Elena Voss',
    title: 'IT coordinator, independent group',
    initials: 'EV',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white border-b border-stone-200/80 py-16 sm:py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge label="FROM OPERATORS" />
        <h2 className="text-[28px] sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.025em] text-slate-950 leading-[1.2] break-words">
          Trusted by people who have to keep the lights on.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="surface-card p-5 sm:p-6 flex flex-col min-w-0"
            >
              <Quote className="w-6 h-6 mb-3 text-emerald-700" />
              <p className="text-base leading-[1.7] text-slate-600">“{item.quote}”</p>
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[#f5efe6] text-slate-800 border border-stone-200">
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold tracking-tight text-slate-900">{item.name}</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
