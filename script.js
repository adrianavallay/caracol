/* ============================================
   CARACOL EL HIERRO - Main Script
   Language switching, animations, interactions
   ============================================ */

// ─── Translations ───
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.island": "La Isla",
    "nav.apartments": "Apartamentos",
    "nav.activities": "Actividades",
    "nav.about": "Sobre Nosotros",
    "nav.contact": "Contacto",
    "nav.book": "Reservar",
    "hero.badge": "Reserva de la Biosfera UNESCO",
    "hero.title1": "Apartamentos Caracol",
    "hero.title2": "El Pinar, Isla de El Hierro",
    "hero.subtitle": "Nuestra finca está situada en la ladera suroeste en la zona más alta y tranquila de El Pinar, con maravillosas vistas de La Gomera y El Teide en Tenerife.",
    "hero.cta1": "Explorar Apartamentos",
    "hero.cta2": "Reservar Ahora",
    "hero.scroll": "Descubrir",
    "island.tag": "Descubre",
    "island.title": "La Isla de El Hierro",
    "island.subtitle": "Esta séptima isla siempre ha estado excluida del turismo convencional. La UNESCO la ha declarado reserva de la biosfera. Un paraíso para los amantes de la naturaleza, senderistas, buceadores y quienes buscan paz y tranquilidad.",
    "island.card1.title": "Paisajes Volcánicos",
    "island.card1.text": "278 km² de terreno diverso: áridos lajiares y formaciones volcánicas en el sur, fértiles valles con viñedos y huertos.",
    "island.card2.title": "Bosques Milenarios",
    "island.card2.text": "Densos pinares canarios y bosques de laurisilva en la zona central de la isla.",
    "island.card3.title": "Costas Espectaculares",
    "island.card3.text": "Acantilados de hasta 1.000 metros, calas y piscinas naturales que invitan a refrescarse.",
    "apartments.tag": "Alojamiento",
    "apartments.title": "Nuestros Apartamentos",
    "apartments.subtitle": "En esta sección encontrará fotos e información sobre nuestros apartamentos. Cada uno ofrece vistas al mar, terraza privada y todo lo necesario para una estancia perfecta.",
    "apartments.desc": "Estudio con vistas al mar y una terraza íntima. Cocina, baño con agua caliente solar, WiFi y terraza con amplias vistas al mar y las montañas.",
    "apartments.guests": "huéspedes",
    "apartments.bedroom": "dormitorio",
    "apartments.bathroom": "baño",
    "apartments.book": "Consultar Disponibilidad",
    "apartments.checkin": "Desde las 15:00",
    "apartments.checkout": "Hasta las 12:00",
    "amenities.title": "Lo que incluimos",
    "amenities.wifi": "WiFi",
    "amenities.kitchen": "Cocina",
    "amenities.heating": "Calefacción",
    "amenities.terrace": "Terraza",
    "amenities.solar": "Agua caliente solar",
    "amenities.coffee": "Cafetera",
    "amenities.towels": "Toallas y ropa de cama",
    "amenities.washer": "Lavadora",
    "activities.tag": "Experiencia",
    "activities.title": "El Vino",
    "activities.text": "Nuestro viñedo está situado al pie de los llanos. Las uvas se recogen, estrujan y maceran según los métodos tradicionales canarios. El «vino de pata de cabra» reposa en sus barricas en la bodega y le invita a degustarlo.",
    "activities.feat1": "Métodos tradicionales canarios",
    "activities.feat2": "Degustación en bodega propia",
    "activities.feat3": "Vino de pata de cabra",
    "activities.cta": "Contáctenos",
    "nature.hiking": "Senderismo",
    "nature.hiking.desc": "Rutas de senderismo en todas direcciones a través del pinar canario.",
    "nature.biking": "Mountain Bike",
    "nature.biking.desc": "Un verdadero desafío para ciclistas de montaña y entusiastas del senderismo.",
    "nature.diving": "Buceo",
    "nature.diving.desc": "Aguas cristalinas ideales para explorar la vida marina de El Hierro.",
    "about.tag": "Nuestra Historia",
    "about.title": "Bienvenidos a Caracol El Hierro",
    "about.text1": "Hola, me llamo Pablo. Mis padres me trajeron desde Alemania a esta maravillosa isla en 1982 cuando tenía un año. Tras estudiar psicología y seguridad laboral, regresé en 2010.",
    "about.text2": "Tras el fallecimiento de mi madre en 2016, me dediqué a preservar y mejorar su gran legado para que nuestros huéspedes puedan disfrutar de una excelente estancia.",
    "about.text3": "Hoy me esfuerzo por preservar y mejorar el gran legado de mi madre para que nuestros huéspedes puedan disfrutar de una excelente estancia.",
    "about.role": "Propietario & Anfitrión",
    "transport.tag": "Cómo llegar",
    "transport.title": "Transporte",
    "transport.sea": "Transporte Marítimo",
    "transport.air": "Transporte Aéreo",
    "transport.local": "Transporte Local",
    "contact.tag": "Contacto",
    "contact.title": "Contáctenos",
    "contact.subtitle": "Si tiene alguna pregunta o desea hacer una reserva, no dude en contactarnos.",
    "contact.address.label": "Dirección",
    "contact.phone.label": "Teléfono",
    "contact.whatsapp": "Envíanos un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.checkin": "Llegada",
    "contact.form.checkout": "Salida",
    "contact.form.apartment": "Apartamento",
    "contact.form.select": "Seleccionar...",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "footer.tagline": "Apartamentos vacacionales en la Isla de El Hierro",
    "footer.nav": "Navegación",
    "footer.transport": "Transporte",
    "footer.contactus": "Contacto",
    "footer.rights": "Todos los derechos reservados."
  },
  en: {
    "nav.home": "Home",
    "nav.island": "The Island",
    "nav.apartments": "Apartments",
    "nav.activities": "Activities",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.book": "Book Now",
    "hero.badge": "UNESCO Biosphere Reserve",
    "hero.title1": "Caracol Apartments",
    "hero.title2": "El Pinar, Island of El Hierro",
    "hero.subtitle": "Our finca is situated on the southwest slope in the highest and quietest area of El Pinar, with wonderful views of La Gomera and El Teide on Tenerife.",
    "hero.cta1": "Explore Apartments",
    "hero.cta2": "Book Now",
    "hero.scroll": "Discover",
    "island.tag": "Discover",
    "island.title": "The Island of El Hierro",
    "island.subtitle": "This seventh island has always been excluded from mainstream tourism. UNESCO has declared it a biosphere reserve. A paradise for nature lovers, hikers, divers and those seeking peace and tranquility.",
    "island.card1.title": "Volcanic Landscapes",
    "island.card1.text": "278 km² of diverse terrain: arid lava fields and volcanic formations in the south, fertile valleys with vineyards and orchards.",
    "island.card2.title": "Ancient Forests",
    "island.card2.text": "Dense Canarian pine forests and laurel forests in the central zone of the island.",
    "island.card3.title": "Spectacular Coastline",
    "island.card3.text": "Cliffs up to 1,000 meters high, coves and natural pools inviting you to refresh.",
    "apartments.tag": "Accommodation",
    "apartments.title": "Our Apartments",
    "apartments.subtitle": "In this section you will find photos and information about our apartments. Each one offers sea views, a private terrace and everything you need for a perfect stay.",
    "apartments.desc": "Studio with sea views and an intimate terrace. Kitchen, bathroom with solar hot water, WiFi and terrace with panoramic views of the sea and mountains.",
    "apartments.guests": "guests",
    "apartments.bedroom": "bedroom",
    "apartments.bathroom": "bathroom",
    "apartments.book": "Check Availability",
    "apartments.checkin": "From 3:00 PM",
    "apartments.checkout": "Until 12:00 PM",
    "amenities.title": "What We Include",
    "amenities.wifi": "WiFi",
    "amenities.kitchen": "Kitchen",
    "amenities.heating": "Heating",
    "amenities.terrace": "Terrace",
    "amenities.solar": "Solar Hot Water",
    "amenities.coffee": "Coffee Machine",
    "amenities.towels": "Towels & Linens",
    "amenities.washer": "Washing Machine",
    "activities.tag": "Experience",
    "activities.title": "The Wine",
    "activities.text": "Our vineyard is situated at the foot of the plains. The grapes are harvested, crushed and macerated using traditional Canarian methods. The \"goat's foot wine\" rests in its barrels in the cellar and invites you to taste it.",
    "activities.feat1": "Traditional Canarian methods",
    "activities.feat2": "Tasting in our own cellar",
    "activities.feat3": "Goat's foot wine",
    "activities.cta": "Contact Us",
    "nature.hiking": "Hiking",
    "nature.hiking.desc": "Hiking trails in all directions through the Canarian pine forest.",
    "nature.biking": "Mountain Biking",
    "nature.biking.desc": "A real challenge for mountain bikers and hiking enthusiasts.",
    "nature.diving": "Diving",
    "nature.diving.desc": "Crystal clear waters ideal for exploring the marine life of El Hierro.",
    "about.tag": "Our Story",
    "about.title": "Welcome to Caracol El Hierro",
    "about.text1": "Hello, my name is Pablo. My parents brought me from Germany to this wonderful island in 1982 when I was one year old. After studying psychology and occupational safety, I returned in 2010.",
    "about.text2": "After my mother's passing in 2016, I dedicated myself to preserving and enhancing her great legacy so that our guests can enjoy an excellent stay.",
    "about.text3": "Today I strive to preserve and enhance my mother's great legacy so that our guests can enjoy an excellent stay.",
    "about.role": "Owner & Host",
    "transport.tag": "Getting Here",
    "transport.title": "Transportation",
    "transport.sea": "Maritime Transport",
    "transport.air": "Air Transport",
    "transport.local": "Local Transport",
    "contact.tag": "Contact",
    "contact.title": "Contact Us",
    "contact.subtitle": "If you have any questions or would like to make a reservation, please do not hesitate to contact us.",
    "contact.address.label": "Address",
    "contact.phone.label": "Phone",
    "contact.whatsapp": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.checkin": "Check-in",
    "contact.form.checkout": "Check-out",
    "contact.form.apartment": "Apartment",
    "contact.form.select": "Select...",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "footer.tagline": "Vacation apartments on the Island of El Hierro",
    "footer.nav": "Navigation",
    "footer.transport": "Transportation",
    "footer.contactus": "Contact",
    "footer.rights": "All rights reserved."
  },
  de: {
    "nav.home": "Startseite",
    "nav.island": "Die Insel",
    "nav.apartments": "Wohnungen",
    "nav.activities": "Aktivitäten",
    "nav.about": "Über Uns",
    "nav.contact": "Kontakt",
    "nav.book": "Buchen",
    "hero.badge": "UNESCO-Biosphärenreservat",
    "hero.title1": "Caracol Wohnungen",
    "hero.title2": "El Pinar, Insel El Hierro",
    "hero.subtitle": "Unsere Finca liegt am Südwesthang in der höchstgelegenen und ruhigsten Gegend von El Pinar, mit herrlichem Blick auf La Gomera und El Teide auf Teneriffa.",
    "hero.cta1": "Wohnungen Entdecken",
    "hero.cta2": "Jetzt Buchen",
    "hero.scroll": "Entdecken",
    "island.tag": "Entdecken",
    "island.title": "Die Insel El Hierro",
    "island.subtitle": "Diese siebte Insel war schon immer vom Massentourismus ausgeschlossen. Die UNESCO hat sie zum Biosphärenreservat erklärt. Ein Paradies für Naturliebhaber, Wanderer, Taucher und alle, die Ruhe und Frieden suchen.",
    "island.card1.title": "Vulkanlandschaften",
    "island.card1.text": "278 km² vielfältiges Terrain: karge Lavafelder und Vulkanformationen im Süden, fruchtbare Täler mit Weinbergen und Obstgärten.",
    "island.card2.title": "Uralte Wälder",
    "island.card2.text": "Dichte kanarische Kiefernwälder und Lorbeerwälder in der zentralen Zone der Insel.",
    "island.card3.title": "Spektakuläre Küsten",
    "island.card3.text": "Klippen bis zu 1.000 Meter hoch, Buchten und natürliche Pools, die zur Erfrischung einladen.",
    "apartments.tag": "Unterkunft",
    "apartments.title": "Unsere Wohnungen",
    "apartments.subtitle": "In diesem Bereich finden Sie Fotos und Informationen über unsere Wohnungen. Jede bietet Meerblick, eine private Terrasse und alles, was Sie für einen perfekten Aufenthalt brauchen.",
    "apartments.desc": "Studio mit Meerblick und einer sehr intimen Terrasse. Küche, Bad mit Solar-Warmwasser, WiFi und Terrasse mit weitem Blick auf das Meer und die Berge.",
    "apartments.guests": "Gäste",
    "apartments.bedroom": "Schlafzimmer",
    "apartments.bathroom": "Badezimmer",
    "apartments.book": "Verfügbarkeit Prüfen",
    "apartments.checkin": "Ab 15:00 Uhr",
    "apartments.checkout": "Bis 12:00 Uhr",
    "amenities.title": "Was wir bieten",
    "amenities.wifi": "WLAN",
    "amenities.kitchen": "Küche",
    "amenities.heating": "Heizung",
    "amenities.terrace": "Terrasse",
    "amenities.solar": "Solar-Warmwasser",
    "amenities.coffee": "Kaffeemaschine",
    "amenities.towels": "Handtücher & Bettwäsche",
    "amenities.washer": "Waschmaschine",
    "activities.tag": "Erlebnis",
    "activities.title": "Der Wein",
    "activities.text": "Unser Weinberg liegt am Fuße der Ebene. Die Trauben werden nach traditionellen kanarischen Methoden geerntet, gepresst und mazeriert. Der «Ziegenfußwein» ruht in seinen Fässern im Keller und lädt Sie zur Verkostung ein.",
    "activities.feat1": "Traditionelle kanarische Methoden",
    "activities.feat2": "Verkostung im eigenen Weinkeller",
    "activities.feat3": "Ziegenfußwein",
    "activities.cta": "Kontaktieren Sie Uns",
    "nature.hiking": "Wandern",
    "nature.hiking.desc": "Wanderwege in alle Richtungen durch den kanarischen Kiefernwald.",
    "nature.biking": "Mountainbike",
    "nature.biking.desc": "Eine echte Herausforderung für Mountainbiker und Wanderfreunde.",
    "nature.diving": "Tauchen",
    "nature.diving.desc": "Kristallklares Wasser, ideal um die Unterwasserwelt von El Hierro zu erkunden.",
    "about.tag": "Unsere Geschichte",
    "about.title": "Willkommen bei Caracol El Hierro",
    "about.text1": "Hallo, mein Name ist Pablo. Meine Eltern brachten mich 1982 aus Deutschland auf diese wunderbare Insel, als ich ein Jahr alt war. Nach dem Studium der Psychologie und Arbeitssicherheit kehrte ich 2010 zurück.",
    "about.text2": "Nach dem Tod meiner Mutter im Jahr 2016 widmete ich mich der Bewahrung und Verbesserung ihres großen Vermächtnisses, damit unsere Gäste einen ausgezeichneten Aufenthalt genießen können.",
    "about.text3": "Heute bemühe ich mich, das große Vermächtnis meiner Mutter zu bewahren und zu verbessern, damit unsere Gäste einen ausgezeichneten Aufenthalt genießen können.",
    "about.role": "Eigentümer & Gastgeber",
    "transport.tag": "Anreise",
    "transport.title": "Transport",
    "transport.sea": "Seetransport",
    "transport.air": "Flugtransport",
    "transport.local": "Lokaler Transport",
    "contact.tag": "Kontakt",
    "contact.title": "Kontaktieren Sie Uns",
    "contact.subtitle": "Wenn Sie Fragen haben oder eine Reservierung vornehmen möchten, zögern Sie bitte nicht, uns zu kontaktieren.",
    "contact.address.label": "Adresse",
    "contact.phone.label": "Telefon",
    "contact.whatsapp": "Senden Sie uns eine Nachricht",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.checkin": "Anreise",
    "contact.form.checkout": "Abreise",
    "contact.form.apartment": "Wohnung",
    "contact.form.select": "Auswählen...",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht Senden",
    "footer.tagline": "Ferienwohnungen auf der Insel El Hierro",
    "footer.nav": "Navigation",
    "footer.transport": "Transport",
    "footer.contactus": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten."
  }
};

// ─── Language Switcher ───
let currentLang = localStorage.getItem('caracol-lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('caracol-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─── Preloader ───
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 600);

  // Init language
  setLanguage(currentLang);

  // Make images visible
  document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});

// ─── Navbar Scroll ───
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 60);
  lastScroll = scrollY;
}, { passive: true });

// ─── Mobile Menu ───
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

// Close on link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── Language buttons ───
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// ─── Hero Slider ───
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 6000);

// ─── Active nav link on scroll ───
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ─── Scroll Reveal ───
function initScrollReveal() {
  // Add reveal classes to elements
  const revealElements = [
    { selector: '.section-header', cls: 'reveal' },
    { selector: '.island-card', cls: 'reveal' },
    { selector: '.apt-card', cls: 'reveal' },
    { selector: '.activities-content', cls: 'reveal-left' },
    { selector: '.activities-image', cls: 'reveal-right' },
    { selector: '.about-image-wrapper', cls: 'reveal-left' },
    { selector: '.about-content', cls: 'reveal-right' },
    { selector: '.contact-info', cls: 'reveal-left' },
    { selector: '.contact-form', cls: 'reveal-right' },
    { selector: '.amenities-showcase', cls: 'reveal' },
    { selector: '.nature-strip', cls: 'stagger-children' },
    { selector: '.transport-grid', cls: 'stagger-children' },
    { selector: '.apartments-grid', cls: 'stagger-children' },
  ];

  revealElements.forEach(({ selector, cls }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add(cls);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach(el => {
    observer.observe(el);
  });
}

// Init after DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

// ─── Smooth scroll for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Contact Form ───
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const checkin = formData.get('checkin');
  const checkout = formData.get('checkout');
  const apartment = formData.get('apartment');
  const message = formData.get('message');

  // Build WhatsApp message
  let waMsg = `Hola! Me llamo ${name}.`;
  if (apartment) waMsg += ` Me interesa el apartamento ${apartment}.`;
  if (checkin && checkout) waMsg += ` Fechas: ${checkin} al ${checkout}.`;
  if (message) waMsg += ` ${message}`;
  waMsg += ` (Email: ${email})`;

  const waUrl = `https://wa.me/34669816250?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');

  // Show success feedback
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = currentLang === 'de' ? 'Gesendet!' : currentLang === 'en' ? 'Sent!' : 'Enviado!';
  submitBtn.style.background = '#059669';

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.background = '';
    contactForm.reset();
  }, 3000);
});

// ─── Gallery duplication for infinite scroll ───
const galleryTrack = document.querySelector('.gallery-track');
if (galleryTrack) {
  const images = galleryTrack.innerHTML;
  galleryTrack.innerHTML = images + images;
}
