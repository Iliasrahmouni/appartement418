import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();

  const label =
    language === 'en'
      ? 'Chat on WhatsApp'
      : 'Écrire sur WhatsApp';

  const href = 'https://wa.me/212611888090';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl shadow-black/20 hover:bg-[#1ebe57] transition-all duration-200 text-xs sm:text-sm font-semibold"
    >
      {/* WhatsApp logo */}
      <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path
            fill="#25D366"
            d="M16 3C9.373 3 4 8.373 4 15c0 2.161.57 4.191 1.566 5.95L4 29l8.252-1.543A11.86 11.86 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Z"
          />
          <path
            fill="#fff"
            d="M21.51 18.66c-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.75-1.69-1.02-.91-1.71-2.03-1.91-2.37-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.35-.57.12-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.68-.56-.59-.77-.6h-.66c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.06.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.06-1.45.26-.71.26-1.32.18-1.45-.08-.13-.31-.21-.65-.38Z"
          />
        </svg>
      </span>
      <span className="hidden xs:inline">{label}</span>
    </a>
  );
};

export default WhatsAppButton;



