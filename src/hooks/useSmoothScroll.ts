import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Applica esclusivamente il comportamento di scroll fluido nativo del browser
    // senza intercettare l'evento 'wheel' o emulare un'ulteriore inerzia virtuale
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    return () => {
      html.style.scrollBehavior = '';
    };
  }, []);
};

