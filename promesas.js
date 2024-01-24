const rutaImagenLocal = "./img/tesla.avif";

function mostrarImagen() {
  fetch(rutaImagenLocal)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `No se pudo cargar la imagen. Estado: ${response.status}`
        );
      }
      return response.blob();
    })
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob);
      const imagen = new Image();
      imagen.src = imageUrl;

      document.body.appendChild(imagen);
    })
    .catch((error) => {
      console.error("Error al cargar la imagen:", error);
    });
}
mostrarImagen();
