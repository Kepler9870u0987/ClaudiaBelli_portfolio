import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ArrowRight, X, Sparkles, Clock } from 'lucide-react';
import { EXHIBITIONS } from '../constants';
import { Exhibition } from '../types';

export const ExhibitionsSection = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);

  const filteredExhibitions = EXHIBITIONS.filter((ex) => {
    if (filter === 'all') return true;
    return ex.status === filter;
  });

  const getStatusBadge = (status: Exhibition['status']) => {
    if (status === 'upcoming') {
      return (
        <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold uppercase tracking-widest bg-brand-clay/10 text-brand-clay px-2.5 py-1 rounded-full border border-brand-clay/20">
          <Sparkles size={8} className="animate-pulse" /> Prossimamente
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold uppercase tracking-widest bg-brand-olive/10 text-brand-olive px-2.5 py-1 rounded-full border border-brand-olive/20">
        <Clock size={8} /> Archiviata
      </span>
    );
  };

  const getGoogleCalendarUrl = (ex: Exhibition) => {
    const title = encodeURIComponent(`Mostra Claudia Belli: ${ex.title}`);
    const details = encodeURIComponent(`${ex.description}\n\nLuogo: ${ex.location}`);
    const location = encodeURIComponent(ex.location);
    // Use standard full-day or dummy upcoming slot based on standard format
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div id="exhibitions-root" className="mt-24 pt-24 border-t border-brand-ink/10 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-clay">Curatela & Spazio Espositivo</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-ink">Mostre ed Esposizioni</h2>
          <p className="text-sm font-serif-secondary italic text-brand-stone/80 max-w-xl">
            Il dialogo continuo tra la parola e la tela prende vita in eventi immersivi distribuiti sul territorio nazionale ed europeo.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex bg-[#F2F0EB] dark:bg-black/20 p-1.5 rounded-full border border-brand-ink/5 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-brand-ink text-brand-cream shadow-sm'
                : 'text-brand-stone hover:text-brand-ink'
            }`}
          >
            Tutte
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
              filter === 'upcoming'
                ? 'bg-brand-ink text-brand-cream shadow-sm'
                : 'text-brand-stone hover:text-brand-ink'
            }`}
          >
            Prossime Mostre
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
              filter === 'past'
                ? 'bg-brand-ink text-brand-cream shadow-sm'
                : 'text-brand-stone hover:text-brand-ink'
            }`}
          >
            Archivio Storico
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredExhibitions.map((ex) => (
            <motion.div
              key={ex.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group bg-brand-cream rounded-3xl overflow-hidden border border-brand-ink/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-secondary">
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(ex.status)}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-brand-stone/70">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Calendar size={12} className="text-brand-clay" />
                      {ex.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-stone/20" />
                    <span className="flex items-center gap-1.5 text-xs">
                      <MapPin size={12} className="text-brand-olive" />
                      {ex.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-brand-ink font-semibold group-hover:text-brand-clay transition-colors leading-tight">
                    {ex.title}
                  </h3>

                  <p className="text-xs text-brand-ink/70 leading-relaxed italic line-clamp-3">
                    "{ex.description}"
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-ink/5 mt-auto">
                  <button
                    onClick={() => setSelectedExhibition(ex)}
                    className="flex items-center justify-between w-full text-left text-[10px] font-sans font-bold uppercase tracking-widest text-brand-ink group-hover:text-brand-clay transition-colors mt-2 cursor-pointer"
                  >
                    <span>Dettagli Esposizione</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty visual state if no filtered items (edge case protect) */}
      {filteredExhibitions.length === 0 && (
        <div className="py-20 text-center space-y-3">
          <p className="font-serif-secondary italic text-lg text-brand-stone">Nessuna esposizione in questa sezione al momento.</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E5240]/60">Verifica le altre schede del portfolio</p>
        </div>
      )}

      {/* Exhibition Details Expanded Modal */}
      <AnimatePresence>
        {selectedExhibition && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExhibition(null)}
              className="fixed inset-0 bg-brand-ink/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-brand-paper rounded-3xl overflow-hidden shadow-2xl border border-brand-ink/10 max-w-2xl w-full relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
            >
              <button
                onClick={() => setSelectedExhibition(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-brand-cream rounded-full border border-brand-ink/10 text-brand-stone hover:text-brand-ink transition-colors shadow-sm cursor-pointer"
                title="Chiudi"
              >
                <X size={16} />
              </button>

              <div className="w-full md:w-1/2 relative bg-brand-secondary h-48 md:h-auto">
                <img
                  src={selectedExhibition.image}
                  alt={selectedExhibition.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-paper/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="w-full md:w-1/2 p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    {getStatusBadge(selectedExhibition.status)}
                    <h3 className="text-2xl font-serif text-brand-ink mt-2 leading-tight">
                      {selectedExhibition.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs text-brand-stone">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-brand-clay shrink-0" />
                      <span className="font-medium">{selectedExhibition.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-brand-olive shrink-0" />
                      <span className="font-medium">{selectedExhibition.location}</span>
                    </div>
                  </div>

                  <div className="w-8 h-[1px] bg-brand-clay" />

                  <p className="text-xs text-brand-ink/80 leading-relaxed font-serif-secondary italic">
                    "{selectedExhibition.description}"
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-ink/5 space-y-3">
                  {selectedExhibition.status === 'upcoming' ? (
                    <a
                      href={getGoogleCalendarUrl(selectedExhibition)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-[10px] font-sans font-bold uppercase tracking-widest bg-[#8E5240] text-white py-3.5 rounded-full hover:bg-[#4E523F] transition-colors"
                    >
                      Aggiungi al Calendario
                    </a>
                  ) : (
                    <a
                      href={`mailto:m.albanese.manuel@gmail.com?subject=Richiesta informazioni catalogo: ${selectedExhibition.title}`}
                      className="block text-center text-[10px] font-sans font-bold uppercase tracking-widest border border-brand-ink/20 text-brand-ink py-3.5 rounded-full hover:bg-brand-ink hover:text-brand-cream transition-colors"
                    >
                      Richiedi Catalogo Opere
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
