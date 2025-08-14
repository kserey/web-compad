import { crearCarrusel } from './carrusel-generator.js';

// --- LÓGICA GENERAL DE LA PÁGINA (Scroll Suave) ---
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- INICIALIZACIÓN DEL CARRUSEL DE PARTNERS ---
const partnersData = [
  { nombre: "PureStorage", logo: "../img/partner-pure.png", alt: "PureStorage", url: "https://www.purestorage.com/es/" },
  { nombre: "HPE", logo: "../img/partner-hp.png", alt: "HPE", url: "https://www.hpe.com/lamerica/es/home.html" },
  { nombre: "Recycla", logo: "../img/partner-recycla.png", alt: "Recycla", url: "https://www.recycla.cl/" },
  { nombre: "WatchGuard", logo: "../img/partner-watchguard.png", alt: "WatchGuard", url: "https://www.watchguard.com/" },
];

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


// --- INICIALIZACIÓN DEL CARRUSEL DE CASOS DE ÉXITO ---
const casesData = [
    {
        titulo: "Walmart Chile",
        subtitulo: "Maximizando la eficiencia de tus plataformas virtuales",
        descripcion: "Ayudamos a Walmart Chile a optimizar sus entornos virtuales para que sus operaciones sean más ágiles y confiables. Nuestro equipo brinda soporte especializado en servidores y plataformas virtuales (VMware, Windows, Linux), realizando diagnósticos precisos, mejoras estratégicas y asistencia continua para asegurar un rendimiento óptimo.",
        imagen: "IMG/caso-walmart.jpeg",
        alt: "Caso Walmart"
    },
    {
        titulo: "Banco BCI",
        subtitulo: "Monitoreo inteligente de sistemas de storage",
        descripcion: "En Banco BCI potenciamos la confiabilidad de su infraestructura SAN con soporte técnico avanzado y análisis de arquitectura. Generamos reportes detallados de rendimiento y recomendaciones estratégicas para maximizar la eficiencia de sus sistemas de almacenamiento, respaldando operaciones críticas del banco.",
        imagen: "IMG/caso-bci.jpg",
        alt: "Caso BCI"
    },
    {
        titulo: "Occidental Chemical Chile",
        subtitulo: "Destrucción segura y certificada de información",
        descripcion: "Garantizamos la confidencialidad de la información de Occidental Chemical Chile mediante la destrucción certificada de medios de almacenamiento. Nuestro servicio completo incluye retiro, desarme, degaussing y entrega de acta notarial, asegurando que los datos sensibles sean eliminados de manera segura y profesional.",
        imagen: "IMG/caso-oxy.jpg",
        alt: "Caso Occidental Chemical"
    }
];

function renderCaseHTML(caso) {
  return `
    <div class="col-md-4">
      <div class="card shadow-sm custom-card">
        <img src="${caso.imagen}" class="card-img-top" alt="${caso.alt}">
        <div class="card-body">
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