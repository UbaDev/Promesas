function esperarNVeces(n) {
  return new Promise((resolve, reject) => {
    let contador = 1;
    let totalEspera = 0;

    function esperar() {
      setTimeout(() => {
        totalEspera += contador;
        console.log(
          `He esperado ${contador} segundos, llevo ${totalEspera} segundos en total`
        );

        if (contador < n) {
          contador++;
          esperar(); 
        } else {
          resolve(`¡He esperado ${n} veces!`);
        }
      }, contador * 1000);
    }

    esperar();
  });
}


esperarNVeces(5)
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error", err));
