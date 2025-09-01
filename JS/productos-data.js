// JS/productos-data.js

export const requisitosUniversales = {
    windows: "Sistema Operativo: Windows® 10 | 8.1 | 8 | 7 | Vista | XP (SP3). RAM: 256 MB. Disco Duro: 240 MB de espacio libre.",
    android: "Sistema Operativo: Android™ 4 o superior.",
    mac: "Sistema Operativo: Mac® OSX 10.10 o superior. Disco Duro: 200 MB de espacio libre.",
    ios: "Sistema Operativo: iOS® 11 o superior."
};

// --- NUEVA ESTRUCTURA DE CATÁLOGO ---
export const catalogo = {
  // CATEGORÍA ANTIVIRUS
  antivirus: {
    nombreCategoria: "Software de Antivirus",
    marcas: {
      // MARCA PANDA
      panda: {
        nombreMarca: "Panda Security",
        // Toda la información específica de Panda va aquí adentro
        descripciones: {
          essential: {
            tituloLargo: "Protege Tu Mundo Digital",
            parrafo: "La protección antivirus esencial que te permite navegar, comprar y realizar transacciones online con total seguridad. Proporciona un robusto antivirus en tiempo real para Windows, Mac y Android, un firewall para bloquear intrusos y protección para tu red Wi-Fi, asegurando que tus datos estén siempre a salvo.",
            imagen: "IMG/productos/panda-essential.png",
            pdf: "Fichas-Tecnicas/Panda-Dome-Essential.pdf",
            compatibilidad: "Compatible con Windows, Mac, Android e iOS."
          },
          advanced: {
            tituloLargo: "Protege tu dinero, tu familia y tu identidad",
            parrafo: "Una solución de seguridad avanzada que añade capas de protección cruciales para tu familia y tu identidad. Además de un antivirus de primer nivel, incluye control parental para supervisar la actividad online de tus hijos y una robusta defensa contra ataques de ransomware, asegurando que tus archivos más valiosos nunca sean secuestrados.",
            imagen: "IMG/productos/panda-advanced.png",
            pdf: "Fichas-Tecnicas/Panda-Dome-Advanced.pdf",
            compatibilidad: "Compatible con Windows, Mac, Android e iOS."
          },
          complete: {
            tituloLargo: "Mantén a salvo tu privacidad y optimiza tus dispositivos",
            parrafo: "La suite de seguridad definitiva que protege tu privacidad y optimiza el rendimiento de tus dispositivos. Incluye un gestor de contraseñas para resguardar tus credenciales, herramientas de limpieza para que tu PC siempre funcione como nuevo y la capacidad de cifrar tus archivos más confidenciales para una tranquilidad total.",
            imagen: "IMG/productos/panda-complete.png",
            pdf: "Fichas-Tecnicas/Panda-Dome-Complete.pdf",
            compatibilidad: "Compatible con Windows, Mac, Android e iOS."
          }
        },
        caracteristicas: {
          essential: ["Protege tu PC contra cualquier tipo de amenaza", "Protección de dispositivos USB", "Modo juego / multimedia", "Protege tu red Wi-Fi de hackers", "Protege tu dispositivo Android contra amenazas", "Auditor de privacidad en Android", "Mejora el rendimiento y duración de la batería en Android", "Protección antirrobo para Android", "Protege tu Mac® contra amenazas", "Navegación segura en Mac®", "Localización remota del dispositivo iOS", "VPN Gratuita (150 MB/día)"],
          advanced: ["Kit de rescate para PCs", "Evita el phishing y los sitios fraudulentos", "Firewall personal avanzado", "Capa de protección adicional frente a ransomware", "Control Parental"],
          complete: ["Protege y gestiona todas tus contraseñas", "Crea carpetas cifradas y protegidas", "Eliminación segura de archivos", "Optimización del rendimiento y limpieza del PC"]
        },
        precios: {
            essential: [10000, 18000, 20000, 26000, 36000, 15000, 26000, 32000, 44000, 57000, 21000, 38000, 43000, 61000, 82000],
            advanced: [15000, 23000, 28000, 33000, 50000, 26000, 40000, 48000, 56000, 80000, 36000, 56000, 67000, 81000, 112000],
            complete: [20000, 32000, 44000, 47000, 63000, 32000, 54000, 71000, 86000, 102000, 53000, 71000, 98000, 112000, 151000]
        }
      },
      // En el futuro, podrías agregar "bitdefender": { ... } aquí
    }
  }
  // En el futuro, podrías agregar la categoría "oficina": { ... } aquí
};