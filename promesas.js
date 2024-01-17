//uso de promesas
//Las promesas son objetos que representan la terminación o el fracaso eventual de una operación asíncrona.

let promesaExitosa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("La operación fue exitosa");
  }, 3000);
});

//Uso de promesas
promesaExitosa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
