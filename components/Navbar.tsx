import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  theme?: 'light' | 'dark' | 'transparent';
  primaryColorClass?: string;
  textColorClass?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  theme = 'light',
  primaryColorClass = 'text-primary',
  textColorClass = 'text-text-main'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    en: {
      home: 'Home',
      tour: 'Tour',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Now',
      brand: 'Appartement 418',
      langShort: 'EN',
      langFull: 'English',
    },
    fr: {
      home: 'Accueil',
      tour: 'Appartement 418',
      location: 'Localisation',
      contact: 'Contact',
      bookNow: 'Réserver',
      brand: 'Appartement 418',
      langShort: 'FR',
      langFull: 'Français',
    },
  } as const;

  const t = labels[language];
  const opposite = language === 'en' ? labels.fr : labels.en;

  // Determine button color based on the current page theme or explicit prop
  let buttonBgClass = "bg-primary";
  if (location.pathname === '/tour') buttonBgClass = "bg-primary-dark";
  if (location.pathname === '/location') buttonBgClass = "bg-primary-vivid";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg flex items-center justify-between border-b border-solid px-4 sm:px-6 md:px-10 py-3 sm:py-4 font-display transition-colors duration-300 bg-white/95 border-slate-200`}>
      <div className={`flex items-center gap-2 sm:gap-3 ${textColorClass} min-w-0 flex-shrink`}>
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img 
            src="/logo/logo.png" 
            alt="Apartment 418 Asilah Logo" 
            className="h-6 sm:h-7 md:h-8 w-auto object-contain flex-shrink-0"
          />
          <span className={`hidden sm:inline text-sm sm:text-base md:text-lg font-bold leading-tight tracking-[-0.015em] truncate ${location.pathname === '/tour' ? 'text-primary-dark' : 'text-text-main'}`}>
            {t.brand}
          </span>
        </Link>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end gap-2 items-center min-w-0">
        <nav className="flex items-center gap-1 lg:gap-2 p-1 rounded-full flex-shrink">
          <Link to="/" className={`text-xs lg:text-sm font-medium leading-normal hover:bg-black/5 transition-colors px-2 lg:px-4 py-2 rounded-full whitespace-nowrap ${textColorClass}`}>
            {t.home}
          </Link>
          <Link to="/tour" className={`text-xs lg:text-sm font-medium leading-normal hover:bg-black/5 transition-colors px-2 lg:px-4 py-2 rounded-full whitespace-nowrap ${textColorClass}`}>
            {t.tour}
          </Link>
          <Link to="/location" className={`text-xs lg:text-sm font-medium leading-normal hover:bg-black/5 transition-colors px-2 lg:px-4 py-2 rounded-full whitespace-nowrap ${textColorClass}`}>
            {t.location}
          </Link>
          <Link to="/book" className={`text-xs lg:text-sm font-medium leading-normal hover:bg-black/5 transition-colors px-2 lg:px-4 py-2 rounded-full whitespace-nowrap ${textColorClass}`}>
            {t.contact}
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-2.5 py-1 text-[11px] lg:text-xs font-medium text-text-main hover:border-primary hover:text-primary transition-colors bg-white"
          aria-label={language === 'en' ? 'Passer en français' : 'Switch to English'}
        >
          {opposite.langShort}
        </button>

        <button 
          onClick={() => navigate('/book')}
          className={`flex min-w-[84px] max-w-[120px] lg:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 lg:h-10 px-3 lg:px-5 text-white text-xs lg:text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-all duration-300 transform hover:scale-[1.03] shadow-md ml-2 lg:ml-4 flex-shrink-0 ${buttonBgClass}`}
        >
          <span className="truncate">{t.bookNow}</span>
        </button>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <button
          type="button"
          onClick={toggleLanguage}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-2 py-0.5 text-[11px] font-medium text-text-main hover:border-primary hover:text-primary transition-colors bg-white"
        >
          {opposite.langShort}
        </button>
        <button onClick={toggleMenu} className={textColorClass}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden border-b border-gray-100">
           <Link to="/" onClick={toggleMenu} className="text-base font-medium text-text-main">{t.home}</Link>
           <Link to="/tour" onClick={toggleMenu} className="text-base font-medium text-text-main">{t.tour}</Link>
           <Link to="/location" onClick={toggleMenu} className="text-base font-medium text-text-main">{t.location}</Link>
           <Link to="/book" onClick={toggleMenu} className="text-base font-medium text-text-main">{t.contact}</Link>
           <button 
             onClick={() => { toggleMenu(); navigate('/book'); }}
             className={`w-full py-3 rounded-lg text-white font-bold ${buttonBgClass}`}
           >
             {t.bookNow}
           </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;