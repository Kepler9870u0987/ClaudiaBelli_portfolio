import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Book } from '../types';
import { cn } from '../lib/utils';
import { SocialShare } from './SocialShare';

export const BookCard = ({ book }: { book: Book }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-cream overflow-hidden border border-brand-ink/5 p-8"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 shrink-0 relative bg-[#EFEDE9] p-4">
          <div className="absolute inset-0 bg-[#E0DCCF] border border-black/5 transform translate-x-1 translate-y-1"></div>
          <img 
            src={book.cover} 
            alt={book.title} 
            className="relative z-10 w-full aspect-[2/3] object-cover grayscale mix-blend-multiply opacity-90 transition-all hover:grayscale-0 duration-500" 
          />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <div className="flex justify-between items-baseline mb-6">
              <h3 className="text-4xl font-serif italic">{book.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 italic">Vol. {book.id}</span>
            </div>
            
            <p className="text-brand-ink/70 mb-6 leading-relaxed font-serif-secondary italic text-lg">{book.synopsis}</p>

            <div className="mb-8 space-y-4">
              <div className="border-l border-brand-ink/20 pl-6 italic text-sm">
                <p className="opacity-60 mb-2 font-sans not-italic text-[9px] uppercase tracking-widest font-bold">Estratto dalla Prefazione</p>
                <p>"{book.prefaceExtract}"</p>
              </div>
              
              {book.criticalNotes && (
                <div className="text-[11px] font-sans uppercase tracking-tighter opacity-50 max-w-md">
                   {book.criticalNotes}
                </div>
              )}
            </div>
          </div>

          <div className="relative pt-6 border-t border-brand-ink/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <button 
              onClick={() => setShowLinks(!showLinks)}
              className="w-full sm:w-auto px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] bg-brand-ink text-brand-cream hover:opacity-90 transition-all flex items-center justify-center gap-4 rounded-full whitespace-nowrap"
            >
              Acquista ora
              <ChevronRight className={cn("transition-transform duration-300", showLinks && "rotate-90")} size={14} />
            </button>

            <SocialShare title={book.title} description={book.synopsis} size="sm" />

            <AnimatePresence>
              {showLinks && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -4 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-0 mt-2 bg-white dark:bg-brand-paper border border-brand-stone/20 shadow-2xl rounded-xl overflow-hidden z-10"
                >
                  {book.purchaseLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 px-6 hover:bg-brand-paper dark:hover:bg-brand-ink/10 transition-colors border-b last:border-0 border-brand-stone/10 gap-8 min-w-[200px]"
                    >
                      <span className="font-semibold text-xs uppercase tracking-wider text-brand-ink">{link.name}</span>
                      <ExternalLink size={14} className="text-brand-stone" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
