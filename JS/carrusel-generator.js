/**
 * Crea un carrusel de Bootstrap dinámicamente a partir de un array de datos.
 * @param {object} config
 * @param {Array} config.data
 * @param {string} config.carouselId
 * @param {string} config.containerId
 * @param {number} config.itemsPerSlide
 * @param {function} config.renderItemHTML
 * @param {boolean} [config.autoplay=false]
 * @param {number} [config.interval=5000]
 */
function crearCarrusel(config) {
  const container = document.getElementById(config.containerId);
  const carouselEl = document.getElementById(config.carouselId);

  if (!container || !carouselEl) {
    console.error(`Error: Elemento no encontrado (${config.containerId} / ${config.carouselId})`);
    return;
  }

  container.innerHTML = "";

  // Configuración de autoplay
  if (config.autoplay) {
    carouselEl.setAttribute("data-bs-ride", "carousel");
    carouselEl.setAttribute("data-bs-interval", config.interval || 5000);
  } else {
    carouselEl.removeAttribute("data-bs-ride");
    carouselEl.removeAttribute("data-bs-interval");
  }

  // Determinar si hay más elementos de los que caben en un slide
  const showControls = config.data.length > config.itemsPerSlide;
  const prevBtn = carouselEl.querySelector(".carousel-control-prev");
  const nextBtn = carouselEl.querySelector(".carousel-control-next");

  if (prevBtn && nextBtn) {
    prevBtn.style.display = showControls ? "flex" : "none";
    nextBtn.style.display = showControls ? "flex" : "none";
  }

  // Generar slides
  for (let i = 0; i < config.data.length; i += config.itemsPerSlide) {
    const slide = document.createElement("div");
    slide.classList.add("carousel-item");
    if (i === 0) slide.classList.add("active");

    const slideWrapper = document.createElement("div");
    slideWrapper.classList.add("row", "g-4", "mx-0");

    const slideData = config.data.slice(i, i + config.itemsPerSlide);
    slideWrapper.innerHTML = slideData.map(item => config.renderItemHTML(item)).join('');

    slide.appendChild(slideWrapper);
    container.appendChild(slide);
  }
}

export { crearCarrusel };
