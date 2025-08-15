# Rediseño Sitio Web Corporativo - Compad IT 🚀

## 📄 Descripción

Este repositorio contiene el código fuente del rediseño completo del sitio web corporativo de **Compad IT**, una empresa de soluciones tecnológicas. El proyecto fue desarrollado como una **página única (Single Page)**, moderna y completamente responsiva, enfocada en presentar los servicios de la compañía de una manera clara, profesional y dinámica.

El objetivo principal fue migrar de una estructura anticuada a una plataforma web escalable, fácil de mantener y visualmente atractiva, utilizando tecnologías web modernas y buenas prácticas de desarrollo.

## ✨ Características Principales

* **🎨 Diseño Moderno y Responsivo:** Interfaz limpia y profesional construida con Bootstrap 5, asegurando una perfecta visualización en dispositivos móviles, tablets y computadores de escritorio.
* **⚙️ Sección de Servicios Dinámica:** Los servicios de la compañía se renderizan dinámicamente desde un array de JavaScript (`servicesData`), permitiendo añadir, modificar o eliminar servicios sin tocar el código HTML.
    * **Pestañas Interactivas:** La sección utiliza un sistema de pestañas para mostrar información detallada de cada servicio de forma organizada.
    * **Contenido Enriquecido:** Soporte para galerías de imágenes con modales para ampliar, diagramas de procesos y listas de características con íconos.
* **🎠 Carruseles Impulsados por Datos:** Los carruseles de "Casos de Éxito" y "Partners" también son generados dinámicamente a través de un módulo reutilizable (`carrusel-generator.js`), separando la lógica de los datos.
* **💅 Estilos Personalizados y Consistentes:** Se utiliza un archivo `style.css` bien estructurado con variables CSS (`--primary-color`, `--accent-color`) para mantener la consistencia de la marca en todo el sitio.
* **📝 Código Modular y Escalable:** El código JavaScript presenta los datos separados (en `data.js`) de la lógica de renderizado (en `services-renderer.js` y `carrusel-generator.js`) y el script principal de inicialización (`script.js`), facilitando su mantenimiento a futuro.
* **📞 Formulario de Contacto Funcional:** Integración con [Formsubmit.co] para una gestión sencilla de los envíos del formulario de contacto sin necesidad de un backend propio.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
* **Frameworks y Librerías:**
    * [Bootstrap 5.3](https://getbootstrap.com/) - Para el layout responsivo y los componentes principales (Navbar, Carrusel, Modal).
    * [Bootstrap Icons](https://icons.getbootstrap.com/) - Para la iconografía del sitio.
* **Formularios:**
    * [Formsubmit.co](https://formsubmit.co/) - Para el backend del formulario de contacto.

## 📂 Estructura de Archivos

El proyecto está organizado de la siguiente manera para una fácil navegación y mantenimiento:

```
.
├── CSS/
│   └── style.css
├── IMG/
│   ├── compad.png
│   ├── hero-bg.png
│   ├── edp-dashboard.png
│   └── ... (resto de imágenes)
├── JS/
│   ├── data.js                 # Contiene los arrays de datos (servicios, casos, partners)
│   ├── services-renderer.js    # Lógica para renderizar la sección de servicios
│   ├── carrusel-generator.js   # Módulo reutilizable para crear carruseles
│   └── script.js               # Archivo principal que importa e inicializa todo
├── index.html
└── README.md
```

## 🚀 Puesta en Marcha

Al ser un proyecto de frontend puro, no requiere un proceso de instalación complejo.
1.  Clona el repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2.  Abre el archivo `index.html` en tu navegador de preferencia.


