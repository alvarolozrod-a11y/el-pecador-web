/* ==========================================================================
   EL PECADOR - APP LOGIC (ACCURATE DESAYUNOS PHOTO SWAPS)
   ========================================================================== */

// Data definitions for locations
const locationsData = {
  leganes: {
    id: "leganes",
    name: "El Pecador - Leganés",
    shortName: "Leganés",
    address: "Av. de Carmen Martín Gaite, 61, 28919 Leganés, Madrid",
    phone: "+34 640 84 45 39",
    hours: "Lunes a Domingo: 12:00 – 00:00",
    mapsUrl: "https://maps.app.goo.gl/KsuvHFHtk4R83ind6",
    embedMapUrl: "assets/images/restaurantes/bar-leganes.webp"
  },
  alcorcon: {
    id: "alcorcon",
    name: "El Pecador - Alcorcón",
    shortName: "Alcorcón",
    address: "C. los Nardos, 59, 28925 Alcorcón, Madrid",
    phone: "+34 640 84 45 39",
    hours: "Lunes a Domingo: 12:00 – 00:00",
    mapsUrl: "https://maps.app.goo.gl/6xt5AqrtAcA1sL4a6",
    embedMapUrl: "assets/images/restaurantes/bar-alcorcon.webp"
  }
};

// Real Menu Data with Updated Precise Image Swaps for Desayunos
const menuData = [
  // --- DESAYUNOS ---
  {
    title: "Sandwich / Croissant",
    category: "desayunos",
    price: "Consultar",
    desc: "Mixto o a la plancha fundido",
    // Croissant partido a la mitad a la plancha
    img: "assets/images/desayuno/desayuno-croissant.webp"
  },
  {
    title: "Tostada",
    category: "desayunos",
    price: "Consultar",
    desc: "Con tomate natural, aceite de oliva o mantequilla y mermelada",
    img: "assets/images/desayuno/desayuno-tostada.webp"
  },
  {
    title: "Pincho De Tortilla",
    category: "desayunos",
    price: "Consultar",
    desc: "Jugosa tortilla de patatas artesanal recién hecha",
    // Pincho de tortilla de patata española tradicional
    img: "assets/images/desayuno/desayuno-pinchotortilla.webp"
  },
  {
    title: "Café",
    category: "desayunos",
    price: "Consultar",
    desc: "Solo, cortado, con leche, expreso o americano",
    img: "assets/images/desayuno/desayuno-cafe.webp"
  },
  {
    title: "Churros / Porras",
    category: "desayunos",
    price: "Consultar",
    desc: "Churros y porras artesanas recién elaborados",
    // Plato con los típicos churros españoles dorados
    img: "assets/images/desayuno/desayuno-churros.webp"
  },
  {
    title: "Infusión",
    category: "desayunos",
    price: "Consultar",
    desc: "Variedad de tés, manzanilla, poleo e infusiones",
    img: "assets/images/desayuno/desayuno-infusion.webp"
  },
  {
    title: "Huevos Con Bacon",
    category: "desayunos",
    price: "Consultar",
    desc: "Plato completo de huevos con bacon crujiente",
    // Plato con huevos fritos y tiras de bacon crujientes
    img: "assets/images/desayuno/desayuno-huevosbacon.webp"
  },
  {
    title: "Bolleria",
    category: "desayunos",
    price: "Consultar",
    desc: "Selección de bollería artesana del día",
    img: "assets/images/desayuno/desayuno-bolleria.webp"
  },
  {
    title: "Colacao",
    category: "desayunos",
    price: "Consultar",
    desc: "Cacao servido con leche bien caliente o fría",
    // Vaso con cacao con leche y sobrecillo
    img: "assets/images/desayuno/desayuno-colacao.webp"
  },

  // --- BOCATAS ---
  {
    title: "Lomo",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata en pan crujiente recién hecho de lomo a la plancha",
    img: "assets/images/bocata/bocata-lomo.webp"
  },
  {
    title: "Bacon",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata tradicional de bacon dorado a la plancha",
    img: "assets/images/bocata/bocata-bacon.webp"
  },
  {
    title: "Panceta",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata reconfortante de panceta sabrosa",
    img: "assets/images/bocata/bocata-panceta.webp"
  },
  {
    title: "Pollo",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata jugoso de pechuga de pollo a la plancha",
    img: "assets/images/bocata/bocata-pollo.webp"
  },
  {
    title: "Jamón",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata de jamón ibérico con un chorrito de aceite virgen",
    img: "assets/images/bocata/bocata-jamon.webp"
  },
  {
    title: "Calamares",
    category: "bocatas",
    price: "€7.50",
    desc: "El castizo bocadillo de calamares crujientes",
    img: "assets/images/bocata/bocata-calamares.webp"
  },

  // --- PARA COMPARTIR ---
  {
    title: "Patatas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas fritas crujientes estilo casero",
    img: "assets/images/compartir/compartir-patatas.webp"
  },
  {
    title: "Patatas All-Oli",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas caseras acompañadas de suave crema alioli",
    img: "assets/images/compartir/compartir-patatasalioli.webp"
  },
  {
    title: "Patatas Bravas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Con nuestra salsa brava picante secreta",
    img: "assets/images/compartir/compartir-patatasbravas.webp"
  },
  {
    title: "Patatas Braviolis",
    category: "para-compartir",
    price: "€6.00",
    desc: "Mezcla irresistible de salsa brava y alioli casero",
    img: "assets/images/compartir/compartir-patatasbravioli.webp"
  },
  {
    title: "Croquetón De Jamón (4u)",
    category: "para-compartir",
    price: "€6.00",
    desc: "4 unidades cremosas de jamón ibérico artesanal",
    img: "assets/images/compartir/compartir-croquetas.webp"
  },
  {
    title: "Salchipapas",
    category: "para-compartir",
    price: "€7.00",
    desc: "Patatas fritas doradas con salchichas y salsas especial",
    img: "assets/images/compartir/compartir-salchipapas.webp"
  },
  {
    title: "Aros De Cebolla",
    category: "para-compartir",
    price: "€7.00",
    desc: "Crujientes aros de cebolla rebozados dorados",
    img: "assets/images/compartir/compartir-aroscebolla.webp"
  },
  {
    title: "Tequeños De Queso (6u)",
    category: "para-compartir",
    price: "€7.00",
    desc: "6 palitos de queso fundente y crujiente",
    img: "assets/images/compartir/compartir-teque%C3%B1os.webp"
  },
  {
    title: "Patatas Cheddar Y Bacon",
    category: "para-compartir",
    price: "€8.00",
    desc: "Bañadas en crema de cheddar caliente y trozos de bacon",
    img: "assets/images/compartir/compartir-patataschedarbacon.webp"
  },
  {
    title: "Oreja",
    category: "para-compartir",
    price: "€9.00",
    desc: "Oreja a la plancha dorada con toque de ajo y perejil",
    img: "assets/images/compartir/compartir-oreja.webp"
  },
  {
    title: "Alitas",
    category: "para-compartir",
    price: "€9.00",
    desc: "Alitas de pollo sabrosas y crujientes",
    img: "assets/images/compartir/compartir-alitas.webp"
  },
  {
    title: "Fingers De Pollo",
    category: "para-compartir",
    price: "€9.00",
    desc: "Tiras de pechuga empanadas crujientes",
    img: "assets/images/compartir/compartir-fingerspollo.webp"
  },
  {
    title: "Calamares",
    category: "para-compartir",
    price: "€14.00",
    desc: "Ración abundante de calamares a la romana tierno",
    img: "assets/images/compartir/compartir-calamares.webp"
  },

  // --- HAMBURGUESAS ---
  {
    title: "Pollo",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, tomate, cebolla",
    img: "assets/images/hamburguesa/hamburguesa-pollo.webp"
  },
  {
    title: "Bacon",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, bacon, cebolla crunch",
    img: "assets/images/hamburguesa/hamburguesa-bacon.webp"
  },
  {
    title: "Cecina",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cecina, queso de cabra, cebolla caramelizada",
    img: "assets/images/hamburguesa/hamburguesa-cecina.webp"
  },
  {
    title: "Sweet",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Mermelada, queso crema, bacon, aros de cebolla",
    img: "assets/images/hamburguesa/hamburguesa-sweet.webp"
  },
  {
    title: "Mexicana",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Relish, jalapeños, guacamole, tomate, cebolla, mostaza dulce",
    img: "assets/images/hamburguesa/hamburguesa-mexicana.webp"
  },
  {
    title: "Triple",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, triple cheddar, bacon, cebolla crunch, huevo",
    img: "assets/images/hamburguesa/hamburguesa-triple.webp"
  },
  {
    title: "Especial",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, champiñones, guacamole, mozzarella",
    img: "assets/images/hamburguesa/hamburguesa-especial.webp"
  },

  // --- PERRITOS ---
  {
    title: "Perrito Simple",
    category: "perritos",
    price: "€5.00",
    desc: "Ketchup, mostaza, mayonesa, cebolla crunch",
    img: "assets/images/perrito/perrito-especial.webp"
  },
  {
    title: "Perrito Especial",
    category: "perritos",
    price: "€7.00",
    desc: "Ketchup, mostaza, mayonesa, salsa cheddar, bacon, salsa pepinillos, cebolla crunch",
    img: "assets/images/perrito/perrito-simple.webp"
  },

  // --- POSTRES ---
  {
    title: "Tarta De Chocolate",
    category: "postres",
    price: "Consultar",
    desc: "Tarta casera con cremosa cobertura de chocolate puro",
    img: "assets/images/postre/postre-tartachocolate.webp"
  },
  {
    title: "Tarta De Dulce De Leche",
    category: "postres",
    price: "Consultar",
    desc: "Deliciosa tarta esponjosa rellena de dulce de leche",
    img: "assets/images/postre/postre-tartadulceleche.webp"
  },
  {
    title: "Helado",
    category: "postres",
    price: "Consultar",
    desc: "Variedad de artesanos e intensos sabores",
    img: "assets/images/postre/postre-helado.webp"
  },
  {
    title: "Tequeños De Nutella (6u)",
    category: "postres",
    price: "Consultar",
    desc: "6 unidades crujientes rellenas de Nutella caliente",
    img: "assets/images/postre/postre-tequenosnutella.webp"
  }
];

let currentActiveLocation = "leganes";

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLocationSwitcher();
  renderMenu("hamburguesas"); // Active category set to "hamburguesas" by default on page load
  initMenuFilters();
  initMobileMenu();
  initReviewsCarousel();
});

// Function to update active location UI everywhere and switch iframe
function setActiveLocation(locId) {
  if (!locationsData[locId]) return;
  currentActiveLocation = locId;
  const data = locationsData[locId];

  // Update Header select
  const headerSelect = document.getElementById("headerLocationSelect");
  if (headerSelect) headerSelect.value = locId;

  // Update Map Title & Iframe
  const mapIframe = document.getElementById("googleMapIframe");
  const mapTitle = document.getElementById("mapTitle");
  if (mapIframe) {
    mapIframe.setAttribute("src", data.embedMapUrl);
  }
  if (mapTitle) mapTitle.textContent = `Mapa de Ubicación: ${data.name}`;

  // Update Clickable Sedes Cards highlight
  const cards = document.querySelectorAll(".sede-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active-card");
  }
  const activeCard = document.getElementById(locId === "leganes" ? "cardLeganes" : "cardAlcorcon");
  if (activeCard) activeCard.classList.add("active-card");

  // Update Mobile Sticky Bar
  const stickySedeName = document.getElementById("stickySedeName");
  if (stickySedeName) stickySedeName.textContent = `📍 ${data.shortName}`;
}

function initLocationSwitcher() {
  setActiveLocation("leganes");

  // Header Select Listener
  const headerSelect = document.getElementById("headerLocationSelect");
  if (headerSelect) {
    headerSelect.addEventListener("change", (e) => {
      setActiveLocation(e.target.value);
    });
  }

  // Clickable Sede Cards
  const clickableCards = document.querySelectorAll(".clickable-card");
  clickableCards.forEach(card => {
    card.addEventListener("click", () => {
      const locId = card.dataset.select;
      if (locId) {
        setActiveLocation(locId);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const locId = card.dataset.select;
        if (locId) setActiveLocation(locId);
      }
    });
  });
}

// Menu Filtering Logic
function renderMenu(category) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const filtered = menuData.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.title}" class="menu-thumb" loading="lazy">
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3 class="menu-title">${item.title}</h3>
          <span class="menu-price">${item.price}</span>
        </div>
        <p class="menu-desc">${item.desc}</p>
      </div>
    </div>
  `).join("");
}

function initMenuFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.category);
    });
  });
}

// Mobile Hamburger Navigation
function initMobileMenu() {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// Reviews Automatic & Touch/Drag Carousel Logic
function initReviewsCarousel() {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".review-slide");
  const prevBtn = document.getElementById("prevReview");
  const nextBtn = document.getElementById("nextReview");
  const dotsContainer = document.getElementById("carouselDots");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoSlideInterval;
  let startX = 0;
  let isDragging = false;

  slides.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateCarousel();
    resetAutoSlide();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  startAutoSlide();

  const trackWrapper = document.querySelector(".carousel-track-wrapper");

  if (trackWrapper) {
    trackWrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoSlideInterval);
    }, { passive: true });

    trackWrapper.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (diffX > 50) {
        nextSlide();
      } else if (diffX < -50) {
        prevSlide();
      } else {
        startAutoSlide();
      }
    });

    trackWrapper.addEventListener("mousedown", (e) => {
      startX = e.clientX;
      isDragging = true;
      clearInterval(autoSlideInterval);
    });

    trackWrapper.addEventListener("mouseup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.clientX;
      const diffX = startX - endX;

      if (diffX > 50) {
        nextSlide();
      } else if (diffX < -50) {
        prevSlide();
      } else {
        startAutoSlide();
      }
    });

    trackWrapper.addEventListener("mouseleave", () => {
      if (isDragging) {
        isDragging = false;
        startAutoSlide();
      }
    });
  }
}
