import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Award, Newspaper, Palette, BookOpen } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { BOOKS, ART_PIECES, ARTICLES, EVENTS } from '../constants';
import { BookCard } from '../components/BookCard';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="bg-brand-cream">
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen py-24 md:py-32 flex items-center relative px-12 overflow-hidden border-b border-brand-ink/5">
          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between min-h-[75vh] gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[90px] lg:text-[160px] leading-[0.8] tracking-[-0.04em] font-serif italic mb-10 text-brand-ink text-balance">
                Claudia<br/>
                <span className="not-italic md:ml-32 tracking-tighter text-brand-clay underline decoration-brand-olive/20 underline-offset-8">Belli</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:ml-32 gap-12 items-baseline">
                <p className="max-w-md text-xl leading-relaxed text-brand-ink/80 font-serif-secondary italic">
                  "L'arte è il respiro dell'anima, la scrittura è il suo battito." — Pittrice e scrittrice in dialogo costante tra tela e inchiostro.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-[1px] bg-brand-clay/30 self-center"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Parma / Sant'Ilario d'Enza</span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between lg:items-end mt-12 pt-12 border-t border-brand-ink/10 gap-8">
              <div className="hidden lg:block space-y-4 text-brand-ink">
                <div className="flex gap-10">
                  <div className="space-y-1">
                    <span className="block text-[9px] font-bold uppercase tracking-widest opacity-30">Expertise / E-E-A-T</span>
                    <span className="block text-xs font-semibold uppercase tracking-tighter text-brand-clay">Curatela / Social Impact</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[9px] font-bold uppercase tracking-widest opacity-30">Latest Success</span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-tighter">
                      <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                      Premio Trasimeno 2025
                    </span>
                  </div>
                </div>
              </div>

              <div id="hero-actions-container" className="flex flex-col md:flex-row items-stretch md:items-center gap-8 text-brand-ink w-full lg:max-w-2xl bg-brand-paper/50 dark:bg-brand-paper/20 p-6 md:p-8 rounded-3xl border border-brand-ink/10 backdrop-blur-md">
                <div id="hero-actions-badge" className="flex flex-col gap-2 shrink-0 md:max-w-[200px] md:border-r border-brand-ink/10 md:pr-8">
                  <span id="hero-badge-title" className="text-[10px] font-bold uppercase tracking-widest text-brand-clay">Esplorazione</span>
                  <p id="hero-badge-text" className="text-xs font-serif-secondary italic text-brand-ink/70 leading-relaxed">
                    Accedi all'archivio storico o naviga direttamente le opere letterarie e visive.
                  </p>
                </div>
                <div id="hero-buttons-wrapper" className="flex flex-col sm:flex-row gap-4 w-full">
                  <button 
                    id="btn-goto-biografia"
                    onClick={() => navigate('/chi-sono')}
                    className="flex-1 text-center text-xs font-bold uppercase tracking-[0.2em] border border-brand-ink bg-transparent text-brand-ink px-8 py-5 hover:bg-brand-ink hover:text-brand-cream transition-all rounded-full cursor-pointer"
                  >
                    Biografia
                  </button>
                  <button 
                    id="btn-goto-opere"
                    onClick={() => {
                      const el = document.getElementById('latest-works');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 text-center text-xs font-bold uppercase tracking-[0.2em] bg-brand-clay text-white px-8 py-5 hover:opacity-95 transition-all rounded-full shadow-sm cursor-pointer"
                  >
                    Opere
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-[-5%] w-[600px] h-[800px] border border-brand-ink/[0.03] pointer-events-none -z-0 rounded-[100px] rotate-6" />
        </section>

        {/* LATEST WORKS PREVIEW - BOOKS */}
        <section id="latest-works" className="py-40 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 block">Letteratura</span>
                <h2 className="text-6xl font-serif italic text-brand-ink leading-tight">Dalla parola<br/>al cuore in poi.</h2>
              </div>
              <Link to="/libri" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-ink/60 hover:text-brand-ink transition-colors pb-2 border-b border-transparent hover:border-brand-ink">
                All Publications <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-20">
              {BOOKS.slice(0, 1).map(book => (
                <div key={book.id} className="relative">
                  <BookCard book={book} />
                  <div className="hidden lg:block absolute -right-20 top-1/2 -rotate-90">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20 whitespace-nowrap">Featured Publication 2023-2024</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ART PREVIEW */}
        <section className="py-40 px-12 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-[4/5] bg-brand-cream p-4 rotate-1 shadow-2xl">
                <div className="absolute inset-0 bg-brand-ink/5 translate-x-2 translate-y-2 -z-0"></div>
                <img 
                  src={ART_PIECES[0].image} 
                  alt={ART_PIECES[0].title}
                  className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-all hover:grayscale-0 duration-700"
                />
              </div>
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 block">Visioni d'Arte / Gestualità Matrica</span>
                  <h2 className="text-6xl font-serif italic text-brand-ink leading-tight text-balance">
                    Luce Segreta e vibrazioni dell'essere.
                  </h2>
                </div>
                <p className="text-xl font-serif-secondary italic text-brand-ink/70 leading-relaxed text-balance">
                  "Claudia Belli crea immagini altrettanto efficaci sia con i pennelli, sia con i suoi versi, suscitando emozioni visionarie e profonde."
                  <span className="block mt-4 not-italic text-[10px] uppercase font-bold tracking-widest opacity-30">— Nota Critica</span>
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-8 border-l border-brand-ink/10 pl-8">
                    <Palette size={40} className="text-brand-ink/10 shrink-0" />
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest opacity-40">Esposizioni Internazionali</span>
                      <span className="text-sm font-medium uppercase tracking-tighter">Barcellona, Nizza, Parigi, Napoli</span>
                    </div>
                  </div>
                  <Link to="/opere-arte" className="inline-block text-xs font-bold uppercase tracking-[0.3em] bg-brand-ink text-brand-cream px-10 py-5 w-fit hover:opacity-90 transition-all rounded-full">
                    Scopri la Galleria
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES / COLUMNS PREVIEW */}
        <section className="py-40 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-brand-ink/10 pb-12">
              <div className="max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 block">Gazzettino Santilariese</span>
                <h2 className="text-5xl font-serif italic text-brand-ink">Diario di Cultura</h2>
              </div>
              <Link to="/rubriche" className="mt-8 md:mt-0 group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-ink/60 hover:text-brand-ink transition-colors">
                Read All Columns <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {ARTICLES.map((article, idx) => (
                <div key={article.id} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-serif italic opacity-10">0{idx + 1}</span>
                    <div className="h-[1px] flex-grow bg-brand-ink/10"></div>
                  </div>
                  <h3 className="text-2xl font-serif transition-colors hover:text-brand-ink/60 cursor-pointer">{article.title}</h3>
                  <p className="text-sm text-brand-ink/60 italic font-serif leading-relaxed line-clamp-3">"{article.excerpt}"</p>
                  <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group">
                    Full Content <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS MINI PREVIEW */}
        <section className="py-24 px-12 border-t border-brand-ink/5 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex items-center gap-8">
                <div className="bg-brand-ink p-4 rounded-full text-brand-cream">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif italic text-brand-ink">Prossimo Appuntamento</h4>
                  <p className="text-sm text-brand-ink/60 font-medium uppercase tracking-tighter">Reading "Amare tra forza e fragilità" — Centro Mavarta</p>
                </div>
              </div>
              <Link to="/eventi" className="px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] border border-brand-ink hover:bg-brand-ink hover:text-brand-cream transition-all">
                Calendar Archive
              </Link>
            </div>
          </div>
        </section>

        {/* SOCIAL ENGAGEMENT & CURATELA */}
        <section className="py-40 px-12 bg-white dark:bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="p-12 bg-brand-olive text-white rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-60 mb-4 block">Editorial Curation</span>
                <h3 className="text-4xl font-serif italic mb-6">Collana "Libera-Mente Scrivere"</h3>
                <p className="text-lg opacity-80 mb-10 leading-relaxed font-serif">
                  Supporto autori emergenti nel trovare la propria voce. Dalla revisione del manoscritto alla promozione, ogni progetto è un nuovo viaggio.
                </p>
                <Link to="/curatela" className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                  Explore Method <ChevronRight size={14} />
                </Link>
              </div>

              <div className="p-12 border border-brand-ink/10 rounded-3xl flex flex-col justify-center text-center space-y-8">
                <div className="flex justify-center">
                  <BookOpen size={40} className="text-brand-ink/20" />
                </div>
                <h2 className="text-4xl font-serif italic text-brand-ink leading-tight">
                  "L'arte è uno strumento di riscatto e di libertà, un ponte tra le mura."
                </h2>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Progetto Rete Carcere Parma</p>
                  <div className="flex justify-center gap-8">
                    <span className="text-[11px] font-semibold uppercase tracking-widest">Laboratori d'Arte</span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest">Sillogi Poetiche</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

