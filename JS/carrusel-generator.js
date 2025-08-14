/**
 * Crea un carrusel de Bootstrap dinámicamente a partir de un array de datos.
 * @param {object} config - El objeto de configuración del carrusel.
 * @param {Array} config.data - El array de objetos con los datos a mostrar.
 * @param {string} config.carouselId - El ID del elemento principal del carrusel (para ocultar flechas).
 * @param {string} config.containerId - El ID del contenedor donde se insertarán los slides (.carousel-inner).
 * @param {number} config.itemsPerSlide - El número de elementos a mostrar por slide.
 * @param {function} config.renderItemHTML - Una función que recibe un item y devuelve su HTML.
 */
function crearCarrusel(config) {
  const container = document.getElementById(config.containerId);
  // Verificación para evitar errores si el contenedor no existe en la página
  if (!container) {
    console.error(`Error: El contenedor con ID "${config.containerId}" no fue encontrado.`);
    return;
  }
  container.innerHTML = "";

  // Lógica para ocultar las flechas si no son necesarias
  if (config.data.length <= config.itemsPerSlide) {
    const carouselEl = document.getElementById(config.carouselId);
    if (carouselEl) {
      carouselEl.classList.add('controls-hidden');
    }
  }

  // Bucle para crear los slides
  for (let i = 0; i < config.data.length; i += config.itemsPerSlide) {
    const slide = document.createElement("div");
    slide.classList.add("carousel-item");
    if (i === 0) {
      slide.classList.add("active");
    }

    // Creamos un wrapper para los items de este slide. Usamos .row para compatibilidad con el sistema de grillas de Bootstrap.
    const slideWrapper = document.createElement("div");
    slideWrapper.classList.add("row", "g-4");

    // Cortamos el array para obtener los datos de este slide
    const slideData = config.data.slice(i, i + config.itemsPerSlide);

    // Usamos la función 'renderItemHTML' para generar el HTML de cada item,
    // y luego los unimos todos en un solo string.
    const itemsHTML = slideData.map(item => config.renderItemHTML(item)).join('');

    // Insertamos el HTML generado en el wrapper. Es más eficiente que usar innerHTML en cada iteración.
    slideWrapper.innerHTML = itemsHTML;

    slide.appendChild(slideWrapper);
    container.appendChild(slide);
  }
}

export { crearCarrusel };