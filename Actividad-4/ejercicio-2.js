// Estructuras de control DO WHILE

var numero = 0;
var contador = 0;

numero = prompt("Ingresa un numero");

do {
    contador++;
    
    if (contador % 5 == 0){
        console.log( contador );  
    }
} while (numero > contador);