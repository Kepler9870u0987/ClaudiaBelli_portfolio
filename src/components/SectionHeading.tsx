import { ReactNode } from 'react';
import { motion } from 'motion/react';

export const SectionHeading = ({ children, id }: { children: ReactNode, id?: string }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20 text-center"
  >
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-3 block">Perspective</span>
    <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight text-brand-ink">
      {children}
    </h2>
  </motion.div>
);
