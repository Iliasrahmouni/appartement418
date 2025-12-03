import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const COOKIE_KEY = 'apt418_cookie_consent';

// Declare dataLayer type for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CookieBanner: React.FC = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(COOKIE_KEY);
    if (stored !== 'accepted' && stored !== 'denied') {
      setVisible(true);
    } else if (stored === 'accepted') {
      // If already accepted, update consent immediately
      updateConsent('granted');
    }
  }, []);

  const updateConsent = (status: 'granted' | 'denied') => {
    if (typeof window === 'undefined' || !window.dataLayer) return;
    
    window.dataLayer.push({
      'event': 'consent_update',
      'consent': {
        'analytics_storage': status,
        'ad_storage': status,
        'ad_user_data': status === 'granted' ? 'granted' : 'denied',
        'ad_personalization': status === 'granted' ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': status,
        'security_storage': 'granted'
      }
    });
  };

  const accept = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_KEY, 'accepted');
      updateConsent('granted');
    }
    setVisible(false);
  };

  const deny = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_KEY, 'denied');
      updateConsent('denied');
    }
    setVisible(false);
  };

  if (!visible) return null;

  const text =
    language === 'en'
      ? "We use cookies only to ensure the site works smoothly and to improve your browsing experience. By continuing, you agree to our use of cookies."
      : "Nous utilisons des cookies uniquement pour assurer le bon fonctionnement du site et améliorer votre expérience de navigation. En continuant, vous acceptez l'utilisation de ces cookies.";

  const acceptLabel = language === 'en' ? 'Accept' : 'Accepter';
  const denyLabel = language === 'en' ? 'Deny' : 'Refuser';
  const moreLabel = language === 'en' ? 'Learn more' : 'En savoir plus';

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-subtle mb-1">
            {language === 'en' ? 'Cookies' : 'Cookies'}
          </p>
          <p className="text-sm sm:text-[15px] text-text-main/90 leading-relaxed">
            {text}{' '}
            <a
              href="#/privacy"
              className="text-accent-indigo font-medium underline-offset-2 hover:underline"
            >
              {moreLabel}
            </a>
            .
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={deny}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border-2 border-gray-300 text-text-main text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            {denyLabel}
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent-indigo text-white text-sm font-semibold shadow-md shadow-accent-indigo/30 hover:bg-accent-indigo/90 hover:shadow-lg transition-all"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;


