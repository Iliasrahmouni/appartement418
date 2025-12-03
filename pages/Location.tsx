import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Location: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    document.title = language === 'en'
      ? 'Location Apartment 418 Asilah | Beralmar Resort & Nearby Attractions'
      : 'Emplacement Appartement 418 Asilah | Complexe Beralmar & Attractions Proches';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Discover the prime location of Apartment 418 in Asilah\'s Beralmar resort. Just 5 minutes from the medina, beaches, and art galleries. Your ideal base for exploring Morocco\'s northern coast.'
        : 'Découvrez l\'emplacement privilégié de l\'Appartement 418 dans le complexe Beralmar d\'Asilah. À seulement 5 minutes de la médina, des plages et des galeries d\'art. Votre base idéale pour explorer la côte nord du Maroc.');
    }
  }, [language]);

  const copy = {
    en: {
      heroTitle: 'The Place to Be on Sunny Days',
      heroCta: 'Reserve Your Stay',
      exploreTitle: 'Explore Your Surroundings',
      exploreText: 'Enveloped by verdant landscapes, the Beralmar resort in Asilah, Morocco offers refined tranquility with round-the-clock security and controlled access. Expansive grounds provide privacy while meticulously maintained gardens invite leisurely strolls or relaxation by the pool. Just five minutes by car from Asilah\'s enchanting medina, you can enjoy seaside cafés, local culture, and art-adorned streets, or retreat to the serene sanctuary of the resort. This privileged location makes Apartment 418 the ideal vacation rental base for discovering Asilah\'s pristine beaches, historic medina, and cultural offerings.',
      atYourDoorstep: 'At Your Doorstep',
      nearbyPlaces: [
        { icon: 'temple_buddhist', title: 'Medina', time: '5-minute drive' },
        { icon: 'restaurant', title: 'Local Restaurants', time: '5-minute drive' },
        { icon: 'palette', title: 'Art Galleries & Murals', time: '10-minute drive' },
        { icon: 'beach_access', title: 'City Beach', time: '7-minute walk' },
      ],
      medinaTitle: 'The Medina\'s Charm',
      medinaText: 'Lose yourself in the enchanting blue and white alleyways of Asilah\'s ancient medina. A UNESCO-recognized heritage site, it\'s a living canvas of history, art, and vibrant daily life. Discover hidden artisan shops, listen to the distant sound of waves, and feel the soul of the city just steps from your door.',
      coastalTitle: 'Coastal Serenity',
      coastalText: 'From the dramatic ramparts overlooking the Atlantic to the serene shores of Paradise Beach, Asilah\'s coastline is breathtaking. Enjoy morning walks along the city beach, watch fishermen at the port, and witness unforgettable sunsets that paint the sky in hues of orange and purple. The ocean is your constant, calming companion.',
      artTitle: 'A Canvas of Art & Culture',
      artText: 'Asilah is a world-renowned hub for artists. Every summer, the International Cultural Festival transforms the medina\'s walls into a spectacular open-air gallery with vibrant murals. Year-round, you can explore numerous galleries showcasing the best of Moroccan and international contemporary art. Inspiration is everywhere.',
      ctaTitle: 'Your Distinguished Moroccan Retreat Awaits',
      ctaText: 'With Asilah\'s finest offerings at your fingertips, Appartement 418 transcends mere accommodation. It serves as your portal to an extraordinary cultural and coastal journey.',
      ctaButton: 'Inquire About Availability',
    },
    fr: {
      heroTitle: 'L\'Endroit Idéal pour les Journées Ensoleillées',
      heroCta: 'Réservez Votre Séjour',
      exploreTitle: 'Explorez Vos Environs',
      exploreText: 'Enveloppé de paysages verdoyants, le complexe Beralmar à Asilah, au Maroc, offre une tranquillité raffinée avec une sécurité 24h/24 et un accès contrôlé. Des terrains spacieux offrent l\'intimité tandis que des jardins méticuleusement entretenus invitent à des promenades tranquilles ou à la détente au bord de la piscine. À seulement cinq minutes en voiture de la médina enchanteresse d\'Asilah, vous pourrez profiter des cafés en bord de mer, de la culture locale et des rues ornées d\'art, ou vous retirer dans le sanctuaire serein du complexe. Cet emplacement privilégié fait de l\'Appartement 418 un appartement de vacances idéal pour découvrir les plages immaculées d\'Asilah, sa médina historique et ses offres culturelles.',
      atYourDoorstep: 'À Votre Porte',
      nearbyPlaces: [
        { icon: 'temple_buddhist', title: 'Médina', time: '5 minutes en voiture' },
        { icon: 'restaurant', title: 'Restaurants Locaux', time: '5 minutes en voiture' },
        { icon: 'palette', title: 'Galeries d\'Art & Murales', time: '10 minutes en voiture' },
        { icon: 'beach_access', title: 'Plage de la Ville', time: '7 minutes à pied' },
      ],
      medinaTitle: 'Le Charme de la Médina',
      medinaText: 'Perdez-vous dans les ruelles enchanteresses bleues et blanches de l\'ancienne médina d\'Asilah. Site du patrimoine reconnu par l\'UNESCO, c\'est une toile vivante d\'histoire, d\'art et de vie quotidienne animée. Découvrez des boutiques d\'artisans cachées, écoutez le son lointain des vagues et ressentez l\'âme de la ville à quelques pas de votre porte.',
      coastalTitle: 'Sérénité Côtière',
      coastalText: 'Des remparts dramatiques surplombant l\'Atlantique aux rives sereines de Paradise Beach, le littoral d\'Asilah est à couper le souffle. Profitez de promenades matinales le long de la plage de la ville, observez les pêcheurs au port et assistez à des couchers de soleil inoubliables qui peignent le ciel en nuances d\'orange et de violet. L\'océan est votre compagnon constant et apaisant.',
      artTitle: 'Une Toile d\'Art & de Culture',
      artText: 'Asilah est un centre mondialement reconnu pour les artistes. Chaque été, le Festival Culturel International transforme les murs de la médina en une galerie à ciel ouvert spectaculaire avec des murales vibrantes. Tout au long de l\'année, vous pouvez explorer de nombreuses galeries présentant le meilleur de l\'art contemporain marocain et international. L\'inspiration est partout.',
      ctaTitle: 'Votre Retraite Marocaine Distinguée Vous Attend',
      ctaText: 'Avec les meilleures offres d\'Asilah à portée de main, l\'Appartement 418 transcende le simple hébergement. Il sert de portail vers un voyage culturel et côtier extraordinaire.',
      ctaButton: 'Demander la Disponibilité',
    },
  } as const;

  const t = copy[language];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = (window as any).L.map(mapRef.current).setView([35.49870840225448, -6.014439000054842], 14);

    // Add OpenStreetMap tiles
    (window as any).L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add marker for Apartment 418
    const popupText = language === 'en' 
      ? '<strong>Apartment 418</strong><br>Beralmar Resort, Asilah'
      : '<strong>Appartement 418</strong><br>Complexe Beralmar, Asilah';
    
    (window as any).L.marker([35.49870840225448, -6.014439000054842])
      .addTo(map)
      .bindPopup(popupText)
      .openPopup();

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [language]);

  return (
    <div className="bg-bg-light text-text-charcoal font-display overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Navbar primaryColorClass="text-primary-vivid" textColorClass="text-text-charcoal" />

        <main className="w-full flex flex-col">
          {/* Full-width cover image */}
          <div 
            className="flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[100vh] flex-col gap-6 sm:gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center w-full"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/asilah.jpg")' }}
            role="img"
            aria-label="Aerial view of Asilah, Morocco showing the coastal town, medina, and beaches near Apartment 418"
          >
            <div className="flex flex-col gap-6 sm:gap-8 items-center z-10 px-4 max-w-[1200px] mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight drop-shadow-lg">
                {t.heroTitle}
              </h1>
              <button 
                onClick={() => navigate('/book')}
                className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 sm:h-12 md:h-14 px-6 sm:px-8 md:px-10 bg-primary-vivid text-white text-sm sm:text-base md:text-lg font-semibold leading-normal tracking-wide hover:bg-primary-vivid/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lifted"
              >
                <span className="truncate">{t.heroCta}</span>
              </button>
            </div>
          </div>

          {/* Content container with max-width */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="flex flex-col w-full max-w-[1280px] flex-1 gap-8 sm:gap-10">
              <div className="text-center max-w-3xl mx-auto px-4">
                <h2 className="text-text-charcoal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight tracking-tight">{t.exploreTitle}</h2>
                <p className="text-text-charcoal/80 text-sm sm:text-base md:text-lg font-light leading-relaxed pt-4 sm:pt-6">
                  {t.exploreText}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-2 relative p-2 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-3d-light overflow-hidden">
                  <div 
                    ref={mapRef}
                    className="w-full aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden"
                    style={{ minHeight: '250px' }}
                  ></div>
                </div>
                
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-3d-light p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-primary-vivid text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">{t.atYourDoorstep}</h3>
                  <ul className="space-y-4">
                    {t.nearbyPlaces.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-primary-vivid mt-1">{item.icon}</span>
                            <div>
                                <h4 className="font-bold text-text-charcoal">{item.title}</h4>
                                <p className="text-text-charcoal/80 text-sm">{item.time}</p>
                            </div>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-8 sm:py-12 md:py-16 lg:py-20 bg-white shadow-inner">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1 gap-8 sm:gap-10 md:gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-text-charcoal">{t.medinaTitle}</h3>
                  <p className="text-text-charcoal/80 leading-relaxed">{t.medinaText}</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-3d-light transition-transform duration-500 hover:scale-105 group cursor-pointer">
                  <img className="w-full h-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD63ydzElSz2lVOAzGoSXlVjcXLRYBwsrmmn1nCuoQfolWOQhq4LNNIs4we_RHlV3prU1xvrlqHFY36Klz4tiR9PUePVPMLzurMTxk7usLDEukoCPQUZOtxhp8tg2zZ-sN6DwQPnX1muRtAePvHjLkvhc5WYAB0YvIdW3KSnx0L0OG4XBrkzSAekg7QUx0cKDdL-YOFosTU3ufdYmAFtMcYZ1G6wuxCLf18WGwu7L6lOg5vFqAPPs8W1mCrxcatepvHNuZUetuQ31U" alt="Asilah medina Morocco - UNESCO heritage site with blue and white alleyways near Apartment 418" loading="lazy" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-text-charcoal">{t.coastalTitle}</h3>
                  <p className="text-text-charcoal/80 leading-relaxed">{t.coastalText}</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-3d-light transition-transform duration-500 hover:scale-105 group cursor-pointer">
                  <img className="w-full h-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXi2TmhrwzIanzi3d9VsJMGwLiHKANOq578SI4g8ItDj71Y44bL-_4QfiwJcMFjBD1cF9wylgxWxpHas2m4VoPB8hXbxumIJ1Vc-UIyi7D5CGdLEiGmrN8OcGzdPvycgZOSKXUTEawh11Mmj5TcSlgOzjjjfzrAySSHm2-WqOcgim6Gtuq-g3G3MccnUpgf0emjBMMYosvcSGyfHzLpddvfUkWaif2wu1cIcPqch6kKPAkt_IDuMz8fV4ZsNoUur5oBs9K6k1rER4" alt="Paradise Beach Asilah Morocco - beautiful coastal beach near Apartment 418 vacation rental" loading="lazy" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-text-charcoal">{t.artTitle}</h3>
                  <p className="text-text-charcoal/80 leading-relaxed">{t.artText}</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-3d-light transition-transform duration-500 hover:scale-105 group cursor-pointer">
                  <img className="w-full h-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUOXNM5UoQl2T3A6aSdWIIVIKS-l7Kxc92tXSXdaWUF7JT-UBiyOLa4F1j8_3bxOI-3EY9gCIaFvnZVBRA1w9xA610luSgfkt4d8_zvp2eejypZkAMH9Dfp7hNC1LPie6r3eswNe3S9IojyJa4qDBLkj_t02I0QZOPmNkd_z00vixpdZPB3iDw3A1jL-sqQngRoLS7hRLEdFOGAmdi8t6shOoXfOt6wi0PtZJ8C2gaqtsKrenAOjhDJCoXjMxYTs5TpFVd6o2_4ys" alt="Asilah International Cultural Festival art murals and street art in medina near Apartment 418" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1 text-center items-center gap-4 sm:gap-6 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-charcoal max-w-2xl tracking-tight">{t.ctaTitle}</h2>
              <p className="text-text-charcoal/80 text-sm sm:text-base max-w-2xl leading-relaxed font-light mt-3 sm:mt-4">
                {t.ctaText}
              </p>
              <button 
                onClick={() => navigate('/book')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary-vivid text-white text-base font-semibold leading-normal tracking-wide hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl mt-6 transform hover:-translate-y-1"
              >
                <span className="truncate">{t.ctaButton}</span>
              </button>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex justify-center py-8 sm:py-10 bg-white border-t border-charcoal/10">
            <div className="layout-content-container flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-[1280px]">
              <p className="text-sm text-text-charcoal/60">
                {language === 'en'
                  ? '© 2024 Appartement 418. All rights reserved.'
                  : '© 2024 Appartement 418. Tous droits réservés.'}
              </p>
              <div className="flex gap-6 text-sm">
                <a className="text-text-charcoal/80 hover:text-primary-vivid" href="#">
                  {language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
                </a>
                <a className="text-text-charcoal/80 hover:text-primary-vivid" href="#">
                  {language === 'en' ? 'Terms of Service' : "Conditions d’utilisation"}
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Location;
