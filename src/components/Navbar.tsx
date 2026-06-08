import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon,
  User,
  Library,
  Palette,
  PenTool,
  Award,
  Book as BookIcon,
  Newspaper,
  Mail,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Navbar = ({ theme, toggleTheme }: { 
  theme: 'light' | 'dark',
  toggleTheme: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { path: string; label: string; icon: any }[] = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/chi-sono', label: 'Chi Sono', icon: User },
    { path: '/libri', label: 'Libri', icon: Library },
    { path: '/opere-arte', label: 'Opere d\'Arte', icon: Palette },
    { path: '/poesia', label: 'Poesia', icon: PenTool },
    { path: '/eventi', label: 'Eventi', icon: Award },
    { path: '/curatela', label: 'Curatela', icon: BookIcon },
    { path: '/rubriche', label: 'Rubriche', icon: Newspaper },
    { path: '/contatti', label: 'Contatti', icon: Mail },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-12 py-8",
      isScrolled ? "bg-brand-cream/95 backdrop-blur-md py-4 border-b border-brand-ink/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <Link 
            to="/"
            className="text-[11px] font-bold uppercase tracking-[0.2em] leading-none hover:opacity-70 transition-opacity text-brand-ink"
          >
            Claudia Belli
          </Link>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-40 italic text-brand-ink">Portfolio Archivio / 24</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 mr-4 border-r border-brand-ink/10 pr-8">
            {navItems.filter(item => item.path !== '/').map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "text-[11px] font-semibold uppercase tracking-[0.2em] transition-all relative py-1",
                  isActive 
                    ? "text-brand-ink after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current" 
                    : "text-brand-ink/40 hover:text-brand-ink"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 transition-colors hover:bg-brand-ink/5 rounded-full text-brand-ink"
            title={theme === 'dark' ? 'Attiva Tema Chiaro' : 'Attiva Tema Scuro'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 text-brand-ink"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 text-brand-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-paper border-b border-brand-ink/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                    isActive ? "bg-brand-ink text-brand-cream" : "hover:bg-brand-ink/10 text-brand-ink"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
