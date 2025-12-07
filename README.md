# Rediseño Sitio Web Corporativo & Tienda - Compad IT 🚀

## 📄 Descripción

Este repositorio contiene el código fuente del sitio web corporativo y la plataforma de ventas de **Compad IT**, una empresa de soluciones tecnológicas. El proyecto combina una presentación corporativa moderna (Single Page) con un **módulo de e-commerce funcional** para la cotización y venta de licencias de software y soluciones de ciberseguridad.

El objetivo principal fue migrar de una estructura anticuada a una plataforma web escalable, fácil de mantener y visualmente atractiva, permitiendo a los clientes no solo conocer los servicios, sino también configurar y adquirir productos con precios dinámicos según sus necesidades.

## ✨ Características Principales

### 🏢 Sitio Corporativo
* **🎨 Diseño Moderno y Responsivo:** Interfaz limpia y profesional construida con Bootstrap 5, asegurando una perfecta visualización en dispositivos móviles, tablets y computadores de escritorio.
* **⚙️ Sección de Servicios Dinámica:** Los servicios se renderizan desde arrays de JavaScript, permitiendo actualizaciones sin tocar el HTML. Incluye pestañas interactivas y galerías.
* **🎠 Carruseles Impulsados por Datos:** Generación dinámica de "Casos de Éxito" y "Partners" mediante módulos reutilizables.
* **📞 Formulario de Contacto:** Integración con Formsubmit.co para gestión de correos sin backend propio.

### 🛒 Módulo de Tienda (Nuevo)
* **🧮 Motor de Precios Dinámico:** Los productos calculan su precio automáticamente basándose en una matriz de dos variables: **Cantidad de Dispositivos** y **Años de Licencia**.
* **🛍️ Carrito de Compras Interactivo:**
    * Gestión de estado global del carrito (añadir, eliminar, actualizar cantidades).
    * Visualización en panel lateral (Offcanvas) para acceso rápido y fluido.
* **🆚 Comparador de Planes:** Generación dinámica de tablas comparativas que cruzan las características del plan seleccionado con las necesidades del usuario.
* **🧾 Flujo de Checkout (Orden de Compra):**
    * Generación de ID de Orden único para seguimiento.
    * Instrucciones automáticas para transferencia bancaria.
    * Envío de notificación de pedido simulado en frontend.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules).
* **Arquitectura JS:** Modular. Se separan los datos (`data.js`, `productos-data.js`), la lógica de renderizado (`services-renderer.js`, `tienda.js`) y el manejo de estado (`carrito.js`).
* **Frameworks y Librerías:**
    * Bootstrap 5.3 - Layout responsivo, Modales, Offcanvas y componentes UI.
    * Bootstrap Icons - Iconografía del sitio.
* **Backend (Servicios externos):**
    * Formsubmit.co - Para el backend del formulario de contacto.

## 📂 Estructura de Archivos

El proyecto está organizado de la siguiente manera para una fácil navegación y mantenimiento:

.
├── CSS/
│   └── style.css               # Estilos globales y variables CSS
├── IMG/
│   ├── compad.png
│   ├── productos/              # Imágenes de productos (antivirus, software)
│   └── ... (resto de assets)
├── JS/
│   ├── data.js                 # Datos estáticos del sitio corporativo (servicios, partners)
│   ├── productos-data.js       # Catálogo de productos, matrices de precios y características
│   ├── services-renderer.js    # Lógica para renderizar la sección de servicios corporativos
│   ├── carrusel-generator.js   # Módulo reutilizable para crear carruseles
│   ├── carrito.js              # Lógica del carrito (State management, LocalStorage)
│   ├── tienda.js               # Lógica principal de la página de productos, precios y checkout
│   └── script.js               # Archivo principal de inicialización
├── index.html                  # Landing page corporativa
├── productos.html              # Plantilla base para la tienda
└── README.md

## 🚀 Puesta en Marcha

Al ser un proyecto de frontend puro, no requiere instalación compleja, pero sí respetar la estructura de módulos.

1.  Clona el repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2.  Abre el archivo `index.html` en tu navegador para ver el sitio corporativo.
3.  **Para ver la tienda:** Abre el archivo `productos.html` pasando el parámetro de la marca en la URL (necesario para cargar el catálogo correcto).
    * Ejemplo: `productos.html?marca=panda`

## 💳 Lógica de Negocio (Checkout)

El sistema opera bajo un modelo de "Orden de Compra" y transferencia diferida:
1.  El usuario configura su producto (Dispositivos/Años) y lo añade al carrito.
2.  Al finalizar la compra, se genera una orden con ID único (ej: `COMPAD-1709...`).
3.  Se muestran los datos bancarios de la empresa y se instruye al usuario a enviar el comprobante por correo electrónico referenciando su ID de orden.
4.  La validación del pago y envío de licencias se realiza de forma manual/offline por el equipo de ventas.
