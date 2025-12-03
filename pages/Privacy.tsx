import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  const copy = {
    en: {
      title: 'Privacy Policy',
      intro:
        'We respect your privacy and are committed to protecting your personal data when you inquire about or book Apartment 418 in Asilah, Morocco.',
      section1Title: 'What We Collect',
      section1Text:
        'When you contact us or submit a booking request, we may collect your name, email address, phone number, preferred travel dates and the number of guests. If you book via Airbnb or Booking.com, those platforms may collect additional information in line with their own policies.',
      section2Title: 'How We Use Your Data',
      section2Text:
        'We use your information solely to respond to your inquiries, manage your reservation, and communicate important details about your stay. We do not sell your data to third parties.',
      section3Title: 'Data Storage & Security',
      section3Text:
        'Your details are stored securely and only for as long as needed to manage your booking and comply with applicable legal obligations. Access is limited to the hosts and trusted partners involved in operating Apartment 418.',
      section4Title: 'Your Rights',
      section4Text:
        'You may request access to, correction of, or deletion of your personal data at any time by contacting us at appartementasilah418@gmail.com.',
    },
    fr: {
      title: 'Politique de Confidentialité',
      intro:
        'Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles lorsque vous nous contactez ou réservez l’Appartement 418 à Asilah, au Maroc.',
      section1Title: 'Données Collectées',
      section1Text:
        'Lorsque vous nous contactez ou envoyez une demande de réservation, nous pouvons recueillir votre nom, votre adresse e‑mail, votre numéro de téléphone, vos dates de séjour souhaitées et le nombre d’invités. Si vous réservez via Airbnb ou Booking.com, ces plateformes peuvent collecter des informations supplémentaires conformément à leurs propres politiques.',
      section2Title: 'Utilisation de Vos Données',
      section2Text:
        'Nous utilisons vos informations uniquement pour répondre à vos demandes, gérer votre réservation et communiquer les informations importantes concernant votre séjour. Nous ne vendons pas vos données à des tiers.',
      section3Title: 'Conservation et Sécurité',
      section3Text:
        'Vos informations sont conservées de manière sécurisée et uniquement pendant la durée nécessaire à la gestion de votre réservation et au respect des obligations légales en vigueur. L’accès est limité aux hôtes et aux partenaires de confiance impliqués dans l’exploitation de l’Appartement 418.',
      section4Title: 'Vos Droits',
      section4Text:
        'Vous pouvez demander à tout moment l’accès, la rectification ou la suppression de vos données personnelles en nous contactant à l’adresse suivante : appartementasilah418@gmail.com.',
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

export default Privacy;


