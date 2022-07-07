// If para ingreso a discoteca

let nombre = '';
let edad = '';

nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingresa tu edad");


if (edad < 18){
    console.log( 'No puede ingresar a la discoteca');
}
else if (edad >= 18 & nombre == 'Mario' || nombre == 'Carlos' ){
    console.log( nombre + ' puede ingresar a VIP');
}
else if  (edad >= 18 ){
    console.log( 'Puede ingresar a la discoteca');
}



