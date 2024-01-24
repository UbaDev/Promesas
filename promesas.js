fetch("not-found.html")
    .then(response => response.text())
    .then(html => {
        document.querySelector("body").innerHTML = html;
    })
    .catch(error => {
        console.error(error);
        console.log("Error en la petición")
    });