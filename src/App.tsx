import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Biography } from './pages/Biography';
import { Books } from './pages/Books';
import { Art } from './pages/Art';
import { Poetry } from './pages/Poetry';
import { Events } from './pages/Events';
import { Curation } from './pages/Curation';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const location = useLocation();
  useSmoothScroll();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="min-h-screen selection:bg-brand-clay selection:text-white transition-colors duration-500 bg-brand-cream">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<Biography />} />
            <Route path="/libri" element={<Books />} />
            <Route path="/opere-arte" element={<Art />} />
            <Route path="/poesia" element={<Poetry />} />
            <Route path="/eventi" element={<Events />} />
            <Route path="/curatela" element={<Curation />} />
            <Route path="/rubriche" element={<Articles />} />
            <Route path="/contatti" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
