import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en'
      ? 'Apartment 418 Asilah | Vacation Rental in Beralmar Resort | Book Now'
      : 'Appartement 418 Asilah | Location de Vacances Complexe Beralmar | Réserver';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Modern vacation rental apartment in Asilah, Morocco. Located in Beralmar resort with 1 bedroom, 2 balconies, full amenities. Perfect for families and couples. Book your stay in Asilah today.'
        : 'Appartement de vacances moderne à Asilah, Maroc. Situé dans le complexe Beralmar avec 1 chambre, 2 balcons, équipements complets. Parfait pour les familles et les couples. Réservez votre séjour à Asilah aujourd\'hui.');
    }
  }, [language]);

  const copy = {
    en: {
      heroTitle: 'Rent, Discover, Enjoy.',
      heroCta: 'Reserve Your Stay',
      tagline: "Asilah's Premier Coastal Residence • Luxury Vacation Apartment Rental in Morocco",
      features: [
        {
          icon: 'beach_access',
          title: 'Beach Access',
          desc: "Direct access to pristine beaches and the Atlantic coastline, just minutes from your doorstep.",
        },
        {
          icon: 'groups',
          title: 'Accommodates Four Guests',
          desc: 'Perfect for couples, families, and small groups seeking comfort and privacy in an idyllic setting.',
        },
        {
          icon: 'wifi',
          title: 'High-Speed Wi‑Fi',
          desc: 'Reliable internet throughout the apartment for work or entertainment.',
        },
        {
          icon: 'pool',
          title: 'Resort Amenities',
          desc: 'Access to pools, gardens, and outdoor spaces within the private gated community.',
        },
      ],
      midTitle: 'A Refined Coastal Sanctuary',
      midText:
        'Apartment 418 is a newly built, well-furnished luxury vacation rental apartment nestled within an exclusive, gated resort in Asilah, Morocco. Bathed in natural light, the residence features refined interiors with warm, sophisticated tones and all modern amenities. Every detail has been thoughtfully curated to cultivate an atmosphere of tranquility. Here, time slows, connections deepen, and the essence of Asilah unfolds. This distinguished retreat seamlessly harmonizes contemporary luxury with the authentic warmth of Moroccan hospitality, making it an ideal base for exploring Asilah and the northern coast of Morocco.',
      midCta: 'Discover the Residence',
      card1Title: 'Resort Amenities',
      card1Text:
        'Enjoy access to 5 pristine pools for refreshing swims, beautifully manicured gardens perfect for leisurely strolls, and exclusive outdoor spaces within our private, gated community. The resort offers direct beach access, allowing you to easily reach the Atlantic coastline and enjoy the pristine shores of Asilah.',
      card2Title: 'Refined Interiors',
      card2Text:
        'Thoughtfully designed living spaces feature modern amenities including a fully equipped kitchen, comfortable bedroom, and elegant furnishings throughout. Expansive windows flood the apartment with natural light, creating an atmosphere of comfort and sophistication that makes every moment feel special.',
      hostsTitle: 'Your Hosts',
      hostsIntro:
        'Meet the distinguished hosts behind Apartment 418, dedicated to crafting an exceptional experience that transcends the ordinary.',
      hostIlias:
        'Ilias, an accomplished engineer based in Hamburg, brings a profound passion for innovation and craftsmanship to his hosting philosophy. With an unwavering commitment to excellence, he curates each guest experience with meticulous attention to detail, ensuring that every moment at Apartment 418 reflects the highest standards of hospitality and refinement.',
      hostAhmed:
        "Ahmed, a native of Asilah now residing in Tangier with his partner, combines extensive expertise in marketing and operations with an authentic passion for his coastal hometown. His deep connection to Asilah's cultural heritage and natural beauty informs his approach to hosting, as he thoughtfully introduces discerning guests to the city's most treasured experiences and hidden enclaves.",
    },
    fr: {
      heroTitle: 'Louez, découvrez, profitez.',
      heroCta: 'Réserver votre séjour',
      tagline: 'La résidence côtière d’exception d’Asilah • Appartement de vacances haut de gamme au Maroc',
      features: [
        {
          icon: 'beach_access',
          title: 'Accès à la plage',
          desc: "Accès direct aux plages immaculées et à l'océan Atlantique, à quelques minutes seulement de votre porte.",
        },
        {
          icon: 'groups',
          title: "Jusqu'à 4 voyageurs",
          desc: "Idéal pour les couples, les familles et les petits groupes en quête de confort et d'intimité dans un cadre idyllique.",
        },
        {
          icon: 'wifi',
          title: 'Wi‑Fi haut débit',
          desc: "Connexion fiable dans tout l'appartement pour travailler ou se divertir en toute sérénité.",
        },
        {
          icon: 'pool',
          title: 'Commodités du resort',
          desc: 'Accès aux piscines, jardins paysagers et espaces extérieurs privés au sein de la résidence sécurisée.',
        },
      ],
      midTitle: 'Un sanctuaire côtier raffiné',
      midText:
        'L’Appartement 418 est un appartement de vacances de luxe, entièrement meublé et récemment construit au cœur d’un resort privé et sécurisé à Asilah, au Maroc. Baigné de lumière naturelle, il offre des intérieurs chaleureux et élégants ainsi que tout le confort moderne. Chaque détail a été pensé pour créer une atmosphère de calme absolu. Ici, le temps ralentit, les liens se renforcent et l’essence d’Asilah se révèle. Ce refuge distingué marie subtilement luxe contemporain et hospitalité marocaine authentique, et constitue une base idéale pour découvrir Asilah et la côte nord du Maroc.',
      midCta: 'Découvrir la résidence',
      card1Title: 'Commodités du resort',
      card1Text:
        'Profitez de 5 piscines impeccables, de jardins soigneusement entretenus pour vos promenades et de nombreux espaces extérieurs privés. Le resort offre un accès direct à la plage, pour rejoindre facilement l’Atlantique et les rivages préservés d’Asilah.',
      card2Title: 'Intérieurs raffinés',
      card2Text:
        'Des espaces de vie soigneusement conçus avec cuisine entièrement équipée, chambre confortable et mobilier élégant. De grandes ouvertures inondent l’appartement de lumière naturelle, créant une ambiance à la fois chaleureuse et sophistiquée.',
      hostsTitle: 'Vos hôtes',
      hostsIntro:
        'Découvrez les hôtes qui se cachent derrière l’Appartement 418, engagés à créer une expérience sur mesure et mémorable.',
      hostIlias:
        'Ilias, ingénieur basé à Hambourg, met sa passion pour l’innovation et le travail bien fait au service de son approche de l’hospitalité. Exigeant sur chaque détail, il veille à ce que chaque séjour à l’Appartement 418 reflète les plus hauts standards de confort et de raffinement.',
      hostAhmed:
        "Ahmed, originaire d’Asilah et installé à Tanger avec sa compagne, allie expertise en marketing et en gestion à un véritable attachement pour sa ville natale. Sa connaissance intime d’Asilah et de sa culture lui permet de guider les voyageurs vers les plus belles expériences et les adresses les mieux gardées de la région.",
    },
  } as const;

  const t = copy[language];

  return (
    <div className="bg-bg-light font-display text-text-main min-h-screen flex flex-col overflow-x-hidden">
      <Navbar theme="transparent" primaryColorClass="text-primary" />
      
      <main className="w-full flex flex-col">
        {/* Full-width cover image */}
        <div 
          className="flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[100vh] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center relative overflow-hidden w-full"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/header.jpeg")' 
          }}
          role="img"
          aria-label="Apartment 418 Asilah vacation rental exterior view with ocean and resort surroundings"
        >
          <div className="flex flex-col gap-6 sm:gap-8 z-10 items-center px-4 max-w-[1200px] mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            <h1 className="font-serif text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center">
              {t.heroTitle}
            </h1>
            <button 
              onClick={() => navigate('/book')}
              className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 bg-primary text-white text-sm sm:text-base md:text-lg font-semibold leading-normal tracking-wide hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lifted"
            >
              <span className="truncate">{t.heroCta}</span>
            </button>
          </div>
        </div>

        {/* Content container with max-width */}
        <div className="flex flex-1 justify-center w-full overflow-x-hidden">
          <div className="flex flex-col w-full max-w-[1200px] flex-1 overflow-x-hidden">

            <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
              <h2 className="text-accent text-sm sm:text-base font-semibold leading-normal tracking-[0.18em] uppercase text-center letter-spacing-wider max-w-[1200px] mx-auto">
                {t.tagline}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex flex-1 gap-4 rounded-2xl border border-slate-200/80 bg-bg-light p-6 flex-col items-center text-center shadow-lifted transition-all duration-300 hover:shadow-lifted-lg hover:-translate-y-2 group">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-main text-lg font-bold leading-tight">{feature.title}</h3>
                    <p className="text-text-subtle text-sm font-normal leading-normal">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
              <div className="flex flex-col items-center text-center gap-6 sm:gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col gap-4 sm:gap-5 w-full">
                  <h2 className="font-serif text-primary tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-full">
                    {t.midTitle}
                  </h2>
                  <p className="text-text-main text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-full">
                    {t.midText}
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/tour')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-semibold leading-normal tracking-wide w-fit hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg mx-auto"
                >
                   <span className="truncate">{t.midCta}</span>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <article className="flex flex-col gap-4 group cursor-pointer" onClick={() => navigate('/tour')}>
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl shadow-lifted-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]" 
                    style={{ backgroundImage: 'url("/images/picture_1.jpeg")' }}
                    role="img"
                    aria-label="Outdoor balcony and terrace spaces at Apartment 418 Asilah"
                  ></div>
                  <div>
                     <h3 className="text-text-main text-base font-semibold leading-normal mb-1">{t.card1Title}</h3>
                     <p className="text-text-subtle text-sm font-light leading-relaxed">{t.card1Text}</p>
                  </div>
                </article>
                <article className="flex flex-col gap-4 group cursor-pointer" onClick={() => navigate('/tour')}>
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl shadow-lifted-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]" 
                    style={{ backgroundImage: 'url("/images/picture_2.jpg")' }}
                    role="img"
                    aria-label="Interior living spaces in Apartment 418 Asilah with modern Moroccan design"
                  ></div>
                  <div>
                     <h3 className="text-text-main text-base font-semibold leading-normal mb-1">{t.card2Title}</h3>
                     <p className="text-text-subtle text-sm font-light leading-relaxed">{t.card2Text}</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16 sm:pb-20 md:pb-24">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h2 className="font-serif text-primary tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-5">
                  {t.hostsTitle}
                </h2>
                <p className="text-text-main text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  {t.hostsIntro}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto w-full">
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-bg-light p-6 shadow-lifted transition-all duration-300 hover:shadow-lifted-lg hover:-translate-y-2">
                  <h3 className="text-text-main text-xl font-semibold leading-tight">Ilias</h3>
                  <p className="text-text-main text-base font-light leading-relaxed">{t.hostIlias}</p>
                </div>
                
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-bg-light p-6 shadow-lifted transition-all duration-300 hover:shadow-lifted-lg hover:-translate-y-2">
                  <h3 className="text-text-main text-xl font-semibold leading-tight">Ahmed</h3>
                  <p className="text-text-main text-base font-light leading-relaxed">{t.hostAhmed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
