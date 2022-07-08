// Numeros impares del 1 al 50 con ciclo for

var numero = 0;

numero = prompt("Ingresa un numero");

for (var i = 0; i <= numero; i = i + 1) {
    
    if (i % 2 !== 0){
        console.log( i );
    }
   }