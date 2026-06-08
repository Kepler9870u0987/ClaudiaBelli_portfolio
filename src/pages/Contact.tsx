import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const Contact = () => {
  return (
    <PageTransition>
      <section id="contatti" className="py-40 px-12 bg-brand-cream text-brand-ink min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2 space-y-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 block">Dialogue</span>
                <h2 className="text-7xl font-serif italic mb-8">Iniziamo un nuovo progetto</h2>
              </div>
              
              <p className="text-xl text-brand-ink/70 font-serif italic max-w-md leading-relaxed">
                Organizziamo insieme un evento culturale, un reading o una mostra. 
                Il confronto è il primo passo per ogni bellezza.
              </p>

              <div className="pt-12 border-t border-brand-ink/10 flex flex-col gap-6">
                <div className="space-y-1">
                  <span className="block text-[9px] font-bold uppercase tracking-widest opacity-30">Inquiry</span>
                  <span className="text-lg font-serif italic border-b border-brand-ink/20">m.albanese.manuel@gmail.com</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] font-bold uppercase tracking-widest opacity-30">Localization</span>
                  <span className="block text-xs font-medium uppercase tracking-tighter">Parma, IT / Remote</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-brand-paper p-12 relative">
              <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
              <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                     <label className="text-[9px] font-bold uppercase tracking-widest opacity-30">Nome</label>
                     <input type="text" className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:outline-none focus:border-brand-ink transition-colors text-sm font-medium" placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[9px] font-bold uppercase tracking-widest opacity-30">Email</label>
                     <input type="email" className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:outline-none focus:border-brand-ink transition-colors text-sm font-medium" placeholder="tua@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest opacity-30">Motivo del contatto</label>
                   <select className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:outline-none focus:border-brand-ink transition-colors appearance-none text-sm font-medium">
                      <option>Organizzazione Evento</option>
                      <option>Acquisto Opera d'Arte</option>
                      <option>Curatela Editoriale</option>
                      <option>Altro</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[9px] font-bold uppercase tracking-widest opacity-30">Messaggio</label>
                   <textarea rows={4} className="w-full bg-transparent border-b border-brand-ink/10 py-2 focus:outline-none focus:border-brand-ink transition-colors resize-none text-sm font-medium" placeholder="Parlami della tua idea..." />
                </div>
                <button className="text-xs font-bold uppercase tracking-[0.2em] border border-brand-ink px-10 py-4 hover:bg-brand-ink hover:text-white transition-all">
                  Invia Proposta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
