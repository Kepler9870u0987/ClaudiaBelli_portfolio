import { useState, useEffect } from 'react';

export const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalHeight = scrollHeight - clientHeight;
      
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="reading-progress-container" className="fixed top-0 left-0 right-0 h-[4px] bg-brand-cream/40 z-[9999] pointer-events-none">
      <div 
        id="reading-progress-bar"
        className="h-full bg-brand-clay transition-all duration-100 ease-out shadow-[0_1px_4px_rgba(180,146,134,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
