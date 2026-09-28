// JS/data.js

export const casesData = [
  {
    titulo: "Walmart Chile",
    subtitulo: "Maximizando la eficiencia de tus plataformas virtuales",
    descripcion: "Ayudamos a Walmart Chile a optimizar sus entornos virtuales para que sus operaciones sean más ágiles y confiables. Nuestro equipo brinda soporte especializado en servidores y plataformas virtuales (VMware, Windows, Linux), realizando diagnósticos precisos, mejoras estratégicas y asistencia continua para asegurar un rendimiento óptimo.",
    imagen: "IMG/casos/caso-walmart.jpeg",
    alt: "Caso Walmart"
  },
  {
    titulo: "Banco BCI",
    subtitulo: "Monitoreo inteligente de sistemas de storage",
    descripcion: "En Banco BCI potenciamos la confiabilidad de su infraestructura SAN con soporte técnico avanzado y análisis de arquitectura. Generamos reportes detallados de rendimiento y recomendaciones estratégicas para maximizar la eficiencia de sus sistemas de almacenamiento, respaldando operaciones críticas del banco.",
    imagen: "IMG/casos/caso-bci.jpg",
    alt: "Caso BCI"
  },
  {
    titulo: "Occidental Chemical Chile",
    subtitulo: "Destrucción segura y certificada de información",
    descripcion: "Garantizamos la confidencialidad de la información de Occidental Chemical Chile mediante la destrucción certificada de medios de almacenamiento. Nuestro servicio completo incluye retiro, desarme, degaussing y entrega de acta notarial, asegurando que los datos sensibles sean eliminados de manera segura y profesional.",
    imagen: "IMG/casos/caso-oxy.jpg",
    alt: "Caso Occidental Chemical"
  }
];

export const partnersData = [
  { 
    nombre: "Microsoft Solution Provider", 
    logo: "IMG/partners/partner-microsoft-sp.png", 
    alt: "Microsoft Solution Provider", 
    url: "https://www.microsoft.com/es-cl" 
  },
  { 
    nombre: "Microsoft CSP", 
    logo: "IMG/partners/partner-microsoft-csp.png", 
    alt: "Microsoft CSP", url: "https://www.microsoft.com/es-cl" 
  },
  { 
    nombre: "Mercado Público", 
    logo: "IMG/partners/partner-mercadopublico.png", 
    alt: "Mercado Público", 
    url: "https://www.mercadopublico.cl/" 
  },
  { 
    nombre: "PureStorage", 
    logo: "IMG/partners/partner-pure.png", 
    alt: "PureStorage", 
    url: "https://www.purestorage.com/es/" 
  },
  { 
    nombre: "HPE", 
    logo: "IMG/partners/partner-hp.png", 
    alt: "HPE", 
    url: "https://www.hpe.com/lamerica/es/home.html" 
  },
  { 
    nombre: "Adistec", 
    logo: "IMG/partners/partner-adistec.png", 
    alt: "Adistec", 
    url: "https://www.adistec.com/cl" 
  },
  { 
    nombre: "Intcomex", 
    logo: "IMG/partners/partner-intcomex.png", 
    alt: "Intcomex", 
    url: "https://www.intcomex.com/" 
  },
  { 
    nombre: "Licencias On Line", 
    logo: "IMG/partners/partner-lol.png", 
    alt: "Licencias on Line", 
    url: "https://www.licenciasonline.com/cl/es/inicio" 
  },
  {
    nombre: "WatchGuard", 
    logo: "IMG/partners/partner-watchguard.png", 
    alt: "WatchGuard", 
    url: "https://www.watchguard.com/" 
  },
  { 
    nombre: "Panda", 
    logo: "IMG/partners/partner-panda.png", 
    alt: "Panda", 
    url: "https://www.pandasecurity.com/" 
  },
  { 
    nombre: "Recycla", 
    logo: "IMG/partners/partner-recycla.png", 
    alt: "Recycla", 
    url: "https://www.recycla.cl/" 
  }
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
        { 
          icono: 'bi-diagram-3-fill', 
          titulo: 'Análisis y Gestión de Proyectos', 
          texto: 'Realizamos análisis de infraestructura, planificación y control de proyectos para garantizar el éxito de tus iniciativas.' 
        },
        { 
          icono: 'bi-hdd-stack-fill', 
          titulo: 'Plataformas y Almacenamiento', 
          texto: 'Administramos y gestionamos plataformas de almacenamiento y SAN, asegurando un rendimiento y uso óptimo de tu capacidad.' 
        },
        { 
          icono: 'bi-headset', 
          titulo: 'Soporte e Ingeniería Senior', 
          texto: 'Ofrecemos soporte especializado en servidores y entornos virtuales, gestión de servicios (CMDB) y mejora continua de procesos.' 
        },
        { 
          icono: 'bi-file-earmark-lock2-fill', 
          titulo: 'Documentación y Cumplimiento', 
          texto: 'Documentamos servicios y procesos críticos, manteniendo un repositorio central que cumple con tus normativas de seguridad.' 
        }
      ]
    }
  },
  {
    id: 'servicios-gestionados',
    titulo: 'Servicios Gestionados',
    subtitulo: 'Operación, monitoreo y soporte continuo.',
    contenido: {
      tituloPanel: 'Operación Continua y Soporte Especializado',
      descripcion: {
        inicio: 'Extendemos las capacidades de tu equipo interno haciéndonos cargo de la ',
        enfasis: 'administración, operación y monitoreo proactivo de tus plataformas tecnológicas',
        final: ', garantizando alta disponibilidad, rendimiento constante y respuesta ágil ante incidentes.'
      },
      puntosClave: [
        { 
          icono: 'bi-gear-wide-connected', 
          titulo: 'Administración de Plataformas', 
          texto: 'Gestión integral de configuraciones, políticas, parches y optimización de plataformas de servidores, virtualización y storage.' 
        },
        { 
          icono: 'bi-activity', 
          titulo: 'Monitoreo Proactivo', 
          texto: 'Supervisión continua de la salud de tus sistemas y atención temprana de alertas operacionales para prevenir caídas de servicio.' 
        },
        { 
          icono: 'bi-shield-shaded', 
          titulo: 'Gestión de Seguridad Operativa', 
          texto: 'Administración continua de consolas de seguridad, firewalls, EDR y políticas DLP alineadas a las necesidades del negocio.' 
        },
        { 
          icono: 'bi-file-earmark-bar-graph-fill', 
          titulo: 'Reportabilidad y Mejora Continua', 
          texto: 'Entrega periódica de métricas de rendimiento, informes de disponibilidad y recomendaciones técnicas evolutivas.' 
        }
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
        { src: 'IMG/servicios/edp-home.png', alt: 'Página de inicio Estados de Pago' },
        { src: 'IMG/servicios/edp-dashboard.png', alt: 'Dashboard general EDP' },
        { src: 'IMG/servicios/edp-contrato.png', alt: 'Reportes contrato individual' }
      ],
      puntosClave: [
        { 
          icono: 'bi-diagram-3-fill', 
          titulo: 'Flujo 100% Digital y Trazable', 
          texto: 'Desde la emisión electrónica del EDP por parte del proveedor hasta la liberación del pago, cada acción queda registrada.' 
        },
        { 
          icono: 'bi-toggles', 
          titulo: 'Aprobaciones Flexibles', 
          texto: 'Configuramos flujos de revisión y aprobación con reglas de negocio parametrizables que se adaptan a tu operación.' 
        },
        { 
          icono: 'bi-building-fill-gear', 
          titulo: 'Integración con tu ERP', 
          texto: 'Nuestra plataforma se complementa con tu ERP actual (SAP, Oracle, etc.) para evitar la doble digitación y acelerar la contabilidad.' 
        },
        { 
          icono: 'bi-bar-chart-line-fill', 
          titulo: 'Visibilidad y Reporting', 
          texto: 'Accede a dashboards y reportes consolidados para tener una visión financiera clara del estado de cada documento.' 
        }
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
        enfasis: 'con certificación notarial',
        final: ', para tu completa tranquilidad y seguridad en cada etapa del proceso.'
      },
      imagenProceso: {
        src: 'IMG/servicios/degauss.png',
        alt: 'Diagrama del proceso de destrucción de medios'
      },
      puntosClave: [
        { 
          icono: 'bi-magnet-fill', 
          titulo: 'Borrado Lógico (Degaussing)', 
          texto: 'Usamos hardware de desmagnetización de alta potencia para destruir datos a nivel físico y magnético.' 
        },
        { 
          icono: 'bi-recycle', 
          titulo: 'Destrucción y Reciclaje Físico', 
          texto: 'Coordinamos la eliminación de partes mecánicas y platos en plantas de reciclaje especializadas.' 
        },
        { 
          icono: 'bi-patch-check-fill', 
          titulo: 'Certificación Notarial', 
          texto: 'Entregamos un informe detallado y un certificado de reciclaje notariado que respalda todo el proceso para auditorías.' 
        }
      ]
    }
  },
  {
    id: 'venta',
    titulo: 'Tecnología y Licenciamiento',
    subtitulo: 'Equipamiento y software de fabricantes líderes.',
    contenido: {
      tituloPanel: 'Venta e Integración de Tecnología IT',
      descripcion: {
        inicio: 'Más que vendedores, somos tus aliados estratégicos en la adquisición tecnológica. Gracias a nuestras alianzas con fabricantes de primer nivel, ',
        enfasis: 'te ayudamos a seleccionar e integrar la infraestructura exacta que tu empresa necesita',
        final: ', garantizando compatibilidad técnica, escalabilidad y retorno de inversión.'
      },
      puntosClave: [
        { 
          icono: 'bi-server', 
          titulo: 'Almacenamiento y Servidores', 
          texto: 'Equipos de almacenamiento flash empresarial y servidores de alto rendimiento.' 
        },
        { 
          icono: 'bi-database-fill-lock', 
          titulo: 'Backup y Continuidad', 
          texto: 'Unidades de respaldo (NBUs), appliances dedicados, librerías y cintas de resguardo.' 
        },
        { 
          icono: 'bi-hdd-network-fill', 
          titulo: 'Conectividad y Redes SAN', 
          texto: 'Switches SAN de alta velocidad, transceptores, controladoras y componentes de infraestructura.' 
        },
        { 
          icono: 'bi-file-earmark-check-fill', 
          titulo: 'Licenciamiento Corporativo', 
          texto: 'Asesoría y provisión de licenciamiento en sistemas operativos, virtualización, suites de seguridad y herramientas cloud.' 
        }
      ]
    }
  }
];