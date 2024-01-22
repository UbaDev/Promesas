function operacion1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación 1 resuelta");
      resolve();
    }, 1000);
  });
}

function operacion2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación 2 resuelta");
      resolve();
    }, 500);
  });
}

function operacionFallida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error en operación fallida");
    }, 200);
  });
}

function realizarOperacionesAsincronas(operaciones) {
  return operaciones.reduce(function (promesaAnterior, operacionActual) {
    return promesaAnterior.then(function () {
      return operacionActual();
    });
  }, Promise.resolve());
}

const operaciones = [operacion1, operacion2, operacionFallida];

realizarOperacionesAsincronas(operaciones)
  .then(() => console.log("Todas las operaciones completadas"))
  .catch((err) => console.log("Error:", err));


  