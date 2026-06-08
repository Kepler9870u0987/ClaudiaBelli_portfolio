import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

// Localized maps for standard routes to Italian descriptive paths
const routeNames: Record<string, string> = {
  'chi-sono': 'Chi Sono / Biografia',
  'libri': 'Libri',
  'opere-arte': 'Opere d\'Arte & Esposizioni',
  'poesia': 'Liriche d\'Autore',
  'eventi': 'Eventi e Letture',
  'curatela': 'Laboratori & Sociale',
  'rubriche': 'Rubriche Mensili',
  'contatti': 'Contatti',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't render breadcrumbs on home page to keep the hero layout pristine
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <motion.div
      id="global-breadcrumbs"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-28 md:top-32 left-0 right-0 z-40 px-12 max-w-7xl mx-auto w-full flex items-center select-none pointer-events-none"
    >
      <nav 
        aria-label="Breadcrumb" 
        className="flex items-center gap-2 bg-[#F2F0EB]/60 dark:bg-black/15 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-ink/5 text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-widest pointer-events-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 text-brand-stone hover:text-brand-clay transition-colors duration-300"
          title="Torna alla Home"
        >
          <Home size={12} className="stroke-[2.5]" />
          <span>Home</span>
        </Link>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const currentLabel = routeNames[segment] || segment.replace(/-/g, ' ');

          return (
            <div key={url} className="flex items-center gap-2">
              <ChevronRight size={11} className="text-brand-stone/40 stroke-[2.5]" />
              {isLast ? (
                <span 
                  id="breadcrumb-current-node"
                  className={cn(
                    "font-extrabold text-[#8E5240] dark:text-[#A8614D]",
                    "opacity-95"
                  )}
                  aria-current="page"
                >
                  {currentLabel}
                </span>
              ) : (
                <Link
                  to={url}
                  className="text-brand-stone hover:text-brand-clay transition-colors duration-300"
                >
                  {currentLabel}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </motion.div>
  );
};
