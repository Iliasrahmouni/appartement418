import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Book: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en'
      ? 'Book Apartment 418 Asilah | Reserve Your Stay | Direct Booking'
      : 'Réserver Appartement 418 Asilah | Réservez Votre Séjour | Réservation Directe';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Book your stay at Apartment 418, a luxury vacation rental in Asilah\'s Beralmar resort. Reserve directly or through our partners. Contact us for availability and special requests.'
        : 'Réservez votre séjour à l\'Appartement 418, une location de vacances de luxe dans le complexe Beralmar d\'Asilah. Réservez directement ou via nos partenaires. Contactez-nous pour la disponibilité et les demandes spéciales.');
    }
  }, [language]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingCheckIn, setSelectingCheckIn] = useState(true);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, placeholder, value, type } = e.target;
    if (name) {
      setFormData({...formData, [name]: value});
    } else if (placeholder === 'Enter your full name') {
      setFormData({...formData, name: value});
    } else if (placeholder === 'Enter your email address') {
      setFormData({...formData, email: value});
    } else if (placeholder === 'Enter your phone number') {
      setFormData({...formData, phone: value});
    } else if (placeholder === 'Any special requests or questions?') {
      setFormData({...formData, message: value});
    } else if (e.target.tagName === 'SELECT') {
      setFormData({...formData, guests: value});
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDisplayText = () => {
    if (formData.checkIn && formData.checkOut) {
      return `${formatDate(formData.checkIn)} - ${formatDate(formData.checkOut)}`;
    } else if (formData.checkIn) {
      return `${formatDate(formData.checkIn)} - Check out`;
    }
    return language === 'en' ? 'Select dates' : 'Choisir des dates';
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const isDateInRange = (date: Date) => {
    if (!formData.checkIn || !formData.checkOut) return false;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    return date >= checkIn && date <= checkOut;
  };

  const isDatePast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (day: number, month: number, year: number) => {
    const selectedDate = new Date(year, month, day);
    if (isDatePast(selectedDate)) return;

    const dateString = selectedDate.toISOString().split('T')[0];

    if (selectingCheckIn || !formData.checkIn) {
      if (formData.checkOut && dateString > formData.checkOut) {
        setFormData({...formData, checkIn: dateString, checkOut: ''});
      } else {
        setFormData({...formData, checkIn: dateString});
        setSelectingCheckIn(false);
      }
    } else {
      if (dateString >= formData.checkIn) {
        setFormData({...formData, checkOut: dateString});
        setShowCalendar(false);
        setSelectingCheckIn(true);
      }
    }
  };

  const renderCalendarMonth = (monthDate: Date) => {
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(monthDate);
    const days = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const isSelected = dateString === formData.checkIn || dateString === formData.checkOut;
      const isInRange = isDateInRange(date);
      const isPast = isDatePast(date);
      const isCheckIn = dateString === formData.checkIn;
      const isCheckOut = dateString === formData.checkOut;

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateClick(day, month, year)}
          disabled={isPast}
          className={
            [
              'h-10 w-10 rounded-full text-sm font-medium flex items-center justify-center transition-all',
              isPast
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-text-main cursor-pointer hover:bg-gray-100',
              isSelected ? 'bg-accent-indigo text-white hover:bg-accent-indigo/90' : '',
              isInRange && !isSelected ? 'bg-accent-indigo/10' : ''
            ].join(' ')
          }
        >
          {day}
        </button>
      );
    }

    return (
      <div className="w-full">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-xs font-semibold text-text-subtle">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  const renderCalendar = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const { year, month } = getDaysInMonth(currentMonth);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 3 }, (_, i) => currentYear + i);

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newMonth = parseInt(e.target.value);
      const newDate = new Date(currentMonth);
      newDate.setMonth(newMonth);
      setCurrentMonth(newDate);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newYear = parseInt(e.target.value);
      const newDate = new Date(currentMonth);
      newDate.setFullYear(newYear);
      setCurrentMonth(newDate);
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => {
              const prevMonth = new Date(currentMonth);
              prevMonth.setMonth(prevMonth.getMonth() - 1);
              setCurrentMonth(prevMonth);
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-text-main">chevron_left</span>
          </button>
          <div className="flex items-center gap-2">
            <select
              value={month}
              onChange={handleMonthChange}
              className="text-lg font-semibold text-text-main bg-white border border-gray-300 rounded-lg px-3 py-1.5 outline-none cursor-pointer appearance-none pr-8 hover:border-accent-indigo focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 transition-all"
              style={{
                backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%233A506B%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '16px'
              }}
            >
              {monthNames.map((name, idx) => (
                <option key={idx} value={idx}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={handleYearChange}
              className="text-lg font-semibold text-text-main bg-white border border-gray-300 rounded-lg px-3 py-1.5 outline-none cursor-pointer appearance-none pr-8 hover:border-accent-indigo focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 transition-all"
              style={{
                backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%233A506B%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '16px'
              }}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => {
              const nextMonth = new Date(currentMonth);
              nextMonth.setMonth(nextMonth.getMonth() + 1);
              setCurrentMonth(nextMonth);
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-text-main">chevron_right</span>
          </button>
        </div>
        {renderCalendarMonth(currentMonth)}
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject =
      language === 'en'
        ? 'New booking inquiry – Apartment 418 Asilah'
        : "Nouvelle demande de réservation – Appartement 418 Asilah";

    const bodyLines = [
      language === 'en' ? 'Booking inquiry details:' : 'Détails de la demande de réservation :',
      '',
      `${language === 'en' ? 'Name' : 'Nom'}: ${formData.name}`,
      `Email: ${formData.email}`,
      `${language === 'en' ? 'Phone' : 'Téléphone'}: ${formData.phone}`,
      `${language === 'en' ? 'Check-in' : 'Arrivée'}: ${formData.checkIn || '-'}`,
      `${language === 'en' ? 'Check-out' : 'Départ'}: ${formData.checkOut || '-'}`,
      `${language === 'en' ? 'Guests' : 'Invités'}: ${formData.guests}`,
      '',
      `${language === 'en' ? 'Message' : 'Message'}:`,
      formData.message || (language === 'en' ? 'No additional message provided.' : 'Aucun message supplémentaire.'),
    ];

    const mailto = `mailto:appartementasilah418@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
  };

  return (
    <div className="font-display bg-bg-bone min-h-screen flex flex-col overflow-x-hidden">
       {/* Small Back Button for UX */}
       <div className="absolute top-4 left-4 z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 sm:p-2.5 rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all text-accent-indigo font-semibold text-xs sm:text-sm">
            <span className="material-symbols-outlined text-base sm:text-lg">arrow_back</span>
            <span className="hidden sm:inline pr-1 sm:pr-2">
              {language === 'en' ? 'Back to Home' : "Retour à l'accueil"}
            </span>
        </button>
       </div>

      <main className="flex-1 flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden bg-white">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto min-h-[300px]">
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCooiFLxUrBQUPZZL0uFXrZkqxcx6eix03mL1vxBLKHA2cXVzVf3zrlh4SRg-XzPK9A2Y_QGAIuwi4uHTcEeHhxF78mtL9nR61xJWuUfQ8x5S-T-oGb7GqzwgMyHfjWgZgDiLNrxmiWI9o5cMp3OUmLB_zDbvyr5V3nLlS2oL_h9zJrL2G-vNI6QRH2MifIX5bq4-97nZJ-llRYubAqV3D3V2L0Myn04Fkgzy-R8BhBrfZMSEguQ7oI17tRkdNL8yQY5YOfdBGkns")' }}
              role="img"
              aria-label="Asilah Morocco - historic ramparts and Atlantic coastline view near Apartment 418"
            ></div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex flex-col mb-6 sm:mb-8">
              <h1 className="font-garamond text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-main tracking-tight leading-tight mb-3 sm:mb-4">
                {language === 'en' ? 'Book Apartment 418 in Asilah' : "Réservez l'Appartement 418 à Asilah"}
              </h1>
              <p className="text-text-subtle text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-4">
                {language === 'en'
                  ? 'We are delighted to help you reserve your stay at Apartment 418, a luxury vacation rental in Asilah\'s exclusive Beralmar resort. Our team is here to answer questions and ensure your stay is exceptional.'
                  : 'Nous sommes ravis de vous aider à réserver votre séjour à l\'Appartement 418, un appartement de vacances de luxe dans le complexe exclusif Beralmar d\'Asilah. Notre équipe est là pour répondre à vos questions et garantir que votre séjour soit exceptionnel.'}
              </p>
            </div>
            
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
              <p className="text-text-subtle text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-5 text-center">
                {language === 'en' ? 'Book through our partners' : 'Réserver via nos partenaires'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://www.airbnb.com/rooms/1475325226892897744?photo_id=2312069833&source_impression_id=p3_1764760098_P31L9exG8DvONAHU&previous_page_section_name=1000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden bg-gradient-to-br from-[#FF5A5F] via-[#FF385C] to-[#E61E4D] text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2.5">
                    <span className="material-symbols-outlined text-xl">home</span>
                    <span className="text-base font-bold tracking-tight">Airbnb</span>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </a>
                <a
                  href="https://www.booking.com/hotel/ma/assilah-beralmar-new-flat-with-pool-and-beach.en-gb.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaKcCiAEBmAEzuAEHyAEN2AED6AEB-AEBiAIBqAIBuALn18DJBsACAdICJDc4ZjA1YzBkLTM0YWItNGJjYy1iYjc1LTJlODhmYzA1ZjNkZdgCAeACAQ&sid=35f4f545f46d4cd9ff0aa73cf89937f1&all_sr_blocks=1466708801_417978444_4_0_0&checkin=2025-12-17&checkout=2025-12-20&dest_id=14654984&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1466708801_417978444_4_0_0&hpos=1&matching_block_id=1466708801_417978444_4_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1466708801_417978444_4_0_0__14675&srepoch=1764764695&srpvid=7d20573b313100de&type=total&ucfs=1&"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden bg-gradient-to-br from-[#003580] via-[#004F9F] to-[#0066CC] text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2.5">
                    <span className="material-symbols-outlined text-xl">hotel</span>
                    <span className="text-base font-bold tracking-tight">Booking.com</span>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </a>
              </div>
            </div>
            
            <div className="mb-6 sm:mb-8">
              <h2 className="text-text-main text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                {language === 'en' ? 'Contact Form' : 'Formulaire de contact'}
              </h2>
            </div>
            
            <form className="flex flex-col gap-4 sm:gap-5 md:gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <label className="flex flex-col flex-1">
                  <p className="text-text-main text-sm font-medium leading-normal pb-2">
                    {language === 'en' ? 'Full Name' : 'Nom complet'}
                  </p>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white h-12 placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200" 
                    placeholder={language === 'en' ? 'Enter your full name' : 'Entrez votre nom complet'} 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-text-main text-sm font-medium leading-normal pb-2">
                    {language === 'en' ? 'Email Address' : 'Adresse e‑mail'}
                  </p>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white h-12 placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200" 
                    placeholder={language === 'en' ? 'Enter your email address' : 'Entrez votre adresse e‑mail'} 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              
              <label className="flex flex-col">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                  {language === 'en' ? 'Phone Number' : 'Numéro de téléphone'}
                </p>
                    <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white h-12 placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200" 
                  placeholder={language === 'en' ? 'Enter your phone number' : 'Entrez votre numéro de téléphone'} 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                      onChange={handleChange}
                    />
              </label>
              
              <div className="flex flex-col">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                  {language === 'en' ? 'Select Dates' : 'Sélectionner les dates'}
                </p>
                <div className="relative" ref={calendarRef}>
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white h-12 placeholder:text-text-subtle p-[15px] pl-10 text-left text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200 cursor-pointer"
                  >
                    <span className={formData.checkIn || formData.checkOut ? 'text-text-main' : 'text-text-subtle'}>
                      {getDisplayText()}
                    </span>
                  </button>
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle pointer-events-none">calendar_today</span>
                  
                  {showCalendar && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-50 p-4 sm:p-6 w-[320px] sm:w-[350px] max-w-[calc(100vw-2rem)]">
                      {renderCalendar()}
                      {formData.checkIn && formData.checkOut && (
                        <button
                          type="button"
                          onClick={() => setShowCalendar(false)}
                          className="mt-4 w-full bg-accent-indigo text-white py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
                        >
                          Done
                        </button>
                      )}
                  </div>
                  )}
                </div>
              </div>
              
              <label className="flex flex-col">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                  {language === 'en' ? 'Number of Guests' : "Nombre d'hôtes"}
                </p>
                <select 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white h-12 placeholder:text-text-subtle px-[15px] text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200 appearance-none bg-no-repeat"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsx1zHEJeu7y6jM7e6nI4VuBPJlZMcwdUzza7NUCLn_y2vzy-x11oxY30nybBBlYozKlOES5wyywVSRi117l1YQRa3NqP9xoIGx5smnMyp9rNFunv8CX5esE19Jb2wnNOwbhrYTPB1p8KGqezmOXNX_z9-AaomaPhh2kBUZoRHZuAPrDSPCOJxy2dVUZyLmSu9ExfFBEKPqWwVvg3XTO460p1azO4RPBpyWDtvSuNYkpuXc6dJfwssdpGg0AozwlR0a2EEVYIBTQ0')",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.25em 1.25em"
                  }}
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">{language === 'en' ? '1 Guest' : '1 invité'}</option>
                  <option value="2">{language === 'en' ? '2 Guests' : '2 invités'}</option>
                  <option value="3">{language === 'en' ? '3 Guests' : '3 invités'}</option>
                  <option value="4">{language === 'en' ? '4 Guests' : '4 invités'}</option>
                </select>
              </label>
              
              <label className="flex flex-col">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                  {language === 'en' ? 'Message (optional)' : 'Message (optionnel)'}
                </p>
                <textarea 
                  className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-main focus:outline-0 border border-gray-300 bg-white placeholder:text-text-subtle p-[15px] text-base font-normal leading-normal focus:ring-0 focus:border-accent-indigo focus:shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#3A506B,0_1px_2px_0_rgb(0_0_0_/_0.05)] shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] transition-shadow duration-200" 
                  placeholder={language === 'en' ? 'Any special requests or questions?' : 'Demandes particulières ou questions ?'} 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
              
              <button className="flex items-center justify-center font-semibold text-white bg-accent-indigo h-12 px-8 rounded-lg w-full text-base transition-all duration-300 shadow-lg shadow-accent-indigo/30 hover:bg-opacity-90 hover:shadow-xl hover:shadow-accent-indigo/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-indigo transform hover:-translate-y-1 tracking-wide">
                {language === 'en' ? 'Submit Your Inquiry' : 'Envoyer votre demande'}
              </button>
              
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-6 text-sm text-text-subtle">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-accent-indigo">lock</span>
                    <span>{language === 'en' ? 'Secure Connection' : 'Connexion sécurisée'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-accent-indigo">verified_user</span>
                    <span>{language === 'en' ? 'Privacy Protected' : 'Confidentialité protégée'}</span>
                  </div>
                </div>
                <div className="text-center text-sm text-text-subtle pt-4">
                  <p className="font-semibold text-text-main mb-3">
                    {language === 'en' ? 'Or reach out directly to us at:' : 'Ou contactez‑nous directement à :'}
                  </p>
                  <a 
                    href="mailto:appartementasilah418@gmail.com" 
                    className="text-accent-indigo font-medium hover:underline inline-flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">email</span>
                    <span>appartementasilah418@gmail.com</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;