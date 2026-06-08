import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search } from 'lucide-react';
import { ART_PIECES } from '../constants';
import { ArtCard } from '../components/ArtCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';
import { SocialShare } from '../components/SocialShare';
import { ExhibitionsSection } from '../components/ExhibitionsSection';

export const Art = () => {
  const [selectedPiece, setSelectedPiece] = useState<typeof ART_PIECES[0] | null>(null);

  return (
    <PageTransition>
      <section id="opere-arte" className="py-40 px-12 bg-brand-paper dark:bg-brand-paper/50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Galleria d'Arte</SectionHeading>
          
          <div className="mb-12 p-6 border border-brand-ink/10 bg-brand-cream/50 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-brand-clay/10 flex items-center justify-center shrink-0 text-brand-clay font-bold text-lg italic serif">
              !
            </div>
            <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-brand-ink/60 leading-relaxed">
              <span className="font-bold text-brand-ink">Esperienza Immersiva:</span> Clicca sulle opere per visualizzarle a tutto schermo. I pulsanti di richiesta apriranno il tuo client email predefinito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ART_PIECES.map(piece => (
              <div 
                key={piece.id} 
                onClick={() => setSelectedPiece(piece)} 
                className="cursor-zoom-in relative group"
              >
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-ink/80 text-white p-2 rounded-full backdrop-blur-md">
                   <Search size={16} />
                </div>
                <ArtCard piece={piece} />
              </div>
            ))}
          </div>

          {/* Exhibition of past & upcoming events */}
          <ExhibitionsSection />
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedPiece && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-brand-ink/95 backdrop-blur-xl flex items-center justify-center p-8 lg:p-24"
              onClick={() => setSelectedPiece(null)}
            >
              <button 
                className="absolute top-10 right-10 text-brand-cream/40 hover:text-brand-cream p-2"
                onClick={() => setSelectedPiece(null)}
              >
                <X size={40} />
              </button>
              
              <div className="flex flex-col lg:flex-row gap-16 max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
                <motion.div 
                   initial={{ scale: 0.9, y: 20 }}
                   animate={{ scale: 1, y: 0 }}
                   className="lg:w-2/3 flex items-center justify-center"
                >
                  <img 
                    src={selectedPiece.image} 
                    alt={selectedPiece.title} 
                    className="max-h-[70vh] w-auto shadow-2xl border-4 border-white/5"
                  />
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 }}
                   className="lg:w-1/3 flex flex-col justify-center text-brand-cream space-y-8"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-4 block">Selected Work</span>
                    <h3 className="text-6xl font-serif italic mb-6">{selectedPiece.title}</h3>
                    <div className="w-12 h-[1px] bg-brand-clay mb-8"></div>
                    <p className="text-xl font-serif-secondary italic opacity-80 leading-relaxed font-light">
                      "{selectedPiece.description}"
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-8">
                    <a 
                      href={`mailto:m.albanese.manuel@gmail.com?subject=Richiesta: ${selectedPiece.title}`}
                      className="block text-center text-xs font-bold uppercase tracking-[0.3em] bg-brand-clay text-white py-6 rounded-full hover:opacity-90 transition-all"
                    >
                      Richiedi Acquisizione
                    </a>
                    <div className="flex justify-center pt-8 border-t border-white/10">
                      <SocialShare title={selectedPiece.title} description={selectedPiece.description} size="md" className="text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
};
