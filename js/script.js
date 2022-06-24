async function perrito() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson = await response.json();
    var img = responseJson.message; //URL de la imagen de perrito
    var contenedorPerrito = document.querySelector(".contenedorPerrito");
    contenedorPerrito.innerHTML = "<img src='" + img + "' alt='perrito' />"; 
    // <img src='http://imagendeperrito.png' alt='perrito' />
    // var texto = "Texto1" + "Texto2" + img; // "Texto1Texto2http://imagendeperrito.png";
}