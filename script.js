// Platos recomendados
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
    image: "img/especial .jpg"
  },
  {
    name: "Mixto x2",
    description: "Para compartir: arroz con almendras, parra, repollo, berenjena, quibbe, tahine, tabule, kafta y empanada de leche cortada.",
    price: "$47.000",
    image: "img/mixtox2.jpg"
  }
];

// Renderiza los platos recomendados
const platosDiv = document.getElementById('platosRecomendados');
recomendados.forEach(item => {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-3 mb-4';
  col.innerHTML = `
    <div class="card h-100 text-center">
      <img src="${item.image}" class="card-img-top img-fluid" alt="${item.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <div class="text-primary fw-bold fs-5 mb-3">${item.price}</div>
        <div class="mt-auto d-flex flex-column gap-2">
          <a href="https://wa.me/573007656000?text=Hola,%20quiero%20pedir%20el%20plato%20${encodeURIComponent(item.name)}" target="_blank" class="btn btn-success">
            Pedir
          </a>
          <a href="https://drive.google.com/file/d/1SnQ-PEFa3KJRPXygcp27wgiU26IJoNMk/view?usp=drive_link" target="_blank" class="btn btn-outline-primary">
            Ver Menú PDF
          </a>
        </div>
      </div>
    </div>
  `;
  platosDiv.appendChild(col);
});
