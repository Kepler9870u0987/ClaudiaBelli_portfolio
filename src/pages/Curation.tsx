import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Curation = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <section id="curatela" className="py-40 px-12 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <SectionHeading>Curatela Editoriale</SectionHeading>
          <div className="bg-brand-olive text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <h3 className="text-3xl font-serif mb-6 relative z-10">Collana "Libera-Mente Scrivere"</h3>
            <p className="text-xl opacity-90 mb-8 relative z-10 leading-relaxed font-serif italic">
              Supporto gli autori emergenti nel trovare la propria voce. Dalla revisione del manoscritto 
              alla promozione, seguo ogni progetto con la passione che dedico alle mie stesse opere.
            </p>
            <button 
              onClick={() => navigate('/libri')}
              className="flex items-center gap-2 text-brand-paper hover:translate-x-2 transition-transform cursor-pointer font-medium relative z-10 group"
            >
              Vedi i libri della collana <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
