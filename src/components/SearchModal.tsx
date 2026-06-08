import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, Image, FileText, FileSignature, CornerDownRight, ArrowRight, Calendar } from 'lucide-react';
import { BOOKS, ART_PIECES, ARTICLES, POEMS, EXHIBITIONS } from '../constants';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'libro' | 'opera' | 'articolo' | 'poesia' | 'mostra';
  path: string;
  metadata?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      setResults([]);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Search execution logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const matches: SearchResult[] = [];

    // Search Books
    BOOKS.forEach(book => {
      if (
        book.title.toLowerCase().includes(cleanQuery) ||
        book.synopsis.toLowerCase().includes(cleanQuery) ||
        (book.criticalNotes && book.criticalNotes.toLowerCase().includes(cleanQuery))
      ) {
        matches.push({
          id: `book-${book.id}`,
          title: book.title,
          description: book.synopsis,
          type: 'libro',
          path: '/libri',
          metadata: 'Libro / Silloge'
        });
      }
    });

    // Search Artworks
    ART_PIECES.forEach(piece => {
      if (
        piece.title.toLowerCase().includes(cleanQuery) ||
        piece.description.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          id: `art-${piece.id}`,
          title: piece.title,
          description: piece.description,
          type: 'opera',
          path: '/opere-arte',
          metadata: 'Opera d\'Arte'
        });
      }
    });

    // Search Articles
    ARTICLES.forEach(article => {
      if (
        article.title.toLowerCase().includes(cleanQuery) ||
        article.excerpt.toLowerCase().includes(cleanQuery) ||
        article.source.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          id: `article-${article.id}`,
          title: article.title,
          description: article.excerpt,
          type: 'articolo',
          path: '/rubriche',
          metadata: `Rubrica Periodica / ${article.source}`
        });
      }
    });

    // Search Poems
    POEMS.forEach(poem => {
      if (
        poem.title.toLowerCase().includes(cleanQuery) ||
        poem.text.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          id: `poem-${poem.id}`,
          title: poem.title,
          description: poem.text.split('\n').slice(0, 2).join('... '),
          type: 'poesia',
          path: '/poesia',
          metadata: 'Poesia'
        });
      }
    });

    // Search Exhibitions
    EXHIBITIONS.forEach(ex => {
      if (
        ex.title.toLowerCase().includes(cleanQuery) ||
        ex.description.toLowerCase().includes(cleanQuery) ||
        ex.location.toLowerCase().includes(cleanQuery)
      ) {
        matches.push({
          id: `ex-${ex.id}`,
          title: ex.title,
          description: `${ex.date} - ${ex.location}: ${ex.description}`,
          type: 'mostra',
          path: '/opere-arte',
          metadata: ex.status === 'upcoming' ? 'Prossima Mostra' : 'Mostra Archiviata'
        });
      }
    });

    setResults(matches);
  }, [query]);

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'libro':
        return <BookOpen className="text-brand-clay" size={16} />;
      case 'opera':
        return <Image className="text-brand-olive" size={16} />;
      case 'articolo':
        return <FileText className="text-brand-gold" size={16} />;
      case 'poesia':
        return <FileSignature className="text-brand-stone" size={16} />;
      case 'mostra':
        return <Calendar className="text-brand-clay" size={16} />;
    }
  };

  const getBadgeClass = (type: SearchResult['type']) => {
    switch (type) {
      case 'libro':
        return 'bg-brand-clay/10 text-brand-clay border-brand-clay/20';
      case 'opera':
        return 'bg-brand-olive/10 text-brand-olive border-brand-olive/20';
      case 'articolo':
        return 'bg-brand-gold/10 text-brand-gold border-brand-gold/20';
      case 'poesia':
        return 'bg-brand-stone/10 text-brand-stone border-brand-stone/20';
      case 'mostra':
        return 'bg-[#8E5240]/10 text-[#8E5240] border-[#8E5240]/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="search-modal-portal" className="fixed inset-0 z-[100] flex justify-center items-start pt-20 md:pt-32 px-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            id="search-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-brand-ink/40 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Dialog Container */}
          <motion.div
            id="search-modal-box"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-full max-w-2xl bg-brand-paper dark:bg-brand-paper shadow-2xl rounded-3xl overflow-hidden border border-brand-ink/10 relative z-10 flex flex-col max-h-[70vh] md:max-h-[75vh]"
          >
            {/* Input Header */}
            <div id="search-modal-header" className="flex items-center gap-4 px-6 py-5 border-b border-brand-ink/5 bg-[#F2F0EB]/60 dark:bg-black/10">
              <Search className="text-brand-stone shrink-0" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Cerca opere, libri, articoli o poesie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-brand-ink placeholder-brand-stone/50 font-sans font-medium text-lg leading-relaxed"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-brand-stone hover:text-brand-ink transition-colors rounded-full hover:bg-black/5"
                  title="Cancella inserimento"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results Body */}
            <div id="search-modal-body" className="flex-1 overflow-y-auto p-6 space-y-4">
              {query.trim() === '' ? (
                <div id="search-modal-empty" className="py-8 text-center space-y-2">
                  <p className="font-serif-secondary italic text-base text-brand-stone/60">Digitare per avviare una ricerca nell'archivio di Claudia Belli...</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E5240]/60">Es. "Luce", "Silloge", "Parole", "Carceri"</p>
                </div>
              ) : results.length > 0 ? (
                <div id="search-modal-results-list" className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-brand-ink/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-stone/60">Risultati della ricerca</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-brand-ink/5 text-brand-ink rounded-full">
                      {results.length} trovati
                    </span>
                  </div>
                  {results.map((result) => (
                    <div
                      key={result.id}
                      id={`search-result-${result.id}`}
                      onClick={() => handleSelect(result.path)}
                      className="group flex flex-col md:flex-row md:items-center justify-between p-4 bg-brand-cream/40 hover:bg-brand-cream active:bg-brand-cream border border-brand-ink/5 rounded-2xl transition-all cursor-pointer gap-4"
                    >
                      <div className="flex gap-4 items-start">
                        <div className={`mt-1 p-2 border rounded-xl shrink-0 flex items-center justify-center ${getBadgeClass(result.type)}`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-bold font-sans text-sm tracking-tight text-brand-ink group-hover:text-brand-clay transition-colors">
                              {result.title}
                            </span>
                          </div>
                          <p className="text-xs font-serif-secondary italic text-brand-ink/60 line-clamp-1 leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                        <span className="text-[9px] font-sans font-bold uppercase tracking-widest opacity-40">
                          {result.metadata}
                        </span>
                        <CornerDownRight size={14} className="opacity-0 group-hover:opacity-100 text-brand-clay transition-all transform translate-x-1 group-hover:translate-x-0" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div id="search-modal-no-results" className="py-12 text-center space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full border border-brand-ink/5 flex items-center justify-center text-brand-stone/40">
                    <Search size={18} />
                  </div>
                  <p className="font-serif-secondary italic text-base text-brand-stone">Nessun risultato trovato per "{query}"</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-stone/40">Controlla l'ortografia o immetti parole chiave differenti</p>
                </div>
              )}
            </div>

            {/* Quick shortcuts / Footer */}
            <div id="search-modal-footer" className="bg-[#F2F0EB]/30 dark:bg-black/5 px-6 py-3 border-t border-brand-ink/5 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-brand-stone/50">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-brand-cream rounded border border-brand-ink/10 shadow-sm">ESC</kbd> chiudi
              </span>
              <span className="flex items-center gap-1.5">
                seleziona per visualizzare <ArrowRight size={10} />
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
