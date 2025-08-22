// JS/tienda.js
import { productosData, requisitosUniversales } from './productos-data.js';

let seleccionActual = {
    dispositivos: null,
    años: null
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarReseñas();
    inicializarSelector();
    inicializarModalRequisitos();
});

function renderizarReseñas() {
    const container = document.getElementById('reseñas-container');
    const productosBase = [
        productosData.find(p => p.nombre === 'Panda Dome Essential'),
        productosData.find(p => p.nombre === 'Panda Dome Advanced'),
        productosData.find(p => p.nombre === 'Panda Dome Complete')
    ];
    container.innerHTML = productosBase.map(producto => `
        <div class="col-lg-4 d-flex">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="row mb-3">
                        <div class="col-3">
                            <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
                        </div>
                        <div class="col-9">
                            <h4 class="card-title fw-bold">${producto.nombre}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">${producto.tituloLargo}</h6>
                        </div>
                    </div>
                    <p class="card-text small">${producto.parrafo}</p>
                    <div class="mt-auto pt-3">
                        <p class="small text-muted mb-2">
                            <i class="bi bi-display-fill me-1"></i>
                            ${producto.compatibilidad}
                        </p>
                        <a href="${producto.pdf}" target="_blank" class="small" download>
                            <i class="bi bi-file-earmark-pdf-fill me-1"></i>Ficha técnica
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function inicializarSelector() {
    const dispositivosSelect = document.getElementById('dispositivos-select');
    const añosSelect = document.getElementById('años-select');
    const dispositivosUnicos = [...new Set(productosData.map(p => p.dispositivos))].sort((a, b) => a - b);
    const añosUnicos = [...new Set(productosData.map(p => p.años))].sort((a, b) => a - b);
    dispositivosUnicos.forEach(d => { dispositivosSelect.innerHTML += `<option value="${d}">${d} Dispositivo(s)</option>`; });
    añosUnicos.forEach(a => { añosSelect.innerHTML += `<option value="${a}">${a} Año(s)</option>`; });
    dispositivosSelect.addEventListener('change', (e) => {
        seleccionActual.dispositivos = parseInt(e.target.value);
        actualizarPrecios();
    });
    añosSelect.addEventListener('change', (e) => {
        seleccionActual.años = parseInt(e.target.value);
        actualizarPrecios();
    });
}

function actualizarPrecios() {
    const resultadosContainer = document.getElementById('resultados-container');
    const { dispositivos, años } = seleccionActual;

    if (!dispositivos || !años) {
        resultadosContainer.style.visibility = 'hidden';
        resultadosContainer.style.opacity = '0';
        return;
    }

    const planes = ['Panda Dome Essential', 'Panda Dome Advanced', 'Panda Dome Complete'];
    const productosSeleccionados = planes.map(nombre => productosData.find(p => p.nombre === nombre && p.dispositivos === dispositivos && p.años === años)).filter(Boolean);

    if (productosSeleccionados.length === 0) return;

    const gruposDeCaracteristicas = [
        {
            nombre: "Protección Principal",
            items: [{ id: "Protege tu PC contra cualquier tipo de amenaza", label: "Protección Antivirus en tiempo real" }]
        },
        {
            nombre: "Seguridad y Navegación",
            items: [
                { id: "Protege tu red Wi-Fi de hackers", label: "Protección de red Wi-Fi" },
                { id: "Protección de dispositivos USB", label: "Protección de dispositivos USB" },
                { id: "VPN Gratuita (150 MB/día)", label: "VPN Gratuita (150 MB/día)" },
                { id: "Firewall personal avanzado", label: "Firewall personal" },
                { id: "Evita el phishing y los sitios fraudulentos", label: "Protección Anti-Phishing" },
                { id: "Capa de protección adicional frente a ransomware", label: "Protección Anti-Ransomware" }
            ]
        },
        {
            nombre: "Privacidad y Familia",
            items: [
                { id: "Auditor de privacidad en Android", label: "Auditor de privacidad (Android)" },
                { id: "Protección antirrobo para Android", label: "Antirrobo y localización (Móvil)" },
                { id: "Localización remota del dispositivo iOS", label: null },
                { id: "Control Parental", label: "Control Parental" },
                { id: "Protege y gestiona todas tus contraseñas", label: "Gestor de Contraseñas" },
                { id: "Crea carpetas cifradas y protegidas", label: "Cifrado de archivos" }
            ]
        },
        {
            nombre: "Rendimiento y Utilidades",
            items: [
                { id: "Modo juego / multimedia", label: "Modo Juego / Multimedia" },
                { id: "Mejora el rendimiento y duración de la batería en Android", label: "Mejora de rendimiento (Android)" },
                { id: "Kit de rescate para PCs", label: "Kit de Rescate (PC)" },
                { id: "Optimización del rendimiento y limpieza del PC", label: "Optimización y limpieza (PC)" },
                { id: "Eliminación segura de archivos", label: "Eliminación segura de archivos (PC)" }
            ]
        }
    ];

    let headerHTML = '';
    let bodyHTML = '';

    productosSeleccionados.forEach(producto => {
        const precioFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.precio);
        headerHTML += `<div class="col text-center"><h4 class="fw-bold">${producto.nombre}</h4><p class="h2 fw-bold">${precioFormateado}</p><p class="text-muted small">${producto.subtitulo}</p><button class="btn btn-primary w-100" data-product-id="${producto.id}">Agregar al Carrito</button></div>`;
    });

    gruposDeCaracteristicas.forEach(grupo => {
        bodyHTML += `<div class="row border-bottom"><div class="col-md-6 py-2 bg-light fw-bold">${grupo.nombre}</div><div class="col"></div><div class="col"></div><div class="col"></div></div>`;
        grupo.items.filter(item => item.label !== null).forEach(item => {
            let featureRow = `<div class="row border-bottom py-2 align-items-center"><div class="col-md-6">${item.label}</div>`;
            productosSeleccionados.forEach(producto => {
                const tieneCaracteristica = producto.caracteristicas.includes(item.id) || (item.label === "Antirrobo y localización (Móvil)" && (producto.caracteristicas.includes("Protección antirrobo para Android") || producto.caracteristicas.includes("Localización remota del dispositivo iOS")));
                featureRow += `<div class="col text-center">${tieneCaracteristica ? '<i class="bi bi-check-lg text-success h4"></i>' : '<i class="bi bi-dash-lg text-muted h4"></i>'}</div>`;
            });
            featureRow += `</div>`;
            bodyHTML += featureRow;
        });
    });

    resultadosContainer.innerHTML = 
    `<div class="card shadow-sm">
        <div class="card-header border-0 bg-white">
            <div class="row align-items-center py-3">
                <div class="col-md-6">
                    <h3 class="mb-0">Comparación de Planes</h3>
                    <a href="#" class="small" data-bs-toggle="modal" data-bs-target="#tech-specs-modal">
                    <i class="bi bi-card-checklist me-1"></i>Requisitos Técnicos
                    </a>
                </div>${headerHTML}
            </div>
        </div>
        <div class="card-body">${bodyHTML}</div>
    </div>`;
    resultadosContainer.style.visibility = 'visible';
    resultadosContainer.style.opacity = '1';
}

// --- FUNCIÓN SIMPLIFICADA ---
// Ahora usa la constante importada, haciendo el código más limpio.
function inicializarModalRequisitos() {
    const techSpecsModal = document.getElementById('tech-specs-modal');
    if (techSpecsModal) {
        const modalBody = techSpecsModal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <p class="small text-muted">Los siguientes requisitos son válidos para todos los planes de Panda Dome.</p>
            <h6><i class="bi bi-windows me-2"></i>Windows</h6><p class="small text-muted">${requisitosUniversales.windows}</p>
            <h6><i class="bi bi-android2 me-2"></i>Android</h6><p class="small text-muted">${requisitosUniversales.android}</p>
            <h6><i class="bi bi-apple me-2"></i>Mac</h6><p class="small text-muted">${requisitosUniversales.mac}</p>
            <h6><i class="bi bi-phone me-2"></i>iOS</h6><p class="small text-muted">${requisitosUniversales.ios}</p>`;
    }
}