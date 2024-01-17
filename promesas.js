//Promesas 3

const cargarDatosAPI = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(
            `Error en la solicitud ${response.status}: ${response.statusText}`
          );
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject("Error en la solicitud: " + error.message));
  });
};

const apiUrl = "https://fakestoreapi.com/products/";

cargarDatosAPI(apiUrl)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

