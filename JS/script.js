import { crearCarrusel } from './carrusel-generator.js';
import { renderServicesTabs } from './services-renderer.js';
import { casesData, partnersData, servicesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServicesTabs(servicesData);
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    renderServicesTabs(servicesData);
  }, 250);
});

/* ===== CASES ===== */
function renderCaseHTML(caso) {
  return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card shadow-sm custom-card h-100">
        <img src="${caso.imagen}" class="card-img-top" alt="${caso.alt}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${caso.titulo}</h5>
          <p class="card-subtitle mb-2 text-muted">${caso.subtitulo}</p>
          <p class="card-text">${caso.descripcion || "Descripción no disponible."}</p>
        </div>
      </div>
    </div>
  `;
}

function setupCasesCarousel() {
  let itemsPerSlide;
  if (window.innerWidth < 768) {
    itemsPerSlide = 1;
  } else if (window.innerWidth < 992) {
    itemsPerSlide = 2; // modo tablet
  } else {
    itemsPerSlide = 3;
  }
  crearCarrusel({
    data: casesData,
    carouselId: 'casesCarousel',
    containerId: 'cases-container',
    itemsPerSlide,
    renderItemHTML: renderCaseHTML,
    autoplay: false,
    interval: 10000
  });
}


/* ===== PARTNERS ===== */
function renderPartnerHTML(partner) {
  return `
    <div class="col text-center">
      <a href="${partner.url}" target="_blank" class="partner-link">
        <img src="${partner.logo}" alt="${partner.alt}" class="partner-logo">
      </a>
    </div>
  `;
}

function setupPartnersCarousel() {
  const itemsPerSlide = window.innerWidth < 768 ? 2 : 4;
  crearCarrusel({
    data: partnersData,
    carouselId: 'partnersCarousel',
    containerId: 'partners-container',
    itemsPerSlide,
    renderItemHTML: renderPartnerHTML,
    autoplay: true, // autoplay para logos
    interval: 3000
  });
}

/* ===== INIT ===== */
function initCarousels() {
  setupCasesCarousel();
  setupPartnersCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
  renderServicesTabs(servicesData);
});

/* ===== MODAL ===== */
const imageModal = document.getElementById('imageModal');
if (imageModal) {
  imageModal.addEventListener('show.bs.modal', event => {
    const triggerLink = event.relatedTarget;
    document.getElementById('modalImage').src = triggerLink.getAttribute('data-bs-img-src');
  });
}

/* ===== NAVBAR MOBILE CLOSE ===== */
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
    }
  });
});
