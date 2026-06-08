import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { EVENTS } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Events = () => {
  return (
    <PageTransition>
      <section id="eventi" className="py-40 px-12 bg-brand-stone/5 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>Percorsi e Traguardi</SectionHeading>
          <div className="space-y-8">
            {EVENTS.map(event => (
              <motion.div 
                key={event.id}
                className="flex gap-8 items-start bg-brand-cream dark:bg-brand-paper p-8 rounded-2xl shadow-sm border border-brand-ink/5"
              >
                <div className="bg-brand-paper dark:bg-brand-ink/10 p-4 rounded-xl shrink-0">
                  <Award className="text-brand-ink" size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                     <span className="text-sm font-semibold text-brand-stone uppercase tracking-widest">{event.date}</span>
                     <span className="px-2 py-0.5 bg-brand-paper dark:bg-brand-ink/20 text-[10px] rounded uppercase font-bold text-brand-ink">{event.category}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-2 text-brand-ink">{event.title}</h3>
                  <p className="text-brand-ink/70 font-serif-secondary italic leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
