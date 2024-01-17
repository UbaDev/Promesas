
//uso de promesas
let promesaExitosa = new Promise((resolve, reject) => {
   //simula un error durante la ejecución
    try {
        //resolve('Promesa exitosa');
        reject('Error en la promesa');
    } catch (error) {
        reject(error);
    }
});


promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});