const sumarLento = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
      //reject('Sumar lento falló');
    }, 800);
  });
};

const sumarRapido = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(numero + 1);
      reject("Sumar rápido falló");
    }, 800);
  });
};

Promise.race([sumarRapido(6), sumarLento(5)])
  .then((respuestas) => {
    console.log(respuestas);
  })
  .catch(console.log);
