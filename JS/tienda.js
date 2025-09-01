// JS/tienda.js
import { catalogo, requisitosUniversales } from './productos-data.js';
import * as Cart from './carrito.js';

// =================================================================================
// --- 1. ESTADO GLOBAL DE LA PÁGINA ---
// =================================================================================
let seleccionActual = { dispositivos: null, años: null };
let productosData = [];

// =================================================================================
// --- 2. INICIALIZACIÓN ---
// =================================================================================
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const marca = urlParams.get('marca');

    if (marca && catalogo.antivirus.marcas[marca]) {
        const datosMarca = catalogo.antivirus.marcas[marca];
        productosData = generarProductosCompletos(datosMarca);
        renderizarPagina(datosMarca);
    } else {
        renderizarErrorProductoNoEncontrado();
    }
});

function renderizarPagina(datosMarca) {
    Cart.inicializarCarrito();
    renderizarReseñas(datosMarca.descripciones);
    inicializarSelector();
    inicializarModalRequisitos();
    renderizarCarrito();
    inicializarEventListeners();
}

// =================================================================================
// --- 3. LÓGICA DE DATOS ---
// =================================================================================
function generarProductosCompletos(datosMarca) {
    const productosFinales = [];
    const planes = ['essential', 'advanced', 'complete'];
    const opciones = [
        // 1 año
        { d: 1, a: 1, p: 0 }, { d: 3, a: 1, p: 1 }, { d: 5, a: 1, p: 2 },
        { d: 10, a: 1, p: 3 }, { d: 25, a: 1, p: 4 },
        // 2 años
        { d: 1, a: 2, p: 5 }, { d: 3, a: 2, p: 6 }, { d: 5, a: 2, p: 7 },
        { d: 10, a: 2, p: 8 }, { d: 25, a: 2, p: 9 },
        // 3 años
        { d: 1, a: 3, p: 10 }, { d: 3, a: 3, p: 11 }, { d: 5, a: 3, p: 12 },
        { d: 10, a: 3, p: 13 }, { d: 25, a: 3, p: 14 }
    ];

    const caracteristicasFull = {
        essential: datosMarca.caracteristicas.essential,
        advanced: [...datosMarca.caracteristicas.essential, ...datosMarca.caracteristicas.advanced],
        complete: [...datosMarca.caracteristicas.essential, ...datosMarca.caracteristicas.advanced, ...datosMarca.caracteristicas.complete]
    };

    planes.forEach(plan => {
        const nombreCompleto = `Panda Dome ${plan.charAt(0).toUpperCase() + plan.slice(1)}`;
        opciones.forEach(opt => {
            let subtituloDispositivos = `${opt.d} ${opt.d > 1 ? 'Dispositivos' : 'Dispositivo'}`;
            if (opt.d === 25) {
                subtituloDispositivos = 'Hasta 25 usuarios';
            }

            productosFinales.push({
                nombre: nombreCompleto,
                ...datosMarca.descripciones[plan],
                caracteristicas: caracteristicasFull[plan],
                id: `${datosMarca.nombreMarca.toLowerCase().replace(' ', '')}-${plan}-${opt.d}d-${opt.a}a`,
                subtitulo: `${subtituloDispositivos} / ${opt.a} ${opt.a > 1 ? 'Años' : 'Año'}`,
                dispositivos: opt.d,
                años: opt.a,
                precio: datosMarca.precios[plan][opt.p],
            });
        });
    });

    return productosFinales;
}

// =================================================================================
// --- 4. RENDERIZADO DE COMPONENTES HTML ---
// =================================================================================
function renderizarReseñas(descripciones) {
    const container = document.getElementById('reseñas-container');
    const productosBase = [descripciones.essential, descripciones.advanced, descripciones.complete];
    const nombres = ["Panda Dome Essential", "Panda Dome Advanced", "Panda Dome Complete"];
    container.innerHTML = productosBase.map((producto, index) => `
        <div class="col-lg-4 d-flex">
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="row mb-3">
                        <div class="col-3"><img src="${producto.imagen}" class="img-fluid" alt="${nombres[index]}"></div>
                        <div class="col-9">
                            <h4 class="card-title fw-bold">${nombres[index]}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">${producto.tituloLargo}</h6>
                        </div>
                    </div>
                    <p class="card-text small">${producto.parrafo}</p>
                    <div class="mt-auto pt-3">
                        <p class="small text-muted mb-2"><i class="bi bi-display-fill me-1"></i>${producto.compatibilidad}</p>
                        <a href="${producto.pdf}" target="_blank" class="small link-brand" download><i class="bi bi-file-earmark-pdf-fill me-1"></i>Ficha técnica</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderizarCarrito() {
    const carritoActual = Cart.obtenerCarrito();
    const cartBody = document.getElementById('cart-body');
    const cartFooter = document.getElementById('cart-footer');
    const cartBadge = document.getElementById('cart-badge');

    if (carritoActual.length === 0) {
        cartBody.innerHTML = '<p class="text-center text-muted">Tu carrito está vacío.</p>';
        cartFooter.innerHTML = '';
        if (cartBadge) cartBadge.style.display = 'none';
        return;
    }

    cartBody.innerHTML = carritoActual.map(item => {
        const precioFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.precio);
        return `
            <div class="d-flex mb-3">
                <img src="${item.imagen}" alt="${item.nombre}" style="width: 60px; height: 60px; object-fit: contain;">
                <div class="ms-3 flex-grow-1">
                    <h6 class="mb-0">${item.nombre}</h6>
                    <small class="text-muted">${item.subtitulo}</small>
                    <p class="fw-bold mb-1">${precioFormateado}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <input type="number" class="form-control form-control-sm item-qty" value="${item.cantidad}" min="1" data-product-id="${item.id}" style="width: 60px;">
                        <button class="btn btn-sm btn-outline-danger remove-item-btn" data-product-id="${item.id}"><i class="bi bi-trash-fill"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const total = carritoActual.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const totalFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total);
    cartFooter.innerHTML = `
        <hr>
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">Total:</h5>
            <h5 class="mb-0">${totalFormateado}</h5>
        </div>
        <div class="d-grid">
            <button class="btn btn-primary" id="checkout-btn" data-bs-toggle="modal" data-bs-target="#checkout-modal">Finalizar Compra</button>
        </div>
    `;

    const totalItems = carritoActual.reduce((sum, item) => sum + item.cantidad, 0);
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = 'block';
    }
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
        { nombre: "Protección Principal", items: [{ id: "Protege tu PC contra cualquier tipo de amenaza", label: "Protección Antivirus en tiempo real" }] },
        { nombre: "Seguridad y Navegación", items: [ { id: "Protege tu red Wi-Fi de hackers", label: "Protección de red Wi-Fi" }, { id: "Protección de dispositivos USB", label: "Protección de dispositivos USB" }, { id: "VPN Gratuita (150 MB/día)", label: "VPN Gratuita (150 MB/día)" }, { id: "Firewall personal avanzado", label: "Firewall personal" }, { id: "Evita el phishing y los sitios fraudulentos", label: "Protección Anti-Phishing" }, { id: "Capa de protección adicional frente a ransomware", label: "Protección Anti-Ransomware" } ] },
        { nombre: "Privacidad y Familia", items: [ { id: "Auditor de privacidad en Android", label: "Auditor de privacidad (Android)" }, { id: "Protección antirrobo para Android", label: "Antirrobo y localización (Móvil)" }, { id: "Localización remota del dispositivo iOS", label: null }, { id: "Control Parental", label: "Control Parental" }, { id: "Protege y gestiona todas tus contraseñas", label: "Gestor de Contraseñas" }, { id: "Crea carpetas cifradas y protegidas", label: "Cifrado de archivos" } ] },
        { nombre: "Rendimiento y Utilidades", items: [ { id: "Modo juego / multimedia", label: "Modo Juego / Multimedia" }, { id: "Mejora el rendimiento y duración de la batería en Android", label: "Mejora de rendimiento (Android)" }, { id: "Kit de rescate para PCs", label: "Kit de Rescate (PC)" }, { id: "Optimización del rendimiento y limpieza del PC", label: "Optimización y limpieza (PC)" }, { id: "Eliminación segura de archivos", label: "Eliminación segura de archivos (PC)" } ] }
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
                const tiene = producto.caracteristicas.includes(item.id) || (item.label === "Antirrobo y localización (Móvil)" && (producto.caracteristicas.includes("Protección antirrobo para Android") || producto.caracteristicas.includes("Localización remota del dispositivo iOS")));
                featureRow += `<div class="col text-center">${tiene ? '<i class="bi bi-check-lg text-success h4"></i>' : '<i class="bi bi-dash-lg text-muted h4"></i>'}</div>`;
            });
            featureRow += `</div>`;
            bodyHTML += featureRow;
        });
    });
    resultadosContainer.innerHTML = `<div class="card shadow-sm"><div class="card-header border-0 bg-white"><div class="row align-items-center py-3"><div class="col-md-6"><h3 class="mb-0">Comparación de Planes</h3><a href="#" class="small link-brand" data-bs-toggle="modal" data-bs-target="#tech-specs-modal">Requisitos Técnicos</a></div>${headerHTML}</div></div><div class="card-body">${bodyHTML}</div></div>`;
    resultadosContainer.style.visibility = 'visible';
    resultadosContainer.style.opacity = '1';
}

function renderizarConfirmacion(ordenID, cliente, carrito, total) {
    const mainContainer = document.querySelector('main');
    const totalFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total);
    let itemsHTML = carrito.map(item => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${item.nombre} (${item.subtitulo}) <span class="badge bg-primary rounded-pill">${item.cantidad}</span>
        </li>`).join('');
    mainContainer.innerHTML = `
        <div class="container" style="max-width: 800px;">
            <div class="text-center py-5">
                <i class="bi bi-patch-check-fill text-success display-1 mb-3"></i>
                <h1 class="fw-bold">¡Gracias por tu compra, ${cliente.nombre.split(' ')[0]}!</h1>
                <p class="lead text-muted">Hemos generado tu orden de compra. Sigue los pasos a continuación para completarla.</p>
                <div class="card text-start shadow-sm mt-5">
                    <div class="card-header"><strong>Resumen de tu Orden: ${ordenID}</strong></div>
                    <div class="card-body">
                        <h5 class="card-title">Detalles del Pedido</h5>
                        <ul class="list-group mb-3">${itemsHTML}</ul>
                        <div class="text-end"><h4 class="fw-bold">Total a Pagar: ${totalFormateado}</h4></div>
                        <hr>
                        <h5 class="card-title mt-4">Pasos a Seguir</h5>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">Realiza la transferencia bancaria por el monto total a la siguiente cuenta:
                                <ul class="list-unstyled mt-2 small bg-light p-2 rounded">
                                    <li><strong>Banco:</strong> Bice</li>
                                    <li><strong>Tipo de Cuenta:</strong> Corriente</li>
                                    <li><strong>Número:</strong> 02031450</li>
                                    <li><strong>Razón Social:</strong> COMPAD SPA</li>
                                    <li><strong>RUT:</strong> 76.422.085-4</li>
                                    <li><strong>Email:</strong> ventas@compad-it.cl</li>
                                </ul>
                            </li>
                            <li class="list-group-item">Envía el comprobante a <strong>ventas@compad-it.cl</strong> indicando tu número de orden <strong>(${ordenID})</strong> en el asunto.</li>
                            <li class="list-group-item">Una vez confirmado el pago (usualmente en menos de 24 horas hábiles), te enviaremos la licencia digital a tu correo: <strong>${cliente.email}</strong>.</li>
                        </ol>
                    </div>
                    <div class="card-footer text-center"><a href="productos.html" class="btn btn-outline-secondary btn-sm">Volver a la tienda</a></div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function renderizarErrorProductoNoEncontrado() {
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.innerHTML = `<div class="text-center"><h2 class="fw-bold">Producto no encontrado</h2><p class="text-muted">La marca especificada no existe en nuestro catálogo.</p><a href="productos.html" class="btn btn-primary">Volver a la tienda</a></div>`;
    }
}

function inicializarSelector() {
    const dispositivosSelect = document.getElementById('dispositivos-select');
    const añosSelect = document.getElementById('años-select');
    const dispositivosUnicos = [...new Set(productosData.map(p => p.dispositivos))].sort((a, b) => a - b);
    const añosUnicos = [...new Set(productosData.map(p => p.años))].sort((a, b) => a - b);
    dispositivosUnicos.forEach(d => { dispositivosSelect.innerHTML += `<option value="${d}">${d} Dispositivo(s)</option>`; });
    añosUnicos.forEach(a => { añosSelect.innerHTML += `<option value="${a}">${a} Año(s)</option>`; });
    dispositivosSelect.addEventListener('change', (e) => { seleccionActual.dispositivos = parseInt(e.target.value); actualizarPrecios(); });
    añosSelect.addEventListener('change', (e) => { seleccionActual.años = parseInt(e.target.value); actualizarPrecios(); });
}

function inicializarModalRequisitos() {
    const techSpecsModal = document.getElementById('tech-specs-modal');
    if (techSpecsModal) {
        const modalBody = techSpecsModal.querySelector('.modal-body');
        modalBody.innerHTML = `<p class="small text-muted">Los siguientes requisitos son válidos para todos los planes de Panda Dome.</p><h6><i class="bi bi-windows me-2"></i>Windows</h6><p class="small text-muted">${requisitosUniversales.windows}</p><h6><i class="bi bi-android2 me-2"></i>Android</h6><p class="small text-muted">${requisitosUniversales.android}</p><h6><i class="bi bi-apple me-2"></i>Mac</h6><p class="small text-muted">${requisitosUniversales.mac}</p><h6><i class="bi bi-phone me-2"></i>iOS</h6><p class="small text-muted">${requisitosUniversales.ios}</p>`;
    }
}

// =================================================================================
// --- 7. MANEJO DE EVENTOS (EVENT LISTENERS) ---
// =================================================================================

/**
 * Configura un único listener centralizado para manejar todos los eventos de la página.
 */
function inicializarEventListeners() {
    document.body.addEventListener('click', e => {
        if (e.target.matches('#resultados-container .btn-primary[data-product-id]')) {
            const productoId = e.target.getAttribute('data-product-id');
            const productoParaAñadir = productosData.find(p => p.id === productoId);
            if (productoParaAñadir) {
                Cart.agregarProducto(productoParaAñadir);
                renderizarCarrito();
                new bootstrap.Offcanvas(document.getElementById('cartOffcanvas')).show();
            }
        }
        if (e.target.closest('.remove-item-btn')) {
            const productoId = e.target.closest('.remove-item-btn').dataset.productId;
            Cart.eliminarProducto(productoId);
            renderizarCarrito();
        }
    });

    document.body.addEventListener('change', e => {
        if (e.target.classList.contains('item-qty')) {
            const productoId = e.target.dataset.productId;
            const cantidad = parseInt(e.target.value);
            Cart.actualizarCantidadProducto(productoId, cantidad);
            renderizarCarrito();
        }
    });

    document.body.addEventListener('submit', e => {
        if (e.target.id === 'checkout-form') {
            e.preventDefault();
            const checkoutForm = e.target;
            const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkout-modal'));
            const cartOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas'));

            const cliente = {
                nombre: document.getElementById('checkout-name').value,
                email: document.getElementById('checkout-email').value,
                telefono: document.getElementById('checkout-phone').value
            };
            const ordenID = `COMPAD-${Date.now()}`;
            const carritoActual = Cart.obtenerCarrito();
            const total = carritoActual.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

            Cart.enviarNotificacion(ordenID, cliente, total);
            renderizarConfirmacion(ordenID, cliente, carritoActual, total);
            
            checkoutModal.hide();
            cartOffcanvas.hide(); // Cierra el panel del carrito
            
            checkoutForm.reset();
            Cart.limpiarCarrito();
            renderizarCarrito(); // Vuelve a dibujar el carrito (ahora vacío)
        }
    });
}
