import { motion } from 'motion/react';
import { POEMS } from '../constants';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Poetry = () => {
  return (
    <PageTransition>
      <section id="poesia" className="pt-44 md:pt-60 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Spazio Poesia</SectionHeading>
          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {POEMS.map(poem => (
              <motion.div 
                key={poem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto w-full text-center"
              >
                <div className="inline-block p-4 mb-8 md:mb-10">
                   <h3 className="text-3xl sm:text-4xl font-serif text-brand-ink mb-1">{poem.title}</h3>
                   <div className="h-[1px] w-24 bg-brand-clay mx-auto"></div>
                </div>
                
                <div className="whitespace-pre-line text-lg sm:text-2xl font-serif-secondary italic text-brand-ink/80 leading-[1.8] px-2 sm:px-8">
                  {poem.text}
                </div>

                <div className="mt-16 flex justify-center opacity-10">
                   <div className="w-1 h-1 rounded-full bg-brand-ink"></div>
                   <div className="w-1 h-1 rounded-full bg-brand-ink mx-2"></div>
                   <div className="w-1 h-1 rounded-full bg-brand-ink"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
