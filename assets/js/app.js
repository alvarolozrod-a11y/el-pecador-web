/* ==========================================================================
   BAR EL PECADOR - APP LOGIC (VANILLA JS MULTISEDE)
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

// Real Menu Data from Images
const menuData = [
  // --- HAMBURGUESAS ---
  {
    title: "Pollo",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, tomate, cebolla"
  },
  {
    title: "Bacon",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cheddar, bacon, cebolla crunch"
  },
  {
    title: "Cecina",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Cecina, queso de cabra, cebolla caramelizada"
  },
  {
    title: "Sweet",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Mermelada, queso crema, bacon, aros de cebolla"
  },
  {
    title: "Mexicana",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Relish, jalapeños, guacamole, tomate, cebolla, mostaza dulce"
  },
  {
    title: "Triple",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, triple cheddar, bacon, cebolla crunch, huevo"
  },
  {
    title: "Especial",
    category: "hamburguesas",
    price: "€14.00",
    desc: "Triple carne, champiñones, guacamole, mozzarella"
  },

  // --- PARA COMPARTIR ---
  {
    title: "Patatas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas fritas crujientes"
  },
  {
    title: "Patatas All-Oli",
    category: "para-compartir",
    price: "€6.00",
    desc: "Patatas caseras acompañadas de salsa alioli"
  },
  {
    title: "Patatas Bravas",
    category: "para-compartir",
    price: "€6.00",
    desc: "Con nuestra tradicional salsa brava picante"
  },
  {
    title: "Patatas Braviolos",
    category: "para-compartir",
    price: "€6.00",
    desc: "Combinación perfecta de salsa brava y alioli"
  },
  {
    title: "Croquetón De Jamón (4u)",
    category: "para-compartir",
    price: "€6.00",
    desc: "4 unidades de croquetones cremosos de jamón ibérico"
  },
  {
    title: "Salchipapas",
    category: "para-compartir",
    price: "€7.00",
    desc: "Patatas fritas con salchichas troceadas y salsas"
  },
  {
    title: "Aros De Cebolla",
    category: "para-compartir",
    price: "€7.00",
    desc: "Aros de cebolla empanados y crujientes"
  },
  {
    title: "Tequeños De Queso (6u)",
    category: "para-compartir",
    price: "€7.00",
    desc: "6 unidades de deditos de queso artesanal"
  },
  {
    title: "Patatas Cheddar Y Bacon",
    category: "para-compartir",
    price: "€8.00",
    desc: "Patatas con salsa cheddar caliente y bacon crujiente"
  },
  {
    title: "Oreja",
    category: "para-compartir",
    price: "€9.00",
    desc: "Oreja a la plancha bien dorada y sazonada"
  },
  {
    title: "Alitas",
    category: "para-compartir",
    price: "€9.00",
    desc: "Alitas de pollo crujientes"
  },
  {
    title: "Fingers De Pollo",
    category: "para-compartir",
    price: "€9.00",
    desc: "Tiras de pechuga de pollo empanadas"
  },
  {
    title: "Calamares",
    category: "para-compartir",
    price: "€14.00",
    desc: "Ración de calamares a la romana"
  },

  // --- BOCATAS ---
  {
    title: "Lomo",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata recién hecho de lomo a la plancha"
  },
  {
    title: "Bacon",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata crujiente de bacon"
  },
  {
    title: "Panceta",
    category: "bocatas",
    price: "€5.50",
    desc: "Bocata de panceta sabrosa"
  },
  {
    title: "Pollo",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata de pechuga de pollo a la plancha"
  },
  {
    title: "Jamón",
    category: "bocatas",
    price: "€7.50",
    desc: "Bocata de jamón ibérico"
  },
  {
    title: "Calamares",
    category: "bocatas",
    price: "€7.50",
    desc: "El clásico bocadillo de calamares"
  },

  // --- PERRITOS ---
  {
    title: "Perrito Simple",
    category: "perritos",
    price: "€5.00",
    desc: "Ketchup, mostaza, mayonesa, cebolla crunch"
  },
  {
    title: "Perrito Especial",
    category: "perritos",
    price: "€7.00",
    desc: "Ketchup, mostaza, mayonesa, salsa cheddar, bacon, salsa pepinillos, cebolla crunch"
  },

  // --- DESAYUNOS ---
  {
    title: "Sandwich / Croissant",
    category: "desayunos",
    price: "Consultar",
    desc: "Mixto o a la plancha"
  },
  {
    title: "Tostada",
    category: "desayunos",
    price: "Consultar",
    desc: "Con tomate, aceite o mantequilla y mermelada"
  },
  {
    title: "Pincho De Tortilla",
    category: "desayunos",
    price: "Consultar",
    desc: "Jugosa tortilla de patatas casera"
  },
  {
    title: "Café",
    category: "desayunos",
    price: "Consultar",
    desc: "Solo, cortado, con leche, americano"
  },
  {
    title: "Churros / Porras",
    category: "desayunos",
    price: "Consultar",
    desc: "Recién hechos"
  },
  {
    title: "Infusión",
    category: "desayunos",
    price: "Consultar",
    desc: "Variedad de tés e infusiones"
  },
  {
    title: "Huevos Con Bacon",
    category: "desayunos",
    price: "Consultar",
    desc: "Plato completo para empezar el día con fuerza"
  },
  {
    title: "Bolleria",
    category: "desayunos",
    price: "Consultar",
    desc: "Variedad de bollería del día"
  },
  {
    title: "Colacao",
    category: "desayunos",
    price: "Consultar",
    desc: "Cacao con leche caliente o fría"
  },

  // --- POSTRES ---
  {
    title: "Tarta De Chocolate",
    category: "postres",
    price: "Consultar",
    desc: "Tarta casera de chocolate intenso"
  },
  {
    title: "Tarta De Dulce De Leche",
    category: "postres",
    price: "Consultar",
    desc: "Deliciosa tarta de dulce de leche"
  },
  {
    title: "Helado",
    category: "postres",
    price: "Consultar",
    desc: "Variedad de sabores"
  },
  {
    title: "Tequeños De Nutella (6u)",
    category: "postres",
    price: "Consultar",
    desc: "6 unidades rellenas de suave Nutella"
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

// Function to update active location UI everywhere
function setActiveLocation(locId) {
  if (!locationsData[locId]) return;
  currentActiveLocation = locId;
  const data = locationsData[locId];

  // Update Header select
  const headerSelect = document.getElementById("headerLocationSelect");
  if (headerSelect) headerSelect.value = locId;

  // Update Hero Tabs
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.location === locId);
  });

  // Update Hero location info text
  const heroInfo = document.getElementById("heroLocationInfo");
  if (heroInfo) {
    heroInfo.innerHTML = `
      <p>📍 <strong>${data.address}</strong></p>
      <p>📞 Tel: <a href="tel:${data.phone}">${data.phone}</a> | ⏰ ${data.hours}</p>
    `;
  }

  // Update Map Section
  const mapIframe = document.getElementById("googleMapIframe");
  const mapTitle = document.getElementById("mapTitle");
  if (mapIframe) mapIframe.src = data.embedMapUrl;
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

  // Hero Tabs Listener
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setActiveLocation(btn.dataset.location);
    });
  });

  // Clickable Sede Cards
  document.querySelectorAll(".clickable-card").forEach(card => {
    card.addEventListener("click", () => {
      const locId = card.dataset.select;
      if (locId) {
        setActiveLocation(locId);
      }
    });

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

// Menu Filtering Logic
function renderMenu(category) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const filtered = menuData.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card">
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
