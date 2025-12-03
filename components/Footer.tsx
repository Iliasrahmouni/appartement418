import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      brand: 'Appartement 418',
      tagline: "Modern, serene and exclusive. Your luxury vacation apartment rental in Asilah's Beralmar resort.",
      quickLinks: 'Quick Links',
      home: 'Home',
      location: 'Location',
      gallery: 'Gallery',
      amenities: 'Amenities',
      bookNow: 'Book Now',
      contact: 'Contact',
      email: 'appartementasilah418@gmail.com',
      phone: '+212 611-888090',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cancellation: 'Cancellation Policy',
      copyright: '© 2024 Appartement 418. All Rights Reserved.',
    },
    fr: {
      brand: 'Appartement 418',
      tagline: 'Moderne, serein et exclusif. Votre appartement de vacances haut de gamme dans le complexe Beralmar à Asilah.',
      quickLinks: 'Liens rapides',
      home: 'Accueil',
      location: 'Localisation',
      gallery: 'Galerie',
      amenities: 'Commodités',
      bookNow: 'Réserver',
      contact: 'Contact',
      email: 'appartementasilah418@gmail.com',
      phone: '+212 611-888090',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions générales',
      cancellation: "Politique d’annulation",
      copyright: '© 2024 Appartement 418. Tous droits réservés.',
    },
  } as const;

  const t = copy[language];

  return (
    <footer className="bg-primary/5 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Contact - Left */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-bold text-text-main">{t.contact}</h3>
            <a 
              href={`mailto:${t.email}`}
              className="text-sm text-text-subtle hover:text-primary transition-colors"
            >
              {t.email}
            </a>
            <a 
              href={`tel:${t.phone.replace(/\s/g, '')}`}
              className="text-sm text-text-subtle hover:text-primary transition-colors"
            >
              {t.phone}
            </a>
          </div>

          {/* Quick Links - Middle */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-bold text-text-main">{t.quickLinks}</h3>
            <Link className="text-sm text-text-subtle hover:text-primary transition-colors" to="/">
              {t.home}
            </Link>
            <Link className="text-sm text-text-subtle hover:text-primary transition-colors" to="/location">
              {t.location}
            </Link>
            <Link className="text-sm text-text-subtle hover:text-primary transition-colors" to="/tour">
              {t.gallery}
            </Link>
            <Link className="text-sm text-text-subtle hover:text-primary transition-colors" to="/tour">
              {t.amenities}
            </Link>
            <Link className="text-sm text-text-subtle hover:text-primary transition-colors" to="/book">
              {t.bookNow}
            </Link>
          </div>

          {/* Brand - Right */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-bold text-primary">{t.brand}</h3>
            <p className="text-sm text-text-subtle">{t.tagline}</p>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-xs text-text-subtle flex flex-col gap-3 items-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t.privacy}
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t.terms}
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link to="/cancellation" className="hover:text-primary transition-colors">
              {t.cancellation}
            </Link>
          </div>
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;