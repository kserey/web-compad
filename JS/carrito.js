// =================================================================================
// --- MÓDULO DE CARRITO ---
// Contiene toda la lógica para gestionar el estado del carrito y el checkout.
// No se encarga de la parte visual, solo de los datos.
// =================================================================================

// Estado interno del módulo.
let carrito = [];

/**
 * Carga el carrito desde el almacenamiento local del navegador.
 */
function inicializarCarrito() {
    carrito = JSON.parse(localStorage.getItem('carritoCompad')) || [];
}

/**
 * Devuelve una copia del estado actual del carrito.
 * @returns {Array}
 */
function obtenerCarrito() {
    return [...carrito]; // Se devuelve una copia para evitar mutaciones accidentales.
}

/**
 * Guarda el estado actual del carrito en el almacenamiento local.
 */
function guardarCarrito() {
    localStorage.setItem('carritoCompad', JSON.stringify(carrito));
}

/**
 * Añade un producto al carrito o incrementa su cantidad si ya existe.
 * @param {object} producto - El objeto completo del producto a añadir.
 */
function agregarProducto(producto) {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito();
}

/**
 * Actualiza la cantidad de un producto específico en el carrito.
 * @param {string} productoId - El ID del producto a actualizar.
 * @param {number} cantidad - La nueva cantidad.
 */
function actualizarCantidadProducto(productoId, cantidad) {
    const itemEnCarrito = carrito.find(item => item.id === productoId);
    if (itemEnCarrito) {
        // Si la cantidad es 0 o menos, se elimina el producto.
        if (cantidad > 0) {
            itemEnCarrito.cantidad = cantidad;
        } else {
            eliminarProducto(productoId);
        }
    }
    guardarCarrito();
}

/**
 * Elimina un producto del carrito.
 * @param {string} productoId - El ID del producto a eliminar.
 */
function eliminarProducto(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    guardarCarrito();
}

/**
 * Vacía completamente el carrito.
 */
function limpiarCarrito() {
    carrito = [];
    guardarCarrito();
}

/**
 * Envía los correos de notificación a Compad y al cliente.
 * @param {string} ordenID 
 * @param {object} cliente 
 * @param {number} total 
 */
/**
 * Envía los correos de notificación de forma asíncrona usando Fetch,
 * sin recargar la página.
 * @param {string} ordenID 
 * @param {object} cliente 
 * @param {number} total 
 */
async function enviarNotificacion(ordenID, cliente, total) {
    const notificationForm = document.getElementById('order-notification-form');
    
    // Rellenamos los campos del formulario como antes
    notificationForm.querySelector('[name="email"]').value = cliente.email;
    notificationForm.querySelector('#form-subject').value = `Nuevo Pedido Web Generado: ${ordenID}`;

    // --- Correo para Compad ---
    let details = `NUEVO PEDIDO\n--------------------------------\n`;
    details += `ID de Orden: ${ordenID}\n`;
    details += `Fecha: ${new Date().toLocaleString('es-CL')}\n`;
    details += `--------------------------------\nCLIENTE:\n`;
    details += `Nombre: ${cliente.nombre}\nEmail: ${cliente.email}\n`;
    details += `Teléfono: ${cliente.telefono || 'No ingresado'}\n`;
    details += `--------------------------------\nPRODUCTOS:\n`;
    const carritoActual = obtenerCarrito(); // Obtenemos el carrito actual
    carritoActual.forEach(item => { details += `- ${item.nombre} (${item.subtitulo}) x ${item.cantidad}\n`; });
    details += `--------------------------------\n`;
    details += `TOTAL: ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total)}\n`;
    notificationForm.querySelector('#form-details').value = details;
    
    // --- Correo para el Cliente (Autorespuesta) ---
    let autoresponseMsg = `Hola ${cliente.nombre.split(' ')[0]},\n\n`;
    autoresponseMsg += `¡Gracias por tu compra en Compad! Hemos recibido tu orden y la estamos procesando.\n\n`;
    autoresponseMsg += `A continuación, te dejamos el resumen y los pasos para completar tu compra.\n\n`;
    autoresponseMsg += `--------------------------------\nRESUMEN DE LA ORDEN\nID de Orden: ${ordenID}\n--------------------------------\n`;
    carritoActual.forEach(item => { autoresponseMsg += `- ${item.nombre} (${item.subtitulo}) x ${item.cantidad}\n`; });
    autoresponseMsg += `--------------------------------\nTOTAL A PAGAR: ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total)}\n--------------------------------\n\n`;
    autoresponseMsg += `PASOS PARA COMPLETAR TU COMPRA:\n\n`;
    autoresponseMsg += `1. Realiza la transferencia bancaria por el monto total a la siguiente cuenta:\n`;
    autoresponseMsg += `   - Banco: [Nombre del Banco]\n`;
    autoresponseMsg += `   - Tipo de Cuenta: [Cuenta Corriente / Vista]\n`;
    autoresponseMsg += `   - Número: [Número de Cuenta]\n`;
    autoresponseMsg += `   - Nombre: [Razón Social de Compad]\n`;
    autoresponseMsg += `   - RUT: [RUT de la Empresa]\n`;
    autoresponseMsg += `   - Email: [Email para notificar transferencia]\n\n`;
    autoresponseMsg += `2. Envía el comprobante a ventas@compad.cl, indicando tu número de orden (${ordenID}) en el asunto.\n\n`;
    autoresponseMsg += `Una vez confirmado el pago, te enviaremos la licencia digital a este mismo correo.\n\n`;
    autoresponseMsg += `¡Gracias por preferirnos!\nEl equipo de Compad`;
    notificationForm.querySelector('#form-autoresponse').value = autoresponseMsg;

    // --- NUEVO MÉTODO DE ENVÍO ASÍNCRONO ---
    try {
        const formData = new FormData(notificationForm);
        const response = await fetch(notificationForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            console.log("Notificación enviada exitosamente.");
        } else {
            console.error("Hubo un problema al enviar la notificación.");
        }
    } catch (error) {
        console.error("Error de red al enviar la notificación:", error);
    }
}


// Exportamos las funciones que serán usadas por otros archivos.
export {
    inicializarCarrito,
    obtenerCarrito,
    agregarProducto,
    actualizarCantidadProducto,
    eliminarProducto,
    limpiarCarrito,
    enviarNotificacion
};
