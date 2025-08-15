// JS/script.js

// Importaciones de módulos
import { crearCarrusel } from './carrusel-generator.js';
import { renderServicesTabs } from './services-renderer.js';
import { casesData, partnersData, servicesData } from './data.js';

// --- INICIALIZACIÓN DE CARRUSELES ---

// Carrusel de Casos de Éxito
function renderCaseHTML(caso) {
  return `
    <div class="col-md-4">
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

crearCarrusel({
  data: casesData,
  carouselId: 'casesCarousel',
  containerId: 'cases-container',
  itemsPerSlide: 3,
  renderItemHTML: renderCaseHTML
});

// Carrusel de Partners
function renderPartnerHTML(partner) {
  return `
    <div class="col-3 text-center">
      <a href="${partner.url}" target="_blank" class="partner-link">
        <img src="${partner.logo}" alt="${partner.alt}" class="partner-logo">
      </a>
    </div>
  `;
}

crearCarrusel({
  data: partnersData,
  carouselId: 'partnersCarousel',
  containerId: 'partners-container',
  itemsPerSlide: 4,
  renderItemHTML: renderPartnerHTML
});

// --- INICIALIZACIÓN DE LA SECCIÓN DE SERVICIOS ---
renderServicesTabs(servicesData);


// --- LÓGICA PARA EL MODAL DE IMÁGENES ---
const imageModal = document.getElementById('imageModal');
if (imageModal) {
  imageModal.addEventListener('show.bs.modal', function (event) {
    // Botón que disparó el modal
    const triggerLink = event.relatedTarget;
    // Extraer la URL de la imagen del atributo data
    const imgSrc = triggerLink.getAttribute('data-bs-img-src');
    // Actualizar la imagen dentro del modal
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imgSrc;
  });
}