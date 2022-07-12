

let oracion = prompt("Ingresa una oracion");
let palabra = prompt("Ingresa una palabra");

function buscar (texto, palabraBuscar){

    let verificar = texto.search(palabraBuscar);
    
    // console.log(verificar);
    // console.log(texto);
    // console.log(palabraBuscar);

    if (verificar == -1){
return false;
    }
    else {
        return true;
    }

   
}

buscar (oracion, palabra);