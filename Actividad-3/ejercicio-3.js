// Numero es divisible

let numero = '';

numero = prompt("Ingresaun numero");

// La CPU sera piedra
if ((numero % 2) === 0){
    console.log( 'El numero ' + numero + ' es divisible entre 2');
}
else {
    console.log( 'El numero ' + numero + ' no es divisible entre 2');
}