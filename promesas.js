fetch("https://fakestoreapi.com/products/1")
  .then((res) => {
    if(res.ok){
        return res.json();
    }
    else {
        throw new Error( "Error en la petición");
    }
  })
    .then((data) => {
    console.log(data);
    })
  .catch((err) => {
    console.log(err);
    console.log("Error en la petición");
  });
