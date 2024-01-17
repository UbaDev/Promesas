
//uso de promesas
let promesaExitosa = new Promise((resolve, reject) => {
   //simula un error durante la ejecución
    reject('La promesa fue rechazada');
});


promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});