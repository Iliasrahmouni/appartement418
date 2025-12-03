import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Cancellation: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      title: 'Cancellation Policy',
      intro:
        'Our cancellation policy is designed to be fair to our guests while allowing us to manage availability for Apartment 418 in Asilah, Morocco.',
      section1Title: 'Cancellation Terms',
      section1Text:
        'For direct bookings, cancellations made more than 7 days before the check-in date will receive an 80% refund of the total booking amount. Cancellations made within 7 days of the check-in date are non-refundable.',
      section2Title: 'Cancellations via Platforms',
      section2Text:
        'If you booked through Airbnb or Booking.com, the cancellation terms shown on the respective platform apply. Please review the conditions and deadlines displayed on your reservation page before cancelling or modifying your stay.',
      section3Title: 'No-shows & Early Departure',
      section3Text:
        'If you do not arrive on the agreed check‑in date without prior notice, or if you depart earlier than planned, the stay may be charged in accordance with the conditions of your booking.',
      section4Title: 'Changes to Your Stay',
      section4Text:
        'We will do our best to accommodate changes to your travel dates, subject to availability and seasonal demand. Any change may result in a price adjustment based on the new dates selected.',
    },
    fr: {
      title: "Politique d'Annulation",
      intro:
        "Notre politique d'annulation vise à rester équitable pour nos voyageurs tout en nous permettant de gérer les disponibilités de l'Appartement 418 à Asilah, au Maroc.",
      section1Title: "Conditions d'Annulation",
      section1Text:
        "Pour les réservations directes, les annulations effectuées plus de 7 jours avant la date d'arrivée recevront un remboursement de 80% du montant total de la réservation. Les annulations effectuées dans les 7 jours précédant la date d'arrivée ne sont pas remboursables.",
      section2Title: 'Annulations via les Plateformes',
      section2Text:
        "Si vous avez réservé via Airbnb ou Booking.com, ce sont les conditions d'annulation indiquées sur la plateforme concernée qui s'appliquent. Merci de consulter les conditions et délais affichés sur votre page de réservation avant d'annuler ou de modifier votre séjour.",
      section3Title: 'Non‑présentation et Départ Anticipé',
      section3Text:
        "Si vous ne vous présentez pas à la date d'arrivée convenue sans nous en informer au préalable, ou si vous quittez l'hébergement plus tôt que prévu, le séjour pourra être facturé conformément aux conditions de votre réservation.",
      section4Title: 'Modification de Séjour',
      section4Text:
        'Nous ferons de notre mieux pour accepter les modifications de dates, sous réserve de disponibilité et de la saison. Toute modification peut entraîner un ajustement de tarif en fonction des nouvelles dates choisies.',
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

export default Cancellation;


