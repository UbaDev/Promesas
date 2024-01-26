// Función para cargar el contenido de la URL en una lista en el cuerpo del HTML
function cargarContenido(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return response.json(); 
    })
    .then((data) => {
      const listaElementos = document.createElement("ul");

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
          listaElementos.appendChild(listItem);
        }
      }

      document.querySelector("body").appendChild(listaElementos);
    })
    .catch((error) => {
      console.error(error);
      console.log("No se ha podido cargar la información")
      cargarContenido("not-found.html");
    });
}

cargarContenido("https://fakestoreapi.com/products/1");
