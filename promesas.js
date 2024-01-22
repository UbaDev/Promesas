function promesaConTimeout(promesa, tiempoLimite) {
  let timeoutId;

  return new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject("Se agotó el tiempo de espera");
    }, tiempoLimite);

    promesa
      .then((resultado) => {
        clearTimeout(timeoutId);
        resolve(resultado);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Se resolvió la promesa");
  }, 2000);
}
);

promesaConTimeout(promesa, 4000)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
