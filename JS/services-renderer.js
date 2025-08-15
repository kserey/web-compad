// JS/services-renderer.js

export function renderServicesTabs(services) {
  const buttonsContainer = document.getElementById('services-tab-buttons');
  const contentContainer = document.getElementById('services-tab-content');

  if (!buttonsContainer || !contentContainer) return;

  // Limpiar contenido previo
  buttonsContainer.innerHTML = '';
  contentContainer.innerHTML = '';

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // ===== MODO ACORDEÓN =====
    const accordionId = 'servicesAccordion';
    let accordionHTML = `<div class="accordion" id="${accordionId}">`;

    services.forEach((service, index) => {
      const isFirst = index === 0;
      let descripcionHTML = getDescripcionHTML(service.contenido.descripcion);

      const imagenProcesoHTML = getImagenProcesoHTML(service.contenido.imagenProceso);
      const galeriaHTML = getGaleriaHTML(service.contenido.imagenesPanel);
      const puntosClaveHTML = getPuntosClaveHTML(service.contenido.puntosClave);

      accordionHTML += `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${service.id}">
            <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapse-${service.id}" 
                    aria-expanded="${isFirst}" 
                    aria-controls="collapse-${service.id}">
              ${service.titulo}
            </button>
          </h2>
          <div id="collapse-${service.id}" 
               class="accordion-collapse collapse ${isFirst ? 'show' : ''}" 
               aria-labelledby="heading-${service.id}" 
               data-bs-parent="#${accordionId}">
            <div class="accordion-body">
              <h3 class="fw-bold">${service.contenido.tituloPanel}</h3>
              ${descripcionHTML}
              ${imagenProcesoHTML}
              ${galeriaHTML}
              <hr class="my-4">
              <div class="row g-4">${puntosClaveHTML}</div>
            </div>
          </div>
        </div>
      `;
    });

    accordionHTML += `</div>`;
    // Como estamos en móvil, lo ponemos en el contentContainer
    contentContainer.innerHTML = accordionHTML;
    buttonsContainer.innerHTML = ''; // No usamos botones en móvil

  } else {
    // ===== MODO TABS VERTICALES =====
    let buttonsHTML = '';
    let contentHTML = '';

    services.forEach((service, index) => {
      const isActive = index === 0;
      buttonsHTML += `
        <button class="nav-link ${isActive ? 'active' : ''} text-start p-3" 
                id="tab-${service.id}" 
                data-bs-toggle="pill" 
                data-bs-target="#service-${service.id}" 
                type="button" 
                role="tab">
          <span class="fw-bold d-block">${service.titulo}</span>
          <small>${service.subtitulo}</small>
        </button>
      `;

      let descripcionHTML = getDescripcionHTML(service.contenido.descripcion);
      const imagenProcesoHTML = getImagenProcesoHTML(service.contenido.imagenProceso);
      const galeriaHTML = getGaleriaHTML(service.contenido.imagenesPanel);
      const puntosClaveHTML = getPuntosClaveHTML(service.contenido.puntosClave);

      contentHTML += `
        <div class="tab-pane fade ${isActive ? 'show active' : ''}" 
             id="service-${service.id}" 
             role="tabpanel">
          <div class="p-4 bg-light rounded-4 h-100">
            <h3 class="fw-bold">${service.contenido.tituloPanel}</h3>
            ${descripcionHTML}
            ${imagenProcesoHTML}
            ${galeriaHTML}
            <hr class="my-4">
            <div class="row g-4">${puntosClaveHTML}</div>
          </div>
        </div>
      `;
    });

    buttonsContainer.innerHTML = buttonsHTML;
    contentContainer.innerHTML = contentHTML;
  }
}

/* ====== FUNCIONES DE APOYO ====== */
function getDescripcionHTML(descripcionData) {
  if (typeof descripcionData === 'object' && descripcionData !== null) {
    return `<p class="text-muted">${descripcionData.inicio}<strong class="text-accent">${descripcionData.enfasis}</strong>${descripcionData.final}</p>`;
  } else {
    return `<p class="text-muted">${descripcionData}</p>`;
  }
}

function getImagenProcesoHTML(imagenProceso) {
  if (!imagenProceso) return '';
  return `
    <div class="text-center my-4">
      <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal" data-bs-img-src="${imagenProceso.src}">
        <img src="${imagenProceso.src}" class="img-fluid rounded-3 shadow-sm service-gallery-img" alt="${imagenProceso.alt}" style="max-width: 300px;">
      </a>
    </div>
  `;
}

function getGaleriaHTML(imagenesPanel) {
  if (!imagenesPanel || imagenesPanel.length === 0) return '';
  const imagenes = imagenesPanel.map(img => `
    <div class="col-4">
      <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal" data-bs-img-src="${img.src}">
        <img src="${img.src}" class="img-fluid rounded-3 service-gallery-img" alt="${img.alt}">
      </a>
    </div>
  `).join('');
  return `<div class="row g-3 my-4">${imagenes}</div>`;
}

function getPuntosClaveHTML(puntosClave) {
  return puntosClave.map(punto => `
    <div class="col-md-6">
      <div class="d-flex">
        <i class="bi ${punto.icono} fs-4 text-accent me-3"></i>
        <div>
          <h6 class="fw-bold">${punto.titulo}</h6>
          <p class="small text-muted mb-0">${punto.texto}</p>
        </div>
      </div>
    </div>
  `).join('');
}
