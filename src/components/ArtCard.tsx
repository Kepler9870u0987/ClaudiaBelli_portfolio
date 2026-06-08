import { motion } from 'motion/react';
import { MessageSquare, DollarSign } from 'lucide-react';
import { ArtPiece } from '../types';
import { SocialShare } from './SocialShare';

export const ArtCard = ({ piece }: { piece: ArtPiece }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-brand-paper p-4"
    >
      <div className="relative aspect-square overflow-hidden mb-6">
        <div className="absolute inset-0 bg-[#D9D5C7] border border-black/5 transform -rotate-2"></div>
        <img 
          src={piece.image} 
          alt={piece.title} 
          className="relative z-10 w-full h-full object-cover grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" 
        />
      </div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-serif italic">{piece.title}</h3>
          <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 mt-1">Authentic Work / {piece.id}</p>
        </div>
      </div>

      <p className="text-xs text-brand-ink/60 mb-8 italic font-serif leading-relaxed line-clamp-2">{piece.description}</p>
      
      <div className="flex flex-col gap-4">
        <a 
          href={`mailto:m.albanese.manuel@gmail.com?subject=Richiesta Informazioni: ${piece.title}`}
          className="w-full text-center text-[10px] font-bold uppercase tracking-[0.2em] border border-brand-ink/10 py-4 hover:bg-brand-ink hover:text-brand-cream transition-all rounded-full"
        >
          Richiedi Informazioni
        </a>
        <a 
          href={`mailto:m.albanese.manuel@gmail.com?subject=Offerta di Acquisizione: ${piece.title}`}
          className="w-full text-center text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-clay text-white py-4 hover:opacity-90 transition-all rounded-full"
        >
          Fai un'Offerta
        </a>
        <div className="pt-4 border-t border-brand-ink/5 mt-2 flex justify-center">
          <SocialShare title={piece.title} description={piece.description} size="sm" />
        </div>
      </div>
    </motion.div>
  );
};
