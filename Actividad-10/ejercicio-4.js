// ### Problema 4

// Escriba una función de JavaScript que tomará una serie de números almacenados

// y encontrará el segundo número más bajos y segundos más altos, respectivamente

// del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*


const arr = [3,4,6,1,5,2,9,10,23,12]

let min = 0;
let max = 0;

arr.sort(function(a, b){return a-b});

console.log(arr);

min = arr[1];
max = arr[arr.length-2];

console.log(min);
console.log(max);