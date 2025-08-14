document.addEventListener("DOMContentLoaded", function () {
    const cases = [        
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
        // NUEVOS CASOS SE DEBEN AÑADIR AQUÍ, MANTENIENDO LA ESTRUCTURA
    ];

    const casesContainer = document.getElementById("cases-container");
    casesContainer.innerHTML = "";

    if (cases.length <= 3) {
        // MOSTRAR TODOS LOS CASOS EN UN SOLO SLIDE
        let slide = document.createElement("div");
        slide.classList.add("carousel-item", "active");

        let row = document.createElement("div");
        row.classList.add("row", "g-4");

        cases.forEach(caso => {
            row.innerHTML += `
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <img src="${caso.imagen}" class="card-img-top" alt="${caso.alt}">
                        <div class="card-body">
                            <h5 class="card-title">${caso.titulo}</h5>
                            <p class="card-subtitle">${caso.subtitulo}</p>
                            <p class="card-text">${caso.descripcion || "Descripción no disponible."}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        slide.appendChild(row);
        casesContainer.appendChild(slide);
    } else {
        // Dividir en slides de 3 casos
        for (let i = 0; i < cases.length; i += 3) {
            let slide = document.createElement("div");
            slide.classList.add("carousel-item");
            if (i === 0) slide.classList.add("active");

            let row = document.createElement("div");
            row.classList.add("row", "g-4");

            cases.slice(i, i + 3).forEach(caso => {
                row.innerHTML += `
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="${caso.imagen}" class="card-img-top" alt="${caso.alt}">
                            <div class="card-body">
                                <h5 class="card-title">${caso.titulo}</h5>
                                <p class="card-text">${caso.subtitulo}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            slide.appendChild(row);
            casesContainer.appendChild(slide);
        }
    }
});
