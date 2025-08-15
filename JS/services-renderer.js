// JS/services-renderer.js

export function renderServicesTabs(services) {
  const buttonsContainer = document.getElementById('services-tab-buttons');
  const contentContainer = document.getElementById('services-tab-content');

  if (!buttonsContainer || !contentContainer) return;

  let buttonsHTML = '';
  let contentHTML = '';

  services.forEach((service, index) => {
    const isActive = index === 0;

    buttonsHTML += `
      <button class="nav-link ${isActive ? 'active' : ''} text-start p-3" id="tab-${service.id}" data-bs-toggle="pill" data-bs-target="#service-${service.id}" type="button" role="tab">
        <span class="fw-bold d-block">${service.titulo}</span>
        <small>${service.subtitulo}</small>
      </button>
    `;

    // --- Lógica de la descripción ---
    let descripcionHTML;
    const descripcionData = service.contenido.descripcion;
    if (typeof descripcionData === 'object' && descripcionData !== null) {
      descripcionHTML = `<p class="text-muted">${descripcionData.inicio}<strong class="text-accent">${descripcionData.enfasis}</strong>${descripcionData.final}</p>`;
    } else {
      descripcionHTML = `<p class="text-muted">${descripcionData}</p>`;
    }

    // --- Lógica de la imagen de proceso (para Destrucción de Medios) ---
    const imagenProcesoHTML = service.contenido.imagenProceso ? `
      <div class="text-center my-4">
        <img src="${service.contenido.imagenProceso}" class="img-fluid rounded-3" alt="Proceso de ${service.titulo}">
      </div>` : '';
    
    // --- Lógica para la Galería de Imágenes (para Transformación Digital) ---
    let galeriaHTML = '';
    if (service.contenido.imagenesPanel && service.contenido.imagenesPanel.length > 0) {
      const imagenes = service.contenido.imagenesPanel.map(img => `
        <div class="col-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#imageModal" data-bs-img-src="${img.src}">
            <img src="${img.src}" class="img-fluid rounded-3 shadow-sm service-gallery-img" alt="${img.alt}">
          </a>
        </div>
      `).join('');
      galeriaHTML = `<div class="row g-3 my-4">${imagenes}</div>`;
    }

    const puntosClaveHTML = service.contenido.puntosClave.map(punto => `
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

    contentHTML += `
      <div class="tab-pane fade ${isActive ? 'show active' : ''}" id="service-${service.id}" role="tabpanel">
        <div class="p-4 bg-light rounded-4 h-100">
          <h3 class="fw-bold">${service.contenido.tituloPanel}</h3>
          ${descripcionHTML}
          ${imagenProcesoHTML}
          ${galeriaHTML}
          <hr class="my-4">
          <div class="row g-4">
            ${puntosClaveHTML}
          </div>
        </div>
      </div>
    `;
  });

  buttonsContainer.innerHTML = buttonsHTML;
  contentContainer.innerHTML = contentHTML;
}