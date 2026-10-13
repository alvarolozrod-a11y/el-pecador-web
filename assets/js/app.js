/* ==========================================================================
   BAR EL PECADOR - APP LOGIC (VANILLA JS MULTISEDE - PERFECT MOBILE & DESKTOP MAP SWITCH)
   ========================================================================== */

// Data definitions for locations
const locationsData = {
  leganes: {
    id: "leganes",
    name: "Bar El Pecador - Leganés",
    shortName: "Leganés",
    address: "Av. de Carmen Martín Gaite, 61, 28919 Leganés, Madrid",
    phone: "+34 640 84 45 39",
    hours: "Lunes a Domingo: 12:00 – 00:00",
    mapsUrl: "https://maps.app.goo.gl/KsuvHFHtk4R83ind6",
    embedMapUrl: "https://maps.google.com/maps?q=40.3455389,-3.7451353&z=16&output=embed"
  },
  alcorcon: {
    id: "alcorcon",
    name: "Bar El Pecador - Alcorcón",
    shortName: "Alcorcón",
    address: "C. los Nardos, 59, 28925 Alcorcón, Madrid",
    phone: "+34 640 84 45 39",
    hours: "Lunes a Domingo: 12:00 – 00:00",
    mapsUrl: "https://maps.app.goo.gl/6xt5AqrtAcA1sL4a6",
    embedMapUrl: "https://maps.google.com/maps?q=40.3568875,-3.8069828&z=16&output=embed"
  }
};

// Real Menu Data
const menuData = [
  // --- HAMBURGUESAS ---
  {
    title: "Pollo",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, tomate, cebolla",
    img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Bacon",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, bacon, cebolla crunch",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Cecina",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cecina, queso de cabra, cebolla caramelizada",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Sweet",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Mermelada, queso crema, bacon, aros de cebolla",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Mexicana",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Relish, jalapeños, guacamole, tomate, cebolla, mostaza dulce",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Triple",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, triple cheddar, bacon, cebolla crunch, huevo",
    img: "https://images.unsplash.com/photo-1583723171701-a20c38661642?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Especial",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, champiñones, guacamole, mozzarella",
    img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=400&q=80"
  },

  // --- PARA COMPARTIR ---
  {
    title: "Patatas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas fritas crujientes estilo casero",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Patatas All-Oli",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas caseras acompañadas de suave crema alioli",
    img: "https://images.unsplash.com/photo-1630384060421-cb3f1b40439d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Patatas Bravas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Con nuestra salsa brava picante secreta",
    img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Patatas Braviolos",
    category: "para-compartir",
    price: "€6.00",
    desc: "Mezcla irresistible de salsa brava y alioli casero",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Croquetón De Jamón (4u)",
    category: "para-compartir",
    price: "€6.00",
    desc: "4 unidades cremosas de jamón ibérico artesanal",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Salchipapas",
    category: "para-compartir",
    price: "€7.00",
    desc: "Patatas fritas doradas con salchichas y salsas especial",
    img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Aros De Cebolla",
    category: "para-compartir",
    price: "€7.00",
    desc: "Crujientes aros de cebolla rebozados dorados",
    img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Tequeños De Queso (6u)",
    category: "para-compartir",
    price: "€7.00",
    desc: "6 palitos de queso fundente y crujiente",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Patatas Cheddar Y Bacon",
    category: "para-compartir",
    price: "€8.00",
    desc: "Bañadas en crema de cheddar caliente y trozos de bacon",
    img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Oreja",
    category: "para-compartir",
    price: "€9.00",
    desc: "Oreja a la plancha dorada con toque de ajo y perejil",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Alitas",
    category: "para-compartir",
    price: "€9.00",
    desc: "Alitas de pollo sabrosas y crujientes",
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Fingers De Pollo",
    category: "para-compartir",
    price: "€9.00",
    desc: "Tiras de pechuga empanadas crujientes",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Calamares",
    category: "para-compartir",
    price: "€14.00",
    desc: "Ración abundante de calamares a la romana tierno",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80"
  },

  // --- BOCATAS ---
  {
    title: "Lomo",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata en pan crujiente recién hecho de lomo a la plancha",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Bacon",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata tradicional de bacon dorado a la plancha",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Panceta",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata reconfortante de panceta sabrosa",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Pollo",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata jugoso de pechuga de pollo a la plancha",
    img: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Jamón",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata de jamón ibérico con un chorrito de aceite virgen",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Calamares",
    category: "bocatas",
    price: "€7.50",
    desc: "El castizo bocadillo de calamares crujientes",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80"
  },

  // --- PERRITOS ---
  {
    title: "Perrito Simple",
    category: "perritos",
    price: "€5.00",
    desc: "Ketchup, mostaza, mayonesa, cebolla crunch",
    img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Perrito Especial",
    category: "perritos",
    price: "€7.00",
    desc: "Ketchup, mostaza, mayonesa, salsa cheddar, bacon, salsa pepinillos, cebolla crunch",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80"
  },

  // --- DESAYUNOS ---
  {
    title: "Sandwich / Croissant",
    category: "desayunos",
    price: "Consultar",
    desc: "Mixto o a la plancha fundido",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Tostada",
    category: "desayunos",
    price: "Consultar",
    desc: "Con tomate natural, aceite de oliva o mantequilla y mermelada",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Pincho De Tortilla",
    category: "desayunos",
    price: "Consultar",
    desc: "Jugosa tortilla de patatas artesanal recién hecha",
    img: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Café",
    category: "desayunos",
    price: "Consultar",
    desc: "Solo, cortado, con leche, expreso o americano",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Churros / Porras",
    category: "desayunos",
    price: "Consultar",
    desc: "Churros y porras artesanas recién elaborados",
    img: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Infusión",
    category: "desayunos",
    price: "Consultar",
    desc: "Variedad de tés, manzanilla, poleo e infusiones",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Huevos Con Bacon",
    category: "desayunos",
    price: "Consultar",
    desc: "Plato completo de huevos con bacon crujiente",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Bolleria",
    category: "desayunos",
    price: "Consultar",
    desc: "Selección de bollería artesana del día",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Colacao",
    category: "desayunos",
    price: "Consultar",
    desc: "Cacao servido con leche bien caliente o fría",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
  },

  // --- POSTRES ---
  {
    title: "Tarta De Chocolate",
    category: "postres",
    price: "Consultar",
    desc: "Tarta casera con cremosa cobertura de chocolate puro",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Tarta De Dulce De Leche",
    category: "postres",
    price: "Consultar",
    desc: "Deliciosa tarta esponjosa rellena de dulce de leche",
    img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Helado",
    category: "postres",
    price: "Consultar",
    desc: "Variedad de artesanos e intensos sabores",
    img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Tequeños De Nutella (6u)",
    category: "postres",
    price: "Consultar",
    desc: "6 unidades crujientes rellenas de Nutella caliente",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80"
  }
];

let currentActiveLocation = "leganes";

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLocationSwitcher();
  renderMenu("hamburguesas");
  initMenuFilters();
  initModal();
  initMobileMenu();
});

// Function to update active location UI everywhere and reliably switch iframe on Mobile + Desktop
function setActiveLocation(locId) {
  if (!locationsData[locId]) return;
  currentActiveLocation = locId;
  const data = locationsData[locId];

  // Update Header select
  const headerSelect = document.getElementById("headerLocationSelect");
  if (headerSelect) headerSelect.value = locId;

  // Update Map Section (Guaranteed update for all mobile browsers)
  const mapIframe = document.getElementById("googleMapIframe");
  const mapTitle = document.getElementById("mapTitle");
  if (mapIframe) {
    mapIframe.setAttribute("src", data.embedMapUrl);
  }
  if (mapTitle) mapTitle.textContent = `Mapa de Ubicación: ${data.name}`;

  // Update Clickable Sedes Cards highlight
  document.querySelectorAll(".sede-card").forEach(card => {
    card.classList.remove("active-card");
  });
  const activeCard = document.getElementById(locId === "leganes" ? "cardLeganes" : "cardAlcorcon");
  if (activeCard) activeCard.classList.add("active-card");

  // Update Mobile Sticky Bar
  const stickySedeName = document.getElementById("stickySedeName");
  if (stickySedeName) stickySedeName.textContent = `📍 ${data.shortName}`;

  // Update Modal Text
  const modalSedeText = document.getElementById("modalSedeText");
  if (modalSedeText) {
    modalSedeText.innerHTML = `Reservando en: <strong>${data.name}</strong>`;
  }
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

  // Clickable Sede Cards (Added touchstart for instantaneous mobile touch response)
  document.querySelectorAll(".clickable-card").forEach(card => {
    const handleCardClick = (e) => {
      e.preventDefault();
      const locId = card.dataset.select;
      if (locId) {
        setActiveLocation(locId);
      }
    };

    card.addEventListener("click", handleCardClick);

    // Keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const locId = card.dataset.select;
        if (locId) setActiveLocation(locId);
      }
    });
  });
}

// Menu Filtering Logic with Square Photo Thumbnail rendering
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

// Modal Logic
function initModal() {
  const modal = document.getElementById("reserveModal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  const openModal = () => modal.classList.add("active");
  const closeModal = () => modal.classList.remove("active");

  document.querySelectorAll(".btn-reserve-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (overlay) overlay.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
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
