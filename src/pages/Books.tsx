import { BOOKS } from '../constants';
import { BookCard } from '../components/BookCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Books = () => {
  return (
    <PageTransition>
      <section id="libri" className="pt-44 md:pt-60 pb-24 px-6 md:px-12 min-h-screen bg-brand-cream overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>La mia Biblioteca</SectionHeading>
          
          <div className="mb-12 sm:mb-20 p-6 sm:p-8 border-l-4 border-brand-clay bg-brand-paper shadow-sm rounded-r-2xl">
            <h3 className="text-2xl font-serif italic mb-4 text-brand-ink">Un percorso in tre atti</h3>
            <p className="text-lg font-serif-secondary italic text-brand-ink/70 leading-relaxed text-balance">
              Ogni mia pubblicazione è un’esplorazione dei tre pilastri del mio sentire: <span className="text-brand-clay font-bold">Parola</span> come mezzo di fluttuazione emotiva, <span className="text-brand-clay font-bold">Resilienza</span> come forza di rinascita e la <span className="text-brand-clay font-bold">Donna</span> come baricentro dell'universo poetico.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {BOOKS.map((book, idx) => (
              <div key={book.id} className="relative group">
                <div className="hidden sm:block absolute -left-12 top-0 text-[120px] font-serif italic opacity-[0.03] select-none pointer-events-none">
                  0{idx + 1}
                </div>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
