import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ReadingProgressBar } from '../components/ReadingProgressBar';

export const Biography = () => {
  return (
    <PageTransition>
      <ReadingProgressBar />
      <section id="chi-sono" className="py-40 px-12 bg-[#EFEDE9] dark:bg-brand-paper relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
                 <div className="absolute inset-0 bg-[#E0DCCF] border border-black/5 transform rotate-2"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" 
                  alt="Claudia Belli" 
                  className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-all hover:grayscale-0 duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-brand-ink"
            >
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 block">Identity</span>
                  <h2 className="text-6xl font-serif italic mb-8">La duplice anima creativa</h2>
                  <div className="prose prose-lg text-brand-ink/80 font-serif-secondary italic leading-relaxed space-y-6">
                    <p>
                      Pittrice e scrittrice residente a Sant'Ilario d'Enza, Claudia Belli vive in un dialogo costante tra tela e inchiostro. 
                      La sua produzione letteraria, acclamata dalla critica, ha ricevuto prestigiosi riconoscimenti come il 
                      <span className="text-brand-clay font-bold not-italic"> Premio Nazionale Luciano Serra 2024</span> 
                      e il recente <span className="text-brand-clay font-bold not-italic">Premio Poesia Trasimeno 2025</span>.
                    </p>
                    <p className="not-italic font-sans text-base opacity-70">
                      Il suo percorso artistico è profondamente radicato nell'impegno civile. Attraverso l'associazione 
                      <span className="font-semibold"> "Rete Carcere Parma"</span>, Claudia conduce laboratori di poesia e arte 
                      per i detenuti del carcere di Parma, trasformando la bellezza in uno strumento concreto di riscatto, 
                      riflessione e libertà interiore.
                    </p>
                    <p className="border-l-2 border-brand-clay/30 pl-6 text-brand-ink/60">
                      "L'arte di Claudia suscita emozioni visionarie, dove la musicalità dei versi richiama la lezione di Prévert e Penna, 
                      e la pittura si fa materia viva." — <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Estratto Critico</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-brand-ink/5">
                  <div className="p-8 bg-brand-paper shadow-sm rounded-3xl border border-brand-ink/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-clay/10 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700" />
                    <h4 className="text-3xl font-serif mb-2 italic">Social Impact</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-clay mb-4">Rete Carcere Parma</p>
                    <p className="text-sm font-serif-secondary italic opacity-70">Curatela di laboratori artistici e sillogi poetiche nate dal dialogo con i detenuti.</p>
                  </div>
                  
                  <div className="p-8 bg-brand-paper shadow-sm rounded-3xl border border-brand-ink/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-700" />
                    <h4 className="text-3xl font-serif mb-2 italic">Eccellenza</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">Premio Trasimeno 2025</p>
                    <p className="text-sm font-serif-secondary italic opacity-70">Riconoscimento nazionale per la profondità lirica e la musicalità dei versi.</p>
                  </div>
                </div>

                <div className="pt-12">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 mb-8 block">Collaborazioni e Presenze</span>
                   <div className="flex flex-wrap gap-x-12 gap-y-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold uppercase tracking-tighter">Bertoni Editore</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest italic">Curatela Editoriale</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold uppercase tracking-tighter">Gazzettino Santilariese</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest italic">Critica d'Arte</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold uppercase tracking-tighter">Salone Libro Torino</span>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest italic">Ospite / Reading</span>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
