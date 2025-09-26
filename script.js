// ================== FORMULARIO DE CONTACTO ==================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const alertBox = document.getElementById("formAlert");
      const alertMessage = document.getElementById("formAlertMessage");

      if (!alertBox || !alertMessage) return;

      alertBox.className = "alert alert-success alert-dismissible fade show";
      alertMessage.textContent = "✅ Tu mensaje fue enviado con éxito. ¡Gracias por contactarnos!";

      alertBox.classList.remove("d-none");
      setTimeout(() => {
        alertBox.classList.add("d-none");
      }, 4000);

      form.reset();
    });
  }

  // ================== PLATOS RECOMENDADOS ==================
  const recomendados = [
    {
      name: "Mini Mixto",
      description: "Selección árabe en porción pequeña: arroz con almendras, parra, repollo, quibbe, tahine, tabule y pan árabe.",
      price: "$26.000",
      image: "img/mini.jpg"
    },
    {
      name: "Mixto Berenjena",
      description: "Mix especial con berenjenas, falafels crujientes, hummus, tahini y pan pita.",
      price: "$35.000",
      image: "img/berenjena.jpg"
    },
    {
      name: "Mixto Especial Kafta",
      description: "Arroz con almendras, parra, repollo, quibbe, tahine, tabule, pan árabe y pincho o kafta.",
      price: "$36.000",
      image: "img/especial.jpg"
    },
    {
      name: "Mixto x2",
      description: "Para compartir: arroz con almendras, parra, repollo, berenjena, quibbe, tahine, tabule, kafta y empanada de leche cortada.",
      price: "$47.000",
      image: "img/mixtox2.jpg"
    }
  ];

  const platosDiv = document.getElementById("platosRecomendados");
  if (platosDiv) {
    recomendados.forEach((item, index) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-3 mb-4";
      col.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.15}s`;

      col.innerHTML = `
        <div class="card h-100 text-center shadow-sm border-0">
          <img src="${item.image}" class="card-img-top img-fluid" alt="Plato recomendado: ${item.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-secondary fw-bold">${item.name}</h5>
            <p class="card-text small text-muted">${item.description}</p>
            <div class="text-primary fw-bold fs-5 mb-3">${item.price}</div>
            <div class="mt-auto d-flex flex-column gap-2">
              <a href="https://wa.me/573007656000?text=Hola,%20quiero%20pedir%20el%20plato%20${encodeURIComponent(item.name)}" 
                 target="_blank" class="btn btn-success">
                <i class="bi bi-whatsapp"></i> Pedir
              </a>
              <a href="https://drive.google.com/file/d/1SnQ-PEFa3KJRPXygcp27wgiU26IJoNMk/view?usp=drive_link" 
                 target="_blank" class="btn btn-outline-primary">
                <i class="bi bi-file-earmark-text"></i> Ver Menú PDF
              </a>
            </div>
          </div>
        </div>
      `;
      platosDiv.appendChild(col);
    });
  }
});
