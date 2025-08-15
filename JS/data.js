// JS/data.js

export const casesData = [
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

export const partnersData = [
  { nombre: "PureStorage", logo: "IMG/partner-pure.png", alt: "PureStorage", url: "https://www.purestorage.com/es/" },
  { nombre: "HPE", logo: "IMG/partner-hp.png", alt: "HPE", url: "https://www.hpe.com/lamerica/es/home.html" },
  { nombre: "Recycla", logo: "IMG/partner-recycla.png", alt: "Recycla", url: "https://www.recycla.cl/" },
  { nombre: "WatchGuard", logo: "IMG/partner-watchguard.png", alt: "WatchGuard", url: "https://www.watchguard.com/" },
];

export const servicesData = [
    {
    id: 'consultoria',
    titulo: 'Consultoría IT',
    subtitulo: 'Asesoría estratégica y gestión de proyectos.',
    contenido: {
      tituloPanel: 'Consultoría IT Estratégica',
      descripcion: {
        inicio: 'Te acompañamos en cada paso, desde el análisis hasta la implementación, con soluciones personalizadas para optimizar tu entorno tecnológico. Nuestro enfoque se centra en la ',
        enfasis: 'eficiencia, seguridad y el cumplimiento de tus objetivos de negocio',
        final: ', respaldado por ingenieros certificados y las mejores herramientas del mercado.'
      },
      puntosClave: [
        { icono: 'bi-diagram-3-fill', titulo: 'Análisis y Gestión de Proyectos', texto: 'Realizamos análisis de infraestructura, planificación y control de proyectos para garantizar el éxito de tus iniciativas.' },
        { icono: 'bi-hdd-stack-fill', titulo: 'Plataformas y Almacenamiento', texto: 'Administramos y gestionamos plataformas de almacenamiento y SAN, asegurando un rendimiento y uso óptimo de tu capacidad.' },
        { icono: 'bi-headset', titulo: 'Soporte e Ingeniería Senior', texto: 'Ofrecemos soporte especializado en servidores y entornos virtuales, gestión de servicios (CMDB) y mejora continua de procesos.' },
        { icono: 'bi-file-earmark-lock2-fill', titulo: 'Documentación y Cumplimiento', texto: 'Documentamos servicios y procesos críticos, manteniendo un repositorio central que cumple con tus normativas de seguridad.' }
      ]
    }
  },
  {
    id: 'transformacion-digital',
    titulo: 'Transformación Digital',
    subtitulo: 'Digitalización del proceso de Estados de Pago.',
    contenido: {
      tituloPanel: 'Digitaliza tu Proceso de Estados de Pago',
      descripcion: {
        inicio: 'Reemplazamos los flujos manuales basados en correos y planillas por una plataforma centralizada que conecta cada paso del proceso. ',
        enfasis: 'Reduce los tiempos de aprobación hasta en un 40%',
        final: ', entregando trazabilidad, control y visibilidad en tiempo real a todos los involucrados.'
      },
      imagenesPanel: [
        { src: 'IMG/edp-home.png', alt: 'Página de inicio Estados de Pago' },
        { src: 'IMG/edp-dashboard.png', alt: 'Dashboard general EDP' },
        { src: 'IMG/edp-contrato.png', alt: 'Reportes contrato individual' }
      ],
      puntosClave: [
        { icono: 'bi-diagram-3-fill', titulo: 'Flujo 100% Digital y Trazable', texto: 'Desde la emisión electrónica del EDP por parte del proveedor hasta la liberación del pago, cada acción queda registrada.' },
        { icono: 'bi-toggles', titulo: 'Aprobaciones Flexibles', texto: 'Configuramos flujos de revisión y aprobación con reglas de negocio parametrizables que se adaptan a tu operación.' },
        { icono: 'bi-building-fill-gear', titulo: 'Integración con tu ERP', texto: 'Nuestra plataforma se complementa con tu ERP actual (SAP, Oracle, etc.) para evitar la doble digitación y acelerar la contabilidad.' },
        { icono: 'bi-bar-chart-line-fill', titulo: 'Visibilidad y Reporting', texto: 'Accede a dashboards y reportes consolidados para tener una visión financiera clara del estado de cada documento.' }
      ]
    }
  },
  {
    id: 'ciberseguridad',
    titulo: 'Ciberseguridad',
    subtitulo: 'Protección con enfoque Blue Team.',
    contenido: {
      tituloPanel: 'Fortaleciendo tu Defensa Digital',
      descripcion: {
        inicio: 'Ante el incremento global de ciberataques que afectan a empresas de todos los tamaños, ',
        enfasis: 'nuestro enfoque Blue Team actúa como tu equipo defensivo.',
        final: ' Nos encargamos de proteger tu infraestructura, monitorear amenazas y responder a incidentes para mantener la continuidad de tus operaciones y resguardar tu reputación.'
      },
      puntosClave: [
        { icono: 'bi-shield-shaded', titulo: 'Implementación de Firewalls', texto: 'Configuramos y ajustamos reglas de seguridad para proteger la red perimetral de accesos no autorizados.' },
        { icono: 'bi-pc-display-horizontal', titulo: 'Protección de Endpoints', texto: 'Instalamos y optimizamos soluciones de antivirus y EDR en equipos críticos para defenderte de malware y ransomware.' },
        { icono: 'bi-binoculars-fill', titulo: 'Monitoreo de Logs y Eventos', texto: 'Supervisamos continuamente las alertas clave de tus sistemas para detectar anomalías y amenazas de forma temprana.' },
        { icono: 'bi-database-fill-lock', titulo: 'Gestión de Copias de Seguridad', texto: 'Verificamos y optimizamos tus planes de respaldo para asegurar la recuperación de datos y la continuidad operativa.' },
        { icono: 'bi-person-check-fill', titulo: 'Revisión de Configuraciones', texto: 'Realizamos auditorías básicas de contraseñas, políticas de acceso y otras configuraciones críticas de seguridad.' },
        { icono: 'bi-people-fill', titulo: 'Capacitación y Concienciación', texto: 'Ofrecemos talleres a tus equipos para crear conciencia sobre phishing y fomentar buenas prácticas de seguridad.' }
      ]
    }
  },
  {
    id: 'destruccion',
    titulo: 'Destrucción de Medios',
    subtitulo: 'Eliminación segura y certificada de datos.',
    contenido: {
        tituloPanel: 'Destrucción Segura y Certificada de Medios',
        descripcion: {
            inicio: 'Garantizamos la eliminación de datos confidenciales en discos y cintas, ',
            enfasis: 'con certificación notarial y cumplimiento de la norma PCI',
            final: ', para tu completa tranquilidad y seguridad en cada etapa del proceso.'
        },
        imagenProceso: {
            src: 'IMG/degauss.png',
            alt: 'Diagrama del proceso de destrucción de medios'
        },
        puntosClave: [
            { icono: 'bi-magnet-fill', titulo: 'Borrado Lógico (Degaussing)', texto: 'Usamos hardware de desmagnetización para destruir datos a nivel magnético.' },
            { icono: 'bi-recycle', titulo: 'Destrucción y Reciclaje Físico', texto: 'Coordinamos la eliminación de partes mecánicas y platos en plantas de reciclaje especializadas.' },
            { icono: 'bi-patch-check-fill', titulo: 'Certificación Notarial', texto: 'Entregamos un informe detallado y un certificado de reciclaje notariado que respalda todo el proceso.' }
        ]
    }
  },
  {
    id: 'venta',
    titulo: 'Venta de Productos',
    subtitulo: 'Equipamiento y hardware de marcas líderes.',
    contenido: {
      tituloPanel: 'Venta e Integración de Hardware IT',
      descripcion: {
        inicio: 'Más que vendedores, somos tus guías de confianza en la adquisición de tecnología. Gracias a nuestros convenios con marcas líderes, ',
        enfasis: 'te ayudamos a seleccionar e implementar el equipamiento exacto que tu negocio necesita',
        final: ' para crecer, asegurando compatibilidad y rendimiento.'
      },
      puntosClave: [
        { icono: 'bi-server', titulo: 'Almacenamiento y Servidores', texto: 'Equipos de almacenamiento flash y servidores de alto rendimiento.' },
        { icono: 'bi-database-fill-lock', titulo: 'Backup y Continuidad', texto: 'Unidades de Respaldo (NBUs), librerías y cintas de respaldo.' },
        { icono: 'bi-hdd-network-fill', titulo: 'Conectividad y Componentes', texto: 'Switches SAN de alto rendimiento, unidades de disco y periféricos.' }
      ]
    }
  }
];