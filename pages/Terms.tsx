import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      title: 'Terms & Conditions',
      intro:
        'These Terms & Conditions govern reservations and stays at Apartment 418 in Asilah, Morocco. By confirming a booking, you agree to the conditions below.',
      section1Title: 'Reservations & Payment',
      section1Text:
        'Bookings may be made directly with us or through platforms such as Airbnb or Booking.com. Each platform may apply its own payment terms and service fees. Your reservation is confirmed once you receive written confirmation from the platform or from us directly.',
      section2Title: 'Check-in & Check-out',
      section2Text:
        'Standard check-in and check-out times will be communicated with your booking. Please respect these times so we can properly prepare the apartment for you and future guests.',
      section3Title: 'Use of the Apartment',
      section3Text:
        'The apartment is reserved exclusively for registered guests. Events, parties or commercial use are not permitted unless agreed in writing. We kindly ask you to respect the residence rules, neighbours and common areas of the Beralmar resort.',
      section4Title: 'Liability',
      section4Text:
        'Guests are responsible for any damage caused to the apartment or its contents during their stay. We are not liable for loss or damage to personal belongings or for events outside our reasonable control (such as power cuts, weather events or disruptions caused by third parties).',
    },
    fr: {
      title: 'Conditions Générales',
      intro:
        'Les présentes Conditions Générales régissent les réservations et séjours à l’Appartement 418 à Asilah, au Maroc. En confirmant une réservation, vous acceptez les conditions ci‑dessous.',
      section1Title: 'Réservations et Paiement',
      section1Text:
        'Les réservations peuvent être effectuées directement auprès de nous ou via des plateformes telles qu’Airbnb ou Booking.com. Chaque plateforme peut appliquer ses propres conditions de paiement et frais de service. Votre réservation est confirmée lorsque vous recevez une confirmation écrite de la plateforme ou directement de notre part.',
      section2Title: 'Arrivée et Départ',
      section2Text:
        'Les heures standard d’arrivée et de départ vous seront communiquées lors de la réservation. Merci de les respecter afin que nous puissions préparer l’appartement pour vous et pour les prochains voyageurs.',
      section3Title: 'Utilisation de l’Appartement',
      section3Text:
        'L’appartement est réservé exclusivement aux invités enregistrés. Les événements, soirées ou utilisations commerciales ne sont pas autorisés sauf accord écrit préalable. Nous vous demandons de respecter le règlement de la résidence, le voisinage et les espaces communs du complexe Beralmar.',
      section4Title: 'Responsabilité',
      section4Text:
        'Les invités sont responsables de tout dommage causé à l’appartement ou à son contenu pendant leur séjour. Nous ne sommes pas responsables de la perte ou de l’endommagement de biens personnels ni des événements indépendants de notre volonté (tels que coupures d’électricité, conditions météorologiques ou perturbations causées par des tiers).',
    },
  } as const;

  const t = copy[language];

  return (
    <div className="bg-bg-light min-h-screen flex flex-col font-display text-text-main overflow-x-hidden">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
          <div className="w-full max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-main mb-8 leading-relaxed">
              {t.intro}
            </p>
            <div className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed">
              <section>
                <h2 className="font-semibold text-text-main mb-2">{t.section1Title}</h2>
                <p className="text-text-subtle">{t.section1Text}</p>
              </section>
              <section>
                <h2 className="font-semibold text-text-main mb-2">{t.section2Title}</h2>
                <p className="text-text-subtle">{t.section2Text}</p>
              </section>
              <section>
                <h2 className="font-semibold text-text-main mb-2">{t.section3Title}</h2>
                <p className="text-text-subtle">{t.section3Text}</p>
              </section>
              <section>
                <h2 className="font-semibold text-text-main mb-2">{t.section4Title}</h2>
                <p className="text-text-subtle">{t.section4Text}</p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Terms;


