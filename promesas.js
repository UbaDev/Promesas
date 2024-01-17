
const ejecutarContTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(`Operación completada despues de ${ms} milisegundos`);
        }, ms);
    });
    }

const tiempoLimite = 2000;

ejecutarContTimeout(tiempoLimite)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });
