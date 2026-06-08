export const Footer = () => {
  return (
    <footer className="py-20 px-12 border-t border-brand-ink/5 bg-brand-cream flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none text-brand-ink">Claudia Belli</span>
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-40 italic text-brand-ink">© {new Date().getFullYear()} Archivo Personale</span>
      </div>
      <div className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-30 text-brand-ink">
        Bellezza / Cultura / Impegno Sociale
      </div>
    </footer>
  );
};
