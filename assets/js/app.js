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

// Data menu items
const menuData = [
  {
    title: "Tequeños Artesanales",
    category: "entrantes",
    price: "8.90 €",
    desc: "6 palitos de queso crujientes acompañados de nuestra mermelada picante de guayaba.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Nachos Pecador",
    category: "entrantes",
    price: "11.50 €",
    desc: "Totopos crujientes, queso fundido, chili con carne, guacamole, crema agria y jalapeños.",
    img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Patatas Bacon & Cheese",
    category: "entrantes",
    price: "9.50 €",
    desc: "Patatas natural cortadas a mano, mezcladas con mix de quesos y bacón crujiente.",
    img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "La Pecadora Burger",
    category: "burgers",
    price: "13.90 €",
    desc: "200g carne de vaca madurada, doble cheddar, bacon ahumado, cebolla caramelizada y salsa especial.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Trufa & Parmesano Burger",
    category: "burgers",
    price: "14.50 €",
    desc: "200g carne de vaca, crema de trufa negra, lascas de parmesano reggiano y canónigos.",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Crispy Chicken BBQ",
    category: "burgers",
    price: "12.90 €",
    desc: "Contramuslo de pollo crujiente al estilo marinada sureña, ensalada coleslaw y salsa barbacoa dulce.",
    img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tarta de Queso Fluida",
    category: "postres",
    price: "6.50 €",
    desc: "Nuestra famosa tarta horneada estilo San Sebastián con corazón cremoso.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cookie Monster Bowl",
    category: "postres",
    price: "6.90 €",
    desc: "Galleta artesanal tibia de chocolate con helado de vainilla y sirope de Kinder Bueno.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cerveza IPAs Artesana",
    category: "bebidas",
    price: "4.00 €",
    desc: "Pinta de cerveza rubia artesana tirada con maestría.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80"
  }
];

let currentActiveLocation = "leganes";

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  initLocationSwitcher();
  renderMenu("all");
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

  // Update Sedes Cards highlight
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

  // Sede Card Select Buttons
  document.querySelectorAll(".btn-select-sede").forEach(btn => {
    btn.addEventListener("click", () => {
      setActiveLocation(btn.dataset.select);
      document.getElementById("sedes").scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Menu Filtering Logic
function renderMenu(category) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const filtered = category === "all" 
    ? menuData 
    : menuData.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.title}" class="menu-img" loading="lazy">
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
