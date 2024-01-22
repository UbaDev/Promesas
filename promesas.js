

fetch("http://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.price);
  })
  .catch((error) => console.log(error));

