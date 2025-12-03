import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Tour: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Tour Apartment 418 Asilah | Luxury Vacation Rental Interior & Amenities'
      : 'Visite Appartement 418 Asilah | Location de Vacances de Luxe Intérieur & Équipements';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Explore the refined interiors and amenities of Apartment 418, a luxury vacation rental in Asilah, Morocco. Master suite, dual terraces, modern kitchen, and premium amenities await.'
        : 'Découvrez les intérieurs raffinés et les équipements de l\'Appartement 418, une location de vacances de luxe à Asilah, Maroc. Suite principale, deux terrasses, cuisine moderne et équipements haut de gamme vous attendent.');
    }
  }, [language]);

  const copy = {
    en: {
      heroTitle: 'Explore Apartment 418',
      heroCta: 'Reserve Your Stay',
      introText: 'Apartment 418 is a refined vacation rental apartment in Asilah, Morocco, welcoming you into an exquisitely conceived sanctuary where each element has been thoughtfully curated to inspire comfort, connection, and tranquility. This distinguished residence presents luminous, expansive spaces that harmonize with an atmosphere of refined warmth, creating the perfect canvas for moments that become treasured memories. Transform your stay in Asilah into a high-end coastal experience you\'ll long to return to.',
      features: [
        {
          title: 'Master Suite & Living',
          desc: 'A generously proportioned master bedroom with a sumptuous sofa bed in the living area. The sophisticated bathroom features a walk-in rain shower and premium toiletries, offering a refreshing space for daily rituals and relaxation.',
        },
        {
          title: 'Dual Private Terraces',
          desc: 'Two exclusive balconies designed for intimate moments, whether savoring morning coffee or evening aperitifs, offering serene views and a breath of fresh coastal air.',
        },
        {
          title: 'Modern Amenities',
          desc: 'Experience unparalleled comfort with a fully equipped kitchen, air conditioning, high-speed Wi‑Fi, and a convenient washing machine, ensuring a seamless and effortless stay.',
        },
      ],
      amenitiesTitle: 'Refined Amenities',
      amenities: [
        {
          title: 'Gourmet Kitchen & Dining',
          text: 'A fully appointed kitchen featuring premium appliances including refrigerator, oven, and dishwasher. Complete with curated cookware, fine utensils, and elegant tableware for creating memorable culinary experiences.',
        },
        {
          title: 'Bedroom & Bath',
          text: 'A generously proportioned master bedroom with a sumptuous sofa bed in the living area. The sophisticated bathroom features a walk-in rain shower and premium toiletries, offering a refreshing space for daily rituals.',
        },
        {
          title: 'Living Spaces & Private Terraces',
          text: 'Two exclusive balconies designed for intimate moments, whether savoring morning coffee or evening aperitifs. The open-plan living area, bathed in natural light, provides an elegant setting for relaxation and connection.',
        },
        {
          title: 'Premium Comfort & Convenience',
          text: 'Climate-controlled environment, seamless high-speed Wi‑Fi, premium laundry facilities ideal for extended stays, and complimentary private parking. Every detail has been considered to ensure an effortless, refined experience.',
        },
      ],
      ctaTitle: 'Your Moroccan Sanctuary Awaits',
      ctaText: 'Discover the harmonious union of refined luxury and serene tranquility. Reserve your preferred dates for an extraordinary coastal retreat.',
      ctaButton: 'Reserve Your Dates',
    },
    fr: {
      heroTitle: 'Explorez l\'Appartement 418',
      heroCta: 'Réservez Votre Séjour',
      introText: 'L\'Appartement 418 est un appartement de vacances raffiné à Asilah, au Maroc, qui vous accueille dans un sanctuaire exquisément conçu où chaque élément a été soigneusement sélectionné pour inspirer confort, connexion et tranquillité. Cette résidence distinguée présente des espaces lumineux et spacieux qui s\'harmonisent avec une atmosphère de chaleur raffinée, créant la toile parfaite pour des moments qui deviennent des souvenirs précieux. Transformez votre séjour à Asilah en une expérience côtière haut de gamme à laquelle vous aurez envie de revenir.',
      features: [
        {
          title: 'Suite Principale & Séjour',
          desc: 'Une chambre principale généreusement proportionnée avec un canapé-lit somptueux dans le séjour. La salle de bain sophistiquée dispose d\'une douche à l\'italienne et de produits de toilette haut de gamme, offrant un espace rafraîchissant pour les rituels quotidiens et la détente.',
        },
        {
          title: 'Deux Terrasses Privées',
          desc: 'Deux balcons exclusifs conçus pour des moments intimes, que ce soit pour savourer un café du matin ou des apéritifs en soirée, offrant des vues sereines et une bouffée d\'air côtier frais.',
        },
        {
          title: 'Commodités Modernes',
          desc: 'Profitez d\'un confort inégalé avec une cuisine entièrement équipée, la climatisation, le Wi‑Fi haut débit et une machine à laver pratique, garantissant un séjour fluide et sans effort.',
        },
      ],
      amenitiesTitle: 'Commodités Raffinées',
      amenities: [
        {
          title: 'Cuisine Gastronomique & Salle à Manger',
          text: 'Une cuisine entièrement équipée avec des appareils haut de gamme, notamment réfrigérateur, four et lave-vaisselle. Complétée par de la vaisselle sélectionnée, des ustensiles fins et une vaisselle élégante pour créer des expériences culinaires mémorables.',
        },
        {
          title: 'Chambre & Salle de Bain',
          text: 'Une chambre principale généreusement proportionnée avec un canapé-lit somptueux dans le séjour. La salle de bain sophistiquée dispose d\'une douche à l\'italienne et de produits de toilette haut de gamme, offrant un espace rafraîchissant pour les rituels quotidiens.',
        },
        {
          title: 'Espaces de Vie & Terrasses Privées',
          text: 'Deux balcons exclusifs conçus pour des moments intimes, que ce soit pour savourer un café du matin ou des apéritifs en soirée. Le séjour ouvert, baigné de lumière naturelle, offre un cadre élégant pour la détente et la connexion.',
        },
        {
          title: 'Confort Premium & Commodité',
          text: 'Environnement climatisé, Wi‑Fi haut débit fluide, installations de blanchisserie premium idéales pour les séjours prolongés et parking privé gratuit. Chaque détail a été considéré pour assurer une expérience raffinée et sans effort.',
        },
      ],
      ctaTitle: 'Votre Sanctuaire Marocain Vous Attend',
      ctaText: 'Découvrez l\'union harmonieuse du luxe raffiné et de la tranquillité sereine. Réservez vos dates préférées pour une retraite côtière extraordinaire.',
      ctaButton: 'Réservez Vos Dates',
    },
  } as const;

  const t = copy[language];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-bg-light font-display text-text-main overflow-x-hidden">
      <Navbar primaryColorClass="text-primary-dark" textColorClass="text-text-main" />

      <main className="w-full flex flex-col">
        {/* Full-width cover image */}
        <div 
          className="bg-cover bg-center flex flex-col items-center justify-center overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[100vh] w-full"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/6.JPG")' }}
          role="img"
          aria-label="Gallery view of Apartment 418 Asilah vacation rental showing interior spaces"
        >
          <div className="flex flex-col gap-6 sm:gap-8 z-10 items-center p-4 sm:p-6 md:p-8 max-w-[1200px] mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            <h1 className="text-white tracking-tight font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center px-4">{t.heroTitle}</h1>
            <button 
              onClick={() => navigate('/book')}
              className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 bg-primary-dark text-white text-sm sm:text-base md:text-lg font-semibold leading-normal tracking-wide hover:bg-primary-dark/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lifted"
            >
              <span className="truncate">{t.heroCta}</span>
            </button>
          </div>
        </div>

        {/* Content container with max-width */}
        <div className="flex flex-1 justify-center py-4 sm:py-5 md:py-6">
          <div className="layout-content-container flex w-full flex-col max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">

            <p className="text-text-main text-sm sm:text-base md:text-lg font-light leading-relaxed text-center max-w-3xl mx-auto pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6">
              {t.introText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 px-4 sm:px-6 pb-10 sm:pb-12 md:pb-16">
              <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl shadow-lifted transition-all duration-300 hover:shadow-deep hover:-translate-y-1">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover min-h-64" style={{ backgroundImage: 'url("/images/image_3.jpg")' }}></div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lifted transition-all duration-300 hover:shadow-deep hover:-translate-y-1">
                <div className="w-full h-auto bg-center bg-no-repeat aspect-[4/3] bg-cover" style={{ backgroundImage: 'url("/images/30219098-ab93-404e-8393-a671d305db8e.jpg")' }}></div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lifted transition-all duration-300 hover:shadow-deep hover:-translate-y-1">
                <div className="w-full h-auto bg-center bg-no-repeat aspect-[4/3] bg-cover" style={{ backgroundImage: 'url("/images/695b9e5a-aecd-4feb-8f89-a4aa2e1e8338.jpg")' }}></div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lifted transition-all duration-300 hover:shadow-deep hover:-translate-y-1">
                <div className="w-full h-auto bg-center bg-no-repeat aspect-[4/3] bg-cover" style={{ backgroundImage: 'url("/images/90d57e5f-1475-49cc-bca8-646f3e91f114.jpg")' }}></div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lifted transition-all duration-300 hover:shadow-deep hover:-translate-y-1">
                <div className="w-full h-auto bg-center bg-no-repeat aspect-[4/3] bg-cover" style={{ backgroundImage: 'url("/images/dd131eff-20bb-4124-9538-55627f665fc9.jpg")' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-12 sm:py-14 md:py-16 px-4 sm:px-6 border-t border-b border-stone-200">
              <div className="flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-primary-dark text-4xl mb-2 group-hover:scale-110 transition-transform">king_bed</span>
                <h3 className="text-text-main text-lg font-semibold">{t.features[0].title}</h3>
                <p className="text-text-main/80 text-sm font-light">{t.features[0].desc}</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-primary-dark text-4xl mb-2 group-hover:scale-110 transition-transform">balcony</span>
                <h3 className="text-text-main text-lg font-semibold">{t.features[1].title}</h3>
                <p className="text-text-main/80 text-sm font-light">{t.features[1].desc}</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <span className="material-symbols-outlined text-primary-dark text-4xl mb-2 group-hover:scale-110 transition-transform">home</span>
                <h3 className="text-text-main text-lg font-semibold">{t.features[2].title}</h3>
                <p className="text-text-main/80 text-sm font-light">{t.features[2].desc}</p>
              </div>
            </div>

            <div className="flex flex-col py-12 sm:py-16 md:py-20 px-4 sm:px-6">
              <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-primary-dark mb-8 sm:mb-10 md:mb-12 tracking-tight">{t.amenitiesTitle}</h2>
              <div className="max-w-3xl w-full mx-auto space-y-4">
                {t.amenities.map((item, idx) => (
                  <details key={idx} className="group bg-white rounded-xl shadow-lifted transition-shadow hover:shadow-deep border border-stone-200/50" open={idx === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5">
                      <p className="text-text-main text-lg font-medium leading-normal">{item.title}</p>
                      <div className="text-text-main/70 group-open:rotate-180 transition-transform">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-text-main/80 text-base font-normal leading-relaxed pr-8">{item.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="w-full bg-accent/20 rounded-xl my-10 sm:my-12 md:my-16 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center text-center shadow-3d-light">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-dark mb-4 sm:mb-5 tracking-tight px-4">{t.ctaTitle}</h2>
              <p className="text-text-main text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 font-light leading-relaxed px-4">{t.ctaText}</p>
              <button 
                onClick={() => navigate('/book')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-10 bg-primary-dark text-white text-base font-semibold leading-normal tracking-wide hover:bg-primary-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="truncate">{t.ctaButton}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tour;
